import { motion } from 'framer-motion';

const stats = [
  { id: 1, name: 'Active Members', value: '2,500+' },
  { id: 2, name: 'Sessions Completed', value: '150k+' },
  { id: 3, name: 'Transformations', value: '5,000+' },
];

export default function Stats() {
  return (
    <section className="py-20 bg-[#111111] border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-3 text-center">
          {stats.map((stat, index) => (
            <motion.div 
              key={stat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col border-white/10 p-6 rounded-2xl bg-[#0a0a0a]"
            >
              <dt className="order-2 mt-2 text-lg font-medium leading-6 text-[#a1a1a1] uppercase tracking-wider">{stat.name}</dt>
              <dd className="order-1 text-5xl font-bold tracking-tighter text-white uppercase">{stat.value}</dd>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
