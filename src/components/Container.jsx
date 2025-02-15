export default function Container() {
    return (
      <div className="w-full max-w-sm  lg:max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-lg flex flex-col-reverse lg:gap-4 lg:flex-row items-center lg:items-start">
        <img
          src="https://images.placeholders.dev/350x150"
          alt="Happy couple"
          className="w-full lg:w-full rounded-lg object-cover"
        />
        <div className="text-center lg:text-left lg:w-1/2 p-6">
          <p className="text-xs uppercase text-gray-500">Summer 2020</p>
          <h2 className="text-xl font-bold text-gray-900 mt-2">Part of the Neural Universe</h2>
          <p className="text-sm text-gray-600 mt-2">
            We know how large objects will act, but things on a small scale.
          </p>
          <div className="mt-4 flex flex-col lg:flex-row gap-2">
            <button className="bg-green-600 text-white py-2 px-4 rounded-md font-semibold shadow-md hover:bg-green-700">
              BUY NOW
            </button>
            <button className="border border-green-600 text-green-600 py-2 px-4 rounded-md font-semibold hover:bg-green-100">
              READ MORE
            </button>
          </div>
        </div>
      </div>
    );
  }
  