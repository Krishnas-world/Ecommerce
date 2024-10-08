import { Card, CardContent } from "@/components/ui/card";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

export default function Section3() {
  const cakes = [
    { name: "Black forest", image: "/Fb/BFC/Blackforest_001_1.jpg" },
    { name: "Strawberry Cake", image: "/Fb/StrawberryC/Strawberry_008_1.jpg" },
    { name: "Red velvet", image: "/Fb/RedVC/Redvelvet_002_1.jpg" },
  ];

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-14 pb-12 pt-4">
      {/* Pin Code Part */}
      <div className="bg-freshBake-300 flex flex-col sm:flex-row justify-between items-center text-white p-6 sm:p-10 my-6 rounded-2xl shadow-lg space-y-4 sm:space-y-0 sm:space-x-6">
        {/* Heading */}
        <h2 className="text-lg sm:text-2xl font-semibold text-center sm:text-left">
          Enter your pincode to check free delivery eligibility!
        </h2>

        {/* Input and Button Container */}
        <div className="flex items-center w-full sm:w-auto space-x-4">
          <Input
            className="flex-1 bg-white text-black placeholder-gray-500 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-freshBake-100"
            placeholder="Enter your pincode..."
            type="text"
          />
          <Button
            className="bg-white text-freshBake-300 font-semibold rounded-lg px-6 py-3 hover:bg-freshBake-200 transition-colors duration-200"
            size="lg"
            variant="default"
          >
            Check
          </Button>
        </div>
      </div>

      <h2 className="flex pb-6 sm:pb-10 font-bold text-xl sm:text-2xl text-freshBake-300">
        Trends you can&apos;t miss out on!!
      </h2>

      {/* Responsive Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {/* Left Large Card - Takes full width on mobile */}
        <div className="lg:col-span-1">
          <Card className="overflow-hidden rounded-2xl shadow-lg border border-freshBake-300">
            <CardContent className="p-0">
              <div className="relative w-full h-80 flex items-center justify-center">
                <img
                  src={cakes[0].image}
                  alt={cakes[0].name}
                  className="w-full h-full object-cover"
                />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Right Two Cards - Side by side on next row */}
        <div className="lg:col-span-1 flex flex-col space-y-4">
          <div className="grid grid-cols-2 gap-4">
            {cakes.slice(1).map((cake) => (
              <Card
                key={cake.name}
                className="overflow-hidden shadow-lg border border-freshBake-300 rounded-2xl"
              >
                <CardContent className="p-0">
                  <div className="relative w-full h-80 flex items-center justify-center">
                    <img
                      src={cake.image}
                      alt={cake.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
      <span className='flex flex-row justify-center items-center p-6'>
        <Button className='bg-freshBake-200 border border-freshBake-300 text-black font-semibold px-8 rounded-xl'>View All</Button>
      </span>

      {/* Custom cake part */}
      <div className="bg-freshBake-300 flex flex-col sm:flex-row justify-between items-center text-white p-6 sm:p-10 my-6 rounded-2xl shadow-lg space-y-4 sm:space-y-0 sm:space-x-6">
        {/* Cake Customization Text and Heading */}
        <h2 className="text-lg sm:text-2xl font-semibold text-center sm:text-left">
          Looking for something unique? We customize cakes just for you!!!
        </h2>

        {/* Cake Images */}
        <div className="flex items-center space-x-4">
          <img
            src="/Fb/BFC/Blackforest_001_1.jpg"
            alt="Cake 1"
            className="w-24 h-24 rounded-full object-cover border-4 border-white"
          />
          <img
            src="/Fb/BFC/Blackforest_001_1.jpg"
            alt="Cake 2"
            className="w-24 h-24 rounded-full object-cover border-4 border-white"
          />
        </div>
      </div>

    </div>
  );