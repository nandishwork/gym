import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Check } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function JoinNow() {
  const [selectedPlan, setSelectedPlan] = useState('Pro');

  const plans = [
    { name: 'Basic', price: '₹4,999/yr' },
    { name: 'Pro', price: '₹5,999/yr' },
    { name: 'Elite', price: '₹6,999/yr' }
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0a] pt-20 sm:pt-24 pb-12 flex flex-col">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex-1 flex flex-col">
        <div className="mb-8">
          <Link to="/" className="inline-flex items-center text-[#a1a1a1] hover:text-white transition-colors group text-sm font-medium">
            <ArrowLeft size={16} className="mr-2 group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </Link>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-[#111111] border border-white/5 rounded-3xl p-6 sm:p-8 md:p-12 shadow-2xl relative overflow-hidden"
        >
          {/* Subtle background glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-red-600/10 rounded-full blur-[80px] pointer-events-none" />
          
          <div className="relative z-10">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tighter uppercase mb-2">Join <span className="text-red-600">The Elite</span></h1>
            <p className="text-[#a1a1a1] text-sm sm:text-base mb-8 sm:mb-10">Complete your registration to start your fitness journey today.</p>

            <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
              
              {/* Plan Selection */}
              <div>
                <h2 className="text-sm font-bold uppercase tracking-widest text-[#a1a1a1] mb-4">Select Your Plan</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {plans.map((plan) => (
                    <div 
                      key={plan.name}
                      onClick={() => setSelectedPlan(plan.name)}
                      className={`cursor-pointer border rounded-xl p-4 transition-all duration-300 relative ${
                        selectedPlan === plan.name 
                          ? 'bg-[#1a1a1a] border-red-600 shadow-[0_0_15px_rgba(220,38,38,0.2)]' 
                          : 'bg-[#0a0a0a] border-white/10 hover:border-white/30'
                      }`}
                    >
                      {selectedPlan === plan.name && (
                        <div className="absolute -top-3 -right-3 bg-red-600 text-white rounded-full p-1 border-4 border-[#111111]">
                          <Check size={14} />
                        </div>
                      )}
                      <h3 className="font-bold uppercase tracking-tight text-white mb-1">{plan.name}</h3>
                      <p className="text-[#a1a1a1] font-medium">{plan.price}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Personal Details */}
              <div>
                <h2 className="text-sm font-bold uppercase tracking-widest text-[#a1a1a1] mb-4">Personal Details</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-[#555555]">First Name</label>
                    <input 
                      type="text" 
                      className="w-full bg-[#0a0a0a] border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-red-600 transition-colors"
                      placeholder="Rahul"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-[#555555]">Last Name</label>
                    <input 
                      type="text" 
                      className="w-full bg-[#0a0a0a] border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-red-600 transition-colors"
                      placeholder="Sharma"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-[#555555]">Email Address</label>
                    <input 
                      type="email" 
                      className="w-full bg-[#0a0a0a] border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-red-600 transition-colors"
                      placeholder="rahul@example.in"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-[#555555]">Phone Number</label>
                    <input 
                      type="tel" 
                      className="w-full bg-[#0a0a0a] border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-red-600 transition-colors"
                      placeholder="+91 98765 43210"
                    />
                  </div>
                </div>
              </div>
              
              <div className="pt-4 border-t border-white/5">
                <button 
                  type="submit" 
                  className="w-full bg-red-600 text-white rounded-xl py-3 sm:py-4 font-bold uppercase tracking-widest text-xs sm:text-sm hover:bg-red-700 transition-colors shadow-[0_0_30px_rgba(220,38,38,0.2)]"
                >
                  Proceed to Payment
                </button>
                <p className="text-center text-[#555555] text-xs mt-4">By continuing, you agree to our Terms of Service and Privacy Policy.</p>
              </div>

            </form>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
