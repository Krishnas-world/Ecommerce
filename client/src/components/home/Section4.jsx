import { useState } from 'react';
import { Button } from '../ui/button';

const items = [
  {
    id: 1,
    name: 'Egg Puffs',
    image: '/Fb/Snacks/Eggpuff_004_1.jpg',
    type: 'snack', // This helps in filtering between snacks and desserts
  },
  {
    id: 2,
    name: 'Veg Puff',
    image: '/Fb/Snacks/Vagpuff_002_1.jpg',
    type: 'snack',
  },
  {
    id: 3,
    name: 'Cream roll',
    image: '/Fb/Dessert/Cream_roll_001_1.jpg',
    type: 'dessert',
  },
  {
    id: 4,
    name: 'Doughnut',
    image: '/Fb/Dessert/Doughnut_001_2.jpg',
    type: 'dessert',
  },
];

const Section4 = () => {
  const [activeTab, setActiveTab] = useState('snack'); // Manages which tab is active

  const filteredItems = items.filter(item => item.type === activeTab);

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-14 pb-12 pt-4">
      {/* Craving More Section */}
      <div className="bg-freshBake-600 p-6 sm:p-10 my-6 rounded-2xl shadow-lg">
        <div className="flex flex-col sm:flex-row">
          {/* Text Section */}
          <div className="flex-1 sm:flex-1 text-white space-y-4 sm:pr-8">
            <h2 className="text-lg sm:text-2xl text-freshBake-300 font-bold text-center sm:text-left">
              Craving More?
            </h2>
            <p className="text-lg font-normal sm:text-md text-freshBake-300 italic text-center sm:text-left">
              If you loved our cakes, you&apos;ll be obsessed with our snacks and desserts. Indulge in the perfect balance of flavor, texture, and creativity—made with love, just for you!!
            </p>
          </div>

          {/* Image Section */}
          <div className="flex-1 flex items-center justify-center sm:justify-end space-x-4 mt-4 sm:mt-0">
            <img
              src="/Fb/Snacks/Aloo65_003_1.jpg"
              alt="Aloo Puff"
              className="w-24 h-24 sm:w-28 sm:h-28 rounded-full object-cover border-4 border-white"
            />
            <img
              src="/Fb/Dessert/Doughnut_001_2.jpg"
              alt="Doughnut"
              className="hidden lg:block w-24 h-24 sm:w-28 sm:h-28 rounded-full object-cover border-4 border-white"
            />
            <img
              src="/Fb/Snacks/Paneerpuff_001_1.jpg"
              alt="Paneer Puff"
              className="w-24 h-24 sm:w-28 sm:h-28 rounded-full object-cover border-4 border-white"
            />
          </div>
        </div>
      </div>

      {/* Snacks and Desserts Tabs */}
      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold text-[#6D4C41]">snacks & desserts</h3>
        <div className="flex justify-center mt-4">
          <button
            className={`px-4 py-2 font-semibold rounded-l-xl ${activeTab === 'snack' ? 'bg-[#6D4C41] text-white' : 'bg-white text-[#6D4C41] border-2 border-[#6D4C41]'} transition duration-300`}
            onClick={() => setActiveTab('snack')}
            type="button"
          >
            snacks
          </button>
          <button
            className={`px-4 py-2 font-semibold rounded-r-xl ${activeTab === 'dessert' ? 'bg-[#6D4C41] text-white' : 'bg-white text-[#6D4C41] border-2 border-[#6D4C41]'} transition duration-300`}
            onClick={() => setActiveTab('dessert')}
            type="button"
          >
            desserts
          </button>
        </div>
      </div>

      {/* Snacks/Desserts Grid with Transitions */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 transition-opacity duration-500 ease-in-out">
        {filteredItems.map(item => (
          <div key={item.id} className="relative ">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-40 sm:h-48 object-cover"
              />
              <div className="p-4 text-center">
                <h4 className="text-lg font-semibold text-freshBake-300">{item.name}</h4>
                <Button className="mt-2 bg-[#6D4C41] text-white hover:bg-[#8B5A43] transition duration-300">
                  View Details
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};

export default Section4;
