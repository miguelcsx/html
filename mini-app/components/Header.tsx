import Link from "next/link";

export default function Header() {
  return (
    <header className="border-b border-slate-100 bg-white">
      <div className="max-w-3xl mx-auto px-4 py-5 flex gap-6">
        <Link href="/" className="font-semibold tracking-tight text-slate-900">
          Directorio
        </Link>
        <Link
          href="/usuarios"
          className="text-slate-700 border-b border-dotted border-transparent hover:border-slate-400"
        >
          Usuarios
        </Link>
      </div>
    </header>
  );
}
