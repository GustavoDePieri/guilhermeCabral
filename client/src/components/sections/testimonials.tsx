import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";

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

  const [currentIndex, setCurrentIndex] = useState(0);
  const testimonialsPerPage = 2;
  const totalPages = Math.ceil(allTestimonials.length / testimonialsPerPage);
  
  const getCurrentTestimonials = () => {
    const startIndex = currentIndex * testimonialsPerPage;
    return allTestimonials.slice(startIndex, startIndex + testimonialsPerPage);
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % totalPages);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + totalPages) % totalPages);
  };

  // Auto-advance carousel every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <section className="py-20 bg-gray-50" id="testimonials">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-poppins font-bold text-4xl text-deep-blue text-center mb-16">
            Depoimentos de Pacientes
          </h2>
          
          {/* Video Testimonial - Smaller */}
          <div className="mb-16">
            <div className="bg-gradient-to-br from-futuristic-turquesa/10 to-deep-blue/10 rounded-2xl p-6 shadow-2xl max-w-2xl mx-auto">
              <video
                src="/DepoimentoVideoprincipal.mp4"
                controls
                preload="metadata"
                className="rounded-xl shadow-xl w-full h-auto max-h-[300px]"
              >
                Seu navegador não suporta vídeo.
              </video>
            </div>
          </div>
          
          {/* Text Testimonials Carousel */}
          <div className="relative">
            <div className="grid gap-8 md:grid-cols-2">
              {getCurrentTestimonials().map((testimonial, index) => (
                <Card key={index} className="bg-white rounded-2xl shadow-lg">
                  <CardContent className="p-8">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-futuristic-turquesa rounded-full flex items-center justify-center text-white font-bold">
                        {testimonial.initial}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="font-poppins font-semibold text-lg text-deep-blue">
                            {testimonial.name}
                          </h3>
                          <span className="text-sm text-gray-500">{testimonial.timeAgo}</span>
                        </div>
                        <div className="flex items-center mb-3">
                          {Array.from({ length: testimonial.rating }).map((_, i) => (
                            <Star key={i} className="h-4 w-4 fill-current text-yellow-400" />
                          ))}
                        </div>
                        <p className="text-gray-600 leading-relaxed">{testimonial.text}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Navigation Buttons */}
            <div className="flex justify-center items-center mt-8 space-x-4">
              <Button
                variant="outline"
                size="sm"
                onClick={prevSlide}
                className="w-10 h-10 rounded-full border-2 border-futuristic-turquesa text-futuristic-turquesa hover:bg-futuristic-turquesa hover:text-white"
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
              
              {/* Dots indicator */}
              <div className="flex space-x-2">
                {Array.from({ length: totalPages }).map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-3 h-3 rounded-full transition-all ${
                      index === currentIndex 
                        ? 'bg-futuristic-turquesa' 
                        : 'bg-gray-300 hover:bg-gray-400'
                    }`}
                  />
                ))}
              </div>
              
              <Button
                variant="outline"
                size="sm"
                onClick={nextSlide}
                className="w-10 h-10 rounded-full border-2 border-futuristic-turquesa text-futuristic-turquesa hover:bg-futuristic-turquesa hover:text-white"
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Button
              size="lg"
              className="bg-futuristic-turquesa text-white hover:bg-futuristic-turquesa/90 rounded-full font-poppins font-semibold"
              onClick={() => window.open('https://api.whatsapp.com/send?phone=554898864120&text=Olá! Gostaria de agendar uma avaliação personalizada do Programa Digital de estabilização da SEPB', '_blank')}
            >
              Agende Sua Avaliação
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}