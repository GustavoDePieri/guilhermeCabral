import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useState } from "react";

export default function Articles() {
  const [showAllArticles, setShowAllArticles] = useState(false);
  
  const articles = [
    {
      title: "Prevalência de LCNC e Hipersensibilidade Dentinária em Atletas",
      description: "Estudo sobre lesões cervicais não cariosas e hipersensibilidade dentinária relacionadas ao estilo de vida de atletas profissionais.",
      readTime: "8 min de leitura",
      fileName: "prevalencia-de-lcnc-hd-e-fatores-de-risco-associados-ao-estilo-de-vida-de-atletas.pdf"
    },
    {
      title: "Bruxismo do Sono e suas Associações com Insônia",
      description: "Análise das correlações entre bruxismo do sono, insônia e apneia obstrutiva do sono na população geral de São Paulo.",
      readTime: "12 min de leitura",
      fileName: "sleep-bruxism-and-its-associations-with-insomnia-and-osa-in-the-general-population-of-sao.pdf"
    },
    {
      title: "Associação entre Desgaste Erosivo e Refluxo Gastroesofágico",
      description: "Pesquisa sobre a relação entre sintomas de refluxo gastroesofágico e o desenvolvimento de desgaste dental erosivo.",
      readTime: "10 min de leitura",
      fileName: "the-association-between-erosive-toothwear-and-gastro-oesophageal-reflux-related-symptoms.pdf"
    },
    {
      title: "Saúde Bucal e Transtornos Alimentares: Revisão Sistemática",
      description: "Meta-análise sobre a associação entre má saúde bucal e transtornos alimentares, com evidências científicas atualizadas.",
      readTime: "15 min de leitura",
      fileName: "association-between-poor-oral-health-and-eating-disorders-systematic-review-and-meta-anal.pdf"
    },
    {
      title: "Impacto da Cirurgia Bariátrica na Saúde Bucal",
      description: "Revisão sistemática e meta-análise sobre os efeitos da cirurgia bariátrica na saúde oral dos pacientes.",
      readTime: "11 min de leitura",
      fileName: "impact-of-bariatric-surgery-on-oral-health-a-systematic-review-and-meta-analysis.pdf"
    },
    {
      title: "pH dos E-cigarettes: Elemento Importante para Pesquisa",
      description: "Estudo sobre a importância do pH dos cigarros eletrônicos como fator relevante para pesquisas e regulamentações.",
      readTime: "6 min de leitura",
      fileName: "bringing-attention-to-e-cigarette-ph-as-an-important-element-for-research-and-regulation.pdf"
    }
  ];

  const displayedArticles = showAllArticles ? articles : articles.slice(0, 3);

  const handleArticleClick = (fileName: string) => {
    const articlePath = `/Artigos/${fileName}`;
    window.open(articlePath, '_blank');
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-poppins font-bold text-4xl text-deep-blue text-center mb-4">
            Artigos e Respaldo Científico
          </h2>
          <p className="text-xl text-gray-600 text-center mb-16">
            Conheça a ciência por trás do Programa Digital de estabilização da SEPB
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            {displayedArticles.map((article, index) => (
              <Card key={index} className="bg-gray-50 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <div className="w-full h-4 bg-futuristic-turquesa rounded-full mb-4"></div>
                  <h3 className="font-poppins font-semibold text-xl text-deep-blue mb-4">
                    {article.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{article.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">{article.readTime}</span>
                    <button 
                      className="text-futuristic-turquesa font-poppins font-medium hover:underline"
                      onClick={() => handleArticleClick(article.fileName)}
                    >
                      Ler artigo
                    </button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button
              size="lg"
              className="bg-deep-blue text-white hover:bg-deep-blue/90 rounded-full font-poppins font-semibold"
              onClick={() => setShowAllArticles(!showAllArticles)}
            >
              {showAllArticles ? 'Ver Menos Artigos' : 'Ver Todos os Artigos'}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
