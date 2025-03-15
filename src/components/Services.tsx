function Services() {
  const services = [
    {
      name: 'Roofing Services',
      image:
        'https://plus.unsplash.com/premium_photo-1683133227667-6b6eaf3852f7?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      link: '/services?q=Roofing%20Services',
    },
    {
      name: 'Cleaning Services',
      image:
        'https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      link: '/services?q=Cleaning%20Services',
    },
    {
      name: 'Electrical Services',
      image:
        'https://images.unsplash.com/photo-1621905251918-48416bd8575a?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      link: '/services?q=Electrical%20Services',
    },
    {
      name: 'Plumbing Services',
      image:
        'https://images.unsplash.com/photo-1676210134188-4c05dd172f89?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      link: '/services?q=Plumbing%20Services',
    },
  ];

  return (
    <section className="py-16 bg-blue-200">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">
          Popular Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <a
              href={service.link}
              key={index}
              className="block group relative"
            >
              <img
                src={service.image}
                alt={service.name}
                className="w-full h-64 object-cover rounded-lg transition duration-300 transform group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-blue-200 bg-opacity-20 rounded-lg transition duration-300 opacity-0 group-hover:opacity-100 flex items-center justify-center">
                <h3 className="text-white text-xl font-bold text-shadow-sm">
                  {service.name}
                </h3>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
