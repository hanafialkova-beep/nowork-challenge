import Link from "next/link";
import type { ChallengeDay } from "@/lib/types";

interface DayCardProps {
  day: ChallengeDay;
  unlocked: boolean;
  demo?: boolean;
  version?: string;
}

export default function DayCard({ day, unlocked, demo, version }: DayCardProps) {
  const demoParams = demo
    ? `?demo=1${version ? `&version=${version}` : ""}`
    : "";
  const href = `/challenge/${day.day}${demoParams}`;

  if (!unlocked) {
    return (
      <div className="bg-white rounded-xl p-5 border border-gray-200 opacity-50 select-none">
        <div className="flex items-start justify-between mb-3">
          <span className="text-xs font-bold tracking-widest text-gray-400 uppercase">
            Day {day.day}
          </span>
          <span className="text-gray-300 text-lg">🔒</span>
        </div>
        <p className="text-sm text-gray-400 line-clamp-2">{day.title}</p>
      </div>
    );
  }

  return (
    <Link href={href} className="group block touch-manipulation">
      <div className="bg-white rounded-xl p-5 border border-gray-200 hover:border-nowork-orange hover:shadow-md transition-all cursor-pointer h-full">
        <div className="flex items-start justify-between mb-3">
          <span className="text-xs font-bold tracking-widest text-nowork-orange uppercase">
            Day {day.day}
          </span>
          <span className="text-gray-300 group-hover:text-nowork-orange transition-colors text-sm">→</span>
        </div>
        <p className="text-sm font-semibold text-nowork-black leading-snug line-clamp-3">
          {day.title}
        </p>
      </div>
    </Link>
  );
}
