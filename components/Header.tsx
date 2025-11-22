import Link from "next/link";

export function Header() {
  return (
    <header className="border-b border-slate-800 bg-slate-950/80 sticky top-0 z-20 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link href="/" className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-lg bg-runestone-teal" />
          <div className="leading-tight">
            <div className="text-sm font-semibold tracking-wide text-slate-200">
              Runestone Intelligence
            </div>
            <div className="text-[10px] uppercase tracking-[0.18em] text-slate-400">
              AI Consultancy · Dubai · Nordics
            </div>
          </div>
        </Link>
        <nav className="hidden gap-6 text-sm text-slate-300 md:flex">
          <Link href="/services">Services</Link>
          <Link href="/blog">Insights</Link>
          <Link href="/contact">Contact</Link>
        </nav>
      </div>
    </header>
  );
}
