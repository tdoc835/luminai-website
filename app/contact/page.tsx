import { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { EnquiryForm } from "@/components/enquiry-form"
import { Mail, Clock, Building2 } from "lucide-react"

export const metadata: Metadata = {
  title: "Contact Us - Luminai",
  description:
    "Get in touch with the Luminai team for sales, support, or general enquiries.",
}

const highlights = [
  {
    icon: Clock,
    title: "Fast response",
    description: "We aim to reply within one business day.",
  },
  {
    icon: Mail,
    title: "Direct to the team",
    description: "Your message goes straight to the right people.",
  },
  {
    icon: Building2,
    title: "UK-based company",
    description: "Luminai Limited, registered in Northern Ireland.",
  },
]

export default function ContactPage() {
  return (
    <div className="relative min-h-screen bg-background">
      <Navbar />
      <main className="pt-24 pb-16 px-6">
        <div className="mx-auto max-w-3xl">
          <div className="text-center">
            <p className="text-sm font-medium uppercase tracking-widest text-primary">
              Get in touch
            </p>
            <h1 className="mt-4 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              How can we help?
            </h1>
            <p className="mx-auto mt-4 max-w-xl text-muted-foreground leading-relaxed">
              Whether you&apos;re interested in early access, have a question about
              the platform, or want to explore a partnership — we&apos;d love to hear
              from you.
            </p>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {highlights.map((item) => (
              <div
                key={item.title}
                className="flex items-start gap-3 rounded-lg border border-border/50 bg-card/50 p-4"
              >
                <div className="flex size-9 shrink-0 items-center justify-center rounded-md bg-primary/10 text-primary">
                  <item.icon className="size-4" />
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">
                    {item.title}
                  </p>
                  <p className="mt-0.5 text-xs text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10">
            <EnquiryForm />
          </div>

          <p className="mt-8 text-center text-xs text-muted-foreground">
            You can also reach us directly at{" "}
            <a
              href="mailto:empower@luminai.co.uk"
              className="font-medium text-primary hover:underline"
            >
              empower@luminai.co.uk
            </a>
          </p>
        </div>
      </main>
      <Footer />
    </div>
  )
}
