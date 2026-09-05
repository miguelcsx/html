"use client";

import { useEffect, useState } from "react";

type Country = {
  name: { common: string };
  capital?: string[];
  flags: { png: string };
};

export default function Paises() {
  const [countries, setCountries] = useState<Country[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all?fields=name,capital,flags")
      .then((res) => res.json())
      .then(setCountries)
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p>Cargando...</p>;

  return (
    <section>
      <h1 className="text-2xl font-bold mb-4">Paises</h1>
      <ul>
        {countries.map((c) => (
          <li key={c.name.common}>{c.name.common}</li>
        ))}
      </ul>
    </section>
  );
}
