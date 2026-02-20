import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

interface LegalLayoutProps {
  title: string
  lastUpdated: string
  version: string
  children: React.ReactNode
}

export function LegalLayout({ title, lastUpdated, version, children }: LegalLayoutProps) {
  return (
    <div className="relative min-h-screen bg-background">
      <Navbar />
      <main className="pt-24 pb-16 px-6">
        <article className="mx-auto max-w-3xl">
          <header className="mb-12 border-b border-border/50 pb-8">
            <h1 className="text-4xl font-bold text-foreground mb-4">{title}</h1>
            <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
              <span>Last Updated: {lastUpdated}</span>
              <span>•</span>
              <span>Version {version}</span>
            </div>
          </header>
          <div className="prose prose-invert prose-lg max-w-none
            prose-headings:text-foreground prose-headings:font-semibold
            prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-6 prose-h2:border-b prose-h2:border-border/50 prose-h2:pb-3
            prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-4
            prose-p:text-muted-foreground prose-p:leading-relaxed
            prose-li:text-muted-foreground
            prose-strong:text-foreground
            prose-a:text-primary prose-a:no-underline hover:prose-a:underline
            prose-table:border-border prose-th:border-border prose-td:border-border
            prose-th:text-foreground prose-th:bg-card prose-th:px-4 prose-th:py-2
            prose-td:text-muted-foreground prose-td:px-4 prose-td:py-2
            prose-tr:border-border/50
          ">
            {children}
          </div>
        </article>
      </main>
      <Footer />
    </div>
  )
}
