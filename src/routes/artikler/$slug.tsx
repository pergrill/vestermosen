import { createFileRoute, Link, notFound } from '@tanstack/react-router'
import { getPost } from '#/lib/blog'
import { format } from 'date-fns'
import { da } from 'date-fns/locale'

export const Route = createFileRoute('/artikler/$slug')({
  loader: async ({ params }) => {
    const post = await getPost({ data: params.slug })
    if (!post) throw notFound()
    return post
  },
  component: ArticlePage,
})

function ArticlePage() {
  const post = Route.useLoaderData()

  return (
    <section className="divide-y">
      <div className="pb-8 space-y-2 md:space-y-5">
        <div className="text-sm text-zinc-500 dark:text-zinc-400">
          {format(new Date(post.date), 'd. MMMM yyyy', { locale: da })}
          {post.tags.length > 0 && (
            <span className="ml-3">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="inline-block mr-2 px-2 py-0.5 rounded bg-teal-100 text-teal-800 text-xs dark:bg-teal-900 dark:text-teal-200"
                >
                  {tag}
                </span>
              ))}
            </span>
          )}
        </div>
        <h1 className="text-3xl leading-9 tracking-tight text-teal-700 dark:text-teal-400 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
          {post.title}
        </h1>
      </div>
      <div
        className="pt-8 pb-8 prose dark:prose-invert max-w-none"
        // biome-ignore lint/security/noDangerouslySetInnerHtml: content is sanitized by rehype-sanitize
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
      <div className="pt-6">
        <Link
          to="/artikler"
          className="text-sm font-medium text-teal-700 dark:text-teal-400 hover:underline"
        >
          ← Alle artikler
        </Link>
      </div>
    </section>
  )
}
