export function DemoSection() {
  return (
    <section id="demo" className="relative px-6 py-24 md:py-32">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-primary">
            Interactive Demo
          </p>
          <h2 className="mt-4 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            See it in action
          </h2>
          <p className="mt-4 text-pretty text-muted-foreground leading-relaxed">
            Walk through creating an AI agent and embedding it as a website
            widget — no sign-up required.
          </p>
        </div>

        <div className="mt-12 overflow-hidden rounded-xl border border-border/50">
          <div
            style={{
              position: "relative",
              paddingBottom: "calc(50.4167% + 41px)",
              height: 0,
              width: "100%",
            }}
          >
            <iframe
              src="https://demo.arcade.software/IyOK3ZJj3iu1kOGYTuYR?embed&embed_mobile=tab&embed_desktop=inline&show_copy_link=true"
              title="Create an AI agent and embed it as a website widget"
              frameBorder="0"
              loading="lazy"
              allowFullScreen
              allow="clipboard-write"
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                colorScheme: "light",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
