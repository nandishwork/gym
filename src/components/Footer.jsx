export default function Footer() {
  return (
    <footer className="bg-[#050505] py-10 sm:py-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0 text-center md:text-left">
            <a href="#" className="text-2xl sm:text-3xl font-bold tracking-tighter uppercase text-white">Hivnk<span className="text-red-600">.</span></a>
            <p className="text-[#a1a1a1] mt-2 text-xs sm:text-sm text-center md:text-left">Build your strongest self.</p>
          </div>
          <div className="flex space-x-4 sm:space-x-6">
            <a href="#" className="text-[#a1a1a1] hover:text-white transition-colors text-sm sm:text-base">Instagram</a>
            <a href="#" className="text-[#a1a1a1] hover:text-white transition-colors text-sm sm:text-base">Twitter</a>
            <a href="#" className="text-[#a1a1a1] hover:text-white transition-colors text-sm sm:text-base">YouTube</a>
          </div>
        </div>
        <div className="border-t border-white/5 mt-6 sm:mt-8 pt-6 sm:pt-8 flex flex-col md:flex-row justify-between items-center text-xs sm:text-sm text-[#a1a1a1]">
          <p>&copy; {new Date().getFullYear()} Hivnk. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
