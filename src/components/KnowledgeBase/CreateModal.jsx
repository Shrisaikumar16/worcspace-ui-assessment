import { X } from 'lucide-react';

export default function CreateModal({ onClose }) {
  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/20" onClick={onClose} />
      
      {/* Panel */}
      <div className="relative w-full max-w-md bg-white h-full shadow-2xl flex flex-col animate-slide-in">
        <div className="p-6 border-b flex justify-between items-start">
          <div>
            <h2 className="text-lg font-bold">Create New Knowledge Base</h2>
            <p className="text-sm text-gray-500">Best for quick answers from documents, websites and text files.</p>
          </div>
          <button onClick={onClose}><X size={20} className="text-gray-400" /></button>
        </div>

        <div className="p-6 space-y-6 flex-1">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Name (Cannot be edited later)<span className="text-red-500">*</span></label>
            <input className="w-full border rounded-lg px-3 py-2 focus:ring-1 focus:ring-primary outline-none" placeholder="Name" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
            <textarea className="w-full border rounded-lg px-3 py-2 h-24 focus:ring-1 focus:ring-primary outline-none" placeholder="Description" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Vector Store<span className="text-red-500">*</span></label>
            <select className="w-full border rounded-lg px-3 py-2 outline-none">
              <option>Qdrant</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">LLM Embedding Model<span className="text-red-500">*</span></label>
            <select className="w-full border rounded-lg px-3 py-2 outline-none">
              <option>text-embedding-ada-002</option>
            </select>
          </div>
        </div>

        <div className="p-6 border-t flex justify-end">
          <button className="bg-primary text-white px-8 py-2 rounded-lg font-medium hover:bg-indigo-700 transition-colors">
            Create
          </button>
        </div>
      </div>
    </div>
  );
}