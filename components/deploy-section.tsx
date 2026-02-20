import { MessageCircle, Maximize2, PanelRight, Search, Code2 } from "lucide-react"

const widgets = [
  {
    icon: MessageCircle,
    title: "Chat Bubble",
    description: "Floating button in the corner. Click to open a conversation window. Perfect for support.",
    preview: (
      <div className="relative h-36 w-full rounded-lg border border-border/50 bg-muted/30 overflow-hidden">
        <div className="p-3">
          <div className="h-2 w-16 rounded-full bg-border/50" />
          <div className="mt-2 h-1.5 w-full rounded-full bg-border/30" />
          <div className="mt-1.5 h-1.5 w-3/4 rounded-full bg-border/30" />
          <div className="mt-1.5 h-1.5 w-5/6 rounded-full bg-border/30" />
        </div>
        <div className="absolute bottom-2 right-2 flex size-8 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg">
          <MessageCircle className="size-4" />
        </div>
      </div>
    ),
  },
  {
    icon: Maximize2,
    title: "Fullscreen",
    description: "Dedicated page experience. Ideal for complex conversations and customer portals.",
    preview: (
      <div className="relative h-36 w-full rounded-lg border border-border/50 bg-muted/30 overflow-hidden">
        <div className="flex h-full flex-col">
          <div className="flex items-center gap-2 border-b border-border/50 px-3 py-2">
            <div className="size-4 rounded-full bg-primary/30" />
            <div className="h-1.5 w-12 rounded-full bg-border/50" />
          </div>
          <div className="flex-1 p-3">
            <div className="mb-2 ml-auto h-4 w-2/3 rounded-lg bg-primary/20 p-1">
              <div className="h-1 w-full rounded-full bg-primary/30" />
            </div>
            <div className="h-6 w-3/4 rounded-lg bg-border/30 p-1">
              <div className="h-1 w-full rounded-full bg-border/40" />
              <div className="mt-1 h-1 w-2/3 rounded-full bg-border/40" />
            </div>
          </div>
          <div className="flex items-center gap-2 border-t border-border/50 px-3 py-2">
            <div className="h-4 flex-1 rounded-md bg-border/30" />
            <div className="h-4 w-6 rounded-md bg-primary/30" />
          </div>
        </div>
      </div>
    ),
  },
  {
    icon: PanelRight,
    title: "Sidebar",
    description: "Slide-in panel from the side. Browse your site while chatting with the agent.",
    preview: (
      <div className="relative h-36 w-full rounded-lg border border-border/50 bg-muted/30 overflow-hidden">
        <div className="flex h-full">
          <div className="flex-1 p-3">
            <div className="h-2 w-12 rounded-full bg-border/50" />
            <div className="mt-2 h-1.5 w-full rounded-full bg-border/30" />
            <div className="mt-1.5 h-1.5 w-3/4 rounded-full bg-border/30" />
          </div>
          <div className="w-2/5 border-l border-primary/30 bg-card/80">
            <div className="flex items-center gap-1.5 border-b border-border/50 px-2 py-1.5">
              <div className="size-3 rounded-full bg-primary/30" />
              <div className="h-1 w-8 rounded-full bg-border/50" />
            </div>
            <div className="p-2">
              <div className="mb-1.5 ml-auto h-3 w-3/4 rounded bg-primary/15 p-0.5">
                <div className="h-0.5 w-full rounded-full bg-primary/30" />
              </div>
              <div className="h-4 w-full rounded bg-border/30 p-0.5">
                <div className="h-0.5 w-full rounded-full bg-border/40" />
                <div className="mt-0.5 h-0.5 w-2/3 rounded-full bg-border/40" />
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    icon: Search,
    title: "Searchbar",
    description: "Inline search experience. Users type a question and get instant AI-powered answers.",
    preview: (
      <div className="relative h-36 w-full rounded-lg border border-border/50 bg-muted/30 overflow-hidden">
        <div className="p-3">
          <div className="h-2 w-16 rounded-full bg-border/50" />
          <div className="mt-3 flex items-center gap-2 rounded-lg border border-primary/30 bg-card/80 px-3 py-2">
            <Search className="size-3 text-muted-foreground" />
            <div className="h-1.5 w-24 rounded-full bg-border/50" />
          </div>
          <div className="mt-1 rounded-lg border border-border/50 bg-card/80 p-2">
            <div className="h-1 w-full rounded-full bg-border/40" />
            <div className="mt-1.5 h-1 w-5/6 rounded-full bg-border/30" />
            <div className="mt-1.5 h-1 w-2/3 rounded-full bg-border/30" />
          </div>
        </div>
      </div>
    ),
  },
]

export function DeploySection() {
  return (
    <section id="deploy" className="relative px-6 py-24 md:py-32">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-primary">
            Deploy Your Way
          </p>
          <h2 className="mt-4 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Embed anywhere, or build your own
          </h2>
          <p className="mt-4 text-pretty text-muted-foreground leading-relaxed">
            Choose a ready-made widget style, or use our Chat API to build a
            completely custom experience in any application.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {widgets.map((widget) => (
            <div
              key={widget.title}
              className="group rounded-xl border border-border/50 bg-card/50 p-5 transition-all hover:border-primary/20 hover:bg-card"
            >
              {widget.preview}
              <div className="mt-4 flex items-center gap-2">
                <widget.icon className="size-4 text-primary" />
                <h3 className="text-sm font-semibold text-foreground">{widget.title}</h3>
              </div>
              <p className="mt-1.5 text-xs text-muted-foreground leading-relaxed">
                {widget.description}
              </p>
            </div>
          ))}
        </div>

        {/* Chat API callout */}
        <div className="mt-8 rounded-xl border border-accent/20 bg-accent/5 px-6 py-6">
          <div className="flex flex-col items-center gap-4 text-center md:flex-row md:text-left">
            <div className="flex size-12 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent">
              <Code2 className="size-6" />
            </div>
            <div>
              <h3 className="text-base font-semibold text-foreground">
                Or build your own UI with the Chat API
              </h3>
              <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                Full API access to integrate agents into any custom application, mobile app,
                or internal tool. Stream responses, manage conversations, and control every
                detail of the experience.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
