import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
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
      text: "Impressionante! O protocolo digital me mostrou exatamente o que estava acontecendo com meus dentes. Hoje tenho conhecimento para evitar problemas futuros.",
      rating: 5,
      timeAgo: "1 mês"
    },
  ];

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
        </div>
      </div>
    </section>
  );
}
