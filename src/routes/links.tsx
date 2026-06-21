import { createFileRoute } from '@tanstack/react-router'
import siteLabels from '@/data/site-labels'

export const Route = createFileRoute('/links')({
  component: LinksPage,
})

function LinksPage() {
  return (
    <section className="divide-y">
        <div className="pb-8 space-y-2 md:space-y-5">
          <h1 className="text-3xl leading-9 tracking-tight text-teal-700 dark:text-teal-400 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            {siteLabels.links}
          </h1>
        </div>
        <div className="prose dark:prose-invert max-w-none py-8">
          <div>
            <a href="https://www.waoo.dk/">Bredbånd fra Waoo</a>
          </div>
          <div>
            <a href="https://www.nordfynskommune.dk/borger/natur/vandlob/oftest-stillede-sporgsmal-om-vandlob/">
              Dræn
            </a>
          </div>
          <div>
            <a href="https://www.visitnordfyn.dk/nord-fyn/nordfyn">Visit Nordfyn</a>
          </div>
          <div>
            <a href="https://www.nordfynskommune.dk/">Nordfyns Kommune</a>
          </div>
          <div>
            <a href="https://www.nordfynskommune.dk/borger/affald-og-genbrug/genbrugspladserne-i-nordfyns-kommune/">
              Genbrugspladserne
            </a>
          </div>
          <div>
            <a href="http://www.rosenfestival.dk">Rosenfestival</a>
          </div>
          <div>
            <a href="https://fyncup.dk/">Fyn Cup</a>
          </div>
          <div>
            <a href={`https://www.dmi.dk/fileadmin/user_upload/Bruger_upload/Tidevand/${new Date().getFullYear()}/Bogense.pdf`}>
              DMI Tidevands tabel for Bogense
            </a>
          </div>
          <div>
            <a href="https://play.google.com/store/apps/details?id=dk.oc.affaldsapp.nordfyn">
              AffaldNordfyn Android app.
            </a>
          </div>
          <div>
            <a href="https://itunes.apple.com/dk/app/affaldnordfyn/id1116051993?l=da&mt=8">
              AffaldNordfyn iPhone app.
            </a>
          </div>
          <div>
            <a href="https://www.facebook.com/groups/355605004479354/">
              Aktiviteter i Skåstrup og omegn (Facebook gruppe)
            </a>
          </div>
          <div>
            <a href="https://www.facebook.com/groups/340773185998015/">
              Køb og salg. Bogense og omegn (Facebook gruppe)
            </a>
          </div>
          <div>
            <a href="https://www.facebook.com/groups/357700197729686/">
              Nordfyn. Køb og salg (Facebook gruppe)
            </a>
          </div>
        </div>
    </section>
  )
}
