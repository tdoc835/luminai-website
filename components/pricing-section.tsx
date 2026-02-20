import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Check, Eye } from "lucide-react"

const included = [
  "Built-in knowledge base (RAG)",
  "Multiple embed widget styles",
  "Full Chat API access",
  "Analytics & cost tracking dashboard",
  "Conversation logs",
  "Multi-model support",
  "Built-in tools (search, FAQ, email)",
  "Email & chat support",
]

const modelCosts = [
  { model: "GPT-4o", input: "£1.88", output: "£7.50" },
  { model: "GPT-4o Mini", input: "£0.11", output: "£0.45" },
  { model: "Claude 3.5 Sonnet", input: "£2.25", output: "£11.25" },
  { model: "Gemini 1.5 Pro", input: "£0.94", output: "£3.75" },
]

export function PricingSection() {
  return (
    <section id="pricing" className="relative px-6 py-24 md:py-32">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-primary">
            Pricing
          </p>
          <h2 className="mt-4 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Simple, transparent pricing
          </h2>
          <p className="mt-4 text-pretty text-muted-foreground leading-relaxed">
            One flat platform fee per agent, plus pay-as-you-go AI usage. See
            exactly what each model costs and track usage in real time.
          </p>
        </div>

        <div className="mt-16 mx-auto max-w-4xl grid gap-6 lg:grid-cols-2">
          {/* Platform fee card */}
          <div className="rounded-xl border border-primary/30 bg-card/80 p-8 relative overflow-hidden">
            <div className="pointer-events-none absolute -right-10 -top-10 size-40 rounded-full bg-primary/5 blur-[60px]" />

            <Badge
              variant="outline"
              className="border-primary/30 bg-primary/5 text-primary"
            >
              Platform Fee
            </Badge>

            <div className="mt-6 flex items-baseline gap-1">
              <span className="text-5xl font-bold tracking-tight text-foreground">£50</span>
              <span className="text-muted-foreground">/month per agent</span>
            </div>

            <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
              Everything you need to build, deploy, and manage production-ready
              AI agents. No per-seat charges.
            </p>

            <ul className="mt-8 flex flex-col gap-3">
              {included.map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm text-foreground">
                  <Check className="size-4 shrink-0 text-primary" />
                  {item}
                </li>
              ))}
            </ul>

            <Button className="mt-8 w-full bg-primary text-primary-foreground hover:bg-primary/90 h-11 group">
              Get Started
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
            </Button>
          </div>

          {/* Usage costs card */}
          <div className="rounded-xl border border-border/50 bg-card/50 p-8">
            <Badge
              variant="outline"
              className="border-accent/30 bg-accent/5 text-accent"
            >
              AI Usage
            </Badge>

            <div className="mt-6">
              <span className="text-2xl font-bold tracking-tight text-foreground">
                Pay As You Go
              </span>
            </div>

            <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
              Simply add credit to your account and use as much or as little as
              you need. No token bundles, no throttling, no overage fees.
              You're in complete control — top up your balance and pay only for
              the AI tokens you actually use.
            </p>

            <div className="mt-8">
              <p className="mb-4 text-xs font-medium uppercase tracking-widest text-muted-foreground">
                Cost per million tokens
              </p>

              {/* Table header */}
              <div className="mb-2 flex items-center justify-between px-4 text-xs font-medium uppercase tracking-wider text-muted-foreground">
                <span>Model</span>
                <div className="flex gap-8">
                  <span>Input</span>
                  <span>Output</span>
                </div>
              </div>

              <div className="flex flex-col gap-2">
                {modelCosts.map((item) => (
                  <div
                    key={item.model}
                    className="flex items-center justify-between rounded-lg border border-border/50 bg-muted/50 px-4 py-3"
                  >
                    <span className="text-sm text-foreground font-medium">
                      {item.model}
                    </span>
                    <div className="flex gap-8">
                      <span className="font-mono text-sm text-primary w-14 text-right">
                        {item.input}
                      </span>
                      <span className="font-mono text-sm text-accent w-14 text-right">
                        {item.output}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 flex items-center justify-center gap-2 text-xs text-muted-foreground">
              <Eye className="size-3.5" />
              <span>Track every token in your analytics dashboard</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
