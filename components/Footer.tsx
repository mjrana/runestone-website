export function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950/80 mt-10">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-6 text-xs text-slate-400 md:flex-row md:items-center md:justify-between">
        <div>
          © {new Date().getFullYear()} Runestone Intelligence Ltd. All rights
          reserved.
        </div>
        <div className="flex gap-4">
          <span>Dubai AI Campus · DIFC</span>
          <span>Oslo · Nordics</span>
        </div>
      </div>
    </footer>
  );
}
