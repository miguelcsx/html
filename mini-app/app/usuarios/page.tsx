"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

type Usuario = {
  id: number;
  name: string;
  email: string;
  address: { city: string };
};

export default function Usuarios() {
  const [usuarios, setUsuarios] = useState<Usuario[]>([]);
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then(setUsuarios)
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p className="text-slate-500">Cargando...</p>;

  const filtrados = usuarios.filter((u) =>
    u.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <section>
      <h1 className="text-2xl font-semibold tracking-tight text-slate-900 mb-5">Usuarios</h1>
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Buscar usuario"
        className="border border-slate-200 rounded-xl px-4 py-2 mb-6 w-full bg-white focus:outline-none focus:ring-2 focus:ring-slate-300"
      />
      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {filtrados.map((u) => (
          <li
            key={u.id}
            className="bg-white rounded-2xl shadow-[0_20px_40px_-12px_rgba(0,0,0,0.08),0_8px_24px_-8px_rgba(0,0,0,0.04)] p-5"
          >
            <Link
              href={`/usuarios/${u.id}`}
              className="font-semibold text-slate-900 border-b border-dotted border-transparent hover:border-slate-400"
            >
              {u.name}
            </Link>
            <p className="text-sm text-slate-500 mt-1">{u.email}</p>
            <span className="inline-block mt-2 bg-slate-100 text-slate-600 text-xs px-3 py-1 rounded-full">
              {u.address.city}
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
}
