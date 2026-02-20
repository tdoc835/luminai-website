import {
  Sparkles,
  Globe,
  LayoutGrid,
  Wrench,
  Layers,
  BarChart3,
  Code2,
  MessageSquareText,
} from "lucide-react"

const features = [
  {
    icon: Sparkles,
    title: "AI-Assisted Prompt Writing",
    description:
      "No prompt engineering needed. Our AI helps you craft the perfect system prompt so your agents sound exactly right from day one.",
  },
  {
    icon: Globe,
    title: "Built-in Knowledge Base",
    description:
      "Upload documents or point at a website and we crawl and index it. Vector search built-in with automatic chunking and embedding.",
  },
  {
    icon: LayoutGrid,
    title: "Multiple Widget Styles",
    description:
      "Chat bubble, fullscreen, sidebar, or searchbar -- with more coming. Match your brand with customisable colours, fonts, and positioning.",
  },
  {
    icon: Code2,
    title: "Full Chat API Access",
    description:
      "Build your own UI with our Chat API. Integrate agents into any custom application, mobile app, or internal tool.",
  },
  {
    icon: Wrench,
    title: "Built-in Tools",
    description:
      "Document search, FAQ responses, and email sending out of the box. Add custom tools via API for unlimited extensibility.",
  },
  {
    icon: Layers,
    title: "Model Agnostic",
    description:
      "GPT-4, Claude, Gemini -- switch anytime without rebuilding. Use the best model for each task and optimise cost vs performance.",
  },
  {
    icon: MessageSquareText,
    title: "Conversation Logs",
    description:
      "Full conversation history with search and filters. Review every interaction, identify gaps in knowledge, and improve over time.",
  },
  {
    icon: BarChart3,
    title: "Analytics & Cost Tracking",
    description:
      "Per-agent stats, usage dashboards, and built-in cost tracking. See exactly what each model costs in real time.",
  },
]

export function FeaturesSection() {
  return (
    <section id="features" className="relative px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-primary">
            Features
          </p>
          <h2 className="mt-4 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Everything you need to build intelligent agents
          </h2>
          <p className="mt-4 text-pretty text-muted-foreground leading-relaxed">
            A complete platform for creating, deploying, and managing AI-powered
            conversational experiences.
          </p>
        </div>

        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group rounded-xl border border-border/50 bg-card/50 p-6 transition-all hover:border-primary/20 hover:bg-card"
            >
              <div className="flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <feature.icon className="size-5" />
              </div>
              <h3 className="mt-4 text-base font-semibold text-foreground">
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
  )
}
