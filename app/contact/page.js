export const metadata = {
  title: "Contact",
};

export default function ContactPage() {
  return (
    <main className="max-w-2xl mx-auto px-6 py-16">
      <h1 className="text-5xl font-bold mb-8">Contact</h1>
      <div className="space-y-6 text-lg">
        <div>
          <p className="text-sm uppercase tracking-wide text-gray-500 mb-1">Email</p>
         <a href="mailto:hello@example.com" className="text-klein hover:underline decoration-klein decoration-1 underline-offset-4">
  hello@example.com
</a>
        </div>
        <div>
          <p className="text-sm uppercase tracking-wide text-gray-500 mb-1">Instagram</p>
          <a href="https://instagram.com/yourhandle" target="_blank" rel="noopener noreferrer" className="hover:underline">@yourhandle</a>
        </div>
        <div>
          <p className="text-sm uppercase tracking-wide text-gray-500 mb-1">Based in</p>
          <p>Slovenia</p>
        </div>
      </div>
      <p className="text-sm text-gray-500 mt-12">Available for commercial projects and commissions.</p>
    </main>
  );
}