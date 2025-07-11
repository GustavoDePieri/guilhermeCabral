import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function Articles() {
  const articles = [
    {
      title: "Desgaste Não Carioso: O que a Ciência Revela",
      description: "Estudo sobre os mecanismos do desgaste dental não relacionado às cáries e suas implicações na saúde bucal.",
      readTime: "5 min de leitura",
    },
    {
      title: "Tecnologia Digital na Odontologia Preventiva",
      description: "Como a tecnologia 3D e os scanners intraorais revolucionaram o diagnóstico precoce.",
      readTime: "7 min de leitura",
    },
    {
      title: "Prevenção vs. Tratamento: Uma Análise Econômica",
      description: "Dados sobre os custos da prevenção comparados aos tratamentos invasivos ao longo da vida.",
      readTime: "4 min de leitura",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-poppins font-bold text-4xl text-deep-blue text-center mb-4">
            Artigos e Respaldo Científico
          </h2>
          <p className="text-xl text-gray-600 text-center mb-16">
            Conheça a ciência por trás do Protocolo SEPB-Digital®
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            {articles.map((article, index) => (
              <Card key={index} className="bg-gray-50 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <div className="w-full h-4 bg-futuristic-turquesa rounded-full mb-4"></div>
                  <h3 className="font-poppins font-semibold text-xl text-deep-blue mb-4">
                    {article.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{article.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">{article.readTime}</span>
                    <button className="text-futuristic-turquesa font-poppins font-medium hover:underline">
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
            >
              Ver Todos os Artigos
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
