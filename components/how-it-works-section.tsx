import { Bot, Database, Rocket } from "lucide-react"

const steps = [
  {
    number: "01",
    icon: Bot,
    title: "Create Your Agent",
    description:
      "Define your agent's personality, scope, and goals. Choose a base model and configure conversation parameters in our intuitive dashboard.",
  },
  {
    number: "02",
    icon: Database,
    title: "Add Knowledge & Tools",
    description:
      "Upload your documents, connect data sources, and integrate APIs. Our platform automatically indexes and optimises everything for retrieval.",
  },
  {
    number: "03",
    icon: Rocket,
    title: "Deploy & Go Live",
    description:
      "Deploy with a single click. Embed on your website, connect to messaging platforms, or access via API. Monitor performance in real time.",
  },
]

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="relative px-6 py-24 md:py-32">
      {/* Subtle divider glow */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-primary">
            How It Works
          </p>
          <h2 className="mt-4 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Three steps to your first AI agent
          </h2>
          <p className="mt-4 text-pretty text-muted-foreground leading-relaxed">
            Our streamlined workflow gets you from concept to production faster
            than any other platform.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {steps.map((step, index) => (
            <div key={step.number} className="relative">
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="absolute right-0 top-12 hidden h-px w-6 translate-x-full bg-gradient-to-r from-border to-transparent md:block" />
              )}

              <div className="rounded-xl border border-border/50 bg-card/50 p-6">
                <div className="flex items-center gap-4">
                  <span className="font-mono text-3xl font-bold text-primary/20">
                    {step.number}
                  </span>
                  <div className="flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <step.icon className="size-5" />
                  </div>
                </div>

                <h3 className="mt-4 text-lg font-semibold text-foreground">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
