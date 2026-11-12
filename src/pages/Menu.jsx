import { useState } from 'react';
import { Search } from 'lucide-react';
import { MENU_ITEMS } from '../data/menuData';
import { useCart } from '../context/CartContext';

export default function Menu() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const { addToCart } = useCart();

  const categories = ['All', 'Burgers', 'Pizzas', 'Desserts', 'Drinks'];

  const filteredItems = MENU_ITEMS.filter((item) => {
    const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center max-w-2xl mx-auto mb-10">
        <h1 className="text-4xl font-extrabold text-stone-900">Our Menu</h1>
        <p className="text-stone-600 mt-2">Filter by category or search for your favorite dish.</p>
      </div>

      {/* Controls */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-10">
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-orange-600 text-white'
                  : 'bg-white border border-stone-200 text-stone-700 hover:bg-stone-100'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="relative w-full md:w-72">
          <Search className="w-4 h-4 text-stone-400 absolute left-3.5 top-3" />
          <input
            type="text"
            placeholder="Search dishes..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 bg-white border border-stone-200 rounded-full text-sm focus:outline-none focus:border-orange-600"
          />
        </div>
      </div>

      {/* Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredItems.map((item) => (
          <div key={item.id} className="bg-white rounded-2xl border border-stone-200 overflow-hidden flex flex-col">
            <img src={item.image} alt={item.name} className="w-full h-52 object-cover" />
            <div className="p-6 flex-1 flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-center text-xs text-stone-500 mb-1">
                  <span>{item.category}</span>
                  <span>⏱ {item.prepTime}</span>
                </div>
                <div className="flex justify-between items-start gap-2">
                  <h3 className="font-bold text-lg text-stone-900">{item.name}</h3>
                  <span className="font-bold text-orange-600">${item.price.toFixed(2)}</span>
                </div>
                <p className="text-sm text-stone-600 mt-2">{item.description}</p>
              </div>
              <button
                onClick={() => addToCart(item)}
                className="mt-6 w-full bg-orange-600 hover:bg-orange-700 text-white font-semibold py-2.5 rounded-xl transition-colors cursor-pointer"
              >
                + Add to Order
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}