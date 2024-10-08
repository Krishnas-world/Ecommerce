import { Card, CardContent } from "@/components/ui/card";


export default function Section2() {
  const cakes = [
    { name: "Black forest", image: "/Fb/BFC/Blackforest_001_1.jpg" },
    { name: "Strawberry Cake", image: "/Fb/StrawberryC/Strawberry_008_1.jpg" },
    { name: "Red velvet", image: "/Fb/RedVC/Redvelvet_002_1.jpg" },
    { name: "Pineapple Cake", image: "/Fb/PineCake/Pineapple_004_1.jpg" },
    { name: "Chocolate Cake", image: "/Fb/CC/Chocolate_cake_013_2.jpg" },
    { name: "Kids Cakes", image: "/Fb/KidsC/Mickeymouse_011_2.jpg" },
    { name: "Vanilla cake", image: "/Fb/VanillaC/Venila_019_1.jpg" },
    { name: "Butterscotch Cake", image: "/Fb/BSC/Butterscotch_009_1.jpg" },
  ];
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-14 pb-5">
      <h2 className="flex justify-center pb-6 sm:pb-10 font-bold text-xl sm:text-2xl text-freshBake-300">Our Best Seller Cakes</h2>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8">
        {cakes.map((cake) => (
          <Card key={cake.name} className="overflow-hidden shadow-lg border border-freshBake-300 rounded-2xl">
            <CardContent className="p-0">
              {/* Image container with fixed width and height */}
              <div className="relative w-full h-[200px] sm:h-[250px]">
                <img
                  src={cake.image}
                  alt={cake.name}
                  className="w-full h-full object-cover rounded-t-2xl"  // Makes the image fill the container
                />
              </div>
              {/* Text container */}
              <div className="bg-[#F6EED8] p-2 text-center">
                <p className="text-sm font-medium">{cake.name}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
