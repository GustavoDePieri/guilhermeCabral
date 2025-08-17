export default function AestheticCases() {
  const cases = [
    {
      title: "Caso 1: Restauração Natural",
      beforeImage: "https://via.placeholder.com/400x300/f3f4f6/9ca3af?text=Antes",
      afterImage: "https://via.placeholder.com/400x300/f3f4f6/9ca3af?text=Depois",
    },
    {
      title: "Caso 2: Transformação Completa",
      beforeImage: "https://via.placeholder.com/400x300/f3f4f6/9ca3af?text=Antes",
      afterImage: "https://via.placeholder.com/400x300/f3f4f6/9ca3af?text=Depois",
    },
    {
      title: "Caso 3: Sorriso Renovado",
      beforeImage: "https://via.placeholder.com/400x300/f3f4f6/9ca3af?text=Antes",
      afterImage: "https://via.placeholder.com/400x300/f3f4f6/9ca3af?text=Depois",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-poppins font-bold text-4xl text-deep-blue text-center mb-16">
            Casos Estéticos
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cases.map((case_, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-6 shadow-lg">
                <h3 className="font-poppins font-semibold text-xl text-deep-blue mb-4 text-center">
                  {case_.title}
                </h3>
                
                <div className="space-y-4">
                  <div>
                    <p className="text-sm font-medium text-gray-600 mb-2">Antes</p>
                    <img
                      src={case_.beforeImage}
                      alt={`${case_.title} - Antes`}
                      className="rounded-xl w-full h-48 object-cover shadow-md"
                    />
                  </div>
                  
                  <div>
                    <p className="text-sm font-medium text-gray-600 mb-2">Depois</p>
                    <img
                      src={case_.afterImage}
                      alt={`${case_.title} - Depois`}
                      className="rounded-xl w-full h-48 object-cover shadow-md"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}