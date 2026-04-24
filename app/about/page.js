export const metadata = {
  title: "About — Iza",
};

export default function AboutPage() {
  return (
    <main className="max-w-3xl mx-auto px-6 md:px-12 pt-12 md:pt-20 pb-24">
      <header className="mb-12">
        <p className="font-mono text-[10px] uppercase tracking-widest text-ink/50 mb-4">
          <span className="text-klein">03</span> <span>— Information</span>
        </p>
        <h1 className="font-display text-6xl md:text-8xl tracking-tight leading-none">
          About
        </h1>
      </header>

      <div className="space-y-6 font-display text-xl md:text-2xl leading-relaxed text-ink/80">
        <p>
          Placeholder bio. Replace with Iza&apos;s actual about copy — a paragraph or two on her practice, her background, and what she&apos;s drawn to.
        </p>
        <p>
          A second paragraph if she wants. Maybe about commissions, exhibitions, or where she&apos;s based.
        </p>
      </div>
    </main>
  );
}