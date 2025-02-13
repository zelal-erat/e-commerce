export default function ShopCard() {
    return (
        <div className="bg-white">
            <div className="container mx-auto py-12">
                <h2 className="text-2xl font-bold mb-4 text-center">EDITOR'S PICK</h2>
                <p className="text-gray-600 text-center mb-8">Problems trying to resolve the conflict between</p>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                    <div className="flex flex-col items-center relative">
                        <img src="https://images.placeholders.dev/350x150" alt="Men's Clothing" className="rounded-md w-full" />
                        <button className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">MEN</button>
                    </div>
                    <div className="flex flex-col items-center relative">
                        <img src="https://images.placeholders.dev/350x150" alt="Women's Clothing" className="rounded-md w-full" />
                        <button className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">WOMEN</button>
                    </div>

                    <div className="flex flex-col items-center relative">
                        <img src="https://images.placeholders.dev/350x150" alt="Accessories" className="rounded-md w-full" />
                        <button className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">ACCESSORIES</button>
                    </div>
                    <div className="flex flex-col items-center relative">
                        <img src="https://images.placeholders.dev/350x150" alt="Accessories" className="rounded-md w-full" />
                        <button className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">ACCESSORIES</button>
                    </div>

                </div>
            </div>
        </div>
    );
}
