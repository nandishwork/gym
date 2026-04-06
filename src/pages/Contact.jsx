import { motion } from 'framer-motion';
import { ArrowLeft, Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Contact() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] pt-24 pb-12 flex flex-col">
      <div className="max-w-6xl mx-auto px-4 w-full flex-1 flex flex-col">
        <div className="mb-8">
          <Link to="/" className="inline-flex items-center text-[#a1a1a1] hover:text-white transition-colors group text-sm font-medium uppercase tracking-wider">
            <ArrowLeft size={16} className="mr-2 group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Info */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-8"
          >
            <div>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tighter uppercase mb-4">
                Get In <span className="text-red-600">Touch</span>
              </h1>
              <p className="text-[#a1a1a1] text-lg max-w-md">
                Have questions about our facilities, memberships, or personal training? We're here to help you achieve your fitness goals.
              </p>
            </div>

            <div className="space-y-6 pt-4">
              <div className="flex items-start space-x-4">
                <div className="bg-[#111111] p-3 rounded-lg border border-white/5 text-red-600 shadow-[0_0_15px_rgba(220,38,38,0.15)]">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="text-white font-bold uppercase tracking-wider mb-1">Location</h3>
                  <p className="text-[#a1a1a1]">123 Fitness Avenue<br/>Metro City, NY 10001</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-[#111111] p-3 rounded-lg border border-white/5 text-red-600 shadow-[0_0_15px_rgba(220,38,38,0.15)]">
                  <Phone size={24} />
                </div>
                <div>
                  <h3 className="text-white font-bold uppercase tracking-wider mb-1">Phone</h3>
                  <p className="text-[#a1a1a1]">+1 (555) 123-4567</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-[#111111] p-3 rounded-lg border border-white/5 text-red-600 shadow-[0_0_15px_rgba(220,38,38,0.15)]">
                  <Mail size={24} />
                </div>
                <div>
                  <h3 className="text-white font-bold uppercase tracking-wider mb-1">Email</h3>
                  <p className="text-[#a1a1a1]">info@elitegym.com</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Form */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1 }}
            className="bg-[#111111] border border-white/5 rounded-3xl p-8 md:p-10 shadow-2xl relative overflow-hidden"
          >
            {/* Subtle background glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-red-600/10 rounded-full blur-[80px] pointer-events-none" />
            
            <div className="relative z-10">
              <h2 className="text-2xl font-bold uppercase tracking-wider text-white mb-8">Send a Message</h2>
              
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-[#555555]">Full Name</label>
                  <input 
                    type="text" 
                    className="w-full bg-[#0a0a0a] border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-red-600 transition-colors"
                    placeholder="John Doe"
                  />
                </div>
                
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-[#555555]">Email Address</label>
                  <input 
                    type="email" 
                    className="w-full bg-[#0a0a0a] border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-red-600 transition-colors"
                    placeholder="john@example.com"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-[#555555]">Message</label>
                  <textarea 
                    rows="4"
                    className="w-full bg-[#0a0a0a] border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-red-600 transition-colors resize-none"
                    placeholder="How can we help you?"
                  ></textarea>
                </div>
                
                <button 
                  type="submit" 
                  className="w-full bg-red-600 text-white rounded-xl py-4 font-bold uppercase tracking-widest text-sm hover:bg-red-700 transition-colors shadow-[0_0_30px_rgba(220,38,38,0.2)] mt-4"
                >
                  Send Message
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
