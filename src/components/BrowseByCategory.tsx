import React from 'react';

    const categories = [
      {
        name: 'Cleaning',
        image:
          'https://images.unsplash.com/photo-1585421514284-efb74c2b69ba?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        link: '/services?q=Cleaning',
      },
      {
        name: 'Roofing',
        image:
          'https://plus.unsplash.com/premium_photo-1683133227667-6b6eaf3852f7?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        link: '/services?q=Roofing',
      },
      {
        name: 'Electrical',
        image:
          'https://images.unsplash.com/photo-1621905251918-48416bd8575a?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        link: '/services?q=Electrical',
      },
      {
        name: 'Plumbing',
        image:
          'https://images.unsplash.com/photo-1676210134188-4c05dd172f89?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        link: '/services?q=Plumbing',
      },
      {
        name: 'Painting',
        image: 'https://plus.unsplash.com/premium_photo-1721865603899-a750a71d9a6a?q=80&w=2093&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // Example image
        link: '/services?q=Painting',
      },
      {
        name: 'Landscaping',
        image: 'https://images.unsplash.com/photo-1734079692160-fcbe4be6ab96?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // Example image
        link: '/services?q=Landscaping',
      },
      {
        name: 'Home Repair',
				image: 'https://plus.unsplash.com/premium_photo-1661963754849-a4631ed2f356?q=80&w=2085&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        link: '/services?q=Home%20Repair',
      },
      {
        name: 'Appliance Repair',
        image: 'https://plus.unsplash.com/premium_photo-1664298059861-1560b39fb890?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // Example image
        link: '/services?q=Appliance%20Repair',
      },
    ];

    function BrowseByCategory() {
      return (
        <section className="py-16 bg-blue-200">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold text-center mb-8">
              Browse by Category
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {categories.map((category, index) => (
                <a
                  href={category.link}
                  key={index}
                  className="block group relative rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300"
                >
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-56 object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
                    <h2 className="text-white text-xl font-bold">
                      {category.name}
                    </h2>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>
      );
    }

    export default BrowseByCategory;
