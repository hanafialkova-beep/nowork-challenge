import Link from "next/link";
import type { ChallengeDay } from "@/lib/types";

interface DayContentProps {
  day: ChallengeDay;
  lang: string;
  demo?: boolean;
  version?: string;
  totalDays?: number;
}

export default function DayContent({ day, lang, demo, version, totalDays = 30 }: DayContentProps) {
  const demoParam = demo ? `?demo=1${version ? `&version=${version}` : ""}` : "";
  const prevDay = day.day > 0 ? day.day - 1 : null;
  const nextDay = day.day < totalDays ? day.day + 1 : null;

  return (
    <article className="max-w-2xl mx-auto">
      {/* Day badge */}
      <div className="mb-6">
        <span className="inline-block bg-nowork-black text-nowork-orange text-xs font-bold tracking-widest uppercase px-3 py-1.5 rounded-md">
          Day {day.day} · 30 Day Challenge
        </span>
      </div>

      {/* Title */}
      <h1 className="text-3xl sm:text-4xl font-bold text-nowork-black leading-tight mb-8 tracking-tight">
        {day.title}
      </h1>

      {/* Teze — core insight of the day */}
      {day.teze && (
        <p className="text-lg font-semibold text-nowork-black leading-snug mb-6 border-l-4 border-nowork-orange pl-4">
          {day.teze}
        </p>
      )}

      {/* Concept */}
      <div className="day-content mb-8">
        {day.concept.map((item, i) =>
          Array.isArray(item) ? (
            <ul key={i} className="list-disc pl-6 space-y-1.5 my-3">
              {item.map((li, j) => (
                <li key={j} className="text-gray-700">{li}</li>
              ))}
            </ul>
          ) : (
            <p key={i}>{item}</p>
          )
        )}
      </div>

      {/* Divider */}
      <hr className="border-gray-200 mb-8" />

      {/* Task box */}
      <div className="border-2 border-nowork-orange rounded-xl overflow-hidden mb-8">
        <div className="bg-nowork-orange px-6 py-3 flex items-center gap-2">
          <span className="text-white text-xs font-bold tracking-widest uppercase">
            ✅ {lang === "cz" ? "Dnešní mini úkol" : "Today's mini task"}
          </span>
        </div>
        <div className="bg-gray-50 p-6">
        <p className="text-sm text-gray-700 mb-3 font-medium">{day.taskIntro}</p>
        {day.taskType === "ul" && day.taskItems.length > 0 && (
          <ul className="list-disc pl-5 space-y-1.5">
            {day.taskItems.map((item, i) => (
              <li key={i} className="text-sm text-gray-600">{item}</li>
            ))}
          </ul>
        )}
        {day.taskType === "ol" && day.taskItems.length > 0 && (
          <ol className="list-decimal pl-5 space-y-1.5">
            {day.taskItems.map((item, i) => (
              <li key={i} className="text-sm text-gray-600">{item}</li>
            ))}
          </ol>
        )}

        {/* Copyable prompt */}
        {day.taskPrompt && (
          <div className="mt-5">
            <p className="text-xs font-bold tracking-widest text-nowork-orange uppercase mb-2">
              {lang === "cz" ? "💬 Zkopíruj a uprav v AI" : "💬 Copy and edit in AI"}
            </p>
            <pre className="bg-white border border-gray-200 rounded-lg p-4 text-xs text-gray-700 whitespace-pre-wrap leading-relaxed font-mono overflow-x-auto">
              {day.taskPrompt}
            </pre>
          </div>
        )}

        {/* Fallback example */}
        {day.taskFallback && (
          <div className="mt-5 rounded-lg border border-dashed border-gray-300 p-4">
            <p className="text-xs font-bold tracking-widest text-gray-400 uppercase mb-2">
              {lang === "cz" ? "💡 Pokud tě nic nenapadá, zkus tohle" : "💡 If you're stuck, try this"}
            </p>
            <pre className="text-xs text-gray-600 whitespace-pre-wrap leading-relaxed font-mono">
              {day.taskFallback}
            </pre>
          </div>
        )}

        {/* Sample output */}
        {day.taskExample && (
          <div className="mt-4 rounded-lg border border-gray-200 bg-white p-4">
            <p className="text-xs font-bold tracking-widest text-gray-400 uppercase mb-2">
              {lang === "cz" ? "📋 Takhle může výsledek vypadat" : "📋 What the result looks like"}
            </p>
            <pre className="text-xs text-gray-600 whitespace-pre-wrap leading-relaxed font-mono">
              {day.taskExample}
            </pre>
          </div>
        )}

        {/* Where to record tip */}
        {day.taskTip && (
          <p className="mt-4 text-xs text-gray-400 italic">
            📝 {day.taskTip}
          </p>
        )}
        </div>
      </div>

      {/* Teaser */}
      {day.teaser && (
        <div className="bg-nowork-black rounded-xl p-5 mb-8">
          <p className="text-xs font-bold tracking-widest text-gray-500 uppercase mb-2">
            {lang === "cz" ? "Zítra" : "Tomorrow"}
          </p>
          <p className="text-sm text-gray-300 leading-relaxed">{day.teaser}</p>
        </div>
      )}

      {/* Completed day */}
      {!day.teaser && (
        <div className="bg-nowork-orange rounded-xl p-5 mb-8 text-center">
          <p className="text-white font-bold text-lg mb-1">
            {lang === "cz" ? "🎉 Challenge dokončena!" : "🎉 Challenge complete!"}
          </p>
          <p className="text-red-100 text-sm">
            {lang === "cz"
              ? "Gratulujeme. Tohle byl upgrade způsobu práce."
              : "Congratulations. This was an upgrade to how you work."}
          </p>
        </div>
      )}

      {/* Navigation */}
      <div className="flex items-center justify-between pt-4 border-t border-gray-200">
        {prevDay !== null ? (
          <Link
            href={`/challenge/${prevDay}${demoParam}`}
            className="flex items-center gap-2 text-sm text-gray-500 hover:text-nowork-black transition-colors"
          >
            ← Day {prevDay}
          </Link>
        ) : (
          <Link
            href={`/challenge${demoParam}`}
            className="flex items-center gap-2 text-sm text-gray-500 hover:text-nowork-black transition-colors"
          >
            ← {lang === "cz" ? "Přehled" : "Overview"}
          </Link>
        )}

        {nextDay !== null ? (
          <Link
            href={`/challenge/${nextDay}${demoParam}`}
            className="flex items-center gap-2 text-sm font-semibold text-nowork-orange hover:text-red-500 transition-colors"
          >
            Day {nextDay} →
          </Link>
        ) : (
          <Link
            href={`/challenge${demoParam}`}
            className="text-sm text-gray-500 hover:text-nowork-black transition-colors"
          >
            {lang === "cz" ? "Přehled →" : "Overview →"}
          </Link>
        )}
      </div>
    </article>
  );
}
