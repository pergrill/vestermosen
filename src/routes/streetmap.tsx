import { createFileRoute } from '@tanstack/react-router'
import siteLabels from '@/data/site-labels'

export const Route = createFileRoute('/streetmap')({
  component: StreetmapPage,
})

function StreetmapPage() {
  return (
    <section className="divide-y">
      <div className="pb-8 space-y-2 md:space-y-5">
          <h1 className="text-3xl leading-9 tracking-tight text-teal-700 dark:text-teal-400 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            {siteLabels.streetmap}
          </h1>
        </div>
        <div className="prose dark:prose-invert max-w-none py-8">
          <img
            alt={siteLabels.streetmap}
            src="/images/streetmap.png"
            width={366}
            height={800}
          />
        </div>
    </section>
  )
}
