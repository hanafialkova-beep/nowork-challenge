"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Navbar from "@/components/Navbar";

export default function ThankYouEmailPage() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const trimmed = email.trim();
    if (!trimmed) return;
    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: trimmed, variant: "email" }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error ?? "Něco se pokazilo, zkus to znovu.");
      }

      // Uložit do localStorage pro případ, že by se chtěla přihlásit i do appky
      localStorage.setItem("nowork_email", trimmed);
      setDone(true);
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Něco se pokazilo, zkus to znovu.");
    } finally {
      setLoading(false);
    }
  }

  if (done) {
    return (
      <div className="min-h-screen flex flex-col bg-white">
        <Navbar />
        <main className="flex-1 flex flex-col items-center justify-center px-6 py-20 text-center">
          <div className="max-w-md mx-auto">
            <div className="text-6xl mb-6">✉️</div>
            <div className="inline-flex items-center gap-2 bg-green-50 text-green-700 text-xs font-bold tracking-widest uppercase px-4 py-2 rounded-full mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
              Email odeslán
            </div>
            <h1 className="text-2xl font-extrabold text-nowork-black mb-4">
              Jsme připravení. Sleduj inbox.
            </h1>
            <p className="text-gray-500 text-sm leading-relaxed mb-6">
              <strong>Day 0</strong> ti přijde dnes — uvítací email s tím, co tě čeká.
              Každý následující den ve stejnou dobu jedna výzva, 30 dní po sobě.
            </p>
            <p className="text-xs text-gray-400 mb-8">
              Pokud email do 10 minut nepřijde, zkontroluj složku{" "}
              <span className="font-semibold text-gray-600">Spam / Hromadné</span>.
            </p>
            <p className="text-xs text-gray-400">
              Registrovaný email:{" "}
              <span className="font-medium text-gray-600">{email}</span>
            </p>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />

      <main className="flex-1 flex flex-col items-center justify-center px-6 py-20">
        <div className="max-w-md mx-auto w-full">

          {/* Krok indikátor */}
          <div className="flex items-center gap-2 mb-10">
            <div className="flex items-center gap-2">
              <span className="w-7 h-7 rounded-full bg-green-500 text-white text-xs flex items-center justify-center font-bold">✓</span>
              <span className="text-xs text-green-600 font-semibold hidden sm:block">Platba</span>
            </div>
            <div className="flex-1 h-0.5 bg-gray-200" />
            <div className="flex items-center gap-2">
              <span className="w-7 h-7 rounded-full bg-nowork-orange text-white text-xs flex items-center justify-center font-bold">2</span>
              <span className="text-xs text-nowork-orange font-semibold hidden sm:block">Aktivace</span>
            </div>
            <div className="flex-1 h-0.5 bg-gray-200" />
            <div className="flex items-center gap-2">
              <span className="w-7 h-7 rounded-full bg-gray-200 text-gray-400 text-xs flex items-center justify-center">3</span>
              <span className="text-xs text-gray-400 hidden sm:block">Start</span>
            </div>
          </div>

          {/* Nadpis */}
          <div className="mb-1 text-xs font-bold text-nowork-orange uppercase tracking-widest">
            ✉️ Email Challenge
          </div>
          <h1 className="text-2xl font-extrabold text-nowork-black mb-2">
            Platba proběhla. Spusť výzvu.
          </h1>
          <p className="text-sm text-gray-500 mb-8 leading-relaxed">
            Zadej email, kam ti budeme posílat každodenní výzvy.{" "}
            <strong>Day 0</strong> přijde ihned, pak každý den v&nbsp;8:00 jedna nová výzva.
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="tvůj@email.cz"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 text-nowork-black placeholder-gray-400 focus:outline-none focus:border-nowork-orange text-sm"
            />
            {error && (
              <p className="text-red-500 text-sm">{error}</p>
            )}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-nowork-black text-white font-semibold px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors text-sm disabled:opacity-60"
            >
              {loading ? "Spouštím..." : "Spustit email challenge →"}
            </button>
          </form>

          <p className="text-xs text-gray-400 mt-5 text-center">
            30 dní. Jeden email denně. Žádné přihlašování.
          </p>

        </div>
      </main>
    </div>
  );
}
