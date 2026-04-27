"use client";

import { useState } from "react";
import Link from "next/link";

type Version = "basic" | "advanced";

const versions = {
  basic: {
    label: "Basic",
    badge: "Začínám",
    tagline: "Od nuly k prvním výsledkům",
    description: "Ideální start pro každého, kdo chce začít AI používat prakticky – bez přehlcení, bez technického žargonu.",
    highlights: [
      "Mindset: AI jako leverage, ne jen rychlost",
      "Prompting: jak psát zadání, která fungují",
      "Návyky: první šablony a mini workflow",
      "Systém: základ, na který se dá stavět",
    ],
    forWho: "Pro každého, kdo s AI teprve začíná nebo ji zatím nepoužívá systematicky.",
    email: {
      features: ["Jeden email denně, ve stejnou dobu", "30 dní, automaticky", "Funguje odkudkoliv"],
      cta: "Chci Basic emaily →",
      href: "https://DOPLNIT-PLATEBNI-LINK-BASIC-EMAIL",
    },
    app: {
      features: ["Den po dni, automaticky", "Výzvy přehledně na webu", "Postupuje s tebou"],
      cta: "Chci Basic web přístup →",
      href: "https://DOPLNIT-PLATEBNI-LINK-BASIC-APP",
    },
    demoHref: "/challenge?demo=1&version=basic",
  },
  advanced: {
    label: "Advanced",
    badge: "Jdu dál",
    tagline: "Systémy, workflows a leverage",
    description: "Pro ty, kdo základy mají. Jde hlouběji – 3C framework, PACT, Superpowers a budování AI systémů.",
    highlights: [
      "3C framework: Capture, Clean, Connect",
      "PACT: Projects, Agents, Context, Tools",
      "Superpowers: 5 oblastí, kde AI mění způsob práce",
      "Systém: AI adoption v týmu i pro sebe",
    ],
    forWho: "Pro ty, kdo základy ovládají a chtějí budovat systémy a workflows, ne jen zrychlovat úkoly.",
    email: {
      features: ["Jeden email denně, ve stejnou dobu", "30 dní, automaticky", "Funguje odkudkoliv"],
      cta: "Chci Advanced emaily →",
      href: "https://DOPLNIT-PLATEBNI-LINK-ADVANCED-EMAIL",
    },
    app: {
      features: ["Den po dni, automaticky", "Výzvy přehledně na webu", "Postupuje s tebou"],
      cta: "Chci Advanced web přístup →",
      href: "https://DOPLNIT-PLATEBNI-LINK-ADVANCED-APP",
    },
    demoHref: "/challenge?demo=1&version=advanced",
  },
};

export default function ProductSection() {
  const [version, setVersion] = useState<Version>("basic");
  const v = versions[version];

  return (
    <div className="w-full max-w-2xl mx-auto">

      {/* Version toggle */}
      <div className="flex justify-center mb-8">
        <div className="inline-flex bg-gray-100 rounded-xl p-1 gap-1">
          {(["basic", "advanced"] as Version[]).map((key) => (
            <button
              key={key}
              onClick={() => setVersion(key)}
              className={`px-6 py-2.5 rounded-lg text-sm font-semibold transition-all ${
                version === key
                  ? "bg-nowork-black text-white shadow-sm"
                  : "text-gray-500 hover:text-nowork-black"
              }`}
            >
              {versions[key].label}
            </button>
          ))}
        </div>
      </div>

      {/* Version description */}
      <div className="text-center mb-10">
        <span className="inline-block bg-nowork-orange/10 text-nowork-orange text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-full mb-3">
          {v.tagline}
        </span>
        <p className="text-sm text-gray-500 max-w-md mx-auto leading-relaxed">{v.description}</p>
        <p className="text-xs text-gray-400 mt-2 italic">{v.forWho}</p>

        {/* Highlights */}
        <div className="flex flex-wrap justify-center gap-2 mt-4">
          {v.highlights.map((h) => (
            <span key={h} className="bg-gray-50 border border-gray-200 text-gray-600 text-xs px-3 py-1 rounded-full">
              {h}
            </span>
          ))}
        </div>
      </div>

      {/* Product cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8 text-left">

        {/* Email variant */}
        <div className="flex flex-col border-2 border-nowork-orange rounded-2xl p-7 relative">
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-nowork-orange text-white text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-full whitespace-nowrap">
            Doporučujeme
          </div>
          <div className="text-3xl mb-4">✉️</div>
          <h2 className="text-xl font-bold text-nowork-black mb-2">Email Challenge</h2>
          <p className="text-sm text-gray-500 mb-5 leading-relaxed">
            Každý den ti přijde jeden email s výzvou. Otevři, přečti, udělej. Žádná appka, žádné přihlašování.
          </p>
          <ul className="text-sm text-gray-600 space-y-2 mb-7 flex-1">
            {v.email.features.map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="text-nowork-orange font-bold mt-0.5">✓</span>
                {item}
              </li>
            ))}
          </ul>
          <a
            href={v.email.href}
            className="block text-center bg-nowork-black text-white font-semibold px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors text-sm"
          >
            {v.email.cta}
          </a>
        </div>

        {/* Web App variant */}
        <div className="flex flex-col border-2 border-gray-200 rounded-2xl p-7 hover:border-nowork-orange transition-colors">
          <div className="text-3xl mb-4">💻</div>
          <h2 className="text-xl font-bold text-nowork-black mb-2">Web App</h2>
          <p className="text-sm text-gray-500 mb-5 leading-relaxed">
            Přihlásíš se na webu a každý den se ti zpřístupní jedna výzva. Vše přehledně na jednom místě.
          </p>
          <ul className="text-sm text-gray-600 space-y-2 mb-7 flex-1">
            {v.app.features.map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="text-nowork-orange font-bold mt-0.5">✓</span>
                {item}
              </li>
            ))}
          </ul>
          <a
            href={v.app.href}
            className="block text-center bg-nowork-orange text-white font-semibold px-6 py-3 rounded-lg hover:bg-orange-500 transition-colors text-sm"
          >
            {v.app.cta}
          </a>
        </div>
      </div>

      {/* Demo link */}
      <div className="text-center">
        <Link
          href={v.demoHref}
          className="text-sm text-gray-400 hover:text-nowork-orange underline underline-offset-4 transition-colors"
        >
          Chci se nejdřív podívat na obsah →
        </Link>
      </div>

    </div>
  );
}
