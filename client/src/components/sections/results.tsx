import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function Results() {
  const cases = [
    {
      image: "https://images.unsplash.com/photo-1606811841689-23dfdb7ee46c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300",
      quote: "Antes eu tinha medo de mastigar. Hoje, tenho confiança de novo.",
      name: "Maria, 45 anos",
      alt: "Dental treatment before and after results"
    },
    {
      image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300",
      quote: "Descobri que perder dentes não é normal. Com acompanhamento, nunca mais perdi.",
      name: "João, 52 anos",
      alt: "Successful dental treatment results"
    },
    {
      image: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300",
      quote: "Minha qualidade de vida mudou completamente. Sorrio sem medo.",
      name: "Ana, 38 anos",
      alt: "Dental health improvement results"
    },
  ];

  return (
    <section className="py-20 bg-white" id="resultados">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-poppins font-bold text-4xl text-deep-blue text-center mb-8">
            Depoimentos de Pacientes
          </h2>
          <p className="text-xl text-gray-600 text-center mb-16">
            Veja como o Programa Digital de estabilização da SEPB transformou a vida dos nossos pacientes
          </p>
          
          {/* Video Testimonial */}
          <div className="mb-16">
            <div className="max-w-4xl mx-auto">
              <video
                src="/Depoimentos/DepoimentoVideoprincipal.mov"
                controls
                className="rounded-2xl shadow-xl w-full h-auto"
                poster="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
              >
                Seu navegador não suporta vídeo.
              </video>
            </div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cases.map((case_, index) => (
              <Card key={index} className="bg-gray-50 rounded-2xl shadow-lg">
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <img
                      src={case_.image}
                      alt={case_.alt}
                      className="rounded-xl w-full h-48 object-cover"
                    />
                    <div className="text-center">
                      <p className="font-poppins font-medium text-deep-blue text-lg mb-2">
                        "{case_.quote}"
                      </p>
                      <p className="text-gray-600 text-sm">{case_.name}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button
              size="lg"
              className="bg-futuristic-turquesa text-white hover:bg-futuristic-turquesa/90 rounded-full font-poppins font-semibold"
              onClick={() => window.open('https://wa.me/5548999547607?text=Olá! Gostaria de agendar uma avaliação personalizada do Programa Digital de estabilização da SEPB', '_blank')}
            >
              Veja Todos os Casos
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
