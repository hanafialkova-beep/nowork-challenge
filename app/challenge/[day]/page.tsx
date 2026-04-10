"use client";

import { Suspense, useEffect, useState } from "react";
import { useParams, useRouter, useSearchParams } from "next/navigation";
import Navbar from "@/components/Navbar";
import DayContent from "@/components/DayContent";
import { getEmail, getLang, getLevel, isDayUnlocked } from "@/lib/utils";
import { challengeDataBasicCZ } from "@/lib/challenge-data-basic-cz";
import { challengeDataAdvancedCZ } from "@/lib/challenge-data-advanced-cz";
import { challengeDataBasicEN } from "@/lib/challenge-data-basic-en";
import { challengeDataAdvancedEN } from "@/lib/challenge-data-advanced-en";
import type { ChallengeDay } from "@/lib/types";

function DayPageContent() {
  const params = useParams();
  const router = useRouter();
  const searchParams = useSearchParams();
  const demo = searchParams.get("demo") === "1";

  const [day, setDay] = useState<ChallengeDay | null>(null);
  const [lang, setLangState] = useState("cz");
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    const email = getEmail();
    if (!email && !demo) { router.push("/"); return; }
    const l = getLang();
    // In demo mode, prefer the ?version= URL param over localStorage
    const urlVersion = searchParams.get("version");
    const lv = (demo && urlVersion) ? urlVersion : getLevel();
    setLangState(l);
    const dayNum = parseInt(params.day as string, 10);
    if (isNaN(dayNum) || dayNum < 0 || dayNum > 30) { setNotFound(true); return; }
    if (!demo && !isDayUnlocked(dayNum)) { router.push("/challenge"); return; }
    let data;
    if (l === "cz") {
      data = lv === "advanced" ? challengeDataAdvancedCZ : challengeDataBasicCZ;
    } else {
      data = lv === "advanced" ? challengeDataAdvancedEN : challengeDataBasicEN;
    }
    const found = data.find((d) => d.day === dayNum);
    if (!found) { setNotFound(true); return; }
    setDay(found);
  }, [params.day, router, demo, searchParams]);

  if (notFound) return <p className="text-gray-400 text-center py-20">Den nenalezen.</p>;
  if (!day) return <div className="flex justify-center py-20"><div className="w-8 h-8 border-2 border-nowork-orange border-t-transparent rounded-full animate-spin" /></div>;

  const urlVersion = searchParams.get("version") ?? undefined;

  return (
    <main className="flex-1 px-6 py-12 max-w-3xl mx-auto w-full">
      <DayContent day={day} lang={lang} demo={demo} version={urlVersion} />
    </main>
  );
}

export default function DayPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <Suspense fallback={<div className="flex-1 flex items-center justify-center"><div className="w-8 h-8 border-2 border-nowork-orange border-t-transparent rounded-full animate-spin" /></div>}>
        <DayPageContent />
      </Suspense>
    </div>
  );
}
