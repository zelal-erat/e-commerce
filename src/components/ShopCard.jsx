export default function ShopCard() {
    return (
        <div className="bg-white py-12">
            <div className="container mx-auto text-center px-4">
                <h2 className="text-2xl font-bold mb-2">EDITOR'S PICK</h2>
                <p className="text-gray-500 mb-6">Problems trying to resolve the conflict between</p>

                {/* Grid Yapısı */}
                <div className="flex flex-col gap-4 lg:flex lg:flex-row lg:justify-center  lg:gap-6 max-w-5xl mx-auto">
                    
                    {/* Büyük Görseller - Sol Taraf */}
                    <div className="lg:col-span-2 flex flex-col gap-4 lg:flex lg:flex-row">
                        {/* MEN */}
                        <div className="relative">
                            <img src="https://images.placeholders.dev/300x300" alt="Men" className="w-full h-full object-cover rounded-md" />
                            <button className="absolute bottom-4 left-4 bg-white text-black font-semibold px-6 py-2 shadow-md">MEN</button>
                        </div>

                        {/* WOMEN */}
                        <div className="relative">
                            <img src="https://images.placeholders.dev/300x300" alt="Women" className="w-full h-full object-cover rounded-md" />
                            <button className="absolute bottom-4 left-4 bg-white text-black font-semibold px-6 py-2 shadow-md">WOMEN</button>
                        </div>
                    </div>

                    {/* Küçük Görseller - Sağ Taraf */}
                    <div className="flex flex-col gap-4">
                        {/* ACCESSORIES */}
                        <div className="relative">
                            <img src="https://images.placeholders.dev/350x150" alt="Accessories" className="w-full h-full object-cover rounded-md" />
                            <button className="absolute bottom-4 left-4 bg-white text-black font-semibold px-6 py-2 shadow-md">ACCESSORIES</button>
                        </div>

                        {/* KIDS */}
                        <div className="relative">
                            <img src="https://images.placeholders.dev/350x150" alt="Kids" className="w-full h-full object-cover rounded-md" />
                            <button className="absolute bottom-4 left-4 bg-white text-black font-semibold px-6 py-2 shadow-md">KIDS</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
