import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Book, Video, Lightbulb, Users } from "lucide-react";

export default function Community() {
  const features = [
    {
      icon: Book,
      title: "Conteúdos Exclusivos",
      description: "Acesso a materiais atualizados e técnicas avançadas de prevenção",
    },
    {
      icon: Video,
      title: "Lives Especializadas",
      description: "Sessões ao vivo com profissionais de diferentes áreas da saúde",
    },
    {
      icon: Lightbulb,
      title: "Orientação Prática",
      description: "Dicas e técnicas para aplicar no seu dia a dia",
    },
    {
      icon: Users,
      title: "Suporte da Comunidade",
      description: "Apoio de pessoas que compartilham os mesmos valores",
    },
  ];

  return (
    <section className="py-20 bg-deep-blue" id="comunidade">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-poppins font-bold text-4xl text-white mb-8">
            Um Lugar Para Quem Quer Assumir o Comando da Própria Saúde Bucal
          </h2>
          <p className="text-xl text-gray-300 leading-relaxed mb-12">
            A Comunidade Ponto da Virada é um espaço gratuito de suporte, aprendizado e evolução
            contínua.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {features.map((feature, index) => (
              <Card key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl border-0">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-futuristic-turquesa rounded-full flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="font-poppins font-semibold text-xl text-white mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Community Preview */}
          <Card className="bg-white rounded-2xl shadow-xl mb-8">
            <CardContent className="p-8">
              <img
                src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400"
                alt="Supportive dental community gathering"
                className="rounded-xl w-full h-64 object-cover mb-6"
              />
              <div className="flex items-center justify-between flex-col md:flex-row gap-4">
                <div className="text-left">
                  <h3 className="font-poppins font-semibold text-xl text-deep-blue mb-2">
                    Faça parte de uma comunidade que tem como foco melhorar sua saúde bucal
                  </h3>
                  <p className="text-gray-600">
                    que já transformaram sua saúde bucal
                  </p>
                </div>
                <Button
                  size="lg"
                  className="bg-futuristic-turquesa text-white hover:bg-futuristic-turquesa/90 rounded-full font-poppins font-semibold"
                  onClick={() => window.open('https://api.whatsapp.com/send?phone=5548988644120&text=Olá! Gostaria de agendar uma avaliação personalizada do Programa Digital de estabilização da SEPB', '_blank')}
                >
                  Quero Fazer Parte
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
