import { motion } from 'framer-motion';

const trainers = [
  {
    name: 'Marcus Bell',
    role: 'Head Strength Coach',
    image: '/images/trainer-marcus.png',
    experience: '12+ Years',
    specialty: 'Powerlifting, Hypertrophy'
  },
  {
    name: 'Sarah Chen',
    role: 'Hiit & Mobility',
    image: '/images/trainer-sarah.png',
    experience: '8 Years',
    specialty: 'Functional Training'
  },
  {
    name: 'David Rodriguez',
    role: 'Athletic Performance',
    image: '/images/trainer-david.png',
    experience: '10 Years',
    specialty: 'Speed, Agility, Olympic Lifting'
  }
];

export default function Trainers() {
  return (
    <section id="trainers" className="py-24 bg-[#111111] border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter uppercase mb-4">Elite <span className="text-red-600">Trainers</span></h2>
            <p className="text-[#a1a1a1] max-w-xl text-lg">Guided by professionals who have mastered their craft. Push beyond your limits.</p>
          </div>
          <button className="hidden md:block bg-transparent border border-white/20 text-white px-6 py-2 rounded-full font-bold uppercase tracking-wider text-sm hover:bg-white/5 transition-colors">
            View All Staff
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {trainers.map((trainer, index) => (
            <motion.div 
              key={trainer.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative rounded-2xl overflow-hidden bg-[#1a1a1a] h-[450px]"
            >
              <img 
                src={trainer.image} 
                alt={trainer.name} 
                className="w-full h-full object-cover grayscale transition-transform duration-700 group-hover:scale-105 group-hover:grayscale-0" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/50 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300"></div>
              
              <div className="absolute bottom-0 left-0 w-full p-8 transform translate-y-8 group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-2xl font-bold uppercase tracking-tight mb-1">{trainer.name}</h3>
                <p className="text-red-600 font-medium uppercase tracking-wider text-sm mb-4">{trainer.role}</p>
                
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100 space-y-2">
                  <div className="flex justify-between text-sm border-t border-white/10 pt-2">
                    <span className="text-[#a1a1a1]">Experience</span>
                    <span className="font-semibold text-white">{trainer.experience}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-[#a1a1a1]">Specialty</span>
                    <span className="font-semibold text-white">{trainer.specialty}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
