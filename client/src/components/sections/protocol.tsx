import { Microscope, TrendingUp, Shield, GraduationCap, ArrowRight } from "lucide-react";
import { useInView } from "@/hooks/use-in-view";

const WA_URL =
  "https://api.whatsapp.com/send?phone=5548988644120&text=Olá! Gostaria de agendar uma avaliação personalizada do Programa Digital de estabilização da SEPB";

const features = [
  {
    icon: Microscope,
    title: "Diagnóstico Digital",
    description: "Tecnologia avançada para mapear e identificar cada detalhe do desgaste dos seus dentes.",
  },
  {
    icon: TrendingUp,
    title: "Registro do Progresso",
    description: "Acompanhe visualmente sua evolução ao longo do tempo com registros comparativos.",
  },
  {
    icon: Shield,
    title: "Proteção Contínua",
    description: "Intervenção preventiva para interromper o desgaste ativo e tratar danos já causados.",
  },
  {
    icon: GraduationCap,
    title: "Autonomia e Educação",
    description: "Aprenda a cuidar da sua saúde bucal e se torne protagonista do seu tratamento.",
  },
];

export default function Protocol() {
  const { ref, inView } = useInView();

  return (
    <section className="section-light" id="protocolo">
      <div className="container-xl">
        <div ref={ref} className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: text */}
          <div
            className={`space-y-8 transition-all duration-700 ${
              inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
            }`}
          >
            <div>
              <p className="section-label mb-3">O Protocolo</p>
              <h2 className="heading-lg text-gray-900 mb-4">
                Programa Digital de{" "}
                <span className="gradient-text">estabilização da SEPB</span>
              </h2>
              <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
                Método exclusivo que combina tecnologia avançada, conhecimento e acompanhamento
                contínuo para diagnosticar, proteger e preservar seus dentes naturais — muito além da
                restauração tradicional.
              </p>
            </div>

            <div className="space-y-4">
              {features.map((feature, i) => (
                <div
                  key={i}
                  className={`card-teal-border p-5 flex items-start gap-4 transition-all duration-500 ${
                    inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
                  }`}
                  style={{ transitionDelay: `${i * 100 + 200}ms` }}
                >
                  <div className="icon-teal-soft">
                    <feature.icon className="h-5 w-5" style={{ color: "var(--teal)" }} />
                  </div>
                  <div>
                    <h3
                      className="font-semibold text-gray-900 mb-1"
                      style={{ fontFamily: "Poppins, sans-serif" }}
                    >
                      {feature.title}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <button className="btn-teal" onClick={() => window.open(WA_URL, "_blank")}>
              Quero Saber Mais
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>

          {/* Right: image */}
          <div
            className={`relative transition-all duration-700 delay-300 ${
              inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
            }`}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=700&q=80"
                alt="Diagnóstico digital odontológico"
                className="w-full h-auto object-cover rounded-2xl"
                style={{ maxHeight: "560px" }}
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-navy/40 to-transparent pointer-events-none" />
            </div>

            {/* Floating card */}
            <div className="absolute -bottom-5 -left-5 hidden sm:block bg-white rounded-2xl p-5 shadow-2xl border border-gray-100">
              <div className="flex items-center gap-3">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center"
                  style={{ background: "linear-gradient(135deg, var(--teal), #009e88)" }}
                >
                  <Shield className="h-6 w-6 text-white" />
                </div>
                <div>
                  <div
                    className="font-bold text-gray-900 text-sm"
                    style={{ fontFamily: "Poppins, sans-serif" }}
                  >
                    SEPB-Digital®
                  </div>
                  <div className="text-xs text-gray-500">Protocolo Exclusivo</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
