import { Link } from 'react-router-dom';
import { CheckCircle2, ChefHat, Bike, PackageCheck, ArrowRight } from 'lucide-react';
import { useCart } from '../context/CartContext';

export default function OrderTracker() {
  const { activeOrder, setActiveOrder } = useCart();

  const steps = [
    { id: 1, title: 'Order Received', desc: 'Kitchen has confirmed your items', icon: CheckCircle2 },
    { id: 2, title: 'Preparing Food', desc: 'Chefs are cooking your meal fresh', icon: ChefHat },
    { id: 3, title: 'Out for Delivery', desc: 'Courier is on the way to your address', icon: Bike },
    { id: 4, title: 'Delivered', desc: 'Enjoy your meal!', icon: PackageCheck },
  ];

  const advanceStatus = () => {
    if (activeOrder && activeOrder.statusStep < 4) {
      setActiveOrder({ ...activeOrder, statusStep: activeOrder.statusStep + 1 });
    }
  };

  if (!activeOrder) {
    return (
      <div className="max-w-xl mx-auto px-4 py-20 text-center space-y-6">
        <h1 className="text-3xl font-bold text-stone-900">No Active Orders</h1>
        <p className="text-stone-600">
          Place an order from our menu to see live status updates here.
        </p>
        <Link
          to="/menu"
          className="inline-flex items-center gap-2 bg-orange-600 text-white font-semibold px-6 py-3 rounded-xl"
        >
          Go to Menu <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12">
      <div className="bg-white rounded-2xl border border-stone-200 p-6 sm:p-10 shadow-xs">
        <div className="flex flex-wrap justify-between items-center gap-4 border-b border-stone-200 pb-6">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-orange-600">Live Tracking</span>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-stone-900 mt-1">Order {activeOrder.id}</h1>
            <p className="text-sm text-stone-500 mt-1">
              Delivering to <strong className="text-stone-800">{activeOrder.customerName}</strong> • {activeOrder.address}
            </p>
          </div>
          {activeOrder.statusStep < 4 && (
            <button
              onClick={advanceStatus}
              className="bg-stone-900 hover:bg-orange-600 text-white text-sm font-medium px-4 py-2.5 rounded-xl transition-colors cursor-pointer"
            >
              Simulate Next Stage →
            </button>
          )}
        </div>

        {/* Dynamic Stepper */}
        <div className="my-8 space-y-6">
          {steps.map((step) => {
            const Icon = step.icon;
            const isCompleted = activeOrder.statusStep >= step.id;
            return (
              <div key={step.id} className="flex items-start gap-4">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 ${
                    isCompleted ? 'bg-orange-600 text-white' : 'bg-stone-100 text-stone-400'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className={`font-bold ${isCompleted ? 'text-stone-900' : 'text-stone-400'}`}>
                    {step.title}
                  </h3>
                  <p className="text-sm text-stone-500">{step.desc}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Receipt Summary */}
        <div className="bg-stone-50 rounded-xl p-5 border border-stone-200">
          <h4 className="font-bold text-stone-900 mb-3">Order Summary</h4>
          <div className="space-y-2 text-sm">
            {activeOrder.items.map((item) => (
              <div key={item.id} className="flex justify-between text-stone-700">
                <span>{item.quantity}x {item.name}</span>
                <span>${(item.price * item.quantity).toFixed(2)}</span>
              </div>
            ))}
            <div className="border-t border-stone-200 pt-2 mt-2 flex justify-between font-bold text-stone-900 text-base">
              <span>Total Paid</span>
              <span>${activeOrder.total.toFixed(2)}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}