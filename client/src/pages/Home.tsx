import { useState } from "react";
import { useNavigate } from "react-router";

export default function Home (){
  const [searchText, setSearchText] = useState("");
  const navigate = useNavigate();
  return (
    <section className="w-full bg-white py-10 px-5 md:px-20">
      <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-10">
        {/* Left Side - Text and Search */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Find Your Favorite Food
          </h1>
          <p className="text-gray-600 text-lg mb-6">
            Discover the best restaurants near you and get your meal delivered fast.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-3">
            <input
              type="text"
              value={searchText}
              onChange={(e)=>setSearchText(e.target.value)}
              placeholder="Search for dishes or restaurants"
              className="w-full sm:w-3/4 px-4 py-3 border rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500"
            />
            <button onClick={()=>navigate(`search/${searchText}`)} className="w-full sm:w-auto px-6 py-3 bg-red-500 text-white rounded-xl hover:bg-red-600 transition duration-300">
              Search
            </button>
          </div>
        </div>

        {/* Right Side - Image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src="https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=800&q=80"
            alt="Delicious food"
            className="w-full max-w-md rounded-xl shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};
