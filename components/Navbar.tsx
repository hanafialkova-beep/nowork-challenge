"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { getLang, setLang, type Lang } from "@/lib/utils";

export default function Navbar() {
  const [lang, setLangState] = useState<Lang>("cz");

  useEffect(() => {
    setLangState(getLang());
  }, []);

  function toggleLang() {
    const next: Lang = lang === "cz" ? "en" : "cz";
    setLang(next);
    setLangState(next);
    window.location.reload();
  }

  return (
    <nav className="w-full bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
      <Link href="/" className="flex items-center gap-0">
        <span className="text-red-600 font-bold text-xl tracking-tight">NO</span>
        <span className="text-nowork-black font-bold text-xl tracking-tight">WORK</span>
      </Link>
      <div className="flex items-center gap-4">
        <Link
          href="/challenge"
          className="text-sm text-gray-500 hover:text-nowork-black transition-colors"
        >
          {lang === "cz" ? "Challenge" : "Challenge"}
        </Link>
        <button
          onClick={toggleLang}
          className="text-xs font-semibold border border-gray-300 text-gray-600 hover:border-nowork-orange hover:text-nowork-orange transition-colors px-3 py-1.5 rounded-md"
        >
          {lang === "cz" ? "EN" : "CZ"}
        </button>
      </div>
    </nav>
  );
}
