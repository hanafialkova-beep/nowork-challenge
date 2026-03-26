"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Navbar from "@/components/Navbar";
import { activateAccess } from "@/lib/utils";

export default function ThankYouAppPage() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const trimmed = email.trim();
    if (!trimmed) return;
    setLoading(true);
    setError("");

    try {
      // Volitelně: přihlásit i do Ecomail pro systémové emaily (uvítání apod.)
      await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: trimmed, variant: "app" }),
      }).catch(() => {
        // Selhání API nevadí — hlavní je localStorage aktivace
      });

      // Aktivace localStorage přístupu — dnes = Den 0, každý den se odemkne nový
      activateAccess(trimmed, "app");

      // Přesměrování na challenge portál
      router.push("/challenge");
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Něco se pokazilo, zkus to znovu.");
      setLoading(false);
    }
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

          {/* Konfety / success grafika */}
          <div className="text-center mb-6">
            <div className="text-5xl mb-3">🎉</div>
            <div className="inline-flex items-center gap-2 bg-green-50 text-green-700 text-xs font-bold tracking-widest uppercase px-4 py-2 rounded-full">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
              Platba úspěšná
            </div>
          </div>

          {/* Nadpis */}
          <h1 className="text-2xl font-extrabold text-nowork-black mb-2 text-center">
            Platba proběhla. Pojďme na to.
          </h1>
          <p className="text-sm text-gray-500 mb-8 leading-relaxed text-center">
            Zadej email a spusť výzvu. <strong>Den 0</strong> se odemkne ihned,
            každý následující den automaticky jeden nový — celkem 28 dní.
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
              className="w-full bg-nowork-orange text-white font-semibold px-6 py-3 rounded-lg hover:bg-orange-500 transition-colors text-sm disabled:opacity-60"
            >
              {loading ? "Spouštím..." : "Vstoupit do challenge →"}
            </button>
          </form>

          <p className="text-xs text-gray-400 mt-5 text-center">
            Den 0 ihned. Den 1 zítra. Každý den jeden nový, automaticky.
          </p>

          {/* Co tě čeká */}
          <div className="mt-10 bg-gray-50 rounded-xl p-5">
            <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Co tě čeká</p>
            <div className="space-y-3">
              {[
                { day: "Dnes", text: "Den 0 — Úvod a první mini úkol" },
                { day: "Zítra", text: "Den 1 — první výzva se odemkne automaticky" },
                { day: "Každý den", text: "5–7 minut, jeden krok, jedno zlepšení" },
              ].map((item) => (
                <div key={item.day} className="flex items-start gap-3">
                  <span className="text-xs font-bold text-nowork-orange w-16 flex-shrink-0 mt-0.5">
                    {item.day}
                  </span>
                  <span className="text-xs text-gray-600">{item.text}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}
