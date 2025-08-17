import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  const phoneNumber = "+554898864120";
  const message = "Olá! Gostaria de agendar uma avaliação personalizada do Programa Digital de estabilização da SEPB";
  
  const handleWhatsAppClick = () => {
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber.replace(/\D/g, '')}&text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <button
      onClick={handleWhatsAppClick}
      className="fixed bottom-6 right-6 w-16 h-16 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 z-50 flex items-center justify-center"
      aria-label="Falar no WhatsApp"
    >
      <MessageCircle className="h-8 w-8" />
    </button>
  );
}