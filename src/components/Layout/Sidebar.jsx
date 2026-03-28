import { Database, Book, Share2, Monitor, ListTree, Zap, Briefcase, Play, Shield, Key, Cpu, UserCircle, Puzzle } from 'lucide-react';

const SidebarItem = ({ icon: Icon, label, active }) => (
  <div className={`flex items-center gap-3 px-4 py-2 mb-1 rounded-r-lg cursor-pointer transition-colors text-sm font-medium border-l-2 ${active ? 'bg-indigo-50 text-[#4F46E5] border-[#4F46E5]' : 'text-gray-600 hover:bg-gray-50 border-transparent'}`}>
    <Icon size={18} strokeWidth={active ? 2.5 : 2} />
    <span>{label}</span>
  </div>
);

const SectionTitle = ({ title }) => (
  <p className="text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-3 px-4 mt-6">{title}</p>
);

export default function Sidebar() {
  return (
    // ADDED 'scrollbar-hide' to the end of the className list below
// Change the very first tag inside the return statement to this:
      <aside className="w-65 border-r border-gray-100 flex flex-col h-full bg-white shrink-0 overflow-y-auto pb-6 scrollbar-hide">      <SectionTitle title="My Projects" />
      <SidebarItem icon={Cpu} label="Agents" />
      <SidebarItem icon={Database} label="AI Models" />
      <SidebarItem icon={Book} label="Library" />
      
      <SectionTitle title="Orchestrator" />
      <SidebarItem icon={Share2} label="Published" />
      <SidebarItem icon={Monitor} label="Machines" />
      <SidebarItem icon={ListTree} label="Queues" />
      <SidebarItem icon={Zap} label="Triggers" />
      <SidebarItem icon={Briefcase} label="Jobs" />
      <SidebarItem icon={Play} label="Executions" />
      <SidebarItem icon={Shield} label="Vault" />
      <SidebarItem icon={Book} label="Knowledge Base" active />
      <SidebarItem icon={Key} label="Key Store" />

      <SectionTitle title="Admin" />
      <SidebarItem icon={UserCircle} label="Tenant" />
      <SidebarItem icon={Puzzle} label="Integrations" />
    </aside>
  );
}