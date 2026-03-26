import Navbar from "@/components/Navbar";
import RegistrationForm from "@/components/RegistrationForm";

export default function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero */}
      <main className="flex-1 flex flex-col items-center justify-center px-6 py-20 text-center">
        <div className="max-w-2xl mx-auto">
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
          <p className="text-lg text-gray-500 mb-10 max-w-lg mx-auto leading-relaxed">
            28 dní. 5–7 minut denně. Každý den jeden praktický krok, který ti opravdu
            ulehčí práci.
          </p>

          {/* Features */}
          <div className="flex flex-wrap justify-center gap-4 mb-10 text-sm">
            {[
              "Bez teorie",
              "Bez složitosti",
              "Jen praxe",
            ].map((f) => (
              <span
                key={f}
                className="bg-white border border-gray-200 text-gray-600 px-4 py-2 rounded-full"
              >
                {f}
              </span>
            ))}
          </div>

          {/* Form */}
          <div className="flex justify-center">
            <RegistrationForm />
          </div>

          <p className="text-xs text-gray-400 mt-4">
            Zdarma. Bez spamu. Kdykoliv se odhlásíš.
          </p>
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
