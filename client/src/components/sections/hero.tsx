import { ArrowRight, Shield, Users, Star, ChevronDown } from "lucide-react";
import { useInView } from "@/hooks/use-in-view";

const WA_URL =
  "https://api.whatsapp.com/send?phone=5548988644120&text=Olá! Gostaria de agendar uma avaliação personalizada do Programa Digital de estabilização da SEPB";

const stats = [
  { value: "+500", label: "Pacientes atendidos" },
  { value: "70%", label: "Da população tem SEPB" },
  { value: "5", label: "Etapas do protocolo" },
];

const factors = [
  "Alimentação",
  "Refluxo gástrico",
  "Stress e ansiedade",
  "Atividade física",
  "Medicamentos",
  "Qualidade do sono",
  "Substâncias",
  "Estilo de vida",
];

export default function Hero() {
  const { ref, inView } = useInView(0.05);

  const scrollToQuiz = () => {
    document.getElementById("quiz")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      className="relative min-h-screen flex flex-col overflow-hidden"
      style={{
        background: `
          radial-gradient(circle, rgba(0,191,165,0.10) 1px, transparent 1px) 0 0 / 32px 32px,
          linear-gradient(135deg, #0A1628 0%, #0F2040 60%, #0B2545 100%)
        `,
      }}
    >
      {/* Glow blobs */}
      <div
        className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full opacity-10 pointer-events-none"
        style={{
          background: "radial-gradient(circle, var(--teal) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />
      <div
        className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full opacity-8 pointer-events-none"
        style={{
          background: "radial-gradient(circle, #0048ff 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
      />

      <div className="container-xl flex-1 flex items-center pt-20 pb-12 sm:pt-24 sm:pb-16">
        <div ref={ref} className="grid lg:grid-cols-2 gap-6 lg:gap-16 items-center w-full">
          {/* Left column */}
          <div
            className={`space-y-8 transition-all duration-700 ${
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-teal/30 bg-teal/10">
              <Shield className="h-4 w-4 text-teal" style={{ color: "var(--teal)" }} />
              <span
                className="text-xs sm:text-sm font-semibold text-teal"
                style={{ fontFamily: "Poppins, sans-serif", color: "var(--teal)" }}
              >
                Protocolo SEPB-Digital® Exclusivo
              </span>
            </div>

            {/* Headline */}
            <div>
              <h1
                className="heading-xl text-white mb-4"
                style={{ fontFamily: "Poppins, sans-serif" }}
              >
                Seus dentes estão{" "}
                <span className="gradient-text">envelhecendo</span>{" "}
                mais rápido que você?
              </h1>
              <p className="text-gray-300 text-base sm:text-lg leading-relaxed max-w-lg">
                Descubra a SEPB — Síndrome do Envelhecimento Precoce Bucal — e como você pode
                controlar o desgaste dos seus dentes antes que seja tarde demais.
              </p>
            </div>

            {/* Factors grid */}
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <p
                className="text-xs font-semibold uppercase tracking-widest mb-3"
                style={{ color: "var(--teal)", fontFamily: "Poppins, sans-serif" }}
              >
                Fatores relacionados à SEPB
              </p>
              <div className="grid grid-cols-2 gap-y-2 gap-x-4">
                {factors.map((f) => (
                  <div key={f} className="flex items-center gap-2 text-sm text-gray-300">
                    <div
                      className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                      style={{ background: "var(--teal)" }}
                    />
                    {f}
                  </div>
                ))}
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3">
              <button className="btn-teal" onClick={scrollToQuiz}>
                Descubra seu Índice de Risco
                <ArrowRight className="h-4 w-4" />
              </button>
              <button className="btn-outline-white" onClick={() => window.open(WA_URL, "_blank")}>
                Agendar Avaliação
              </button>
            </div>

            {/* Trust stats */}
            <div className="flex flex-wrap gap-6 pt-2">
              {stats.map((s) => (
                <div key={s.label} className="flex items-center gap-3">
                  <div>
                    <div
                      className="text-xl font-bold gradient-text"
                      style={{ fontFamily: "Poppins, sans-serif" }}
                    >
                      {s.value}
                    </div>
                    <div className="text-xs text-gray-400">{s.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right column — video */}
          <div
            className={`relative mt-6 lg:mt-0 transition-all duration-700 delay-300 ${
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            {/* Outer glow frame */}
            <div
              className="relative rounded-2xl p-1"
              style={{
                background: "linear-gradient(135deg, rgba(0,191,165,0.6) 0%, rgba(0,64,128,0.4) 100%)",
              }}
            >
              <div className="rounded-2xl overflow-hidden bg-black">
                <video
                  src="/video de consientizacao da SEPB.mp4"
                  controls
                  preload="metadata"
                  className="w-full h-auto rounded-xl"
                  style={{ maxHeight: "clamp(240px, 80vw, 520px)", objectFit: "cover" }}
                >
                  Seu navegador não suporta vídeo.
                </video>
              </div>
            </div>

            {/* Floating badge — top right */}
            <div className="animate-float absolute -top-4 -right-4 hidden sm:flex items-center gap-2 bg-white rounded-2xl px-4 py-3 shadow-2xl">
              <div
                className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0"
                style={{ background: "var(--teal)" }}
              >
                <Shield className="h-4 w-4 text-white" />
              </div>
              <div>
                <div
                  className="text-xs font-bold text-gray-900"
                  style={{ fontFamily: "Poppins, sans-serif" }}
                >
                  Protocolo Exclusivo
                </div>
                <div className="text-xs text-gray-500">SEPB-Digital®</div>
              </div>
            </div>

            {/* Floating badge — bottom left */}
            <div className="absolute -bottom-4 -left-4 hidden sm:flex items-center gap-3 bg-white rounded-2xl px-4 py-3 shadow-2xl">
              <div
                className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0"
                style={{ background: "linear-gradient(135deg, #fbbf24, #f59e0b)" }}
              >
                <Users className="h-4 w-4 text-white" />
              </div>
              <div>
                <div
                  className="text-xs font-bold text-gray-900"
                  style={{ fontFamily: "Poppins, sans-serif" }}
                >
                  +500 pacientes
                </div>
                <div className="flex gap-0.5">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="flex justify-center pb-8">
        <button
          onClick={scrollToQuiz}
          className="flex flex-col items-center gap-1 text-white/40 hover:text-white/70 transition-colors"
        >
          <span className="text-xs" style={{ fontFamily: "Poppins, sans-serif" }}>
            Descubra seu risco
          </span>
          <ChevronDown className="h-5 w-5 animate-bounce" />
        </button>
      </div>
    </section>
  );
}
