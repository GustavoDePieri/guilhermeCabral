import { Button } from "@/components/ui/button";

export default function Testimonials() {

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
