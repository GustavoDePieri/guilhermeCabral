import { Check, ArrowRight, GraduationCap } from "lucide-react";
import { useInView } from "@/hooks/use-in-view";

const WA_URL =
  "https://api.whatsapp.com/send?phone=5548988644120&text=Olá! Gostaria de agendar uma avaliação personalizada do Programa Digital de estabilização da SEPB";

const credentials = [
  "Especialista em Dentística — Zenith, Florianópolis 2021–2023",
  "Técnicas Avançadas em Restaurações em Resina Composta — Unisul, Tubarão 2019–2020",
  "Imersão em Endodontia Mecanizada Oswaldo — Unisul, Tubarão 2018–2019",
  "Atualização em Endodontia Mecanizada — ADCB Magic School, Florianópolis 2020–2021",
  "Resina Composta Avançada — Ronaldo Hirata 2022",
  "Estética em Função — Marcelo Calamita, Moss Tubarão 2024",
  "Prevenção e Saúde Renovar — André Kimura, Londrina 2024",
  "Prescrição de Canabidiol na Odontologia — Guilherme Martins 2024",
  "Laminados Cerâmicos InMerso — Andre Kimura 2024",
  "Facetas Resinas Composta Técnica Direta-Indireta Chroma — Andre Kimura 2024",
  "Prótese Sobre Implante — Zenith, Florianópolis 2025",
  "Síndrome do Envelhecimento Precoce Bucal — Comunidade PRO, 2025",
];

export default function AboutDoctor() {
  const { ref, inView } = useInView();

  return (
    <section className="section-gray" id="sobre">
      <div className="container-xl">
        <div ref={ref} className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left: photo */}
          <div
            className={`relative transition-all duration-700 ${
              inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
            }`}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/FotoPerfilGuilherme.jpeg"
                alt="Dr. Guilherme Ricardo Cabral dos Santos"
                className="w-full h-auto object-cover rounded-2xl"
                style={{ maxHeight: "640px" }}
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-navy/60 via-transparent to-transparent pointer-events-none rounded-2xl" />
              {/* Name overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3
                  className="text-white font-bold text-xl"
                  style={{ fontFamily: "Poppins, sans-serif" }}
                >
                  Dr. Guilherme Cabral
                </h3>
                <p className="text-teal text-sm" style={{ color: "var(--teal)" }}>
                  Cirurgião-Dentista · Especialista em Dentística
                </p>
              </div>
            </div>

            {/* Floating stat card */}
            <div className="absolute -bottom-6 -right-6 hidden sm:block bg-white rounded-2xl p-5 shadow-2xl">
              <div className="text-center">
                <div
                  className="heading-lg gradient-text"
                  style={{ fontFamily: "Poppins, sans-serif" }}
                >
                  +500
                </div>
                <div className="text-xs text-gray-500 font-medium">Vidas transformadas</div>
              </div>
            </div>
          </div>

          {/* Right: text + credentials */}
          <div
            className={`space-y-8 transition-all duration-700 delay-200 ${
              inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
            }`}
          >
            <div>
              <p className="section-label mb-3">Sobre o Especialista</p>
              <h2 className="heading-lg text-gray-900 mb-6">
                Quem está por trás do{" "}
                <span className="gradient-text">Programa SEPB-Digital®</span>
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Sou Dr. Guilherme Cabral, cirurgião-dentista especialista em Dentística, focado
                  no diagnóstico e tratamento dos desgastes dentários, cariosos ou não.
                </p>
                <p>
                  Este projeto nasceu para revelar um problema pouco conhecido, mas grave: a
                  Síndrome do Envelhecimento Bucal Precoce (SEPB). Minha missão é combater a SEPB,
                  evitando que mais pessoas percam dentes por causa dessa condição silenciosa.
                </p>
                <p>
                  Trabalho com odontologia minimamente invasiva e preventiva, porque acredito que
                  qualidade de vida é a maior riqueza. Mastigar sem medo e sorrir com confiança são
                  direitos que quero ajudar você a manter.
                </p>
              </div>
            </div>

            {/* Credentials */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <GraduationCap className="h-5 w-5" style={{ color: "var(--teal)" }} />
                <h3
                  className="font-semibold text-gray-900"
                  style={{ fontFamily: "Poppins, sans-serif" }}
                >
                  Formação e Especializações
                </h3>
              </div>
              <div className="space-y-2.5">
                {credentials.map((c, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div
                      className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                      style={{ background: "var(--teal)" }}
                    >
                      <Check className="h-3 w-3 text-white" />
                    </div>
                    <span className="text-sm text-gray-700 leading-relaxed">{c}</span>
                  </div>
                ))}
              </div>
            </div>

            <button className="btn-teal" onClick={() => window.open(WA_URL, "_blank")}>
              Fale com o Dr. Guilherme
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
