import { useState } from "react";
import { useNavigate, useParams } from "react-router";

const foodItems = [
  { id: 1, name: "Jelebi", category: "Jelebi", img: "https://source.unsplash.com/300x200/?jelebi" },
  { id: 2, name: "Momos", category: "Momos", img: "https://source.unsplash.com/300x200/?momos" },
  { id: 3, name: "Chicken Biriyani", category: "Biriyani", img: "https://source.unsplash.com/300x200/?biriyani" },
  { id: 4, name: "Checknox Delight", category: "Checknox", img: "https://source.unsplash.com/300x200/?food" },
  { id: 5, name: "Sweet Jelebi", category: "Jelebi", img: "https://source.unsplash.com/300x200/?indian-dessert" },
];

const categories = ["Jelebi", "Momos", "Biriyani", "Checknox"];
 
export default function SearchPage () {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const navigate = useNavigate();
  const {text} = useParams();
  console.log(text)

  const handleCheckboxChange = (category:any) => {
    if (selectedCategories.includes(category)) {
      setSelectedCategories(selectedCategories.filter((c) => c !== category));
    } else {
      setSelectedCategories([...selectedCategories, category]);
    }
  };

  const filteredItems = foodItems.filter(
    (item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (selectedCategories.length === 0 || selectedCategories.includes(item.category))
  );

  return (
    <div className="min-h-screen p-5 md:p-10 bg-gray-100">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* Left Side - Filters */}
        <div className="bg-white p-5 rounded-xl shadow-md">
          <h2 className="text-xl font-semibold mb-4">Filter by Category</h2>
          {categories.map((cat) => (
            <div key={cat} className="flex items-center mb-3">
              <input
                type="checkbox"
                id={cat}
                checked={selectedCategories.includes(cat)}
                onChange={() => handleCheckboxChange(cat)}
                className="mr-2"
              />
              <label htmlFor={cat} className="text-gray-700">{cat}</label>
            </div>
          ))}
        </div>

        {/* Right Side - Search + Cards */}
        <div className="md:col-span-3">
          {/* Search Bar */}
          <div className="mb-6">
            <input
              type="text"
              placeholder="Search food..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border shadow-sm focus:outline-none focus:ring-2 focus:ring-red-400"
            />
          </div>

          {/* Food Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item) => (
              <div key={item.id} className="bg-white rounded-xl shadow-md overflow-hidden">
                <img src={item.img} alt={item.name} className="w-full h-40 object-cover" />
                <div className="flex justify-between p-4">
                  <div>
                  <h3 className="text-lg font-semibold">{item.name}</h3>
                  <p className="text-sm text-gray-500">{item.category}</p>
                  </div>
                   <div>
                   <button onClick={()=>navigate(`/food/${item.id}`)} className="btn btn-soft btn-primary">Reed more</button>
                   </div>
                </div>
              </div>
            ))}

            {filteredItems.length === 0 && (
              <p className="text-gray-500 col-span-full text-center">No items found.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
