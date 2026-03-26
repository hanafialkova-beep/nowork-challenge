"use client";

import { Suspense, useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Navbar from "@/components/Navbar";
import DayCard from "@/components/DayCard";
import { getEmail, getLang, getUnlockedDays } from "@/lib/utils";
import { challengeDataCZ } from "@/lib/challenge-data-cz";
import { challengeDataEN } from "@/lib/challenge-data-en";
import type { ChallengeDay } from "@/lib/types";

function ChallengeContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const demo = searchParams.get("demo") === "1";

  const [data, setData] = useState<ChallengeDay[]>([]);
  const [unlockedDays, setUnlockedDays] = useState(0);
  const [lang, setLangState] = useState("cz");

  useEffect(() => {
    const email = getEmail();
    if (!email) {
      router.push("/");
      return;
    }
    const l = getLang();
    setLangState(l);
    setData(l === "cz" ? challengeDataCZ : challengeDataEN);
    setUnlockedDays(demo ? 28 : getUnlockedDays());
  }, [router, demo]);

  const labels = lang === "cz"
    ? { title: "28 Day Challenge", sub: "Vyber den a pokračuj v challenge.", days: "dní" }
    : { title: "28 Day Challenge", sub: "Pick a day and continue your challenge.", days: "days" };

  const progressPct = Math.round((Math.min(unlockedDays, 28) / 28) * 100);

  return (
    <main className="flex-1 px-6 py-12 max-w-5xl mx-auto w-full">
      <div className="mb-10">
        <h1 className="text-3xl font-extrabold text-nowork-black tracking-tight mb-2">{labels.title}</h1>
        <p className="text-gray-500 text-sm mb-6">{labels.sub}</p>
        <div className="flex items-center gap-3">
          <div className="flex-1 bg-gray-200 rounded-full h-2">
            <div className="bg-nowork-orange h-2 rounded-full transition-all" style={{ width: `${progressPct}%` }} />
          </div>
          <span className="text-xs font-semibold text-gray-500 whitespace-nowrap">
            {Math.min(unlockedDays, 28)}/28 {labels.days}
          </span>
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {data.map((day) => (
          <DayCard key={day.day} day={day} unlocked={demo || day.day <= unlockedDays} demo={demo} />
        ))}
      </div>

      {demo && (
        <p className="text-center text-xs text-gray-400 mt-8">Demo mode — all days unlocked</p>
      )}
    </main>
  );
}

export default function ChallengePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <Suspense fallback={<div className="flex-1 flex items-center justify-center"><div className="w-8 h-8 border-2 border-nowork-orange border-t-transparent rounded-full animate-spin" /></div>}>
        <ChallengeContent />
      </Suspense>
    </div>
  );
}
