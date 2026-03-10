"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { CheckCircle2, Loader2, AlertCircle } from "lucide-react"

const enquirySchema = z.object({
  name: z.string().min(1, "Name is required").max(100),
  email: z.string().email("Please enter a valid email address"),
  company: z.string().max(100).optional(),
  enquiryType: z.enum(["general", "sales", "support", "partnership"], {
    required_error: "Please select an enquiry type",
  }),
  message: z
    .string()
    .min(10, "Message must be at least 10 characters")
    .max(5000),
})

type EnquiryFormData = z.infer<typeof enquirySchema>

const enquiryTypes = [
  { value: "general", label: "General Enquiry" },
  { value: "sales", label: "Sales & Pricing" },
  { value: "support", label: "Technical Support" },
  { value: "partnership", label: "Partnership" },
] as const

export function EnquiryForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle")
  const [errorMessage, setErrorMessage] = useState("")

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<EnquiryFormData>({
    resolver: zodResolver(enquirySchema),
    defaultValues: {
      enquiryType: "general",
    },
  })

  async function onSubmit(data: EnquiryFormData) {
    setStatus("submitting")
    setErrorMessage("")

    try {
      const response = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })

      if (!response.ok) {
        const result = await response.json()
        throw new Error(result.error || "Something went wrong")
      }

      setStatus("success")
      reset()
    } catch (err) {
      setStatus("error")
      setErrorMessage(
        err instanceof Error ? err.message : "Failed to send enquiry. Please try again."
      )
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-xl border border-border/50 bg-card/50 p-12 text-center">
        <div className="mx-auto flex size-14 items-center justify-center rounded-full bg-primary/10">
          <CheckCircle2 className="size-7 text-primary" />
        </div>
        <h3 className="mt-6 text-xl font-semibold text-foreground">
          Enquiry sent successfully
        </h3>
        <p className="mx-auto mt-3 max-w-sm text-sm text-muted-foreground leading-relaxed">
          Thank you for getting in touch. We&apos;ll review your message and respond within one business day.
        </p>
        <Button
          variant="outline"
          size="sm"
          className="mt-8"
          onClick={() => setStatus("idle")}
        >
          Send another enquiry
        </Button>
      </div>
    )
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="rounded-xl border border-border/50 bg-card/50 p-8 sm:p-10"
    >
      <div className="grid gap-6 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="name">
            Full name <span className="text-destructive">*</span>
          </Label>
          <Input
            id="name"
            placeholder="John Smith"
            aria-invalid={!!errors.name}
            {...register("name")}
          />
          {errors.name && (
            <p className="text-xs text-destructive">{errors.name.message}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="email">
            Email address <span className="text-destructive">*</span>
          </Label>
          <Input
            id="email"
            type="email"
            placeholder="john@company.com"
            aria-invalid={!!errors.email}
            {...register("email")}
          />
          {errors.email && (
            <p className="text-xs text-destructive">{errors.email.message}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="company">Company</Label>
          <Input
            id="company"
            placeholder="Company name (optional)"
            {...register("company")}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="enquiryType">
            Enquiry type <span className="text-destructive">*</span>
          </Label>
          <select
            id="enquiryType"
            className="border-input placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 dark:bg-input/30 h-9 w-full rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] md:text-sm"
            {...register("enquiryType")}
          >
            {enquiryTypes.map((type) => (
              <option key={type.value} value={type.value}>
                {type.label}
              </option>
            ))}
          </select>
          {errors.enquiryType && (
            <p className="text-xs text-destructive">
              {errors.enquiryType.message}
            </p>
          )}
        </div>
      </div>

      <div className="mt-6 space-y-2">
        <Label htmlFor="message">
          Message <span className="text-destructive">*</span>
        </Label>
        <Textarea
          id="message"
          placeholder="Tell us about your project, question, or how we can help..."
          className="min-h-[140px]"
          aria-invalid={!!errors.message}
          {...register("message")}
        />
        {errors.message && (
          <p className="text-xs text-destructive">{errors.message.message}</p>
        )}
      </div>

      {status === "error" && (
        <div className="mt-6 flex items-start gap-3 rounded-lg border border-destructive/50 bg-destructive/5 p-4">
          <AlertCircle className="mt-0.5 size-4 shrink-0 text-destructive" />
          <p className="text-sm text-destructive">{errorMessage}</p>
        </div>
      )}

      <div className="mt-8 flex items-center justify-between">
        <p className="hidden text-xs text-muted-foreground sm:block">
          <span className="text-destructive">*</span> Required fields
        </p>
        <Button
          type="submit"
          size="lg"
          className="w-full sm:w-auto"
          disabled={status === "submitting"}
        >
          {status === "submitting" ? (
            <>
              <Loader2 className="size-4 animate-spin" />
              Sending...
            </>
          ) : (
            "Send Enquiry"
          )}
        </Button>
      </div>
    </form>
  )
}
