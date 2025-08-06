import { Button } from "@/components/ui/button";

export default function Testimonials() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-poppins font-bold text-4xl text-deep-blue text-center mb-16">
            Depoimentos de Pacientes
          </h2>
          
          {/* Video Testimonial */}
          <div className="mb-12">
            <div className="bg-gradient-to-br from-futuristic-turquesa/10 to-deep-blue/10 rounded-2xl p-8 shadow-2xl">
              <video
                src="/Depoimentos/DepoimentoVideoprincipal.mp4"
                controls
                className="rounded-xl shadow-xl w-full h-auto"
              >
                Seu navegador não suporta vídeo.
              </video>
            </div>
          </div>
          
          <div className="text-center">
            <Button
              size="lg"
              className="bg-futuristic-turquesa text-white hover:bg-futuristic-turquesa/90 rounded-full font-poppins font-semibold"
              onClick={() => window.open('https://wa.me/5548999547607?text=Olá! Gostaria de agendar uma avaliação personalizada do Programa Digital de estabilização da SEPB', '_blank')}
            >
              Agende Sua Avaliação
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}