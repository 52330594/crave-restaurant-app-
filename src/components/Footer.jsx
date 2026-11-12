import { UtensilsCrossed } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-stone-900 text-stone-400 py-10 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2 text-white font-bold text-lg">
          <UtensilsCrossed className="w-5 h-5 text-orange-500" />
          <span>CRAVE.</span>
        </div>
        <p className="text-sm">© {new Date().getFullYear()} Crave Kitchen. CSCI426 Web Programming Project.</p>
      </div>
    </footer>
  );
}