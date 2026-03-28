import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight } from 'lucide-react';

export default function Pagination() {
  return (
    <div className="flex items-center justify-between mt-8 pt-4 text-sm text-gray-900 font-semibold mb-8">
      <div>6 rows</div>
      
      <div className="flex items-center gap-8 text-sm">
        <div className="flex items-center gap-3">
          <span>Rows per page</span>
          <select className="border border-gray-200 rounded-md px-2 py-1 outline-none text-gray-600 font-normal focus:ring-1 focus:ring-primary focus:border-primary">
            <option>10</option>
          </select>
        </div>

        <div className="flex items-center gap-4">
          <span>page 1 of 1</span>
          <div className="flex gap-1">
            <button className="p-1 border border-gray-200 rounded hover:bg-gray-50 text-gray-400" disabled><ChevronsLeft size={16} /></button>
            <button className="p-1 border border-gray-200 rounded hover:bg-gray-50 text-gray-400" disabled><ChevronLeft size={16} /></button>
            <button className="p-1 border border-gray-200 rounded hover:bg-gray-50 text-gray-400" disabled><ChevronRight size={16} /></button>
            <button className="p-1 border border-gray-200 rounded hover:bg-gray-50 text-gray-400" disabled><ChevronsRight size={16} /></button>
          </div>
        </div>
      </div>
    </div>
  );
}