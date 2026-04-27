"use client";

export type Lang = "cz" | "en";
export type Variant = "email" | "app";
export type Level = "basic" | "advanced";
export const TOTAL_CHALLENGE_DAYS = 30;

export function getLang(): Lang {
  if (typeof window === "undefined") return "cz";
  return (localStorage.getItem("nowork_lang") as Lang) ?? "cz";
}

export function setLang(lang: Lang) {
  localStorage.setItem("nowork_lang", lang);
}

export function getEmail(): string | null {
  if (typeof window === "undefined") return null;
  return localStorage.getItem("nowork_email");
}

export function getVariant(): Variant | null {
  if (typeof window === "undefined") return null;
  return localStorage.getItem("nowork_variant") as Variant | null;
}

export function getLevel(): Level {
  if (typeof window === "undefined") return "basic";
  return (localStorage.getItem("nowork_level") as Level) ?? "basic";
}

export function setLevel(level: Level) {
  localStorage.setItem("nowork_level", level);
}

/** Called after successful payment — sets email, variant, level, and start date */
export function activateAccess(email: string, variant: Variant, level: Level = "basic") {
  localStorage.setItem("nowork_email", email);
  localStorage.setItem("nowork_variant", variant);
  localStorage.setItem("nowork_level", level);
  if (!localStorage.getItem("nowork_start_date")) {
    localStorage.setItem("nowork_start_date", new Date().toISOString());
  }
}

export function clearSession() {
  localStorage.removeItem("nowork_email");
  localStorage.removeItem("nowork_variant");
  localStorage.removeItem("nowork_level");
  localStorage.removeItem("nowork_start_date");
}

export function getUnlockedDays(): number {
  if (typeof window === "undefined") return 0;
  const startStr = localStorage.getItem("nowork_start_date");
  if (!startStr) return 0;
  const start = new Date(startStr);
  const now = new Date();
  const diffDays = Math.floor((now.getTime() - start.getTime()) / (1000 * 60 * 60 * 24));
  return Math.min(diffDays + 1, TOTAL_CHALLENGE_DAYS); // Day 0 always unlocked on activation day
}

export function isDayUnlocked(day: number): boolean {
  if (typeof window === "undefined") return false;
  // Demo mode for internal testing only
  if (new URLSearchParams(window.location.search).get("demo") === "1") return true;
  return day <= getUnlockedDays();
}

// Legacy compat — used by old RegistrationForm
export function setEmail(email: string) {
  activateAccess(email, "app");
}
