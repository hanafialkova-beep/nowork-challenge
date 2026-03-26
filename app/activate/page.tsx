"use client";

import { Suspense, useEffect, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Navbar from "@/components/Navbar";
import { activateAccess, getEmail, type Variant } from "@/lib/utils";

function ActivateContent() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const variantParam = (searchParams.get("variant") ?? "app") as Variant;
  const emailParam = searchParams.get("email") ?? "";

  const [email, setEmailState] = useState(emailParam);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  // If already activated and same variant, redirect
  useEffect(() => {
    const existing = getEmail();
    if (existing && !emailParam) {
      // already active — go to challenge
      router.push("/challenge");
    }
  }, [emailParam, router]);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email.trim()) return;
    setLoading(true);
    activateAccess(email.trim(), variantParam);
    setTimeout(() => {
      if (variantParam === "email") {
        setSubmitted(true);
        setLoading(false);
      } else {
        router.push("/challenge");
      }
    }, 400);
  }

  const isEmail = variantParam === "email";

  if (submitted && isEmail) {
    return (
      <main className="flex-1 flex flex-col items-center justify-center px-6 py-20 text-center">
        <div className="max-w-md mx-auto">
          <div className="text-5xl mb-6">✉️</div>
          <h1 className="text-2xl font-bold text-nowork-black mb-4">
            Jsme nastavení. Sleduj inbox.
          </h1>
          <p className="text-gray-500 text-sm leading-relaxed mb-8">
            Day 0 ti přijde dnes. Každý následující den ve stejnou dobu jeden email s výzvou.
            Zkontroluj složku Spam, pokud nepřijde do hodiny.
          </p>
          <p className="text-xs text-gray-400">
            Registrovaný email: <span className="font-medium text-gray-600">{email}</span>
          </p>
        </div>
      </main>
    );
  }

  return (
    <main className="flex-1 flex flex-col items-center justify-center px-6 py-20">
      <div className="max-w-md mx-auto w-full">

        {/* Step indicator */}
        <div className="flex items-center gap-2 mb-8">
          <span className="w-6 h-6 rounded-full bg-green-500 text-white text-xs flex items-center justify-center font-bold">✓</span>
          <div className="flex-1 h-0.5 bg-gray-200" />
          <span className="w-6 h-6 rounded-full bg-nowork-orange text-white text-xs flex items-center justify-center font-bold">2</span>
          <div className="flex-1 h-0.5 bg-gray-200" />
          <span className="w-6 h-6 rounded-full bg-gray-200 text-gray-400 text-xs flex items-center justify-center font-bold">3</span>
        </div>

        <div className="mb-1 text-xs font-bold text-nowork-orange uppercase tracking-widest">
          {isEmail ? "Email Challenge" : "Web App"}
        </div>
        <h1 className="text-2xl font-bold text-nowork-black mb-2">
          Aktivace přístupu
        </h1>
        <p className="text-sm text-gray-500 mb-8">
          {isEmail
            ? "Zadej email, kam ti budeme posílat každodenní výzvy."
            : "Zadej email pro přihlášení do web challenge. Den 0 se spustí ihned."}
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmailState(e.target.value)}
            placeholder="tvůj@email.cz"
            className="w-full px-4 py-3 rounded-lg border border-gray-300 text-nowork-black placeholder-gray-400 focus:outline-none focus:border-nowork-orange text-sm"
          />
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-nowork-orange text-white font-semibold px-6 py-3 rounded-lg hover:bg-orange-500 transition-colors text-sm disabled:opacity-60"
          >
            {loading ? "..." : isEmail ? "Spustit email challenge →" : "Vstoupit do challenge →"}
          </button>
        </form>

        <p className="text-xs text-gray-400 mt-4 text-center">
          {isEmail
            ? "Day 0 přijde dnes. Každý den ve stejnou dobu jedna výzva."
            : "Den 0 se odemkne ihned. Každý následující den automaticky jeden nový."}
        </p>
      </div>
    </main>
  );
}

export default function ActivatePage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <Suspense fallback={
        <div className="flex-1 flex items-center justify-center">
          <div className="w-8 h-8 border-2 border-nowork-orange border-t-transparent rounded-full animate-spin" />
        </div>
      }>
        <ActivateContent />
      </Suspense>
    </div>
  );
}
