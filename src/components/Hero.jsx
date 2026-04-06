import { motion } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section id="#" className="relative min-h-screen flex items-center pt-24 md:pt-32 overflow-hidden">
      {/* Background gradients */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-red-600/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-white/5 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col space-y-8"
          >
            
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tighter leading-[1.1] uppercase">
              Build Your <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-[#777777]">
                Strongest
              </span> Self
            </h1>
            
            <p className="text-[#a1a1a1] text-base sm:text-lg md:text-xl max-w-md leading-relaxed">
              Step into a sanctuary of strength. High-end equipment, elite coaching, and an atmosphere designed for your ultimate transformation.
            </p>
            
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 pt-4">
              <Link to="/join" className="bg-white text-black px-6 py-3 sm:px-8 sm:py-4 rounded-full font-bold uppercase tracking-wider text-xs sm:text-sm hover:scale-105 active:scale-95 hover:bg-gray-200 transition-all shadow-[0_0_20px_rgba(255,255,255,0.15)] flex items-center justify-center space-x-2 group">
                <span>Start Journey</span>
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <button className="bg-transparent border border-white/20 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-full font-bold uppercase tracking-wider text-xs sm:text-sm hover:scale-105 active:scale-95 hover:bg-white/10 hover:border-white/40 transition-all flex items-center justify-center space-x-2">
                <Play size={18} className="fill-white" />
                <span>View Gym</span>
              </button>
            </div>
            
            {/* Social Proof */}
            <div className="pt-8 flex items-center space-x-4 border-t border-white/10 w-fit">
                <div className="flex -space-x-3">
                  {[
                    "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=100&auto=format&fit=crop",
                    "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=100&auto=format&fit=crop",
                    "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=100&auto=format&fit=crop",
                    "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=100&auto=format&fit=crop",
                  ].map((url, i) => (
                    <div key={i} className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-[#0a0a0a] bg-gray-800 overflow-hidden">
                      <img src={url} alt="Member" className="w-full h-full object-cover grayscale opacity-80" />
                    </div>
                  ))}
                </div>
               <div className="text-sm">
                 <p className="font-bold">2,500+</p>
                 <p className="text-[#a1a1a1] text-xs uppercase tracking-wider">Active Members</p>
               </div>
            </div>
          </motion.div>
          
          {/* Visual Placeholder for 3D/Spline */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            className="relative h-[300px] sm:h-[400px] lg:h-[550px] xl:h-[650px] w-full xl:w-[90%] ml-auto rounded-3xl overflow-hidden border border-white/10 bg-[#111111] shadow-[0_0_50px_rgba(0,0,0,0.4)]"
          >
            <img 
              src="https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=2070&auto=format&fit=crop" 
              alt="Premium Gym Weights" 
              className="absolute inset-0 w-full h-full object-cover opacity-70"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-[#0a0a0a] via-transparent to-transparent"></div>
            
            {/* Floating glassmorphism card */}
            <div className="absolute bottom-8 right-8 bg-[#0a0a0a]/60 backdrop-blur-md border border-white/10 p-4 rounded-xl flex items-center space-x-4">
               <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center bg-white/5">
                 <span className="font-bold text-xl">#1</span>
               </div>
               <div>
                 <p className="text-xs text-[#a1a1a1] uppercase tracking-wider">Rated</p>
                 <p className="font-bold text-sm">Best Gym in India</p>
               </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
