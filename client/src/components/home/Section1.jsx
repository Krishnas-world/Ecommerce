export default function Section1() {
    const categories = [
        { name: "Flowers", image: "/flowers.avif" },
        { name: "Cakes", image: "/cakes.webp" },
        { name: "Snacks", image: "/snacks.jpg" },
        { name: "Deserts", image: "/dessert.jpg" },
        { name: "Ice Cream", image: "/icecream.jpg" },
        { name: "Combos", image: "/combos.jpeg" }
    ];

    return (
        <div className="flex flex-col min-h-screen pt-20">
            <main className="flex-1 md:p-12">
                <section className="container mx-auto px-4 py-8">
                    <div className="relative rounded-lg overflow-hidden">
                        <img
                            alt="Birthday flowers"
                            className="object-cover w-full h-[300px] md:h-[400px]"
                            src="/placeholder.svg"
                            style={{
                                aspectRatio: "1200/400",
                                objectFit: "cover",
                            }}
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                            <div className="text-center text-white">
                                <h2 className="text-2xl md:text-4xl font-bold mb-2">BRIGHTEN THEIR SPECIAL DAY</h2>
                                <h3 className="text-4xl md:text-6xl font-bold mb-4">Birthday</h3>
                                <p className="text-lg md:text-2xl">FLOWERS</p>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="container mx-auto px-4 py-8">
                    <h2 className="text-xl md:text-2xl text-freshBake-300 font-bold mb-4">Featured Categories</h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                        {categories.map((category) => (
                            <div key={category.name} className="flex flex-col items-center">
                                <img
                                    src={category.image}
                                    alt={category.name}
                                    className="rounded-2xl object-cover shadow-lg border border-[#664041]"
                                    style={{ width: '100%', height: '150px', maxHeight: '200px' }}  // Adjusted size for responsiveness
                                />
                                <h3 className="font-semibold flex items-center justify-center mt-2 text-sm md:text-base">{category.name}</h3>
                            </div>
                        ))}
                    </div>
                </section>
            </main>
        </div>
    );
}
