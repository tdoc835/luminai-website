import { Metadata } from "next"
import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { ArrowLeft, ExternalLink, Info } from "lucide-react"

export const metadata: Metadata = {
  title: "Luma Partners & Perks - Offers for International Students",
  description:
    "Offers and services genuinely useful to international students in the UK, from the team behind Luma.",
}

const SOVRN_API_KEY = process.env.NEXT_PUBLIC_SOVRN_API_KEY ?? "YOUR_SOVRN_API_KEY"

function sovrnLink(merchantUrl: string, cuid: string) {
  return `https://redirect.viglink.com?key=${SOVRN_API_KEY}&u=${encodeURIComponent(merchantUrl)}&cuid=${cuid}`
}

const partners = [
  {
    emoji: "\u{1F35C}",
    name: "Just Eat",
    category: "Food Delivery",
    description:
      "Thousands of restaurants across the UK deliver through Just Eat, from late-night comfort food to a taste of home.",
    cta: "Order takeaway with Just Eat",
    href: sovrnLink("https://www.just-eat.co.uk/", "partners-page"),
  },
]

export default function LumaPartnersPage() {
  return (
    <div className="relative min-h-screen bg-background">
      <Navbar />
      <main className="pt-24 pb-16 px-6">
        <div className="mx-auto max-w-4xl">
          <Link
            href="/luma"
            className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="size-4" />
            Back to Luma
          </Link>

          <div className="mt-8 text-center">
            <p className="text-sm font-medium uppercase tracking-widest text-primary">
              Luma Partners
            </p>
            <h1 className="mt-4 text-balance text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              Partners &amp; perks
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-pretty text-muted-foreground leading-relaxed">
              Part of settling in is the everyday stuff: eating well on a
              student budget, kitting out a room, getting home for the
              holidays. We&apos;re building a perks section into Luma that
              brings together offers and services genuinely useful to students
              -- chosen because they&apos;re useful, not because they pay us
              the most.
            </p>
          </div>

          <div className="mt-12 flex items-start gap-3 rounded-xl border border-border/50 bg-card/50 p-5">
            <Info className="mt-0.5 size-4 shrink-0 text-primary" />
            <p className="text-sm text-muted-foreground leading-relaxed">
              We work with affiliate and partner programmes to do this. That
              means some links on this page and in the app are affiliate links,
              and Luma may earn a small commission if you order or sign up
              through them -- at no extra cost to you.
            </p>
          </div>

          <div className="mt-12">
            <p className="text-sm font-medium uppercase tracking-widest text-primary">
              Our First Partner Category
            </p>
            <p className="mt-2 text-muted-foreground leading-relaxed">
              We&apos;re starting with food delivery, because nothing on the
              shadow syllabus matters on the night you arrive quite like
              dinner.
            </p>

            <div className="mt-8 flex flex-col gap-4">
              {partners.map((partner) => (
                <div
                  key={partner.name}
                  className="rounded-xl border border-border/50 bg-card/50 p-6 transition-all hover:border-primary/20 hover:bg-card sm:p-8"
                >
                  <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
                    <div className="flex items-start gap-4">
                      <span className="text-3xl" aria-hidden="true">
                        {partner.emoji}
                      </span>
                      <div>
                        <p className="text-xs font-medium uppercase tracking-widest text-primary">
                          {partner.category}
                        </p>
                        <h2 className="mt-1 text-lg font-semibold text-foreground">
                          {partner.name}
                        </h2>
                        <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                          {partner.description}
                        </p>
                      </div>
                    </div>
                    <Button
                      className="group h-11 shrink-0 bg-primary px-6 text-primary-foreground hover:bg-primary/90 text-sm font-medium"
                      asChild
                    >
                      <a
                        href={partner.href}
                        target="_blank"
                        rel="sponsored noopener"
                      >
                        {partner.cta}
                        <ExternalLink className="size-4" />
                      </a>
                    </Button>
                  </div>
                </div>
              ))}
            </div>

            <p className="mt-8 text-sm text-muted-foreground leading-relaxed">
              More student-relevant partners are coming as the perks feature
              rolls out in the app.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
