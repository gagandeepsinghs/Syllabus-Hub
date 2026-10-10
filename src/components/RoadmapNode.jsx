import { Handle, Position } from '@xyflow/react';
import { Terminal, Calculator, BarChart3, Cpu, Target, Network, MessageSquareText, Eye, Lightbulb, Briefcase } from 'lucide-react';
import clsx from 'clsx';

const iconMap = {
  Terminal, Calculator, BarChart3, Cpu, Target, Network, MessageSquareText, Eye, Lightbulb, Briefcase
};

export default function RoadmapNode({ data, selected }) {
  const Icon = iconMap[data.icon] || Cpu;
  
  const categoryStyles = {
    foundation: 'from-blue-50 to-blue-100 border-blue-200 text-blue-600',
    core: 'from-amber-50 to-amber-100 border-amber-200 text-amber-600',
    advanced: 'from-purple-50 to-purple-100 border-purple-200 text-purple-600',
    practical: 'from-emerald-50 to-emerald-100 border-emerald-200 text-emerald-600',
  };
  
  const themeClass = categoryStyles[data.category] || 'from-gray-50 to-gray-100 border-gray-200 text-gray-600';

  return (
    <div 
      className={clsx(
        "relative w-[300px] rounded-3xl border p-5 transition-all duration-300 group overflow-hidden shadow-lg",
        selected 
          ? "bg-white border-red-500 shadow-[0_10px_40px_rgba(239,68,68,0.25)] ring-2 ring-red-500/50 -translate-y-2 scale-[1.02] z-50" 
          : "bg-white/95 backdrop-blur-xl border-white hover:border-red-300 hover:shadow-[0_15px_35px_rgba(0,0,0,0.15)] hover:-translate-y-1 z-10"
      )}
    >
      {/* Subtle hover gradient glow inside node */}
      <div className={clsx(
        "absolute inset-0 bg-gradient-to-br from-red-50 to-transparent transition-opacity duration-300 pointer-events-none",
        selected ? "opacity-100" : "opacity-0 group-hover:opacity-100"
      )}></div>

      {/* Node connections handles */}
      <Handle type="target" position={Position.Left} className="w-4 h-4 bg-white border-2 border-gray-300 !-left-2 rounded-full transition-colors hover:bg-red-500 hover:border-red-500 hover:shadow-[0_0_10px_rgba(239,68,68,0.5)]" />
      
      <div className="flex items-start gap-4 relative z-10">
        <div className={clsx("p-3 rounded-2xl bg-gradient-to-br border", themeClass)}>
          <Icon size={26} strokeWidth={1.5} />
        </div>
        <div className="flex-1 min-w-0">
          <div className="text-[10px] font-extrabold text-red-600 uppercase tracking-widest mb-1.5 flex items-center gap-1.5">
            <span className={clsx("w-1.5 h-1.5 rounded-full transition-colors", selected ? "bg-red-500 shadow-[0_0_5px_rgba(239,68,68,0.8)]" : "bg-red-400")}></span>
            Module {data.index + 1}
          </div>
          <h3 className="text-sm font-extrabold text-gray-900 leading-snug mb-3 line-clamp-2" title={data.title}>
            {data.title}
          </h3>
          <div className="flex justify-between items-center mt-auto border-t border-gray-100 pt-3">
            <span className="text-xs font-semibold text-gray-500 bg-gray-50 px-2.5 py-1 rounded-lg border border-gray-100 shadow-sm">
              {data.topicsCount} Topics
            </span>
            <span className={clsx(
              "text-[11px] font-bold px-3 py-1.5 rounded-xl transition-all uppercase tracking-wider",
              selected 
                ? "bg-red-500 text-white shadow-md shadow-red-500/30 border border-red-500" 
                : "bg-gray-50 text-gray-500 border border-gray-200 group-hover:border-red-200 group-hover:text-red-600 group-hover:bg-red-50"
            )}>
              {selected ? 'Viewing' : 'Details'}
            </span>
          </div>
        </div>
      </div>

      <Handle type="source" position={Position.Right} className="w-4 h-4 bg-white border-2 border-gray-300 !-right-2 rounded-full transition-colors hover:bg-red-500 hover:border-red-500 hover:shadow-[0_0_10px_rgba(239,68,68,0.5)]" />
    </div>
  );
}
