import { Play } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Video() {
  return (
    <section className="py-20 bg-deep-blue">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-poppins font-bold text-4xl text-white mb-8">
            Veja Como Funciona o Programa Digital de estabilização da SEPB
          </h2>
          <div className="bg-white rounded-2xl p-2 shadow-xl">
            <div className="aspect-video bg-gray-900 rounded-xl flex items-center justify-center">
              <div className="text-center">
                <Button
                  size="lg"
                  className="w-20 h-20 bg-futuristic-turquesa hover:bg-futuristic-turquesa/90 rounded-full mb-4"
                >
                  <Play className="h-8 w-8 text-white" />
                </Button>
                <p className="text-white font-poppins font-medium">
                  Clique para assistir a demonstração completa
                </p>
                <div className="mt-4 text-sm text-gray-300">
                  Video demonstrativo do Programa Digital de estabilização da SEPB (3:45)
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
