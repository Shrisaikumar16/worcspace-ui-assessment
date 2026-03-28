import { MoreVertical } from 'lucide-react';

export default function KBCard({ title, description, date }) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-5 hover:border-gray-300 transition-colors shadow-[0_2px_10px_-3px_rgba(6,81,237,0.05)]">
      <div className="flex justify-between items-start mb-4">
        <h3 className="font-bold text-gray-900 text-[15px]">{title}</h3>
        <button className="text-gray-400 hover:text-gray-600 transition-colors">
          <MoreVertical size={18} />
        </button>
      </div>
      
      <p className="text-[13px] text-gray-500 mb-10 leading-relaxed pr-2">
        {description}
      </p>
      
      <div className="border-t border-gray-100 pt-4">
        <p className="text-[12px] text-gray-400">
          Created On: <span className="text-gray-600 font-medium">{date}</span>
        </p>
      </div>
    </div>
  );
}