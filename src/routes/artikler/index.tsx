import { createFileRoute, Link } from '@tanstack/react-router'
import { getAllPostsMeta } from '#/lib/blog'
import siteLabels from '#/data/site-labels'
import { format } from 'date-fns'
import { da } from 'date-fns/locale'

export const Route = createFileRoute('/artikler/')({
  loader: () => getAllPostsMeta(),
  component: ArtiklerPage,
})

function ArtiklerPage() {
  const posts = Route.useLoaderData()

  return (
    <section className="divide-y">
      <div className="pb-8 space-y-2 md:space-y-5">
        <h1 className="text-3xl leading-9 tracking-tight text-teal-700 dark:text-teal-400 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
          {siteLabels.artikler}
        </h1>
      </div>
      <div className="pt-8 space-y-6">
        {posts.length === 0 && (
          <p className="text-zinc-500 dark:text-zinc-400">Ingen artikler endnu.</p>
        )}
        {posts.map((post) => (
          <article key={post.slug} className="border-b border-zinc-100 dark:border-zinc-800 pb-6">
            <div className="text-sm text-zinc-500 dark:text-zinc-400 mb-1">
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
            <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100 mb-1">
              <Link
                to="/artikler/$slug"
                params={{ slug: post.slug }}
                className="hover:text-teal-700 dark:hover:text-teal-400 transition-colors"
              >
                {post.title}
              </Link>
            </h2>
            <p className="text-zinc-600 dark:text-zinc-400 text-sm">{post.summary}</p>
            <Link
              to="/artikler/$slug"
              params={{ slug: post.slug }}
              className="inline-block mt-2 text-sm font-medium text-teal-700 dark:text-teal-400 hover:underline"
            >
              Læs mere →
            </Link>
          </article>
        ))}
      </div>
    </section>
  )
}
