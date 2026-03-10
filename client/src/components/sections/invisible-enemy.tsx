import { AlertTriangle, RefreshCw, Clock, Eye, ArrowRight } from "lucide-react";
import { useInView } from "@/hooks/use-in-view";

const enemies = [
  {
    icon: AlertTriangle,
    title: "A SEPB",
    description:
      "Condição silenciosa que, sem prevenção correta, destrói a estrutura dental e compromete o sorriso no longo prazo.",
  },
  {
    icon: RefreshCw,
    title: "Restauração Infinita",
    description:
      "Restaurações sem investigar a origem do desgaste, criando um ciclo interminável de tratamentos.",
  },
  {
    icon: Clock,
    title: "Cultura do Remendo Rápido",
    description:
      "Foco no alívio imediato, ignorando a causa real e permitindo que o problema avance silenciosamente.",
  },
  {
    icon: Eye,
    title: "O Silêncio Conveniente",
    description:
      "Sinais de desgaste ignorados por falta de preparo. Enquanto isso, o tempo trabalha contra a saúde dos seus dentes.",
  },
];

export default function InvisibleEnemy() {
  const { ref, inView } = useInView();

  return (
    <section className="section-dark relative overflow-hidden" style={{ background: "#0A1628" }}>
      {/* Decorative blob */}
      <div
        className="absolute top-0 right-0 w-[600px] h-[600px] opacity-5 pointer-events-none"
        style={{
          background: "radial-gradient(circle, var(--teal) 0%, transparent 70%)",
          filter: "blur(80px)",
          transform: "translate(30%, -30%)",
        }}
      />

      <div className="container-xl relative z-10">
        <div ref={ref}>
          {/* Header */}
          <div
            className={`text-center max-w-2xl mx-auto mb-16 transition-all duration-700 ${
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <p className="section-label mb-3">O Problema</p>
            <h2 className="heading-lg text-white mb-4">
              O vilão silencioso que{" "}
              <span className="gradient-text">poucos conhecem</span>
            </h2>
            <p className="text-gray-400 text-base sm:text-lg leading-relaxed">
              Você cuida da higiene, vai ao dentista e mesmo assim sente seus dentes desgastando?
              A SEPB ameaça seu sorriso todos os dias — e a maioria das pessoas não sabe que ela
              existe.
            </p>
          </div>

          {/* Big stat */}
          <div
            className={`flex justify-center mb-16 transition-all duration-700 delay-200 ${
              inView ? "opacity-100 scale-100" : "opacity-0 scale-90"
            }`}
          >
            <div
              className="card-glass p-6 sm:p-10 text-center rounded-3xl"
              style={{ borderColor: "rgba(0,191,165,0.25)" }}
            >
              <div
                className="heading-xl gradient-text mb-2"
                style={{ fontSize: "clamp(2.5rem, 10vw, 7rem)", lineHeight: 1 }}
              >
                70%
              </div>
              <p
                className="text-white/80 text-base sm:text-lg"
                style={{ fontFamily: "Poppins, sans-serif" }}
              >
                das pessoas tem ou vão desenvolver a SEPB
              </p>
            </div>
          </div>

          {/* Enemy cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
            {enemies.map((enemy, i) => (
              <div
                key={i}
                className={`card-glass p-6 rounded-2xl transition-all duration-700 hover:border-teal/40 ${
                  inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${i * 100 + 300}ms` }}
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                  style={{ background: "rgba(0,191,165,0.15)" }}
                >
                  <enemy.icon className="h-5 w-5" style={{ color: "var(--teal)" }} />
                </div>
                <h3
                  className="text-white font-semibold mb-2 text-sm"
                  style={{ fontFamily: "Poppins, sans-serif" }}
                >
                  {enemy.title}
                </h3>
                <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                  {enemy.description}
                </p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div
            className={`flex justify-center transition-all duration-700 delay-700 ${
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <button
              className="btn-teal"
              onClick={() =>
                document.getElementById("quiz")?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Veja se você está em risco
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
