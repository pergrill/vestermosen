import { createFileRoute } from '@tanstack/react-router'
import siteLabels from '@/data/site-labels'
import infoData from '#/data/info-data'
import Card from '#/components/card'

export const Route = createFileRoute('/info')({
  component: InfoPage,
})

function InfoPage() {
  return (
    <section className="divide-y">
        <div className="pb-8 space-y-2 md:space-y-5">
          <h1 className="text-3xl leading-9 tracking-tight text-teal-700 dark:text-teal-400 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            {siteLabels.info}
          </h1>
        </div>
        <div className="container py-8">
          <div className="flex flex-wrap -m-4">
            {infoData.map((d) => (
              <Card
                key={d.title}
                title={d.title}
                description={d.description}
                addresses={d.addresses}
                imgSrc={d.imgSrc}
                href={d.href}
              />
            ))}
          </div>
        </div>
    </section>
  )
}
