import { createFileRoute } from '@tanstack/react-router'
import boardMembers from '@/data/boardmembers'
import siteLabels from '@/data/site-labels'

export const Route = createFileRoute('/about')({
  component: AboutPage,
})

function AboutPage() {
  return (
    <>
    <section className="divide-y">
        <div className="pb-8 space-y-2 md:space-y-5">
          <h1 className="text-3xl leading-9 tracking-tight text-teal-700 dark:text-teal-400 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            {siteLabels.about}
          </h1>
        </div>
        <div>
          <div className="pt-8 pb-8 prose dark:prose-invert max-w-none xl:col-span-2">
            <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
              Grundejerforeningen Vestermosen 1 er en forening for Vestermosen 2 - 40 ved
              Sk&aring;strup Strand. Den har til form&aring;l at varetage medlemmernes f&aelig;lles
              interesse og repr&aelig;sentere medlemmerne i forhandlinger med og henvendelser til
              offentlige myndigheder og institutioner m.fl. vedr&oslash;rende omr&aring;det -
              herunder friarealer - og i forhold til &oslash;vrige grundejerforeninger i
              omr&aring;det.
            </p>
            <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
              Foreningens hjemsted er Nordfyns Kommune.
            </p>
          </div>
        </div>
      </section>

      <section className="divide-y">
        <div className="pt-3 pb-8 space-y-2 md:space-y-5 ">
          <h1 className="text-3xl leading-9 tracking-tight text-teal-700 dark:text-teal-400 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            {siteLabels.board}
          </h1>
        </div>
        <div className="pt-8 prose dark:prose-invert max-w-none xl:col-span-2">
          {boardMembers.map((member) => (
            <div key={member.email} className="grid-cols grid sm:grid-cols-3 pb-4 sm:pb-0">
              <div className="font-bold">{member.label}</div>
              <div>{member.name}</div>
              <div>
                <a href={`mailto:${member.email}`}>{member.email}</a>
              </div>
            </div>
          ))}
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400 italic">
            Benyt venligst mail når bestyrelsesmedlemmer kontaktes.
          </p>
        </div>
      </section>

      <section className="divide-y">
        <div className="pt-10 pb-8 space-y-2 md:space-y-5 ">
          <h1 className="text-3xl leading-9 tracking-tight text-teal-700 dark:text-teal-400 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            {siteLabels.contingent}
          </h1>
        </div>
        <div className="pt-8 prose dark:prose-invert max-w-none xl:col-span-2">
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            Enkeltgrunde: 450 kr + 50 kr til strandfond = 500 kr
          </p>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            Dobbeltgrunde: 625 kr + 50 kr. til strandfond = 675 kr
          </p>
        </div>
      </section>

      <section className="divide-y">
        <div className="pt-10 pb-8 space-y-2 md:space-y-5 ">
          <h1 className="text-3xl leading-9 tracking-tight text-teal-700 dark:text-teal-400 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            {siteLabels.commonRoad}
          </h1>
        </div>
        <div className="pt-8 prose dark:prose-invert max-w-none xl:col-span-2">
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            Sammen med grundejerforeningen Vestermosen 2, har vi pligt til at vedligeholde den
            f&aelig;lles indk&oslash;rselsvej til Vestermosen.
          </p>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            Desuden vedligeholder vi vores egen vej. Vejen raspes efter behov.
          </p>
        </div>
      </section>

      <section className="divide-y">
        <div className="pt-10 pb-8 space-y-2 md:space-y-5 ">
          <h1 className="text-3xl leading-9 tracking-tight text-teal-700 dark:text-teal-400 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            {siteLabels.bathingPier}
          </h1>
        </div>
        <div className="pt-8 prose dark:prose-invert max-w-none xl:col-span-2">
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            Vi er medejere af de badebroer, som er opf&oslash;rt ved stranden. Vi bidrager
            s&aring;ledes &oslash;konomisk til den l&oslash;bende renovering samt op- og nedtagning.
            Denne udgift er inkluderet i kontingentet. <br />
            Broerne s&aelig;ttes op i april/maj og tages ned i september.
          </p>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            Morgenbadning, krabbefiskeri og en kop kaffe p&aring; en af broerne kan anbefales!
          </p>
        </div>
      </section>

      <section className="divide-y">
        <div className="pt-10 pb-8 space-y-2 md:space-y-5 ">
          <h1 className="text-3xl leading-9 tracking-tight text-teal-700 dark:text-teal-400 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            {siteLabels.generalInfo}
          </h1>
        </div>
        <div className="pt-8 prose dark:prose-invert max-w-none xl:col-span-2">
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            Der er ingen regler omkring gr&aelig;ssl&aring;ning, h&aelig;kklipning etc. men vi
            henstiller til at der tages hensyn, f.eks. ved ikke at bruge maskiner alt for tidligt i
            weekenderne. Samtidig ved vi ogs&aring; at weekenderne for mange af vejens beboere er
            muligheden for at renovere p&aring; sit hus, f&aring; sl&aring;et pl&aelig;nen eller
            klippet h&aelig;kken. Ved f&aelig;lles opm&aelig;rksomhed b&oslash;r vi kunne tilgodese
            de flestes behov p&aring; vejen.
          </p>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            Hegn m&aring; i skel mod vej, sti og f&aelig;lles opholdsarealer kun etableres som
            levende hegn, som maksimalt m&aring; gives en h&oslash;jde p&aring; 1,8 meter. Til
            st&oslash;tte herfor, kan der etableres et indtil 1 meter h&oslash;jt tr&aring;dhegn
            best&aring;ende af hegnsp&aelig;le og to vandrette glatte tr&aring;de. Den enkelte
            grundejer har den fulde vedligeholdelse af disse hegn.
          </p>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            Der er hastighedsbegr&aelig;nsning p&aring; <span className="font-bold">20 km/t</span>.
            Venligst overhold dette da det st&oslash;ver meget hvis der køres for st&aelig;rkt.
            Udlejer man sit sommerhus eller har man g&aelig;ster s&aring; informer dem venligst om
            at overholde hastighedsgr&aelig;nsen.
          </p>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            Parkering skal i videst muligt omfang foreg&aring; inde p&aring; grunden. Gr&aelig;sset
            foran grunden er ikke beregnet til parkering. Har man mange g&aelig;ster kan de parkere
            p&aring; pladsen p&aring; Strandgyden.
          </p>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            Ved stranden er det muligt at have en mindre b&aring;d liggende. Find ledig plads og
            angiv husnr. p&aring; skilt.
          </p>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            Ud for spejderlejren er der Bl&aring; flag. Bl&aring; Flag er en international
            m&aelig;rkningsordning for strande og havne som i Danmark administreres af
            Friluftsr&aring;det. Der g&aelig;lder specielle regler p&aring; strande hvor der er
            bl&aring; flag. Reglerne g&aelig;lder ca. 200 meter p&aring; hver side af flaget. Se{' '}
            <a
              href="https://www.friluftsraadet.dk/blaaflag"
              target="_blank"
              rel="noreferrer"
            >
              Friluftsr&aring;dets hjemmeside
            </a>{' '}
            for yderligere info.
          </p>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            Har du ideer til info der kan v&aelig;re nyttig at have med her s&aring; send en mail
            til <a href="mailto:pergrill@gmail.com">Administrator</a>
          </p>
        </div>
      </section>
    </>
  )
}
