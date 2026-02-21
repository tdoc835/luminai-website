import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function CtaSection() {
  return (
    <section className="relative px-6 py-24 md:py-32">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="relative mx-auto max-w-4xl overflow-hidden rounded-2xl border border-border/50 bg-card/50 px-6 py-16 text-center sm:px-12 md:py-20">
        {/* Glow effects */}
        <div className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 h-[300px] w-[500px] rounded-full bg-primary/5 blur-[100px]" />
        <div className="pointer-events-none absolute right-0 bottom-0 h-[200px] w-[300px] rounded-full bg-accent/5 blur-[80px]" />

        <div className="relative z-10">
          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Ready to deploy your first AI agent?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-pretty text-muted-foreground leading-relaxed">
            Join businesses already using Luminai to automate conversations,
            reduce support costs, and delight customers.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              size="lg"
              className="group h-12 bg-primary px-8 text-primary-foreground hover:bg-primary/90 text-sm font-medium"
              asChild
            >
              <Link href="/contact">
                Request Early Access
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="h-12 border-border bg-transparent px-8 text-foreground hover:bg-secondary text-sm font-medium"
              asChild
            >
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
