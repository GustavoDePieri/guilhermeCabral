import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";
import { useState } from "react";

export default function Testimonials() {
  const allTestimonials = [
    {
      name: "Daniel Parra",
      initial: "D",
      text: "Sou de fora de Jaguaruna e fiquei impressionado que ao necessitar de um atendimento houve agilidade no agendamento e muita atenção na consulta. Bônus: alto nível de tecnologia, fiz o processo com um smart glass assistindo The Office no Netflix.",
      rating: 5,
      timeAgo: "4 semanas"
    },
    {
      name: "Ana Clara",
      initial: "A", 
      text: "Finalmente encontrei um dentista que se preocupa em ensinar e não apenas tratar. O Dr. Guilherme explicou tudo sobre a SEPB de forma clara e agora sei como proteger meus dentes.",
      rating: 5,
      timeAgo: "2 meses"
    },
    {
      name: "Marcos Santos",
      initial: "M",
      text: "Impressionante! O programa digital me mostrou exatamente o que estava acontecendo com meus dentes. Hoje tenho conhecimento para evitar problemas futuros.",
      rating: 5,
      timeAgo: "1 mês"
    },
    {
      name: "Carla Mendes",
      initial: "C",
      text: "Depois de anos perdendo dentes, descobri com o Dr. Guilherme que isso não é normal. O Programa Digital de estabilização da SEPB mudou completamente minha perspectiva sobre saúde bucal.",
      rating: 5,
      timeAgo: "3 semanas"
    },
    {
      name: "Roberto Silva",
      initial: "R",
      text: "Tecnologia incrível! O diagnóstico digital me mostrou problemas que nem sabia que existiam. Agora entendo como manter meus dentes saudáveis por muito mais tempo.",
      rating: 5,
      timeAgo: "2 semanas"
    },
    {
      name: "Fernanda Costa",
      initial: "F",
      text: "O Dr. Guilherme é muito atencioso e usa tecnologia de ponta. Me senti muito bem cuidada e aprendi muito sobre prevenção. Recomendo para todos!",
      rating: 5,
      timeAgo: "1 semana"
    },
    {
      name: "João Pedro",
      initial: "J",
      text: "Sempre tive medo de dentista, mas o Dr. Guilherme me deixou super tranquilo. O tratamento foi moderno e indolor. Agora sei como cuidar melhor dos meus dentes.",
      rating: 5,
      timeAgo: "5 dias"
    },
    {
      name: "Marina Oliveira",
      initial: "M",
      text: "Excelente profissional! O programa digital me ajudou a entender que desgaste dental pode ser prevenido. Mudou minha vida completamente.",
      rating: 5,
      timeAgo: "1 mês"
    }
  ];

  const [showAll, setShowAll] = useState(false);
  const testimonials = showAll ? allTestimonials : allTestimonials.slice(0, 3);

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-poppins font-bold text-4xl text-deep-blue text-center mb-16">
            O que dizem as pessoas que mudaram a história do seu sorriso
          </h2>
          <div className="space-y-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-white rounded-2xl shadow-lg">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-6">
                    <div className="w-16 h-16 bg-futuristic-turquesa rounded-full flex items-center justify-center text-white font-poppins font-bold text-xl">
                      {testimonial.initial}
                    </div>
                    <div className="flex-1">
                      <p className="text-lg text-gray-700 leading-relaxed mb-4">
                        "{testimonial.text}"
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <div className="flex text-yellow-400">
                            {[...Array(testimonial.rating)].map((_, i) => (
                              <Star key={i} className="h-4 w-4 fill-current" />
                            ))}
                          </div>
                          <span className="text-gray-600 font-poppins font-medium">
                            {testimonial.name}
                          </span>
                        </div>
                        <span className="text-gray-500 text-sm">
                          Há {testimonial.timeAgo}
                        </span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          {!showAll && (
            <div className="text-center mt-12">
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-deep-blue text-deep-blue hover:bg-deep-blue hover:text-white rounded-full font-poppins font-semibold"
                onClick={() => setShowAll(true)}
              >
                Ver Mais Depoimentos
              </Button>
            </div>
          )}
          
          {showAll && (
            <div className="text-center mt-12">
              <Button
                size="lg"
                className="bg-futuristic-turquesa text-white hover:bg-futuristic-turquesa/90 rounded-full font-poppins font-semibold"
                onClick={() => window.open('https://wa.me/5548999547607?text=Olá! Gostaria de agendar uma avaliação personalizada do Programa Digital de estabilização da SEPB', '_blank')}
              >
                Agende Sua Avaliação
              </Button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
