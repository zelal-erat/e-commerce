import { AlarmCheck, ChartArea } from "lucide-react";

export default function BlogPage() {
    const products = [
      {
        id: 1,
        category: "Google, Trending, New",
        title: "Loudest à la Madison #1 (L'integral)",
        description: "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
        date: "22 April 2021",
        comments: 10,
        image: "https://images.placeholders.dev/600x400",
      },
      {
        id: 2,
        category: "Google, Trending, New",
        title: "Loudest à la Madison #1 (L'integral)",
        description: "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
        date: "22 April 2021",
        comments: 10,
        image: "https://images.placeholders.dev/600x400",
      },
      {
        id: 3,
        category: "Google, Trending, New",
        title: "Loudest à la Madison #1 (L'integral)",
        description: "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
        date: "22 April 2021",
        comments: 10,
        image: "https://images.placeholders.dev/600x400",
      },
    ];
  
    return (
      <div className="max-w-6xl mx-auto p-4 ">
        <p className="text-xs uppercase text-blue-600 text-center">Practice Advice</p>
        <h2 className="text-2xl font-bold text-center mt-2">Featured Posts</h2>
        <p className="text-gray-600 text-center mt-1">
          Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics
        </p>
  
        <div className="mt-6 space-y-6 lg:flex lg:justify-center lg:gap-6 lg:space-y-0">
          {products.map((product) => (
            <div key={product.id} className="bg-white shadow-lg rounded-lg overflow-hidden w-full lg:w-1/3">
              <img src={product.image} alt={product.title} className="w-full h-48 object-cover" />
              <div className="p-4">
                <span className="text-xs bg-red-500 text-white px-2 py-1 rounded">NEW</span>
                <p className="text-xs text-gray-500 mt-1">{product.category}</p>
                <h3 className="text-lg font-bold mt-1">{product.title}</h3>
                <p className="text-sm text-gray-600 mt-1">{product.description}</p>
                <div className="flex items-center justify-between text-gray-500 text-xs mt-2">
                  <span className="flex items-center gap-1">
                    <AlarmCheck className="text-sky-500 w-4 h-4" /> {product.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <ChartArea className="text-[#23856D] w-4 h-4" /> {product.comments} comments
                  </span>
                </div>
                <button className="mt-4 text-blue-600 font-semibold hover:underline flex items-center">
                  Learn More →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
}
