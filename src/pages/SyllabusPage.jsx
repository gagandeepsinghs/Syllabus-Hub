import { useState, useMemo, useCallback, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ReactFlow, Controls, Background, useNodesState, useEdgesState, addEdge, MarkerType, useReactFlow, ReactFlowProvider } from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import { ArrowLeft, Search, ZoomIn, ZoomOut, Maximize, X, Image as ImageIcon, ChevronRight, Menu, CheckCircle2 } from 'lucide-react';
import clsx from 'clsx';
import { syllabuses } from '../data/syllabusData';
import RoadmapNode from '../components/RoadmapNode';

const nodeTypes = {
  customNode: RoadmapNode
};

function LayoutFlow({ syllabus, activeModuleId, onModuleSelect }) {
  const { fitView, zoomIn, zoomOut } = useReactFlow();
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);

  useEffect(() => {
    const initialNodes = [];
    const initialEdges = [];
    
    syllabus.modules.forEach((module, index) => {
      const xSpacing = window.innerWidth < 768 ? 320 : 380;
      const ySpacing = 220;
      const cols = window.innerWidth < 768 ? 1 : 3;
      
      const col = index % cols;
      const row = Math.floor(index / cols);
      
      const x = cols === 1 ? 0 : (row % 2 === 0 ? col * xSpacing : (cols - 1 - col) * xSpacing);
      const y = row * ySpacing;
      
      initialNodes.push({
        id: module.id,
        type: 'customNode',
        position: { x, y },
        data: { 
          ...module, 
          index, 
          topicsCount: module.topics ? module.topics.length : 0 
        }
      });
      
      if (index > 0) {
        initialEdges.push({
          id: `e${syllabus.modules[index-1].id}-${module.id}`,
          source: syllabus.modules[index-1].id,
          target: module.id,
          type: 'smoothstep',
          animated: true,
          style: { stroke: '#ef4444', strokeWidth: 2, opacity: 0.6 },
          markerEnd: {
            type: MarkerType.ArrowClosed,
            color: '#ef4444',
          }
        });
      }
    });

    setNodes(initialNodes);
    setEdges(initialEdges);
  }, [syllabus, setNodes, setEdges]);
  
  // Highlight selected node
  useEffect(() => {
    setNodes((nds) => 
      nds.map((node) => {
        if (node.id === activeModuleId) {
          return { ...node, selected: true };
        }
        return { ...node, selected: false };
      })
    );
  }, [activeModuleId, setNodes]);

  const onNodeClick = useCallback((event, node) => {
    if (activeModuleId === node.id) {
      onModuleSelect(null);
    } else {
      onModuleSelect(node.id);
    }
  }, [activeModuleId, onModuleSelect]);

  const toggleFullscreen = () => {
    const elem = document.documentElement;
    if (!document.fullscreenElement) {
      if (elem.requestFullscreen) {
        elem.requestFullscreen();
      }
      setIsFullscreen(true);
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
      setIsFullscreen(false);
    }
  };

  return (
    <div className="flex-1 h-full relative bg-transparent">
      <div className="absolute top-4 right-4 z-10 flex flex-col sm:flex-row gap-2">
        <div className="flex gap-2">
          <button onClick={() => zoomIn()} className="p-2 sm:p-2.5 bg-white/10 backdrop-blur-md rounded-xl shadow-lg border border-white/20 transition-all text-white hover:bg-white/20 hover:text-red-300" title="Zoom In"><ZoomIn size={18} strokeWidth={2.5} /></button>
          <button onClick={() => zoomOut()} className="p-2 sm:p-2.5 bg-white/10 backdrop-blur-md rounded-xl shadow-lg border border-white/20 transition-all text-white hover:bg-white/20 hover:text-red-300" title="Zoom Out"><ZoomOut size={18} strokeWidth={2.5} /></button>
        </div>
        <div className="flex gap-2">
          <button onClick={() => fitView({ duration: 800 })} className="px-3 sm:px-4 py-2 bg-white/10 backdrop-blur-md rounded-xl shadow-lg border border-white/20 transition-all text-xs sm:text-sm font-bold text-white hover:bg-white/20 hover:text-red-300">Fit</button>
          <button onClick={toggleFullscreen} className="hidden sm:block p-2.5 bg-white/10 backdrop-blur-md rounded-xl shadow-lg border border-white/20 transition-all text-white hover:bg-white/20 hover:text-red-300" title="Fullscreen"><Maximize size={18} strokeWidth={2.5} /></button>
        </div>
      </div>
      
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onNodeClick={onNodeClick}
        nodeTypes={nodeTypes}
        fitView
        fitViewOptions={{ padding: 0.2, duration: 800 }}
        minZoom={0.3}
        maxZoom={2}
        panOnScroll={true}
        zoomOnScroll={false}
        zoomOnDoubleClick={true}
        className="w-full h-full"
      >
        <Background color="rgba(255, 255, 255, 0.15)" gap={24} size={2} />
      </ReactFlow>
    </div>
  );
}

