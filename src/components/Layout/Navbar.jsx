import { Search, Bell, ChevronDown } from 'lucide-react';

export default function Navbar() {
  // Removed 'rounded-xl' and added 'w-full' to span edge-to-edge
  return (
    <nav className="h-16 bg-[#1E1B4B] w-full flex items-center justify-between px-8 text-white shadow-sm">
      <div className="flex items-center gap-6">
        <div className="flex items-center gap-2 font-bold text-lg tracking-wide">
          <div className="w-7 h-7 bg-[#4F46E5] rounded-lg flex items-center justify-center font-bold text-sm">o\</div>
          Worcspace
        </div>
        <button className="flex items-center gap-2 bg-indigo-900/40 hover:bg-indigo-900/60 px-3 py-1.5 rounded-lg text-xs font-medium transition-colors border border-indigo-800/50">
          Worcspace 1 <ChevronDown size={14} />
        </button>
      </div>

      <div className="flex-1 max-w-lg px-4 hidden md:block">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={14} />
          <input 
            className="w-full bg-white/5 border border-white/10 rounded-lg py-1.5 pl-9 pr-12 text-sm text-white placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-white/20"
            placeholder="Search..."
          />
          <span className="absolute right-3 top-1/2 -translate-y-1/2 text-[10px] text-gray-400 bg-white/10 px-1.5 py-0.5 rounded border border-white/10">⌘K</span>
        </div>
      </div>

      <div className="flex items-center gap-5">
        <Bell size={18} className="text-gray-300 hover:text-white cursor-pointer" />
        <div className="w-8 h-8 bg-indigo-200 text-indigo-900 rounded-full flex items-center justify-center text-sm font-bold cursor-pointer">
          GK
        </div>
      </div>
    </nav>
  );
}