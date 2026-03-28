import { Search, Plus } from 'lucide-react';

export default function KnowledgeBaseHeader({ onCreate }) {
  return (
    <div className="flex items-center justify-between mb-2">
      <h1 className="text-[20px] font-bold text-gray-900">Knowledge Base</h1>
      
      <div className="flex items-center gap-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
          <input 
            type="text"
            placeholder="Search..."
            className="pl-9 pr-4 py-2 h-9.5 text-sm border border-gray-200 rounded-lg w-64 focus:outline-none focus:ring-1 focus:ring-[#4F46E5] focus:border-[#4F46E5] placeholder-gray-400"
          />
        </div>
        
        <button 
          onClick={onCreate}
          className="bg-[#4F46E5] text-white h-9.5 px-4 rounded-lg flex items-center gap-2 text-sm font-medium hover:bg-indigo-700 transition-colors"
        >
          <Plus size={18} strokeWidth={2.5} />
          Create New
        </button>
      </div>
    </div>
  );
}