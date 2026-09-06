"use client";

import { useEffect, useState } from "react";

type Country = {
  name: { common: string };
  capital?: string[];
  flags: { png: string };
};

export default function Paises() {
  const [countries, setCountries] = useState<Country[]>([]);
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all?fields=name,capital,flags")
      .then((res) => res.json())
      .then(setCountries)
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p>Cargando...</p>;

  const filtered = countries.filter((c) =>
    c.name.common.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <section>
      <h1 className="text-2xl font-bold mb-4">Paises</h1>
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Buscar pais"
        className="border border-gray-300 p-2 mb-4 w-full"
      />
      <ul>
        {filtered.map((c) => (
          <li key={c.name.common}>{c.name.common}</li>
        ))}
      </ul>
    </section>
  );
}
