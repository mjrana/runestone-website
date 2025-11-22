export default function ContactPage() {
  return (
    <div className="space-y-6">
      <header className="space-y-2">
        <h1 className="text-2xl font-semibold text-slate-50">Contact</h1>
        <p className="text-sm text-slate-300">
          Use this as a starting point and wire it to a form provider (e.g.
          Formspark, GetForm, a custom API on Cloud Run or Firebase).
        </p>
      </header>

      <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-4 text-sm text-slate-200">
        <p>Example placeholders for now:</p>
        <ul className="mt-2 list-disc pl-5 text-slate-300">
          <li>juwel.rana@runestoneintelligence.ai</li>
          <li>Dubai AI Campus, DIFC</li>
          <li>Oslo, Norway</li>
        </ul>
      </div>
    </div>
  );
}
