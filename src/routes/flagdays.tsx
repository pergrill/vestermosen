import { createFileRoute } from '@tanstack/react-router'
import siteLabels from '@/data/site-labels'
import { flagDays } from '#/lib/flagdays'
import { format } from 'date-fns'
import { da } from 'date-fns/locale'

export const Route = createFileRoute('/flagdays')({
  component: FlagdaysPage,
})

function toTimestamp(value: Date | number) {
  return value instanceof Date ? value.getTime() : value
}

function dateSortAsc(a: Date | number, b: Date | number) {
  const aTime = toTimestamp(a)
  const bTime = toTimestamp(b)
  if (aTime > bTime) return 1
  if (aTime < bTime) return -1
  return 0
}

function FlagdaysPage() {
  const year = new Date().getFullYear()

  return (
    <section className="divide-y">
        <div className="pb-8 space-y-2 md:space-y-5">
          <h1 className="text-3xl leading-9 tracking-tight text-teal-700 dark:text-teal-400 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            {siteLabels.flagdays}
          </h1>
        </div>
        <div className="pt-8">
            <div className="pb-8 prose dark:prose-invert max-w-none">
                <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
                    I tilfælde, hvor fødselsdage i kongehuset falder på langfredag, flages der på halv
                    stang.
                </p>
            </div>
          <div className="pb-8 text-5xl tracking-tight text-gray-500 dark:text-gray-400">
            {year}
          </div>
          <table className="table-auto">
            <tbody>
              {flagDays
                .sort((a, b) => dateSortAsc(a.date, b.date))
                .map((flagDay) => {
                  return (
                    <tr key={`${toTimestamp(flagDay.date)}-${flagDay.description}`}>
                      <td className="pr-4 font-bold">
                        {format(flagDay.date, 'd. MMMM', { locale: da })}
                      </td>
                      <td>{flagDay.description}</td>
                    </tr>
                  )
                })}
            </tbody>
          </table>
        </div>
    </section>
  )
}