export default function SyllabusPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const syllabus = syllabuses.find(s => s.id === id);
  
  const [activeModuleId, setActiveModuleId] = useState(null);
  const [showSidebar, setShowSidebar] = useState(false);
  const [showImageModal, setShowImageModal] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setShowSidebar(true);
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  if (!syllabus) {
    return <div className="p-12 text-center text-xl text-white">Syllabus not found. <Link to="/" className="text-red-400 underline">Go home</Link></div>;
  }

  const activeModule = syllabus.modules.find(m => m.id === activeModuleId);

  let displayedTopics = activeModule?.topics || [];
  if (searchTerm && activeModule) {
    displayedTopics = activeModule.topics.filter(t => t.toLowerCase().includes(searchTerm.toLowerCase()));
  }

  const customScrollbarClass = "[&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-thumb]:bg-white/20 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-transparent hover:[&::-webkit-scrollbar-thumb]:bg-white/30 transition-colors";

  return (
    <div 
      className="flex flex-col h-full relative bg-cover bg-center bg-no-repeat bg-fixed text-white"
      style={{ backgroundImage: "url('/assets/bg.png')" }}
    >
      <div className="absolute inset-0 bg-black/75 backdrop-blur-[4px]"></div>
      
      <div className="relative z-10 flex flex-col h-full">
        {/* Top Navbar */}
        <header className="bg-black/40 backdrop-blur-md border-b border-white/10 h-14 sm:h-16 flex items-center justify-between px-3 sm:px-6 shrink-0 shadow-lg">
          <div className="flex items-center gap-2 sm:gap-4">
            <Link to="/" className="text-gray-300 hover:text-white flex items-center gap-1 sm:gap-2 transition-colors font-medium text-xs sm:text-sm bg-white/5 hover:bg-white/10 px-2 sm:px-3 py-1.5 rounded-lg shrink-0 border border-white/5">
              <ArrowLeft size={16} strokeWidth={2.5} /> <span className="hidden sm:inline">Back</span>
            </Link>
            <div className="h-6 w-px bg-white/10 mx-1 sm:mx-2 shrink-0"></div>
            <button 
              onClick={() => setShowSidebar(!showSidebar)}
              className="p-1.5 sm:p-2 text-gray-300 hover:text-white bg-white/5 rounded-lg shrink-0 border border-white/5 transition-colors"
              title="Toggle Sidebar"
            >
              <Menu size={20} />
            </button>
            <div className="flex items-center gap-2 overflow-hidden ml-1">
              <h1 className="text-sm sm:text-xl font-extrabold text-white truncate">{syllabus.title}</h1>
              <span className="font-medium text-gray-400 text-sm hidden md:block whitespace-nowrap">| {syllabus.subtitle}</span>
            </div>
          </div>
          
          <div className="flex items-center gap-2 sm:gap-4 shrink-0">
            <div className="hidden md:flex items-center bg-black/40 rounded-xl p-1 border border-white/10 shadow-inner">
              <select 
                className="bg-transparent text-gray-200 text-sm font-semibold focus:outline-none block w-32 lg:w-48 p-1.5 cursor-pointer truncate [&>option]:bg-gray-900"
                value={syllabus.id}
                onChange={(e) => navigate(`/syllabus/${e.target.value}`)}
              >
                {syllabuses.map(s => (
                  <option key={s.id} value={s.id}>{s.title}</option>
                ))}
              </select>
            </div>
            
            <button 
              onClick={() => setShowImageModal(true)}
              className="flex items-center gap-1.5 sm:gap-2 bg-red-600/80 hover:bg-red-500 text-white px-3 sm:px-5 py-2 sm:py-2.5 rounded-lg sm:rounded-xl text-xs sm:text-sm font-bold transition-all shadow-[0_0_15px_rgba(220,38,38,0.3)] hover:shadow-[0_0_25px_rgba(220,38,38,0.5)] active:scale-95 border border-red-400/30"
            >
              <ImageIcon size={16} /> <span className="hidden sm:inline">Original</span>
            </button>
          </div>
        </header>

        <div className="flex flex-1 overflow-hidden relative">
          {/* Mobile Backdrop for Left Sidebar */}
          {showSidebar && (
            <div 
              className="fixed inset-0 bg-black/60 z-30 lg:hidden backdrop-blur-sm transition-opacity"
              onClick={() => setShowSidebar(false)}
            ></div>
          )}

          {/* Left Sidebar */}
          <div className={clsx(
            "w-[280px] sm:w-80 bg-black/40 backdrop-blur-xl border-r border-white/10 flex flex-col transition-transform duration-300 fixed lg:relative z-40 lg:z-20 h-full shadow-2xl",
            showSidebar ? "translate-x-0" : "-translate-x-full lg:translate-x-0 lg:w-0 lg:border-none lg:opacity-0"
          )}>
            <div className="p-4 sm:p-6 border-b border-white/10 shrink-0 bg-white/5">
              <div className="flex justify-between items-center mb-4 sm:mb-5">
                <h2 className="font-extrabold text-white text-base sm:text-lg flex items-center gap-2">
                  Course Modules
                  <span className="text-[10px] sm:text-xs bg-red-500/20 border border-red-500/30 text-red-300 px-2 py-0.5 sm:py-1 rounded-md font-bold">{syllabus.modules.length}</span>
                </h2>
                <button onClick={() => setShowSidebar(false)} className="p-1.5 bg-white/10 rounded-full text-gray-300 hover:text-white transition-colors">
                  <X size={16} />
                </button>
              </div>
              <div className="relative group">
                <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400 group-focus-within:text-red-400 transition-colors" />
                <input 
                  type="text" 
                  placeholder="Search modules..." 
                  className="w-full pl-10 pr-4 py-2 sm:py-2.5 bg-black/40 border border-white/10 rounded-lg sm:rounded-xl text-xs sm:text-sm font-medium focus:outline-none focus:border-red-500/50 focus:ring-1 focus:ring-red-500/50 transition-all placeholder-gray-500 text-white shadow-inner"
                />
              </div>
            </div>
            
            <div className={`flex-1 overflow-y-auto p-3 sm:p-4 space-y-1 sm:space-y-1.5 ${customScrollbarClass}`}>
              {syllabus.modules.map((m, i) => (
                <button
                  key={m.id}
                  onClick={() => {
                    setActiveModuleId(m.id === activeModuleId ? null : m.id);
                    if (window.innerWidth < 1024) setShowSidebar(false);
                  }}
                  className={clsx(
                    "w-full text-left p-3 sm:p-3.5 rounded-lg sm:rounded-xl flex items-start gap-3 transition-all duration-300 group relative overflow-hidden",
                    activeModuleId === m.id 
                      ? "bg-red-900/40 border border-red-500/30 shadow-lg shadow-red-900/20" 
                      : "bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/10"
                  )}
                >
                  {activeModuleId === m.id && (
                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-red-500 rounded-l-xl shadow-[0_0_10px_rgba(239,68,68,0.8)]"></div>
                  )}
                  
                  <div className={clsx(
                    "w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center text-[10px] sm:text-xs font-extrabold shrink-0 transition-all shadow-sm border",
                    activeModuleId === m.id 
                      ? "bg-red-500 border-red-400 text-white shadow-[0_0_15px_rgba(239,68,68,0.5)]" 
                      : "bg-black/40 border-white/10 text-gray-400 group-hover:text-white"
                  )}>
                    {i + 1}
                  </div>
                  <div className="flex-1 min-w-0 mt-0.5">
                    <div className={clsx(
                      "font-bold text-xs sm:text-sm truncate transition-colors",
                      activeModuleId === m.id ? "text-white drop-shadow-sm" : "text-gray-300 group-hover:text-white"
                    )} title={m.title}>{m.title}</div>
                    <div className="text-[10px] sm:text-[11px] font-semibold text-gray-500 mt-1 uppercase tracking-wider">{m.topics?.length || 0} Topics</div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Roadmap Canvas */}
          <ReactFlowProvider>
            <LayoutFlow syllabus={syllabus} activeModuleId={activeModuleId} onModuleSelect={setActiveModuleId} />
          </ReactFlowProvider>

          {/* Mobile Backdrop for Right Sidebar */}
          {activeModuleId && (
            <div 
              className="fixed inset-0 bg-black/60 z-30 lg:hidden backdrop-blur-sm transition-opacity"
              onClick={() => setActiveModuleId(null)}
            ></div>
          )}

          {/* Right Details Panel */}
          <div className={clsx(
            "w-full sm:w-[384px] bg-black/60 backdrop-blur-2xl border-l border-white/10 shadow-2xl flex flex-col transition-transform duration-300 ease-out fixed lg:absolute right-0 z-40 lg:z-20 h-full",
            activeModuleId ? "translate-x-0" : "translate-x-full"
          )}>
            {activeModule && (
              <>
                <div className="p-4 sm:p-6 border-b border-white/10 flex items-start justify-between shrink-0 bg-white/5">
                  <div className="pr-4">
                    <div className="inline-block px-2 sm:px-2.5 py-0.5 sm:py-1 bg-red-900/50 border border-red-500/30 text-[9px] sm:text-[10px] font-extrabold text-red-300 uppercase tracking-widest rounded-md mb-2 sm:mb-3 shadow-inner">
                      Module {syllabus.modules.findIndex(m => m.id === activeModule.id) + 1}
                    </div>
                    <h2 className="font-extrabold text-white text-lg sm:text-xl leading-snug drop-shadow-md">{activeModule.title}</h2>
                  </div>
                  <button 
                    onClick={() => setActiveModuleId(null)}
                    className="p-1.5 sm:p-2 bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white rounded-lg sm:rounded-xl transition-colors border border-white/5"
                  >
                    <X size={20} strokeWidth={2.5} />
                  </button>
                </div>

                <div className="p-4 sm:p-5 border-b border-white/5 shrink-0 bg-black/20">
                  <div className="relative group">
                    <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400 group-focus-within:text-red-400 transition-colors" />
                    <input 
                      type="text" 
                      placeholder="Search topics..." 
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full pl-10 pr-4 py-2 sm:py-2.5 bg-black/40 border border-white/10 rounded-lg sm:rounded-xl text-xs sm:text-sm font-medium focus:outline-none focus:border-red-500/50 focus:ring-1 focus:ring-red-500/50 transition-all placeholder-gray-500 text-white shadow-inner"
                    />
                  </div>
                </div>

                <div className={`flex-1 overflow-y-auto p-4 sm:p-6 ${customScrollbarClass}`}>
                  {displayedTopics.length > 0 ? (
                    <ul className="space-y-3 sm:space-y-4">
                      {displayedTopics.map((topic, i) => {
                        const isSubtopic = topic.startsWith('-');
                        const displayTopic = isSubtopic ? topic.substring(1).trim() : topic;
                        return (
                          <li key={i} className={clsx("flex gap-2 sm:gap-3", isSubtopic ? "ml-6 sm:ml-8" : "")}>
                            <div className="mt-0.5 shrink-0">
                              {isSubtopic ? (
                                <div className="w-1.5 h-1.5 rounded-full bg-gray-500 mt-1.5 sm:mt-2"></div>
                              ) : (
                                <CheckCircle2 size={16} className="text-emerald-400 sm:w-[18px] sm:h-[18px] drop-shadow-[0_0_5px_rgba(52,211,153,0.5)]" strokeWidth={2.5} />
                              )}
                            </div>
                            <span className={clsx(
                              "text-xs sm:text-sm leading-relaxed", 
                              isSubtopic ? "text-gray-400" : "text-gray-200 font-semibold"
                            )}>
                              {displayTopic}
                            </span>
                          </li>
                        );
                      })}
                    </ul>
                  ) : (
                    <div className="flex flex-col items-center justify-center h-40 text-gray-500">
                      <Search size={32} className="mb-3 opacity-20" />
                      <p className="font-medium text-sm">No topics found.</p>
                    </div>
                  )}
                </div>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Fullscreen Image Modal */}
      {showImageModal && (
        <div className="fixed inset-0 bg-black/95 z-[100] flex flex-col backdrop-blur-xl">
          <div className="flex justify-between items-center p-4 sm:p-6 text-white border-b border-white/10 bg-black/50">
            <div>
              <h3 className="font-extrabold text-lg sm:text-xl">{syllabus.title}</h3>
              <p className="text-gray-400 text-xs sm:text-sm font-medium mt-1">Original Syllabus Image</p>
            </div>
            <button 
              onClick={() => setShowImageModal(false)}
              className="p-2 sm:p-3 bg-white/10 hover:bg-red-500 hover:border-red-400 text-white border border-white/20 rounded-lg sm:rounded-xl transition-all shadow-lg active:scale-95"
            >
              <X size={20} className="sm:w-6 sm:h-6" strokeWidth={2.5} />
            </button>
          </div>
          <div className="flex-1 overflow-auto p-4 sm:p-8">
            <div className="max-w-6xl mx-auto flex justify-center">
              <img 
                src={syllabus.image}
                alt={syllabus.title}
                className="w-full h-auto object-contain rounded-xl sm:rounded-2xl shadow-[0_0_100px_rgba(0,0,0,0.8)] border border-white/10"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
