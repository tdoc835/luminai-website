import { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Mail, MessageSquare, Shield } from "lucide-react"

export const metadata: Metadata = {
  title: "Contact Us - Luminai",
  description: "Get in touch with the Luminai team for sales, support, or general enquiries.",
}

const contacts = [
  {
    icon: MessageSquare,
    title: "General Enquiries & Sales",
    description: "Interested in Luminai or have a question? We'd love to hear from you.",
    email: "hello@luminai.co.uk",
  },
  {
    icon: Mail,
    title: "Support",
    description: "Need help with the platform or have a technical question?",
    email: "support@luminai.co.uk",
  },
  {
    icon: Shield,
    title: "Legal & Privacy",
    description: "Data protection requests, legal enquiries, or privacy concerns.",
    email: "legal@luminai.co.uk",
  },
]

export default function ContactPage() {
  return (
    <div className="relative min-h-screen bg-background">
      <Navbar />
      <main className="pt-24 pb-16 px-6">
        <div className="mx-auto max-w-4xl">
          <div className="text-center">
            <p className="text-sm font-medium uppercase tracking-widest text-primary">
              Contact Us
            </p>
            <h1 className="mt-4 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              Get in touch
            </h1>
            <p className="mx-auto mt-4 max-w-xl text-muted-foreground leading-relaxed">
              Whether you have a question about features, pricing, or anything
              else, our team is ready to help.
            </p>
          </div>

          <div className="mt-16 grid gap-6 sm:grid-cols-3">
            {contacts.map((contact) => (
              <div
                key={contact.email}
                className="rounded-xl border border-border/50 bg-card/50 p-6 text-center"
              >
                <div className="mx-auto flex size-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <contact.icon className="size-6" />
                </div>
                <h2 className="mt-4 text-lg font-semibold text-foreground">
                  {contact.title}
                </h2>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  {contact.description}
                </p>
                <a
                  href={`mailto:${contact.email}`}
                  className="mt-4 inline-block text-sm font-medium text-primary hover:underline"
                >
                  {contact.email}
                </a>
              </div>
            ))}
          </div>

          <div className="mt-16 rounded-xl border border-border/50 bg-card/50 p-8 text-center">
            <h2 className="text-lg font-semibold text-foreground">
              Luminai Limited
            </h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Registered in Northern Ireland
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
