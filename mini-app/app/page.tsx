import Link from "next/link";

export default function Home() {
  return (
    <section className="bg-white rounded-3xl shadow-[0_20px_40px_-12px_rgba(0,0,0,0.08),0_8px_24px_-8px_rgba(0,0,0,0.04)] p-10">
      <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">Proyecto</p>
      <h1 className="mt-1 text-3xl font-semibold tracking-tight text-slate-900">Directorio</h1>
      <p className="mt-4 max-w-md text-slate-600">
        Lista de usuarios con su informacion de contacto, con busqueda por nombre.
      </p>
      <p className="mt-4 text-sm text-slate-400">Hecho por Miguel Cardenas.</p>
      <Link
        href="/usuarios"
        className="inline-block mt-6 bg-slate-900 text-white rounded-lg px-5 py-2.5 hover:opacity-90"
      >
        Ver usuarios &rarr;
      </Link>
    </section>
  );
}
