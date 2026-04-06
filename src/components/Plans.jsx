import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import clsx from 'clsx';
import { Link } from 'react-router-dom';

const plans = [
  {
    name: 'Basic',
    price: '₹4,999',
    period: '/year',
    features: ['Access to Free Weights', 'Cardio Equipment', 'Locker Room Access', '1 Group Class/month'],
    highlighted: false
  },
  {
    name: 'Pro',
    price: '₹5,999',
    period: '/year',
    features: ['All Basic Features', 'Unlimited Group Classes', 'Recovery Lounge Access', '1 PT Session/month', 'Nutrition Plan'],
    highlighted: true
  },
  {
    name: 'Elite',
    price: '₹6,999',
    period: '/year',
    features: ['All Pro Features', 'Weekly PT Sessions', 'Private Locker', 'Guest Passes', 'Exclusive Events'],
    highlighted: false
  }
];

export default function Plans() {
  return (
    <section id="plans" className="py-16 md:py-24 lg:py-32 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter uppercase mb-3 sm:mb-4">Membership <span className="text-red-600">Plans</span></h2>
          <p className="text-[#a1a1a1] max-w-xl mx-auto text-base sm:text-lg md:text-xl">Choose a plan that fits your athletic goals. No hidden fees. Cancel anytime.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.02, y: -5 }}
              className={clsx(
                "rounded-2xl p-8 relative flex flex-col h-full border transition-shadow duration-300",
                plan.highlighted 
                  ? "bg-[#111111] border-red-600 shadow-[0_0_30px_rgba(220,38,38,0.15)] md:-mt-8 md:pb-16" 
                  : "bg-[#1a1a1a] border-[#2a2a2a] shadow-lg"
              )}
            >
              {plan.highlighted && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-red-600 text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                  Most Popular
                </div>
              )}
              
              <div className="mb-6 sm:mb-8">
                <h3 className="text-xl sm:text-2xl font-bold uppercase tracking-tight mb-2">{plan.name}</h3>
                <div className="flex items-baseline text-4xl sm:text-5xl font-bold tracking-tighter">
                  {plan.price}
                  <span className="text-lg text-[#a1a1a1] font-medium ml-1">{plan.period}</span>
                </div>
              </div>
              
              <ul className="space-y-4 mb-8 flex-1">
                {plan.features.map(feature => (
                  <li key={feature} className="flex items-start space-x-3 text-[#a1a1a1]">
                    <Check size={20} className="text-red-600 shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              
              <Link to="/join" className={clsx(
                "w-full py-3 sm:py-4 text-center rounded-full font-bold uppercase tracking-wider text-xs sm:text-sm transition-colors mt-auto",
                plan.highlighted ? "bg-red-600 text-white hover:bg-red-700" : "bg-white text-black hover:bg-gray-200"
              )}>
                Choose {plan.name}
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
