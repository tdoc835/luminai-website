import { Metadata } from "next"
import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import {
  ArrowRight,
  CalendarCheck,
  CreditCard,
  Landmark,
  Map,
  MessageSquareText,
  Smartphone,
  Stethoscope,
  UtensilsCrossed,
} from "lucide-react"

export const metadata: Metadata = {
  title: "Luma - The Shadow Syllabus for International Students",
  description:
    "Luma is the app for everything your university doesn't teach you. A personalised checklist, campus map, and answers grounded in your own university's information.",
}

const shadowSyllabus = [
  {
    icon: Stethoscope,
    title: "Register with a GP",
    description: "Get set up with a doctor before you actually need one.",
  },
  {
    icon: Landmark,
    title: "Open a bank account",
    description: "Know what documents you need and which accounts work for students.",
  },
  {
    icon: CreditCard,
    title: "Get your BRP sorted",
    description: "Collect your biometric residence permit on time, without the panic.",
  },
  {
    icon: Smartphone,
    title: "Pick the right SIM",
    description: "Figure out which SIM plan won't rob you in your first month.",
  },
  {
    icon: Map,
    title: "Find your way around",
    description: "Navigate a campus you've never seen before your first lecture.",
  },
  {
    icon: CalendarCheck,
    title: "Hit the real deadlines",
    description: "Know which dates actually matter in your first few weeks.",
  },
]

const features = [
  {
    icon: CalendarCheck,
    title: "A personalised checklist",
    description:
      "Every student gets a guided journey anchored to their real dates -- offer, visa, arrival, enrolment -- so the right task surfaces at the right time.",
  },
  {
    icon: Map,
    title: "A campus map",
    description:
      "Find lecture halls, libraries, and support services on a campus you've never set foot on.",
  },
  {
    icon: MessageSquareText,
    title: "Grounded answers",
    description:
      "Answers based on your own university's information, not generic advice scraped from the internet.",
  },
]

export default function LumaPage() {
  return (
    <div className="relative min-h-screen bg-background">
      <Navbar />
      <main className="pt-24 pb-16">
        <section className="px-6 py-16 md:py-24">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-sm font-medium uppercase tracking-widest text-primary">
              Luma
            </p>
            <h1 className="mt-4 text-balance text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              The shadow syllabus for international students
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg text-muted-foreground leading-relaxed">
              Luma is the app for everything your university doesn&apos;t teach
              you. Moving to the UK to study comes with two curriculums:
              there&apos;s the one on your course page -- and then there&apos;s
              the shadow syllabus.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button
                size="lg"
                className="group h-12 bg-primary px-8 text-primary-foreground hover:bg-primary/90 text-sm font-medium"
                asChild
              >
                <Link href="/contact">
                  Get in Touch
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
                </Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="h-12 border-border bg-transparent px-8 text-foreground hover:bg-secondary text-sm font-medium"
                asChild
              >
                <Link href="/luma/partners">Partners &amp; Perks</Link>
              </Button>
            </div>
          </div>
        </section>

        <section className="px-6 py-16 md:py-24">
          <div className="mx-auto max-w-6xl">
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-sm font-medium uppercase tracking-widest text-primary">
                The Shadow Syllabus
              </p>
              <h2 className="mt-4 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                The curriculum nobody hands you
              </h2>
              <p className="mt-4 text-pretty text-muted-foreground leading-relaxed">
                Before the lectures start, there&apos;s a second course load
                waiting -- the admin, errands, and unwritten rules of settling
                into life in the UK.
              </p>
            </div>

            <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {shadowSyllabus.map((item) => (
                <div
                  key={item.title}
                  className="group rounded-xl border border-border/50 bg-card/50 p-6 transition-all hover:border-primary/20 hover:bg-card"
                >
                  <div className="flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <item.icon className="size-5" />
                  </div>
                  <h3 className="mt-4 text-base font-semibold text-foreground">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-6 py-16 md:py-24">
          <div className="mx-auto max-w-6xl">
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-sm font-medium uppercase tracking-widest text-primary">
                How Luma Helps
              </p>
              <h2 className="mt-4 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                A guided journey, not a generic guide
              </h2>
              <p className="mt-4 text-pretty text-muted-foreground leading-relaxed">
                Luma turns the shadow syllabus into a plan built around you and
                your university.
              </p>
            </div>

            <div className="mt-16 grid gap-4 sm:grid-cols-3">
              {features.map((feature) => (
                <div
                  key={feature.title}
                  className="rounded-xl border border-border/50 bg-card/50 p-6 text-center"
                >
                  <div className="mx-auto flex size-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <feature.icon className="size-6" />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-foreground">
                    {feature.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-6 py-16 md:py-24">
          <div className="relative mx-auto max-w-4xl overflow-hidden rounded-2xl border border-border/50 bg-card/50 px-6 py-16 text-center sm:px-12">
            <div className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 h-[300px] w-[500px] rounded-full bg-primary/5 blur-[100px]" />

            <div className="relative z-10">
              <div className="mx-auto flex size-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <UtensilsCrossed className="size-6" />
              </div>
              <h2 className="mt-4 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Partners &amp; perks
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-pretty text-muted-foreground leading-relaxed">
                Part of settling in is the everyday stuff: eating well on a
                student budget, kitting out a room, getting home for the
                holidays. We&apos;re bringing together offers and services
                genuinely useful to students.
              </p>
              <div className="mt-8">
                <Button
                  size="lg"
                  className="group h-12 bg-primary px-8 text-primary-foreground hover:bg-primary/90 text-sm font-medium"
                  asChild
                >
                  <Link href="/luma/partners">
                    Explore Partners &amp; Perks
                    <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
