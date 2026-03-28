import React, { useState } from 'react';
import Navbar from './components/Layout/Navbar';
import Sidebar from './components/Layout/Sidebar';
import KnowledgeBaseHeader from './components/KnowledgeBase/Header';
import KBCard from './components/UI/Card';
import Pagination from './components/KnowledgeBase/Pagination';
import CreateModal from './components/KnowledgeBase/CreateModal';

const dummyData = Array(6).fill({
  title: "Test",
  description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy",
  date: "28/03/2026"
});

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="flex flex-col h-screen bg-white font-sans overflow-hidden">
      
      {/* UPDATE: Removed padding so the Navbar spans 100% of the screen width */}
      <div className="w-full shrink-0">
        <Navbar />
      </div>

      {/* Main layout wrapper keeps its padding to structure the sidebar and content */}
      <div className="flex flex-1 overflow-hidden mt-6 px-6">
        
        <Sidebar />
        
        <main className="flex-1 overflow-y-auto pl-8 pb-4 scrollbar-hide">
          <KnowledgeBaseHeader onCreate={() => setIsModalOpen(true)} />
          
          <div className="border border-gray-200 rounded-2xl p-5 mt-6 bg-white">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
              {dummyData.map((item, index) => (
                <KBCard key={index} {...item} />
              ))}
            </div>
          </div>

          <Pagination />
        </main>
      </div>

      {isModalOpen && <CreateModal onClose={() => setIsModalOpen(false)} />}
    </div>
  );
}