import React from 'react';


const Gallery = () => {
  const data = [
    {
      title: "Bio-Degradable Waste",
      imageUrl: "src/assets/Biodegradablewaste.jpg",
      description: "Biodegradable waste, like food scraps and garden waste, naturally decomposes and can be composted to enrich soil. Proper management of this waste is vital in Nepal for several reasons. It reduces landfill waste, lowers greenhouse gas emissions, and promotes sustainable agriculture by providing nutrient-rich compost to farmers. Effective biodegradable waste management also enhances public health by preventing disease spread and reduces reliance on chemical fertilizers, saving costs. In Nepal, integrating waste management practices into urban planning and raising public awareness are essential steps for a cleaner, healthier environment and sustainable future."
    },
    {
      title: "Non-BioDegradable Waste",
      imageUrl: "src/assets/shutterstock_1031137132-1-scaled-2.jpg",
      description: "Non-biodegradable waste, such as plastics, metals, and glass, does not naturally decompose and can persist in the environment for hundreds of years. Managing this waste is crucial in Nepal to prevent environmental pollution, protect wildlife, and conserve natural resources. Proper disposal and recycling reduce landfill use, lower pollution levels, and promote sustainable use of materials. Effective non-biodegradable waste management also helps mitigate the visual blight and health hazards associated with improper waste disposal. Emphasizing recycling programs, public education, and policy enforcement are key steps for Nepal to manage non-biodegradable waste sustainably."
    },
  ];

  return (
    <div className="container mx-auto py-10">
      <p className="text-3xl sm:text-4xl md:text-5xl mb-10 mt-10 text-center">Sustainable Waste Management Practices</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
        {data.map((item, index) => (
          <div key={index} className="bg-white shadow-md">
            <img src={item.imageUrl} alt={item.title} className="w-full h-56 object-cover" />
            <div className="p-6 h-auto sm:h-80 lg:h-96">
              <h2 className="text-xl sm:text-2xl font-semibold mt-4 mb-2 text-[#009600]">{item.title}</h2>
              <p className="mb-4 text-sm sm:text-base lg:text-lg text-[#747373]">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
