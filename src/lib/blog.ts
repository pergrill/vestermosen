import matter from 'gray-matter'
import { createServerFn } from '@tanstack/react-start'
import { unified } from 'unified'
import remarkParse from 'remark-parse'
import remarkGfm from 'remark-gfm'
import remarkRehype from 'remark-rehype'
import rehypeSanitize from 'rehype-sanitize'
import rehypeStringify from 'rehype-stringify'

const blogFiles = import.meta.glob<string>('/src/data/blogs/*.md', {
  query: '?raw',
  import: 'default',
  eager: true,
})

export type BlogPostMeta = {
  slug: string
  title: string
  date: string
  tags: string[]
  draft: boolean
  expiryDate?: string
  summary: string
}

export type BlogPost = BlogPostMeta & {
  content: string
}

function getSlug(path: string): string {
  return path.replace('/src/data/blogs/', '').replace('.md', '')
}

async function markdownToHtml(markdown: string): Promise<string> {
  const result = await unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkRehype)
    .use(rehypeSanitize)
    .use(rehypeStringify)
    .process(markdown)
  return String(result)
}

function _getAllPostsMeta(): BlogPostMeta[] {
  return Object.entries(blogFiles)
    .map(([path, raw]) => {
      const { data } = matter(raw)
      return {
        slug: getSlug(path),
        title: data.title ?? '',
        date: data.date ?? '',
        tags: Array.isArray(data.tags) ? data.tags : [],
        draft: data.draft ?? false,
        expiryDate: data.expiryDate,
        summary: data.summary ?? '',
      } satisfies BlogPostMeta
    })
    .filter((post) => !post.draft)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

async function _getPost(slug: string): Promise<BlogPost | null> {
  const path = `/src/data/blogs/${slug}.md`
  const raw = blogFiles[path]
  if (!raw) return null

  const { data, content } = matter(raw)
  const html = await markdownToHtml(content)

  return {
    slug,
    title: data.title ?? '',
    date: data.date ?? '',
    tags: Array.isArray(data.tags) ? data.tags : [],
    draft: data.draft ?? false,
    expiryDate: data.expiryDate,
    summary: data.summary ?? '',
    content: html,
  }
}

export const getAllPostsMeta = createServerFn().handler(() => _getAllPostsMeta())

export const getPost = createServerFn()
  .validator((slug: string) => slug)
  .handler(({ data: slug }) => _getPost(slug))
