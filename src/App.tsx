import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Home, LayoutGrid, MessageSquare, Menu, X } from 'lucide-react';
import HomePage from './pages/HomePage';
import ServersPage from './pages/ServersPage';
import SurvivalServer from './pages/SurvivalServer';
import SkyblockServer from './pages/SkyblockServer';
import LobbyServer from './pages/LobbyServer';

const AnimatedSpots = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-minecraft-blue/20 blur-xl"
            initial={{ 
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              scale: 0.5 + Math.random() * 0.5
            }}
            animate={{
              x: [null, Math.random() * window.innerWidth],
              y: [null, Math.random() * window.innerHeight]
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
            style={{
              width: 150 + Math.random() * 100,
              height: 150 + Math.random() * 100
            }}
          />
        ))}
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-minecraft-dark/90 via-minecraft-dark/95 to-minecraft-dark pointer-events-none" />
    </div>
  );
};

const scrollToSection = (elementId: string) => {
  const element = document.getElementById(elementId);
  if (element) {
    const navbarHeight = 80;
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  }
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      if (isHomePage) {
        setScrolled(window.scrollY > 50);
      } else {
        setScrolled(true);
      }

      if (!isHomePage) return;

      if (window.scrollY < 100) {
        setActiveSection('home');
        return;
      }

      const sections = ['servers', 'reviews'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isHomePage]);

  const navItems = [
    { id: 'home', label: 'Home', icon: <Home className="w-5 h-5" /> },
    { id: 'servers', label: 'Servers', icon: <LayoutGrid className="w-5 h-5" /> },
    { id: 'reviews', label: 'Reviews', icon: <MessageSquare className="w-5 h-5" /> }
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        if (id === 'home') {
          window.scrollTo({ top: 0, behavior: 'smooth' });
          setActiveSection('home');
        } else {
          scrollToSection(id);
        }
      }, 100);
    } else {
      if (id === 'home') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        setActiveSection('home');
      } else {
        scrollToSection(id);
      }
    }
    setIsOpen(false);
  };

  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        setActiveSection('home');
      }, 100);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setActiveSection('home');
    }
    setIsOpen(false);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'bg-black/10 backdrop-blur-xl' : ''
        }`}
      >
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            <Link
              to="/"
              className="flex items-center space-x-3 group"
            >
              <div className="relative w-10 h-10 transition-transform duration-300 group-hover:scale-110">
                <img 
                  src="https://i.imgur.com/k5agjYf.png" 
                  alt="ADSetups Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="font-bold text-2xl text-[#27A9E1] transition-colors duration-300 group-hover:text-[#1C7FA9]">
                Setups
              </div>
            </Link>

            <div className="hidden md:flex items-center space-x-1">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={(e) => handleNavClick(e, item.id)}
                  className={`px-4 py-2 rounded-full flex items-center space-x-2 transition-all duration-300 ${
                    activeSection === item.id
                      ? 'bg-minecraft-blue text-white'
                      : 'hover:bg-white/10 text-gray-300 hover:text-white'
                  }`}
                >
                  {item.icon}
                  <span>{item.label}</span>
                </a>
              ))}
            </div>

            <button
              onClick={() => setIsOpen(true)}
              className="md:hidden p-2 hover:bg-white/10 rounded-lg transition-colors"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-xl md:hidden"
          >
            <div className="flex flex-col h-full">
              <div className="flex items-center justify-between p-6">
                <Link
                  to="/"
                  className="flex items-center space-x-3 group"
                >
                  <div className="relative w-10 h-10 transition-transform duration-300 group-hover:scale-110">
                    <img 
                      src="https://i.imgur.com/k5agjYf.png" 
                      alt="ADSetups Logo"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="font-bold text-2xl text-[#27A9E1] transition-colors duration-300 group-hover:text-[#1C7FA9]">
                    ADSetups
                  </div>
                </Link>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 hover:bg-white/10 rounded-lg transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="flex-1 flex flex-col p-6 space-y-4">
                {navItems.map((item) => (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    onClick={(e) => handleNavClick(e, item.id)}
                    className={`p-4 rounded-xl flex items-center space-x-3 transition-all duration-300 ${
                      activeSection === item.id
                        ? 'bg-minecraft-blue text-white'
                        : 'hover:bg-white/10 text-gray-300 hover:text-white'
                    }`}
                  >
                    {item.icon}
                    <span className="text-lg">{item.label}</span>
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

function App() {
  return (
    <Router>
      <AnimatedSpots />
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/servers" element={<ServersPage />} />
        <Route path="/servers/survival" element={<SurvivalServer />} />
        <Route path="/servers/skyblock" element={<SkyblockServer />} />
        <Route path="/servers/lobby" element={<LobbyServer />} />
      </Routes>
    </Router>
  );
}

export default App;