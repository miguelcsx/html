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
    <section className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8">
      <Link href="/usuarios" className="text-sm text-slate-500 hover:text-blue-600">
        &larr; volver
      </Link>
      <h1 className="text-2xl font-bold text-slate-800 mt-4">{usuario.name}</h1>
      <p className="mt-2 text-slate-600">{usuario.email}</p>
      <p className="text-slate-600">{usuario.phone}</p>
      <p className="text-slate-600">
        {usuario.address.street}, {usuario.address.city}
      </p>
    </section>
  );
}
