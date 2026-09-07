"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

type Usuario = {
  name: string;
  email: string;
  phone: string;
  address: { street: string; city: string };
};

export default function UsuarioDetalle() {
  const { id } = useParams<{ id: string }>();
  const [usuario, setUsuario] = useState<Usuario | null>(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => res.json())
      .then(setUsuario);
  }, [id]);

  if (!usuario) return <p className="text-slate-500">Cargando...</p>;

  return (
    <section className="bg-white rounded-3xl shadow-[0_20px_40px_-12px_rgba(0,0,0,0.08),0_8px_24px_-8px_rgba(0,0,0,0.04)] p-10">
      <Link
        href="/usuarios"
        className="text-sm text-slate-600 border-b border-dotted border-transparent hover:border-slate-400"
      >
        &larr; volver
      </Link>
      <h1 className="text-2xl font-semibold tracking-tight text-slate-900 mt-4">{usuario.name}</h1>
      <p className="mt-3 text-slate-600">{usuario.email}</p>
      <p className="text-slate-600">{usuario.phone}</p>
      <span className="inline-block mt-3 bg-slate-100 text-slate-600 text-xs px-3 py-1 rounded-full">
        {usuario.address.street}, {usuario.address.city}
      </span>
    </section>
  );
}
