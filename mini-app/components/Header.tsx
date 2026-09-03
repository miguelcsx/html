import Link from "next/link";

export default function Header() {
  return (
    <header className="border-b border-gray-300 p-4 flex gap-4">
      <Link href="/" className="font-bold">
        Mini App
      </Link>
      <Link href="/paises">Paises</Link>
    </header>
  );
}
