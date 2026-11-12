import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { X, Plus, Minus, ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';

export default function CartDrawer() {
  const { cart, isCartOpen, setIsCartOpen, updateQuantity, cartTotal, placeOrder } = useCart();
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const navigate = useNavigate();

  if (!isCartOpen) return null;

  const handleCheckout = (e) => {
    e.preventDefault();
    if (!name.trim() || !address.trim()) return;
    placeOrder(name, address);
    setName('');
    setAddress('');
    navigate('/track');
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/50 backdrop-blur-xs">
      <div className="w-full max-w-md bg-white h-full shadow-2xl flex flex-col justify-between p-6 overflow-y-auto">
        <div>
          <div className="flex items-center justify-between border-b border-stone-200 pb-4">
            <h2 className="text-xl font-bold text-stone-900 flex items-center gap-2">
              <ShoppingBag className="w-5 h-5 text-orange-600" /> Your Order
            </h2>
            <button onClick={() => setIsCartOpen(false)} className="p-1 text-stone-500 hover:text-stone-900 cursor-pointer">
              <X className="w-6 h-6" />
            </button>
          </div>

          {cart.length === 0 ? (
            <div className="text-center py-16 text-stone-500">
              Your cart is empty. Add some delicious dishes from the menu!
            </div>
          ) : (
            <div className="divide-y divide-stone-100 my-4">
              {cart.map((item) => (
                <div key={item.id} className="py-4 flex items-center justify-between gap-4">
                  <div>
                    <h4 className="font-semibold text-stone-900">{item.name}</h4>
                    <p className="text-sm text-stone-500">${(item.price * item.quantity).toFixed(2)}</p>
                  </div>
                  <div className="flex items-center gap-2 bg-stone-100 rounded-lg px-2 py-1">
                    <button onClick={() => updateQuantity(item.id, -1)} className="p-1 hover:text-orange-600 cursor-pointer">
                      <Minus className="w-4 h-4" />
                    </button>
                    <span className="text-sm font-semibold w-5 text-center">{item.quantity}</span>
                    <button onClick={() => updateQuantity(item.id, 1)} className="p-1 hover:text-orange-600 cursor-pointer">
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {cart.length > 0 && (
          <form onSubmit={handleCheckout} className="border-t border-stone-200 pt-4 space-y-4">
            <div className="flex justify-between text-lg font-bold text-stone-900">
              <span>Total</span>
              <span>${cartTotal.toFixed(2)}</span>
            </div>
            <input
              type="text"
              required
              placeholder="Your Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-3 py-2 border border-stone-300 rounded-lg text-sm focus:outline-none focus:border-orange-600"
            />
            <input
              type="text"
              required
              placeholder="Delivery Address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="w-full px-3 py-2 border border-stone-300 rounded-lg text-sm focus:outline-none focus:border-orange-600"
            />
            <button
              type="submit"
              className="w-full bg-orange-600 hover:bg-orange-700 text-white font-semibold py-3 rounded-xl transition-colors cursor-pointer"
            >
              Place Order & Track Live
            </button>
          </form>
        )}
      </div>
    </div>
  );
}