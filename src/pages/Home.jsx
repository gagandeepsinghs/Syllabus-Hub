import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, ArrowRight, BrainCircuit, Cpu, PieChart, ScatterChart, Terminal, Bot, Sparkles, Megaphone, Briefcase } from 'lucide-react';
import { syllabuses } from '../data/syllabusData';

const iconMap = {
  BrainCircuit,
  Cpu,
  PieChart,
  ScatterChart,
  Terminal,
  Bot,
  Sparkles,
  Megaphone,
  Briefcase
};

export default function Home() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredSyllabuses = syllabuses.filter(s => 
    s.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
    s.description.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const careerSearchTerm = searchTerm.trim().toLowerCase();
  const showPythonCareers = !careerSearchTerm ||
    ['python career paths', 'real jobs', 'projects after learning python', 'data analyst', 'data scientist', 'automation engineer', 'backend developer', 'ai engineer']
      .some(term => term.includes(careerSearchTerm) || careerSearchTerm.includes(term));

  return (
    <div 
      className="relative min-h-screen bg-cover bg-center bg-no-repeat bg-fixed"
      style={{ backgroundImage: "url('/assets/bg.png')" }}
    >
      {/* Semi-transparent dark overlay to ensure text readability against the complex background */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]"></div>

      <div className="relative z-10 w-full max-w-[90%] 2xl:max-w-[1600px] mx-auto px-4 sm:px-6 pt-28 md:pt-32 pb-12 md:pb-20 flex flex-col flex-1">
        <div className="text-center mb-16 md:mb-24">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white via-red-100 to-red-400 mb-6 tracking-tight drop-shadow-sm">
            Complete Syllabus
          </h1>
          <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto font-light tracking-wide drop-shadow-sm">
            Explore structured learning programs with detailed modules and topics. Master your field step-by-step.
          </p>
          
          <div className="mt-8 md:mt-12 max-w-3xl mx-auto relative group">
            <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none">
              <Search className="h-5 w-5 md:h-6 md:w-6 text-gray-400 group-focus-within:text-red-400 transition-colors" />
            </div>
            <input
              type="text"
              className="block w-full pl-12 md:pl-14 pr-6 py-4 md:py-5 border-none rounded-2xl leading-5 bg-white/10 backdrop-blur-md text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500 shadow-2xl transition duration-300 ease-in-out text-base md:text-lg"
              placeholder="Search syllabuses..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6 md:gap-8">
          {showPythonCareers && (
            <Link to="/python-careers" className="group block h-full">
              <div className="bg-gradient-to-br from-cyan-500/20 via-blue-500/10 to-white/5 backdrop-blur-xl rounded-3xl p-8 h-full border border-cyan-300/40 shadow-lg shadow-cyan-950/20 hover:shadow-2xl hover:shadow-cyan-900/40 transition-all duration-500 ease-out hover:-translate-y-3 flex flex-col relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/15 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="bg-cyan-200/15 p-4 rounded-2xl inline-block w-fit mb-6 shadow-inner text-4xl relative z-10" aria-hidden="true">
                  🧑‍💻
                </div>
                <h3 className="text-2xl font-bold text-white mb-3 tracking-wide relative z-10">Python Career Paths</h3>
                <p className="text-sm text-gray-200 mb-8 flex-grow font-light leading-relaxed relative z-10">
                  See the real jobs you can pursue and the projects you can build after learning Python.
                </p>
                <div className="flex items-center justify-between mt-auto pt-5 border-t border-cyan-100/15 relative z-10">
                  <span className="text-xs font-bold text-cyan-100 bg-cyan-900/40 px-3 py-1.5 rounded-lg tracking-wider uppercase border border-cyan-300/20">
                    Explore careers
                  </span>
                  <ArrowRight size={22} className="text-white transform transition-transform duration-300 group-hover:translate-x-2 group-hover:text-cyan-200" />
                </div>
              </div>
            </Link>
          )}
          {filteredSyllabuses.map((syllabus) => {
            const Icon = iconMap[syllabus.icon] || BrainCircuit;
            return (
              <Link key={syllabus.id} to={`/syllabus/${syllabus.id}`} className="group block h-full">
                <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 h-full border border-white/20 shadow-lg hover:shadow-2xl hover:shadow-red-900/40 transition-all duration-500 ease-out hover:-translate-y-3 flex flex-col relative overflow-hidden">
                  
                  {/* Subtle hover gradient glow */}
                  <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  <div className="bg-white/20 p-4 rounded-2xl inline-block w-fit mb-6 shadow-inner text-white group-hover:text-red-300 group-hover:bg-white/30 transition-all duration-300 relative z-10">
                    <Icon size={32} strokeWidth={1.5} />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-3 tracking-wide relative z-10">{syllabus.title}</h3>
                  <p className="text-sm text-gray-300 mb-8 flex-grow font-light leading-relaxed relative z-10">{syllabus.description}</p>
                  
                  <div className="flex items-center justify-between mt-auto pt-5 border-t border-white/10 relative z-10">
                    <span className="text-xs font-bold text-red-200 bg-red-900/40 px-3 py-1.5 rounded-lg tracking-wider uppercase border border-red-500/20">
                      {syllabus.modules.length} Modules
                    </span>
                    <ArrowRight size={22} className="text-white transform transition-transform duration-300 group-hover:translate-x-2 group-hover:text-red-300" />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
        
        {filteredSyllabuses.length === 0 && !showPythonCareers && (
          <div className="text-center text-gray-400 py-16 bg-white/5 backdrop-blur-md rounded-3xl border border-white/10 text-lg">
            No syllabuses found matching your search.
          </div>
        )}
      </div>
    </div>
  );
}
