import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Vikram Reddy',
    role: 'Amateur Powerlifter',
    content: 'The equipment here is world-class. From Rogue racks to premium dumbbells — it\'s the only gym in Hyderabad I trust for my heavy lifting days.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2070&auto=format&fit=crop'
  },
  {
    name: 'Ananya Iyer',
    role: 'Marathon Runner',
    content: 'Between the recovery lounge and the expert coaches, I shaved 15 minutes off my personal best at the Tata Mumbai Marathon. Simply incredible.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1552674605-db6ffd4facb5?q=80&w=2070&auto=format&fit=crop'
  },
  {
    name: 'Karan Malhotra',
    role: 'Fitness Enthusiast',
    content: 'I joined for the aesthetics but stayed for the community. The trainers push you exactly the right amount. Premium experience from start to finish.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1552674605-db6ffd4facb5?q=80&w=2070&auto=format&fit=crop'
  }
];

export default function Testimonials() {
  return (
    <section className="py-16 md:py-24 lg:py-32 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter uppercase mb-4">Member <span className="text-red-600">Stories</span></h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-[#111111] p-6 sm:p-8 rounded-2xl border border-white/5 hover:border-white/10 transition-colors duration-300"
            >
              <div className="flex space-x-1 mb-6">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} size={16} className="fill-red-600 text-red-600" />
                ))}
              </div>
              <p className="text-[#a1a1a1] mb-6 sm:mb-8 leading-relaxed italic text-sm sm:text-base">"{t.content}"</p>
              <div className="flex items-center space-x-4 border-t border-white/5 pt-6 mt-auto">
                <div className="w-12 h-12 rounded-full border border-white/10 overflow-hidden flex-shrink-0">
                  <img src={t.image} alt={t.name} className="w-full h-full object-cover grayscale transition-transform duration-500 hover:scale-110" />
                </div>
                <div>
                  <h4 className="font-bold text-sm tracking-wide uppercase">{t.name}</h4>
                  <p className="text-[#555555] text-xs uppercase tracking-wider">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
