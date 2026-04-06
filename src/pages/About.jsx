import { motion } from 'framer-motion';

export default function About() {
  return (
    <div className="pt-24 pb-16 md:pt-32 md:pb-24 lg:pt-40 lg:pb-32 bg-[#0a0a0a] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16 md:mb-24"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter uppercase mb-6">
            About <span className="text-red-600">Hivnk<span className="text-white">.</span></span>
          </h1>
          <p className="text-[#a1a1a1] max-w-3xl mx-auto text-lg sm:text-xlg md:text-xl leading-relaxed">
            Founded in Hyderabad, Hivnk is more than just a gym — it's a movement. We are dedicated to redefining fitness in India by combining world-class equipment with an elite coaching staff. Our mission is to build the strongest version of you.
          </p>
        </motion.div>

        {/* Content Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Image */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative h-[400px] sm:h-[500px] lg:h-[600px] rounded-3xl overflow-hidden border border-white/10"
          >
            <img 
              src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop" 
              alt="Hivnk Gym Facility" 
              className="absolute inset-0 w-full h-full object-cover grayscale opacity-80"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>
            <div className="absolute bottom-8 left-8">
              <p className="text-white font-bold text-xl uppercase tracking-widest">Our Facility</p>
              <p className="text-red-500 font-semibold mt-1">Banjara Hills, Hyderabad</p>
            </div>
          </motion.div>

          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold uppercase tracking-tight mb-3">Our Philosophy</h2>
              <p className="text-[#a1a1a1] leading-relaxed">
                We believe that fitness should be accessible yet premium. That's why we brought the best equipment from around the world straight to India. Whether you're an amateur powerlifter or a marathon runner, Hivnk provides the perfect environment for you to thrive.
              </p>
            </div>

            <div>
              <h2 className="text-2xl sm:text-3xl font-bold uppercase tracking-tight mb-3">The Community</h2>
              <p className="text-[#a1a1a1] leading-relaxed">
                When you join Hivnk, you aren't just paying for gym access; you're joining a community of like-minded individuals who are passionate about growth. Our trainers are not just instructors—they are mentors dedicated to your personal journey.
              </p>
            </div>

            <div className="pt-6 border-t border-white/10">
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <p className="text-4xl font-black text-white mb-2">10k+</p>
                  <p className="text-[#a1a1a1] uppercase tracking-wider text-xs font-bold">Active Members</p>
                </div>
                <div>
                  <p className="text-4xl font-black text-white mb-2">50+</p>
                  <p className="text-[#a1a1a1] uppercase tracking-wider text-xs font-bold">Expert Coaches</p>
                </div>
              </div>
            </div>

          </motion.div>
        </div>
      </div>
    </div>
  );
}
