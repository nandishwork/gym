import { motion } from 'framer-motion';

export default function Experience() {
  return (
    <section className="py-24 relative bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="mb-12 md:mb-20">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter uppercase mb-4">
            The <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-[#555555]">Experience</span>
          </h2>
          <p className="text-[#a1a1a1] max-w-xl text-lg">
            Train in an environment engineered for excellence. State-of-the-art equipment meets uncompromising design.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 min-h-[600px] md:min-h-[700px]">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:col-span-8 relative rounded-2xl overflow-hidden border border-white/5 group h-[400px] md:h-full"
          >
            <img src="https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=2070&auto=format&fit=crop" alt="Gym floor" className="w-full h-full object-cover grayscale transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/20 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-8 md:p-10 z-10 w-full">
              <h3 className="text-3xl font-bold uppercase tracking-tight">Rogue Equipped Zone</h3>
            </div>
          </motion.div>

          <div className="md:col-span-4 flex flex-col gap-6 h-auto md:h-full">
             <motion.div 
               initial={{ opacity: 0, x: 20 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.6, delay: 0.2 }}
               className="relative rounded-2xl overflow-hidden border border-white/5 group h-[300px] md:h-auto flex-1"
             >
               <img src="/images/hiit.png" alt="Hiit Studio" className="w-full h-full object-cover grayscale transition-transform duration-700 group-hover:scale-105" />
               <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/10 to-transparent"></div>
               <div className="absolute bottom-0 left-0 p-8 z-10 w-full">
                 <h3 className="text-2xl font-bold uppercase tracking-tight">Hiit Studio</h3>
               </div>
             </motion.div>
             
             <motion.div 
               initial={{ opacity: 0, x: 20 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.6, delay: 0.4 }}
               className="relative rounded-2xl overflow-hidden border border-white/5 group h-[300px] md:h-auto flex-1 bg-[#111111]"
             >
               <img src="/images/recovery.png" alt="Recovery" className="w-full h-full object-cover grayscale opacity-50 transition-transform duration-700 group-hover:scale-105" />
               <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent"></div>
               <div className="absolute bottom-0 left-0 p-8 z-10 w-full">
                 <h3 className="text-2xl font-bold uppercase tracking-tight">Recovery Lounge</h3>
               </div>
             </motion.div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
