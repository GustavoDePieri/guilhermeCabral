import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function InvisibleEnemy() {
  const timeline = [
    {
      age: "20s",
      title: "Início Silencioso",
      description: "Desgaste microscópico imperceptível",
      color: "bg-soft-green",
    },
    {
      age: "30s",
      title: "Primeiros Sinais",
      description: "Sensibilidade ocasional",
      color: "bg-yellow-400",
    },
    {
      age: "40s",
      title: "Aceleração",
      description: "Desgaste visível, dor frequente",
      color: "bg-orange-400",
    },
    {
      age: "50s+",
      title: "Danos Severos",
      description: "Perda dentária, tratamentos invasivos",
      color: "bg-red-500",
    },
  ];

  const statistics = [
    {
      percentage: "70%",
      description: "das pessoas perdem dentes antes dos 60 anos — sem saber que poderia ser evitado",
    },
    {
      percentage: "50%",
      description: "dos adultos são afetados pelo desgaste não carioso",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-poppins font-bold text-4xl text-deep-blue mb-8">
            O Vilão Silencioso Que Poucos Conhecem
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed mb-12">
            Você cuida da higiene, vai ao dentista e mesmo assim sente seus dentes
            desgastando? Essa é a Síndrome do Envelhecimento Bucal Precoce (SEPB)
            — uma doença que destrói lentamente sua estrutura dental, seu sorriso
            e seu bem-estar, sem aviso prévio.
          </p>

          {/* Visual Timeline */}
          <Card className="bg-white rounded-2xl p-8 shadow-xl mb-12">
            <CardContent>
              <h3 className="font-poppins font-semibold text-2xl text-deep-blue mb-8">
                Progressão do Desgaste ao Longo dos Anos
              </h3>
              <div className="grid md:grid-cols-4 gap-6">
                {timeline.map((item, index) => (
                  <div key={index} className="text-center">
                    <div
                      className={`w-16 h-16 ${item.color} rounded-full flex items-center justify-center mx-auto mb-4`}
                    >
                      <span className="font-poppins font-bold text-white text-lg">
                        {item.age}
                      </span>
                    </div>
                    <h4 className="font-poppins font-semibold text-deep-blue mb-2">
                      {item.title}
                    </h4>
                    <p className="text-sm text-gray-600">{item.description}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Statistics */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {statistics.map((stat, index) => (
              <Card key={index} className="bg-white p-8 rounded-2xl shadow-lg">
                <CardContent className="text-center">
                  <div className="text-5xl font-poppins font-bold text-futuristic-turquesa mb-4">
                    {stat.percentage}
                  </div>
                  <p className="text-lg text-gray-600">{stat.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <Button
            size="lg"
            className="bg-futuristic-turquesa text-white hover:bg-futuristic-turquesa/90 rounded-full font-poppins font-semibold"
          >
            Veja se você está em risco
          </Button>
        </div>
      </div>
    </section>
  );
}
