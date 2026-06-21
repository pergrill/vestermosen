
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({ component: Home })

function Home() {
  return (
    <section className="divide-y">
      <div className="pt-6 pb-8 space-y-2 md:space-y-5">
        <img
          src="/images/vestermosen.jpg"
          alt="Vestermosen"
          className="w-full rounded-xl object-cover"
        />
      </div>
    </section>
  )
}
