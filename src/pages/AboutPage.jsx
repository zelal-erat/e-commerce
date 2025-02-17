import { useState } from "react";
import { Play } from "lucide-react";
import TeamPage from "./TeamPage";
import Clients from "../components/Clients";

export default function AboutPage() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="max-w-7xl mx-auto bg-white text-center p-6 ">
      <div className="lg:flex items-center justify-between">
      <div className="text-center lg:w-1/2 lg:text-left">
      <h2 className="text-3xl font-bold text-gray-900">ABOUT US</h2>
      <p className="text-gray-600 mt-4 text-lg lg:pr-20">
        We know how large objects will act, but things on a small scale just do not act that way.
      </p>
      <button className="mt-6 bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600 transition">
        Get Quote Now
      </button>
      </div>

      <div className="mt-8 relative">
        <img
          src="https://images.placeholders.dev/800x400"
          alt="About Us"
          className="w-full rounded-lg"
        />
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-48 h-48 bg-pink-100 rounded-full -z-10"></div>
      </div>
      </div>

      <div className="flex flex-col items-center justify-center mt-12 px-6 text-center lg:flex-row lg:justify-between lg:px-0">
        <div className="lg:w-1/2 lg:text-left"> 
        <p className="text-red-500 text-lg font-medium">Problems trying</p>
        <h1 className="text-4xl font-bold text-gray-900 mt-4">
          Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
        </h1>
        </div>
        <div>
        <p className="text-gray-500 text-lg mt-6 max-w-2xl">
          Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics
        </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mt-16 text-center">
        <div>
          <p className="text-5xl font-bold text-gray-900">15K</p>
          <p className="text-gray-500 text-lg">Happy Customers</p>
        </div>
        <div>
          <p className="text-5xl font-bold text-gray-900">150K</p>
          <p className="text-gray-500 text-lg">Monthly Visitors</p>
        </div>
        <div>
          <p className="text-5xl font-bold text-gray-900">15</p>
          <p className="text-gray-500 text-lg">Countries Worldwide</p>
        </div>
        <div>
          <p className="text-5xl font-bold text-gray-900">100+</p>
          <p className="text-gray-500 text-lg">Top Partners</p>
        </div>
      </div>

      <div className="flex items-center justify-center mt-20">
        {!isPlaying ? (
          <div
            className="relative w-96 h-96 rounded-2xl overflow-hidden cursor-pointer lg:w-full "
            onClick={() => setIsPlaying(true)}
          >
            <img
              src="https://source.unsplash.com/800x800/?mountain"
              alt="Video Thumbnail"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30">
              <div className="w-20 h-20 bg-blue-500 rounded-full flex items-center justify-center hover:bg-blue-600 transition">
                <Play className="text-white w-12 h-12" />
              </div>
            </div>
          </div>
        ) : (
          <div className="w-96 h-96">
            <iframe
              className="w-full h-full rounded-2xl"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
              title="YouTube video player"
              allowFullScreen
            ></iframe>
          </div>
        )}
      </div>

      <TeamPage />

      <div className="mt-20 bg-gray-100 ">
        <h2 className="text-4xl font-bold text-gray-900">Big Companies Are Here</h2>
        <p className="text-gray-600 mt-4 text-lg max-w-2xl mx-auto">
          Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics.
        </p>
        <Clients />
      </div>

      <div className="flex flex-col items-center justify-center bg-[#2A7CC7] p-12 mt-20 text-white lg:flex-row lg:justify-between lg:bg-white ">
        <div className="text-center lg:w-1/2  bg-[#2A7CC7] lg:text-left p-[50px]"> 
          <h1 className="text-lg font-medium mb-4">WORK WITH US</h1>
          <p className="text-5xl mb-8 font-bold">Now Let's grow Yours</p>
          <p className="text-xs mb-8">
            The gradual accumulation of<br />
            information about atomic and<br />
            small-scale behavior during the<br />
            first quarter of the 20th
          </p>
          <button className="border border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-[#2A7CC7] transition">
            Button
          </button>
        </div>
        <div className="hidden lg:block padding-[50px]">
          <img src="https://images.placeholders.dev/350" alt="" />
        </div>
      </div>
    </div>
  );
}