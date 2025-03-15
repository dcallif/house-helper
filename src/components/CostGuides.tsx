import React from 'react';

function CostGuides() {
  const featuredGuides = [
    {
      title: 'Bathroom Remodel',
      description: 'Average cost: $5,000 - $15,000',
      image: 'https://plus.unsplash.com/premium_photo-1676320514136-5a15d9f97dfa?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // Example image
      link: '#',
    },
    {
      title: 'Kitchen Remodel',
      description: 'Average cost: $10,000 - $30,000',
      image: 'https://images.unsplash.com/photo-1571843439991-dd2b8e051966?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // Example image
      link: '#',
    },
    {
      title: 'Roof Repair',
      description: 'Average cost: $500 - $5,000',
      image: 'https://plus.unsplash.com/premium_photo-1683133227667-6b6eaf3852f7?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // Example image
      link: '#',
    },
    {
      title: 'HVAC Installation',
      description: 'Average cost: $4,000 - $12,000',
      image: 'https://images.unsplash.com/photo-1592595896616-c37162298647?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // Example image
      link: '#',
    },
  ];

  const costRanges = [
    { service: 'Bathroom Remodel', min: 5000, max: 15000 },
    { service: 'Kitchen Remodel', min: 10000, max: 30000 },
    { service: 'Roof Repair', min: 500, max: 5000 },
    { service: 'HVAC Installation', min: 4000, max: 12000 },
    { service: 'Plumbing Repair', min: 150, max: 1000 },
    { service: 'Electrical Work', min: 200, max: 2000 },
    { service: 'Painting (Interior)', min: 500, max: 3000 },
    { service: 'Flooring Installation', min: 1000, max: 8000 },
  ];

  return (
    <section className="py-16 bg-blue-200">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-8">Cost Guides</h1>
        <p className="text-lg text-center mb-12">
          Find out the average cost for hundreds of home improvement projects.
        </p>

        <h2 className="text-2xl font-bold mb-6">Featured Cost Guides</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {featuredGuides.map((guide, index) => (
            <a
              href={guide.link}
              key={index}
              className="block group relative rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300 bg-blue-100"
            >
              <img
                src={guide.image}
                alt={guide.title}
                className="w-full h-56 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-bold mb-2">{guide.title}</h3>
                <p className="text-gray-700">{guide.description}</p>
              </div>
            </a>
          ))}
        </div>

        <h2 className="text-2xl font-bold mb-6">Cost by Project Type</h2>
        <div className="overflow-x-auto">
          <table className="w-full table-auto border-collapse">
            <thead>
              <tr className="bg-gray-100">
                <th className="border px-4 py-2 text-left">Service</th>
                <th className="border px-4 py-2 text-left">Average Cost Range</th>
              </tr>
            </thead>
            <tbody>
              {costRanges.map((range, index) => (
                <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : ''}>
                  <td className="border px-4 py-2">{range.service}</td>
                  <td className="border px-4 py-2">${range.min} - ${range.max}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

export default CostGuides;
