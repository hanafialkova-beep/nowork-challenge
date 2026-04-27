import Navbar from "@/components/Navbar";
import ProductSection from "@/components/ProductSection";

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
            30 Day Challenge
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
            30 dní. 5–7 minut denně. Dvě úrovně – vyber si tu svoji a začni se posouvat.
          </p>

          <div className="flex flex-wrap justify-center gap-3 mb-14 text-sm">
            {["Bez zbytečné teorie", "Bez složitosti", "Jen praxe"].map((f) => (
              <span key={f} className="bg-gray-100 text-gray-600 px-4 py-1.5 rounded-full">
                {f}
              </span>
            ))}
          </div>

          {/* Product section — version selector + product cards */}
          <div className="mb-16">
            <ProductSection />
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
            { value: "30", label: "dní" },
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
