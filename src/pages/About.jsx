export default function About() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-14 space-y-12">
      <div className="grid md:grid-cols-2 gap-10 items-center">
        <img
          src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80"
          alt="Our Kitchen"
          className="rounded-2xl shadow-lg object-cover w-full h-80"
        />
        <div className="space-y-4">
          <span className="text-orange-600 font-bold text-sm uppercase tracking-wider">Our Story</span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-stone-900">
            Crafted From Scratch Since 2020
          </h1>
          <p className="text-stone-600 leading-relaxed">
            Crave started with a simple idea: fast food shouldn't mean compromised quality. Every patty is ground in-house daily, our pizza dough ferments for 48 hours, and every sauce is whipped fresh each morning.
          </p>
        </div>
      </div>

      <div className="grid sm:grid-cols-3 gap-6 text-center">
        <div className="bg-white p-6 rounded-2xl border border-stone-200">
          <div className="text-3xl font-extrabold text-orange-600">48h</div>
          <div className="text-sm font-medium text-stone-600 mt-1">Cold-Fermented Dough</div>
        </div>
        <div className="bg-white p-6 rounded-2xl border border-stone-200">
          <div className="text-3xl font-extrabold text-orange-600">100%</div>
          <div className="text-sm font-medium text-stone-600 mt-1">Locally Sourced Produce</div>
        </div>
        <div className="bg-white p-6 rounded-2xl border border-stone-200">
          <div className="text-3xl font-extrabold text-orange-600">4.9★</div>
          <div className="text-sm font-medium text-stone-600 mt-1">Average Customer Rating</div>
        </div>
      </div>
    </div>
  );
}