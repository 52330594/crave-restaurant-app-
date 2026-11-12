import { useState } from 'react';
import { MapPin, Phone, Clock, CheckCircle } from 'lucide-react';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
      <div className="text-center max-w-xl mx-auto mb-12">
        <h1 className="text-4xl font-extrabold text-stone-900">Get in Touch</h1>
        <p className="text-stone-600 mt-2">Have a question, catering request, or table reservation? Send us a message.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-10">
        <div className="space-y-6 bg-white p-8 rounded-2xl border border-stone-200">
          <div className="flex items-start gap-4">
            <MapPin className="w-6 h-6 text-orange-600 shrink-0" />
            <div>
              <h3 className="font-bold text-stone-900">Location</h3>
              <p className="text-sm text-stone-600">Hamra Main Street, Beirut, Lebanon</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <Phone className="w-6 h-6 text-orange-600 shrink-0" />
            <div>
              <h3 className="font-bold text-stone-900">Phone</h3>
              <p className="text-sm text-stone-600">+961 1 555 019</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <Clock className="w-6 h-6 text-orange-600 shrink-0" />
            <div>
              <h3 className="font-bold text-stone-900">Opening Hours</h3>
              <p className="text-sm text-stone-600">Daily: 11:30 AM – 11:30 PM</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-8 rounded-2xl border border-stone-200">
          {submitted ? (
            <div className="text-center py-10 space-y-3">
              <CheckCircle className="w-12 h-12 text-green-600 mx-auto" />
              <h3 className="text-xl font-bold text-stone-900">Message Received!</h3>
              <p className="text-sm text-stone-600">Our team will get back to you shortly.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-stone-700 mb-1">Name</label>
                <input type="text" required className="w-full px-4 py-2 border border-stone-300 rounded-xl focus:outline-none focus:border-orange-600" />
              </div>
              <div>
                <label className="block text-sm font-medium text-stone-700 mb-1">Email</label>
                <input type="email" required className="w-full px-4 py-2 border border-stone-300 rounded-xl focus:outline-none focus:border-orange-600" />
              </div>
              <div>
                <label className="block text-sm font-medium text-stone-700 mb-1">Message</label>
                <textarea rows="4" required className="w-full px-4 py-2 border border-stone-300 rounded-xl focus:outline-none focus:border-orange-600"></textarea>
              </div>
              <button type="submit" className="w-full bg-orange-600 hover:bg-orange-700 text-white font-semibold py-3 rounded-xl transition-colors cursor-pointer">
                Send Message
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}