import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Mariana Silva",
      initial: "M",
      text: "Eu vivia em consultórios, sempre restaurando. Hoje, sei exatamente como evitar isso. O Dr. Guilherme mudou minha relação com a odontologia.",
    },
    {
      name: "Roberto Costa",
      initial: "R",
      text: "O Dr. Guilherme me ensinou que saúde bucal vai muito além de escovar. Agora tenho autonomia para cuidar dos meus dentes.",
    },
    {
      name: "Carla Mendes",
      initial: "C",
      text: "Protocolo revolucionário! Pela primeira vez entendi o que realmente estava acontecendo com meus dentes. Recomendo a todos.",
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
                      <div className="flex items-center space-x-2">
                        <div className="flex text-yellow-400">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="h-4 w-4 fill-current" />
                          ))}
                        </div>
                        <span className="text-gray-600 font-poppins font-medium">
                          {testimonial.name}
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
