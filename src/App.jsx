import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Home from './pages/Home';
import SyllabusPage from './pages/SyllabusPage';

function Layout({ children }) {
  const location = useLocation();
  const isSyllabusPage = location.pathname.startsWith('/syllabus/');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={isSyllabusPage ? "h-screen overflow-hidden flex flex-col bg-cream-50 text-charcoal-900 font-sans" : "min-h-screen flex flex-col bg-cream-50 text-charcoal-900 font-sans"}>
      {/* Simple Navbar - Only shown on Homepage */}
      {!isSyllabusPage && (
        <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled 
            ? "bg-black/80 backdrop-blur-md text-white p-3 border-b border-white/10 shadow-xl" 
            : "bg-transparent text-white p-4 lg:p-5"
        }`}>
          <div className="container mx-auto px-4 lg:px-6 flex items-center justify-between">
            <a href="/" className="text-2xl font-black flex items-center gap-3 transition-transform hover:scale-105 active:scale-95 group">
              <img src="/assets/logo.png" alt="Syllabus Hub Logo" className={`object-contain rounded-xl transition-all duration-300 ${isScrolled ? 'w-10 h-10' : 'w-12 h-12'}`} />
              <span className="tracking-tight drop-shadow-sm"><span className="text-red-400">Syllabus</span>Hub</span>
            </a>
          </div>
        </header>
      )}

      <main className={isSyllabusPage ? "flex-1 overflow-hidden flex flex-col relative" : "flex-grow"}>
        {children}
      </main>
      
      {!isSyllabusPage && (
        <footer className="bg-charcoal-900 text-white p-6 text-center text-sm shrink-0">
          <p>© {new Date().getFullYear()} Syllabus Hub. All rights reserved.</p>
        </footer>
      )}
    </div>
  );
}

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/syllabus/:id" element={<SyllabusPage />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
