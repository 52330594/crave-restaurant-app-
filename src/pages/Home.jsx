import { Link } from 'react-router-dom';
import { ArrowRight, Clock, Flame, ShieldCheck } from 'lucide-react';
import { MENU_ITEMS } from '../data/menuData';
import { useCart } from '../context/CartContext';

export default function Home() {
  const { addToCart } = useCart();
  const featured = MENU_ITEMS.filter((item) => item.popular);

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-stone-900 text-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <span className="inline-block bg-orange-600/20 text-orange-400 text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider">
              Freshly Made to Order
            </span>
            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight leading-tight">
              Artisanal Street Food, Delivered <span className="text-orange-500">Hot.</span>
            </h1>
            <p className="text-stone-300 text-lg max-w-lg">
              Craft smash burgers, wood-fired sourdough pizzas, and house coolers prepared fresh the moment you order.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/menu"
                className="inline-flex items-center gap-2 bg-orange-600 hover:bg-orange-700 text-white font-semibold px-6 py-3.5 rounded-xl transition-colors"
              >
                Explore Menu <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/track"
                className="inline-flex items-center gap-2 bg-stone-800 hover:bg-stone-700 text-white font-semibold px-6 py-3.5 rounded-xl transition-colors"
              >
                Track Active Order
              </Link>
            </div>
          </div>
          <img
            src="https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=900&q=80"
            alt="Signature Burger"
            className="rounded-2xl shadow-2xl object-cover w-full h-80 sm:h-96"
          />
        </div>
      </section>

      {/* Highlights */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 grid sm:grid-cols-3 gap-8">
        <div className="flex items-start gap-4 p-6 bg-white rounded-2xl border border-stone-200">
          <Flame className="w-8 h-8 text-orange-600 shrink-0" />
          <div>
            <h3 className="font-bold text-stone-900">Wood-Fired & Seared</h3>
            <p className="text-sm text-stone-600 mt-1">Cooked over open flame and cast iron for unmatched flavor.</p>
          </div>
        </div>
        <div className="flex items-start gap-4 p-6 bg-white rounded-2xl border border-stone-200">
          <Clock className="w-8 h-8 text-orange-600 shrink-0" />
          <div>
            <h3 className="font-bold text-stone-900">Under 30 Mins</h3>
            <p className="text-sm text-stone-600 mt-1">Real-time kitchen tracking from prep station to your doorstep.</p>
          </div>
        </div>
        <div className="flex items-start gap-4 p-6 bg-white rounded-2xl border border-stone-200">
          <ShieldCheck className="w-8 h-8 text-orange-600 shrink-0" />
          <div>
            <h3 className="font-bold text-stone-900">100% Fresh Ingredients</h3>
            <p className="text-sm text-stone-600 mt-1">Locally sourced produce, daily baked brioche, zero preservatives.</p>
          </div>
        </div>
      </section>

      {/* Featured Dishes */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold text-stone-900">Customer Favorites</h2>
          <Link to="/menu" className="text-orange-600 font-semibold hover:underline">
            View Full Menu →
          </Link>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {featured.map((dish) => (
            <div key={dish.id} className="bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-xs hover:shadow-md transition-shadow flex flex-col">
              <img src={dish.image} alt={dish.name} className="w-full h-52 object-cover" />
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-start gap-2">
                    <h3 className="font-bold text-lg text-stone-900">{dish.name}</h3>
                    <span className="font-bold text-orange-600">${dish.price.toFixed(2)}</span>
                  </div>
                  <p className="text-sm text-stone-600 mt-2">{dish.description}</p>
                </div>
                <button
                  onClick={() => addToCart(dish)}
                  className="mt-6 w-full bg-stone-900 hover:bg-orange-600 text-white font-medium py-2.5 rounded-xl transition-colors cursor-pointer"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}