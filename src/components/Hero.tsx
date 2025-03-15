import React, { useState } from 'react';
    import servicesData from '../servicesData';
    import { useNavigate } from 'react-router-dom';

    function Hero() {
      const [searchTerm, setSearchTerm] = useState('');
      const [suggestions, setSuggestions] = useState([]);
      const navigate = useNavigate();

      const handleInputChange = (event) => {
        const value = event.target.value;
        setSearchTerm(value);

        // Simple suggestion logic (filter by category or service name)
        const filteredSuggestions = servicesData.filter(
          (service) =>
            service.category.toLowerCase().includes(value.toLowerCase()) ||
            service.name.toLowerCase().includes(value.toLowerCase())
        );
        setSuggestions(filteredSuggestions.slice(0, 5)); // Limit to 5 suggestions
      };

      const handleSearchSubmit = (event) => {
        event.preventDefault();
        if (searchTerm.trim() !== '') {
          navigate(`/services?q=${encodeURIComponent(searchTerm)}`);
        }
      };

      const handleSuggestionClick = (suggestion) => {
        setSearchTerm(suggestion.name);
        setSuggestions([]);
        navigate(`/services?q=${encodeURIComponent(suggestion.name)}`);
      };

      return (
        <section className="bg-gray-100 py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Find local professionals for pretty much anything.
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-8">
              From home repair to personal training, we've got you covered.
            </p>
            <form onSubmit={handleSearchSubmit} className="flex justify-center relative">
              <input
                type="text"
                placeholder="What service do you need?"
                className="border rounded-l-full py-3 px-6 w-full md:w-2/3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={searchTerm}
                onChange={handleInputChange}
              />
              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-r-full"
              >
                Get Started
              </button>
              {suggestions.length > 0 && (
                <ul className="absolute z-10 top-full mt-2 w-full md:w-2/3 bg-white border rounded-md shadow-lg">
                  {suggestions.map((suggestion) => (
                    <li
                      key={suggestion.id}
                      className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                      onClick={() => handleSuggestionClick(suggestion)}
                    >
                      {suggestion.name} ({suggestion.category})
                    </li>
                  ))}
                </ul>
              )}
            </form>
          </div>
        </section>
      );
    }

    export default Hero;
