import Link from "next/link";

export default function Header() {
  return (
    <header className="border-b border-slate-200 bg-white">
      <div className="max-w-3xl mx-auto px-4 py-4 flex gap-6">
        <Link href="/" className="font-bold text-slate-800">
          Mini App
        </Link>
        <Link href="/usuarios" className="text-blue-600 hover:underline">
          Usuarios
        </Link>
      </div>
    </header>
  );
}
