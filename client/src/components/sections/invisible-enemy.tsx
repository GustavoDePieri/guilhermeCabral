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
      description: "das pessoas tem ou vão ter a SEPB",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-poppins font-bold text-2xl md:text-3xl lg:text-4xl text-deep-blue mb-8">
            O vilão silencioso que poucos conhecem
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed mb-12">
            Você cuida da higiene, vai ao dentista e mesmo assim sente seus dentes desgastando? Poucos profissionais sabem diagnosticar e tratar a verdadeira causa da Síndrome do Envelhecimento Bucal Precoce — que ameaça seus dentes dia após dia.
          </p>
          
          <div className="text-left max-w-3xl mx-auto mb-12">
            <h3 className="font-poppins font-semibold text-xl text-deep-blue mb-6">Estamos lutando contra:</h3>
            <div className="space-y-6">
              <div>
                <h4 className="font-poppins font-semibold text-lg text-deep-blue mb-2">🔹 A Síndrome do Envelhecimento Bucal Precoce (SEPB)</h4>
                <p className="text-gray-600">Uma condição silenciosa que, sem prevenção correta, destrói progressivamente sua estrutura dental e compromete seu sorriso no longo prazo.</p>
              </div>
              <div>
                <h4 className="font-poppins font-semibold text-lg text-deep-blue mb-2">🔹 A Indústria da Restauração Infinita</h4>
                <p className="text-gray-600">Quando se restaura sem investigar a origem real do desgaste ou se faz um trabalho tão provisório que em pouco tempo precisa ser refeito — alimentando um ciclo que nunca termina.</p>
              </div>
              <div>
                <h4 className="font-poppins font-semibold text-lg text-deep-blue mb-2">🔹 A Cultura do Remendo Rápido</h4>
                <p className="text-gray-600">Focar só no alívio imediato e não enxergar o paciente como um todo. É tapar o sol com a peneira — e deixar que o problema avance silenciosamente.</p>
              </div>
              <div>
                <h4 className="font-poppins font-semibold text-lg text-deep-blue mb-2">🔹 O Silêncio Conveniente</h4>
                <p className="text-gray-600">Muitos profissionais percebem sinais de desgaste, mas escolhem não aprofundar a conversa — seja por falta de preparo ou por não saberem a quem encaminhar. Enquanto isso, o tempo trabalha contra a saúde dos seus dentes.</p>
              </div>
            </div>
          </div>



          {/* Statistics */}
          <div className="grid md:grid-cols-1 gap-8 mb-12 max-w-md mx-auto">
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
