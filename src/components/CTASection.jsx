import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function CTASection() {
  return (
    <section className="py-16 md:py-24 lg:py-32 relative overflow-hidden bg-[#111111]">
      <div className="absolute inset-0 bg-red-600/5 mix-blend-overlay pointer-events-none"></div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter uppercase mb-4 sm:mb-6 leading-tight">
            Start Training <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-800">Today</span>
          </h2>
          <p className="text-[#a1a1a1] text-base sm:text-lg md:text-xl max-w-2xl mx-auto mb-8 sm:mb-10">
            Your transformation begins the moment you decide. Join an elite community and take your fitness to the next level.
          </p>
          <Link to="/join" className="bg-white text-black px-6 py-4 sm:px-10 sm:py-5 w-fit rounded-full font-bold uppercase tracking-widest text-xs sm:text-sm hover:scale-105 active:scale-95 hover:bg-gray-200 transition-all shadow-[0_0_40px_rgba(255,255,255,0.1)] flex items-center justify-center space-x-3 mx-auto group">
            <span>Become A Member</span>
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform w-4 sm:w-5 h-4 sm:h-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
