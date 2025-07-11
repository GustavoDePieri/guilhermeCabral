import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function Philosophy() {
  const beliefs = [
    {
      title: "Eu acredito que dentes naturais não têm substituto.",
      description: "Nenhuma tecnologia pode replicar a perfeição da natureza. Meu trabalho é preservar o que você já tem.",
    },
    {
      title: "Que prevenção é liberdade.",
      description: "Quando você previne, você escolhe. Quando você trata, você reage. A diferença é a autonomia.",
    },
    {
      title: "Que saúde começa antes da dor.",
      description: "Não esperamos o coração parar para cuidar dele. Por que fazemos isso com nossos dentes?",
    },
    {
      title: "E que todo mundo tem o direito de envelhecer sorrindo sem medo.",
      description: "Sua idade não deveria determinar a saúde dos seus dentes. Com o protocolo certo, você pode sorrir aos 80 como sorri hoje.",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-poppins font-bold text-4xl text-deep-blue mb-12">
            Por que faço o que faço
          </h2>
          <div className="space-y-8">
            {beliefs.map((belief, index) => (
              <Card key={index} className="bg-white rounded-2xl shadow-lg">
                <CardContent className="p-8">
                  <div className="text-2xl font-poppins font-semibold text-deep-blue mb-4">
                    {belief.title}
                  </div>
                  <p className="text-gray-600 text-lg">{belief.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <Card className="mt-12 bg-futuristic-turquesa/10 rounded-2xl border-0">
            <CardContent className="p-8">
              <p className="text-xl font-poppins font-medium text-deep-blue mb-6">
                Se você também acredita nisso, é aqui que seu caminho começa.
              </p>
              <Button
                size="lg"
                className="bg-futuristic-turquesa text-white hover:bg-futuristic-turquesa/90 rounded-full font-poppins font-semibold"
              >
                Quero Começar Agora
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
