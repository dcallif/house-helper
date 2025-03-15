import React from 'react';
    import { useSearchParams } from 'react-router-dom';
    import { Star, MapPin, Clock, MessageCircle, CheckCircle, DollarSign } from 'lucide-react';
    import servicesData from '../servicesData';

    function ServiceList() {
      const [searchParams] = useSearchParams();
      const query = searchParams.get('q') || '';

      // Filter services based on the search query
      const filteredServices = servicesData.filter(
        (service) =>
          service.category.toLowerCase().includes(query.toLowerCase()) ||
          service.name.toLowerCase().includes(query.toLowerCase())
      );

      return (
        <div className="container mx-auto px-4 py-8 bg-blue-200">
          <h1 className="text-3xl font-bold mb-4">
            Top {filteredServices.length} matching {query}
          </h1>
          <p className='mb-4'>Our criteria <CheckCircle className='inline-block' /></p>

          {filteredServices.map((service) => (
            <div key={service.id} className="bg-white rounded-lg shadow-md p-6 mb-6 flex">
              <div className="w-32 h-32 mr-6 flex-shrink-0">
                <img
                  src={service.image}
                  alt={service.name}
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <div className="flex-grow">
                <div className="flex items-center justify-between mb-2">
                  <h2 className="text-xl font-bold">{service.name}</h2>
                  {service.price && <div className='text-lg font-bold text-green-600'><DollarSign className='inline' size={16} />{service.price} <span className='text-sm'>Starting price</span></div>}
                </div>
                <div className="flex items-center mb-2">
                  <span className="text-yellow-500 mr-1">
                    {Array.from({ length: Math.floor(service.rating) }).map((_, i) => (
                      <Star key={i} className="inline-block" size={16} />
                    ))}
                  </span>
                  <span className="text-gray-600">
                    {service.rating.toFixed(1)} ({service.reviews})
                  </span>
                </div>
                <div className="text-sm text-gray-600 mb-2">
                  <span className="font-bold">
                    <MapPin className="inline-block mr-1" size={16} />
                    {service.hires} hires on Home Helper
                  </span>{' '}
                  <br />
                  <span className="font-bold">
                    <CheckCircle className="inline-block mr-1" size={16} />
                    Serves {service.location}
                  </span>
                </div>
                <div className="text-sm text-gray-600 mb-4">
                  <Clock className="inline-block mr-1" size={16} />
                  Online Now - <span className="font-bold">responds in about {service.responseTime} min</span>
                </div>
                <p className="text-gray-700 mb-4">
                  {service.description.split(' ').slice(0, 20).join(' ')}...{' '}
                  <button className="text-blue-500 hover:underline">See more</button>
                </p>
                <div className="flex items-center justify-between">
                  <div>
                    <MessageCircle className='inline' /> Contact for price
                  </div>
                  <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    View Profile
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      );
    }

    export default ServiceList;
