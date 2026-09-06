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
      <h1 className="text-2xl font-bold text-slate-800 mb-4">Usuarios</h1>
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Buscar usuario"
        className="border border-slate-200 rounded-lg p-2 mb-6 w-full bg-white"
      />
      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {filtrados.map((u) => (
          <li key={u.id} className="bg-white rounded-xl border border-slate-200 shadow-sm p-4">
            <Link href={`/usuarios/${u.id}`} className="font-bold text-slate-800 hover:text-blue-600">
              {u.name}
            </Link>
            <p className="text-sm text-slate-500">{u.email}</p>
            <p className="text-sm text-slate-500">{u.address.city}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
