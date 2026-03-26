"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { setEmail, getLang } from "@/lib/utils";

export default function RegistrationForm() {
  const [email, setEmailState] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const lang = getLang();

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email.trim()) return;
    setLoading(true);
    setEmail(email.trim());
    setTimeout(() => router.push("/challenge?demo=1"), 300);
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 w-full max-w-md">
      <input
        type="email"
        required
        value={email}
        onChange={(e) => setEmailState(e.target.value)}
        placeholder={lang === "cz" ? "tvůj@email.cz" : "your@email.com"}
        className="flex-1 px-4 py-3 rounded-lg bg-nowork-dark border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:border-nowork-orange text-sm"
      />
      <button
        type="submit"
        disabled={loading}
        className="bg-nowork-orange text-white font-semibold px-6 py-3 rounded-lg hover:bg-orange-500 transition-colors text-sm disabled:opacity-60 whitespace-nowrap"
      >
        {loading
          ? "..."
          : lang === "cz"
          ? "Začít challenge →"
          : "Start challenge →"}
      </button>
    </form>
  );
}
