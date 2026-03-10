import { ExternalLink, BookOpen, Clock, ChevronDown } from "lucide-react";
import { useState } from "react";
import { useInView } from "@/hooks/use-in-view";

const articles = [
  {
    title: "Prevalência de LCNC e Hipersensibilidade Dentinária em Atletas",
    description:
      "Estudo sobre lesões cervicais não cariosas e hipersensibilidade dentinária relacionadas ao estilo de vida de atletas profissionais.",
    readTime: "8 min",
    tag: "Desgaste Dental",
    fileName: "prevalencia-de-lcnc-hd-e-fatores-de-risco-associados-ao-estilo-de-vida-de-atletas.pdf",
  },
  {
    title: "Bruxismo do Sono e suas Associações com Insônia",
    description:
      "Análise das correlações entre bruxismo do sono, insônia e apneia obstrutiva do sono na população geral de São Paulo.",
    readTime: "12 min",
    tag: "Bruxismo",
    fileName:
      "sleep-bruxism-and-its-associations-with-insomnia-and-osa-in-the-general-population-of-sao.pdf",
  },
  {
    title: "Associação entre Desgaste Erosivo e Refluxo Gastroesofágico",
    description:
      "Pesquisa sobre a relação entre sintomas de refluxo gastroesofágico e o desenvolvimento de desgaste dental erosivo.",
    readTime: "10 min",
    tag: "Erosão",
    fileName:
      "the-association-between-erosive-toothwear-and-gastro-oesophageal-reflux-related-symptoms.pdf",
  },
  {
    title: "Saúde Bucal e Transtornos Alimentares: Revisão Sistemática",
    description:
      "Meta-análise sobre a associação entre má saúde bucal e transtornos alimentares, com evidências científicas atualizadas.",
    readTime: "15 min",
    tag: "Nutrição",
    fileName:
      "association-between-poor-oral-health-and-eating-disorders-systematic-review-and-meta-anal.pdf",
  },
  {
    title: "Impacto da Cirurgia Bariátrica na Saúde Bucal",
    description:
      "Revisão sistemática e meta-análise sobre os efeitos da cirurgia bariátrica na saúde oral dos pacientes.",
    readTime: "11 min",
    tag: "Sistêmico",
    fileName: "impact-of-bariatric-surgery-on-oral-health-a-systematic-review-and-meta-analysis.pdf",
  },
  {
    title: "pH dos E-cigarettes como Fator de Pesquisa e Regulamentação",
    description:
      "Estudo sobre a importância do pH dos cigarros eletrônicos como fator relevante para pesquisas e regulamentações.",
    readTime: "6 min",
    tag: "Fatores de Risco",
    fileName:
      "bringing-attention-to-e-cigarette-ph-as-an-important-element-for-research-and-regulation.pdf",
  },
];

const tagColors: Record<string, string> = {
  "Desgaste Dental": "#00BFA5",
  Bruxismo: "#8b5cf6",
  Erosão: "#ef4444",
  Nutrição: "#f59e0b",
  Sistêmico: "#3b82f6",
  "Fatores de Risco": "#ec4899",
};

export default function Articles() {
  const [showAll, setShowAll] = useState(false);
  const { ref, inView } = useInView();
  const displayed = showAll ? articles : articles.slice(0, 3);

  return (
    <section className="section-gray">
      <div className="container-xl">
        <div ref={ref}>
          {/* Header */}
          <div
            className={`text-center max-w-2xl mx-auto mb-12 transition-all duration-700 ${
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <p className="section-label mb-3">Ciência</p>
            <h2 className="heading-lg text-gray-900 mb-4">
              Artigos e{" "}
              <span className="gradient-text">Respaldo Científico</span>
            </h2>
            <p className="text-gray-500">
              Conheça a ciência por trás do Programa Digital de estabilização da SEPB
            </p>
          </div>

          {/* Article grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
            {displayed.map((a, i) => (
              <div
                key={i}
                className={`card-white p-6 flex flex-col gap-4 transition-all duration-700 ${
                  inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                {/* Tag + time */}
                <div className="flex items-center justify-between">
                  <span
                    className="text-xs font-semibold px-3 py-1 rounded-full"
                    style={{
                      background: `${tagColors[a.tag]}20`,
                      color: tagColors[a.tag],
                      fontFamily: "Poppins, sans-serif",
                    }}
                  >
                    {a.tag}
                  </span>
                  <div className="flex items-center gap-1 text-gray-400 text-xs">
                    <Clock className="h-3 w-3" />
                    {a.readTime}
                  </div>
                </div>

                {/* Icon */}
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center"
                  style={{ background: `${tagColors[a.tag]}15` }}
                >
                  <BookOpen className="h-5 w-5" style={{ color: tagColors[a.tag] }} />
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3
                    className="font-semibold text-gray-900 text-sm mb-2 leading-snug"
                    style={{ fontFamily: "Poppins, sans-serif" }}
                  >
                    {a.title}
                  </h3>
                  <p className="text-gray-600 text-xs leading-relaxed">{a.description}</p>
                </div>

                {/* Read link */}
                <button
                  className="flex items-center gap-2 text-sm font-semibold transition-colors"
                  style={{ color: "var(--teal)", fontFamily: "Poppins, sans-serif" }}
                  onClick={() => window.open(`/Artigos/${a.fileName}`, "_blank")}
                >
                  Ler artigo
                  <ExternalLink className="h-3.5 w-3.5" />
                </button>
              </div>
            ))}
          </div>

          {/* Show more/less */}
          <div className="flex justify-center">
            <button
              className="btn-outline-teal flex items-center gap-2"
              onClick={() => setShowAll(!showAll)}
            >
              {showAll ? "Ver Menos" : "Ver Todos os Artigos"}
              <ChevronDown
                className={`h-4 w-4 transition-transform ${showAll ? "rotate-180" : ""}`}
              />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
