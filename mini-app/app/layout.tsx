import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = { title: "Mini App" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className="min-h-screen flex flex-col bg-slate-50 text-slate-800">
        <Header />
        <main className="flex-1 w-full max-w-3xl mx-auto px-4 py-8">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
