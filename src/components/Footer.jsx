export default function Footer() {
  return (
    <footer className="bg-[#050505] py-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <a href="#" className="text-3xl font-bold tracking-tighter uppercase text-white">GYM<span className="text-red-600">.</span></a>
            <p className="text-[#a1a1a1] mt-2 text-sm text-center md:text-left">Build your strongest self.</p>
          </div>
          <div className="flex space-x-6">
            <a href="#" className="text-[#a1a1a1] hover:text-white transition-colors">Instagram</a>
            <a href="#" className="text-[#a1a1a1] hover:text-white transition-colors">Twitter</a>
            <a href="#" className="text-[#a1a1a1] hover:text-white transition-colors">YouTube</a>
          </div>
        </div>
        <div className="border-t border-white/5 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-[#a1a1a1]">
          <p>&copy; {new Date().getFullYear()} GYM. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
