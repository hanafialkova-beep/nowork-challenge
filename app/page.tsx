import Navbar from "@/components/Navbar";
import Link from "next/link";

export default function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />

      {/* Hero */}
      <main className="flex-1 flex flex-col items-center px-6 py-16 text-center">
        <div className="max-w-3xl mx-auto w-full">

          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-nowork-black text-nowork-orange text-xs font-bold tracking-widest uppercase px-4 py-2 rounded-full mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-nowork-orange animate-pulse" />
            28 Day Challenge
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-nowork-black leading-tight tracking-tight mb-6">
            Tohle není AI challenge.
            <br />
            <span className="text-nowork-orange">Tohle je upgrade</span>
            <br />
            způsobu práce.
          </h1>

          {/* Subheadline */}
          <p className="text-lg text-gray-500 mb-4 max-w-xl mx-auto leading-relaxed">
            28 dní. 5–7 minut denně. Každý den jeden praktický krok, který ti opravdu ulehčí práci s AI.
          </p>

          <div className="flex flex-wrap justify-center gap-3 mb-14 text-sm">
            {["Bez teorie", "Bez složitosti", "Jen praxe"].map((f) => (
              <span key={f} className="bg-gray-100 text-gray-600 px-4 py-1.5 rounded-full">
                {f}
              </span>
            ))}
          </div>

          {/* Product cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-16 text-left max-w-2xl mx-auto">

            {/* Email variant */}
            <div className="flex flex-col border-2 border-gray-200 rounded-2xl p-7 hover:border-nowork-orange transition-colors">
              <div className="text-3xl mb-4">✉️</div>
              <h2 className="text-xl font-bold text-nowork-black mb-2">Email Challenge</h2>
              <p className="text-sm text-gray-500 mb-5 leading-relaxed">
                Každý den ti přijde jeden email s výzvou. Otevři, přečti, udělej. Žádná appka, žádné přihlašování.
              </p>
              <ul className="text-sm text-gray-600 space-y-2 mb-7 flex-1">
                {[
                  "Jeden email denně, ve stejnou dobu",
                  "28 dní, automaticky",
                  "Funguje odkudkoliv",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="text-nowork-orange font-bold mt-0.5">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
              {/* CTA — odkaz na platbu vyplníš dle svého platebního systému */}
              <a
                href="#email-koupit"
                className="block text-center bg-nowork-black text-white font-semibold px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors text-sm"
              >
                Chci dostávat emaily →
              </a>
            </div>

            {/* Web App variant */}
            <div className="flex flex-col border-2 border-nowork-orange rounded-2xl p-7 relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-nowork-orange text-white text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-full">
                Doporučujeme
              </div>
              <div className="text-3xl mb-4">💻</div>
              <h2 className="text-xl font-bold text-nowork-black mb-2">Web App</h2>
              <p className="text-sm text-gray-500 mb-5 leading-relaxed">
                Přihlásíš se na webu a každý den se ti zpřístupní jedna výzva. Vše přehledně na jednom místě.
              </p>
              <ul className="text-sm text-gray-600 space-y-2 mb-7 flex-1">
                {[
                  "Den po dni, automaticky",
                  "Výzvy přehledně na webu",
                  "Postupuje s tebou",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="text-nowork-orange font-bold mt-0.5">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
              {/* CTA — odkaz na platbu vyplníš dle svého platebního systému */}
              <a
                href="#app-koupit"
                className="block text-center bg-nowork-orange text-white font-semibold px-6 py-3 rounded-lg hover:bg-orange-500 transition-colors text-sm"
              >
                Chci web přístup →
              </a>
            </div>
          </div>

          {/* How it works */}
          <div className="text-left max-w-2xl mx-auto mb-16">
            <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest text-center mb-8">Jak to funguje</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {[
                { step: "1", title: "Zaplať a aktivuj", desc: "Po platbě zadáš email a spustí se challenge." },
                { step: "2", title: "Každý den jedna výzva", desc: "Den 0 hned, pak každý den automaticky jedna nová." },
                { step: "3", title: "5–7 minut stačí", desc: "Krátký koncept + mini úkol. Nic víc, nic míň." },
              ].map((s) => (
                <div key={s.step} className="flex gap-4">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-nowork-orange text-white text-sm font-bold flex items-center justify-center">
                    {s.step}
                  </span>
                  <div>
                    <p className="font-semibold text-nowork-black text-sm mb-1">{s.title}</p>
                    <p className="text-sm text-gray-500">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </main>

      {/* Stats footer */}
      <section className="bg-nowork-black py-12 px-6">
        <div className="max-w-2xl mx-auto grid grid-cols-3 gap-8 text-center">
          {[
            { value: "28", label: "dní" },
            { value: "5–7", label: "minut denně" },
            { value: "1", label: "posun za den" },
          ].map((stat) => (
            <div key={stat.label}>
              <p className="text-3xl font-extrabold text-nowork-orange mb-1">{stat.value}</p>
              <p className="text-sm text-gray-500">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
