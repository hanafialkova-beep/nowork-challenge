"use client";

export type Lang = "cz" | "en";

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

export function setEmail(email: string) {
  localStorage.setItem("nowork_email", email);
  if (!localStorage.getItem("nowork_start_date")) {
    localStorage.setItem("nowork_start_date", new Date().toISOString());
  }
}

export function clearSession() {
  localStorage.removeItem("nowork_email");
  localStorage.removeItem("nowork_start_date");
}

export function getUnlockedDays(): number {
  if (typeof window === "undefined") return 0;
  const startStr = localStorage.getItem("nowork_start_date");
  if (!startStr) return 0;
  const start = new Date(startStr);
  const now = new Date();
  const diffDays = Math.floor((now.getTime() - start.getTime()) / (1000 * 60 * 60 * 24));
  return Math.min(diffDays + 1, 28); // Day 0 always unlocked on start
}

export function isDayUnlocked(day: number): boolean {
  if (typeof window === "undefined") return false;
  // Demo mode: all unlocked
  if (new URLSearchParams(window.location.search).get("demo") === "1") return true;
  return day <= getUnlockedDays();
}
