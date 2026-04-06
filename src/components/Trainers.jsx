import { motion } from 'framer-motion';

const trainers = [
  {
    name: 'Arjun Sharma',
    role: 'Head Strength Coach',
    image: '/images/trainer-marcus.png',
    experience: '12+ Years',
    specialty: 'Powerlifting, Hypertrophy'
  },
  {
    name: 'Priya Nair',
    role: 'HIIT & Mobility',
    image: '/images/trainer-sarah.png',
    experience: '8 Years',
    specialty: 'Functional Training, Yoga'
  },
  {
    name: 'Rohit Verma',
    role: 'Athletic Performance',
    image: '/images/trainer-david.png',
    experience: '10 Years',
    specialty: 'Speed, Agility, Olympic Lifting'
  }
];

export default function Trainers() {
  return (
    <section id="trainers" className="py-16 md:py-24 lg:py-32 bg-[#111111] border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-10 md:mb-16">
          <div className="w-full md:w-auto mb-4 md:mb-0">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter uppercase mb-3 sm:mb-4">Elite <span className="text-red-600">Trainers</span></h2>
            <p className="text-[#a1a1a1] max-w-xl text-base sm:text-lg md:text-xl">Guided by professionals who have mastered their craft. Push beyond your limits.</p>
          </div>
          <button className="hidden md:block bg-transparent border border-white/20 text-white px-6 py-2 rounded-full font-bold uppercase tracking-wider text-sm hover:bg-white/5 transition-colors">
            View All Staff
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {trainers.map((trainer, index) => (
            <motion.div
              key={trainer.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative rounded-2xl overflow-hidden bg-[#1a1a1a] h-[420px] sm:h-[500px] cursor-pointer"
            >
              {/* Image */}
              <img
                src={trainer.image}
                alt={trainer.name}
                className="absolute inset-0 w-full h-full object-cover grayscale transition-all duration-700 group-hover:scale-110 group-hover:grayscale-0"
              />

              {/* Permanent bottom gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

              {/* Default state — name & role always visible */}
              <div className="absolute bottom-0 left-0 w-full px-6 pb-6 pt-16 z-10 
                              transition-all duration-500 
                              group-hover:opacity-0 group-hover:translate-y-4">
                <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-white drop-shadow-lg">{trainer.name}</h3>
                <div className="flex items-center gap-2 mt-1.5">
                  <span className="w-5 h-[2px] bg-red-500 rounded-full shrink-0" />
                  <p className="text-red-400 font-bold uppercase tracking-widest text-xs">{trainer.role}</p>
                </div>
              </div>

              {/* Hover panel — slides up, covers bottom half */}
              <div className="absolute bottom-0 left-0 w-full z-20
                              transform translate-y-full
                              group-hover:translate-y-0
                              transition-transform duration-500 ease-[cubic-bezier(0.33,1,0.68,1)]">

                {/* Red top accent line */}
                <div className="h-[3px] w-full bg-gradient-to-r from-red-800 via-red-500 to-red-800" />

                {/* Panel body */}
                <div className="bg-[#0d0d0d]/95 backdrop-blur-xl px-6 py-5 space-y-4">

                  {/* Name & role inside panel */}
                  <div>
                    <h3 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-white leading-tight">{trainer.name}</h3>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="w-4 h-[2px] bg-red-500 rounded-full shrink-0" />
                      <p className="text-red-400 font-bold uppercase tracking-widest text-[10px] sm:text-xs">{trainer.role}</p>
                    </div>
                  </div>

                  {/* Divider */}
                  <div className="border-t border-white/10" />

                  {/* Badges */}
                  <div className="flex flex-wrap gap-2">
                    <span className="flex items-center gap-1.5 bg-white/8 border border-white/15 text-white text-[11px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-full">
                      <span>🏋️</span> {trainer.experience}
                    </span>
                    <span className="flex items-center gap-1.5 bg-red-600/20 border border-red-500/40 text-red-400 text-[11px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-full">
                      <span>⚡</span> Expert
                    </span>
                  </div>

                  {/* Specialty */}
                  <div className="bg-white/5 rounded-xl px-4 py-3 border border-white/8">
                    <p className="text-[10px] text-[#888] uppercase tracking-widest mb-1 font-semibold">Specialty</p>
                    <p className="text-white font-bold text-sm sm:text-base leading-snug">{trainer.specialty}</p>
                  </div>

                  {/* CTA */}
                  <button className="w-full bg-red-600 hover:bg-red-500 active:bg-red-700 text-white text-xs sm:text-sm font-black uppercase tracking-widest py-3 rounded-xl transition-colors duration-200 shadow-[0_4px_24px_rgba(220,38,38,0.4)]">
                    Book a Session →
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
