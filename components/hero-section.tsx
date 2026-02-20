import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, MessageSquare } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 pt-16">
      {/* Background glow effects */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 -translate-x-1/2 h-[600px] w-[800px] rounded-full bg-primary/5 blur-[120px]" />
        <div className="absolute right-1/4 top-1/3 h-[300px] w-[300px] rounded-full bg-accent/5 blur-[100px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl text-center">
        <Badge
          variant="outline"
          className="mb-6 border-primary/30 bg-primary/5 px-4 py-1.5 text-primary"
        >
          AI Agent Platform
        </Badge>

        <h1 className="text-balance text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
          Deploy AI Agents{" "}
          <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            in 60 Seconds
          </span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-pretty text-base text-muted-foreground sm:text-lg leading-relaxed">
          Build intelligent chatbots with built-in knowledge bases, multiple
          embed styles, and full API access. Choose your model, upload your
          docs, and go live in under a minute.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button
            size="lg"
            className="group h-12 bg-primary px-8 text-primary-foreground hover:bg-primary/90 text-sm font-medium"
          >
            Get Started
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="h-12 border-border bg-transparent px-8 text-foreground hover:bg-secondary text-sm font-medium"
          >
            <MessageSquare className="size-4" />
            Book a Demo
          </Button>
        </div>

        <div className="mt-16 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-muted-foreground">
          <span className="flex items-center gap-2">
            <span className="size-1.5 rounded-full bg-primary" />
            GPT-4, Claude, Gemini & more
          </span>
          <span className="flex items-center gap-2">
            <span className="size-1.5 rounded-full bg-primary" />
            Built-in knowledge base
          </span>
          <span className="flex items-center gap-2">
            <span className="size-1.5 rounded-full bg-primary" />
            Full Chat API access
          </span>
        </div>
      </div>
    </section>
  )
}
