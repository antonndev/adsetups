import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Users, Clock, Download, Star, ArrowRight, Sword, Crown, Castle, Search, Menu, X, ArrowLeft, Github, Twitter, Disc as Discord } from 'lucide-react';

interface ServerCard {
  id: string;
  title: string;
  type: string;
  description: string;
  image: string;
  icon: JSX.Element;
  price: string;
  purchases: number;
  released: string;
  downloads: number;
  rating: number;
  color: string;
  bgGradient: string;
  borderHover: string;
  link: string;
}

const servers: ServerCard[] = [
  {
    id: 'survival',
    title: 'Premium Survival Setup',
    type: 'Survival Server',
    description: 'Feature-rich survival experience with economy, land claiming, and custom enchants',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSu7pi9_sQYmcQqb_GBixa6_qsebOpR5LVZsg&s',
    icon: <Sword className="w-6 h-6 text-emerald-400" />,
    price: '$149.99',
    purchases: 0,
    released: 'April 25, 2025',
    downloads: 1,
    rating: 4.5,
    color: 'from-emerald-500/20 to-emerald-600/20',
    bgGradient: 'from-emerald-950 to-emerald-900/50',
    borderHover: 'hover:border-emerald-500/30',
    link: 'https://builtbybit.com/resources/survival-setup.12345'
  },
  {
    id: 'skyblock',
    title: 'Ultimate Skyblock',
    type: 'Skyblock Server',
    description: 'Advanced island progression system with unique challenges and rewards',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSu7pi9_sQYmcQqb_GBixa6_qsebOpR5LVZsg&s',
    icon: <Crown className="w-6 h-6 text-purple-400" />,
    price: '$199.99',
    purchases: 0,
    released: 'April 25, 2025',
    downloads: 1,
    rating: 4.5,
    color: 'from-purple-500/20 to-purple-600/20',
    bgGradient: 'from-purple-950 to-purple-900/50',
    borderHover: 'hover:border-purple-500/30',
    link: 'https://builtbybit.com/resources/skyblock-setup.12345'
  },
  {
    id: 'lobby',
    title: 'Network Lobby',
    type: 'Hub System',
    description: 'Professional network hub with seamless server connections',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSu7pi9_sQYmcQqb_GBixa6_qsebOpR5LVZsg&s',
    icon: <Castle className="w-6 h-6 text-amber-400" />,
    price: '$99.99',
    purchases: 0,
    released: 'April 25, 2025',
    downloads: 1,
    rating: 4.5,
    color: 'from-amber-500/20 to-amber-600/20',
    bgGradient: 'from-amber-950 to-amber-900/50',
    borderHover: 'hover:border-amber-500/30',
    link: 'https://builtbybit.com/resources/lobby-setup.12345'
  }
];

interface ServersNavbarProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

const ServersNavbar: React.FC<ServersNavbarProps> = ({ searchQuery, setSearchQuery }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-xl border-b border-white/10">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center space-x-3 group">
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

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search setups..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 pr-4 py-2 bg-white/5 border border-white/10 rounded-lg focus:border-minecraft-blue/50 focus:outline-none text-white placeholder-gray-400 w-64"
              />
            </div>
            <Link 
              to="/" 
              className="flex items-center space-x-2 text-gray-400 hover:text-minecraft-blue transition-colors px-4 py-2 rounded-lg border border-white/10 hover:border-minecraft-blue/30"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Back to Home</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(true)}
            className="md:hidden p-2 hover:bg-white/10 rounded-lg transition-colors"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
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
                    Setups
                  </div>
                </Link>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 hover:bg-white/10 rounded-lg transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="p-6">
                <div className="relative mb-6">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search setups..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:border-minecraft-blue/50 focus:outline-none text-white placeholder-gray-400"
                  />
                </div>
                <div className="space-y-4">
                  <Link
                    to="/"
                    onClick={() => setIsOpen(false)}
                    className="flex items-center space-x-2 text-gray-400 hover:text-minecraft-blue transition-colors px-4 py-2 rounded-lg border border-white/10 hover:border-minecraft-blue/30"
                  >
                    <ArrowLeft className="w-5 h-5" />
                    <span>Back to Home</span>
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

function ServersPage() {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredServers = useMemo(() => {
    const query = searchQuery.toLowerCase().trim();
    if (!query) return servers;
    
    return servers.filter(server => 
      server.title.toLowerCase().includes(query) ||
      server.type.toLowerCase().includes(query) ||
      server.description.toLowerCase().includes(query)
    );
  }, [searchQuery]);

  const renderStars = (rating: number) => {
    return (
      <div className="flex items-center space-x-1">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`w-4 h-4 ${
              i < rating
                ? 'text-minecraft-blue fill-minecraft-blue'
                : 'text-gray-400'
            }`}
          />
        ))}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-minecraft-dark text-white">
      <ServersNavbar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <div className="container mx-auto px-6 py-12 pt-32">
        <div className="flex items-center space-x-4 mb-12">
          <div className="relative w-12 h-12">
            <svg
              className="w-full h-full"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Dirt base with texture */}
              <path
                d="M0 12H24V24H0V12Z"
                fill="#8B5E34"
              />
              <path
                d="M2 14H6V16H2V14Z"
                fill="#6E4C2B"
                opacity="0.4"
              />
              <path
                d="M8 16H12V18H8V16Z"
                fill="#6E4C2B"
                opacity="0.4"
              />
              <path
                d="M16 15H20V17H16V15Z"
                fill="#6E4C2B"
                opacity="0.4"
              />
              <path
                d="M14 20H18V22H14V20Z"
                fill="#6E4C2B"
                opacity="0.4"
              />
              <path
                d="M4 19H8V21H4V19Z"
                fill="#6E4C2B"
                opacity="0.4"
              />
              
              {/* Grass top with shading and texture */}
              <path
                d="M0 0H24V12H0V0Z"
                fill="#5B8731"
              />
              <path
                d="M2 2H6V4H2V2Z"
                fill="#4A7129"
                opacity="0.4"
              />
              <path
                d="M10 1H14V3H10V1Z"
                fill="#4A7129"
                opacity="0.4"
              />
              <path
                d="M18 3H22V5H18V3Z"
                fill="#4A7129"
                opacity="0.4"
              />
              <path
                d="M16 7H20V9H16V7Z"
                fill="#4A7129"
                opacity="0.4"
              />
              <path
                d="M6 8H10V10H6V8Z"
                fill="#4A7129"
                opacity="0.4"
              />
              
              {/* Grass blades */}
              <path
                d="M3 0L5 -2L7 0H3Z"
                fill="#7CB342"
                transform="translate(0, 2)"
              />
              <path
                d="M11 0L13 -2L15 0H11Z"
                fill="#7CB342"
                transform="translate(-2, 4)"
              />
              <path
                d="M19 0L21 -2L23 0H19Z"
                fill="#7CB342"
                transform="translate(-4, 3)"
              />
              
              {/* Highlights */}
              <path
                d="M0 11.5H24V12H0V11.5Z"
                fill="#FFFFFF"
                opacity="0.1"
              />
              <path
                d="M0 0H24V0.5H0V0Z"
                fill="#FFFFFF"
                opacity="0.1"
              />
            </svg>
          </div>
          <div>
            <h1 className="text-4xl font-bold">Our Minecraft Setups</h1>
            <p className="text-gray-400 mt-2">
              Premium server solutions for every Minecraft network
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServers.map((server) => (
            <motion.a
              key={server.id}
              href={server.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className={`group relative overflow-hidden rounded-2xl bg-gradient-to-b ${server.bgGradient} border border-white/10 ${server.borderHover} transition-all duration-300`}
            >
              <motion.div 
                className="absolute inset-0 overflow-hidden"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.6 }}
              >
                <img
                  src={server.image}
                  alt={server.title}
                  className="w-full h-full object-cover opacity-50"
                />
              </motion.div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              
              <div className="relative p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="p-2 rounded-lg bg-white/5 backdrop-blur-sm">
                    {server.icon}
                  </div>
                  <span className={`font-medium ${server.icon.props.className.split(' ').pop()}`}>
                    {server.type}
                  </span>
                </div>

                <h3 className="text-2xl font-bold mb-3">{server.title}</h3>
                <p className="text-gray-300 mb-6">{server.description}</p>

                <div className="space-y-4">
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center space-x-2 text-gray-400">
                      <Clock className="w-4 h-4" />
                      <span>Released: {server.released}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-gray-400">
                      <Users className="w-4 h-4" />
                      <span>Purchases: {server.purchases}</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center space-x-2 text-gray-400">
                      <Download className="w-4 h-4" />
                      <span>Downloads: {server.downloads}</span>
                    </div>
                    <div>{renderStars(server.rating)}</div>
                  </div>
                </div>

                <div className="flex items-center justify-between mt-6 pt-4 border-t border-white/10">
                  <span className={`text-2xl font-bold ${server.icon.props.className.split(' ').pop()}`}>
                    {server.price}
                  </span>
                  <span className="flex items-center space-x-2 text-white group-hover:translate-x-2 transition-transform duration-300">
                    <span>View Details</span>
                    <ArrowRight className="w-5 h-5" />
                  </span>
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        <footer className="mt-24 border-t border-white/10 pt-16">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="relative w-10 h-10 transition-transform duration-300 group-hover:scale-110">
                  <img 
                    src="https://giveceadr.com/logo.png" 
                    alt="ADSetups Logo"
                    className="w-full h-full object-contain"
                  />
                </div>
                <span className="font-bold text-2xl text-[#27A9E1] transition-colors duration-300 group-hover:text-[#1C7FA9]">
                  ADSetups
                </span>
              </div>
              <p className="text-gray-400 mb-6">
                Crafting exceptional Minecraft server experiences since 2024
              </p>
              <div className="flex space-x-4">
                <a href="#" className="p-2 rounded-lg bg-white/5 hover:bg-minecraft-blue/20 text-gray-400 hover:text-minecraft-blue transition-all">
                  <Github className="w-5 h-5" />
                </a>
                <a href="#" className="p-2 rounded-lg bg-white/5 hover:bg-minecraft-blue/20 text-gray-400 hover:text-minecraft-blue transition-all">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="#" className="p-2 rounded-lg bg-white/5 hover:bg-minecraft-blue/20 text-gray-400 hover:text-minecraft-blue transition-all">
                  <Discord className="w-5 h-5" />
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-4">Products</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-400 hover:text-minecraft-blue transition-colors">Survival Server</a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-minecraft-blue transition-colors">Skyblock Server</a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-minecraft-blue transition-colors">Network Lobby</a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-4">Resources</h3>
              <ul className="space-y-2">
                <li>
                  <a href="https://docs.adsetups.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-minecraft-blue transition-colors">Documentation</a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-minecraft-blue transition-colors">Support</a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-minecraft-blue transition-colors">Terms of Service</a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-400 hover:text-minecraft-blue transition-colors">Privacy Policy</a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-minecraft-blue transition-colors">Terms of Use</a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-minecraft-blue transition-colors">EULA</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-minecraft-blue/20 via-transparent to-minecraft-blue/20 animate-gradient" />
            <div className="relative border-t border-minecraft-blue/20 py-8 backdrop-blur-sm">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-center justify-center md:justify-start space-x-4">
                  <div className="w-8 h-8 relative">
                    <div className="absolute inset-0 bg-minecraft-blue/20 rounded-lg animate-pulse" />
                    <div className="relative w-full h-full bg-gradient-to-br from-minecraft-blue/30 to-transparent backdrop-blur-sm rounded-lg flex items-center justify-center">
                      <span className="text-minecraft-blue text-xs font-bold">MC</span>
                    </div>
                  </div>
                  <div className="text-sm">
                    <p className="text-gray-400">
                      Not affiliated with Mojang AB. Minecraft™ is a trademark of Mojang AB.
                    </p>
                  </div>
                </div>
                <div className="flex items-center justify-center md:justify-end space-x-6">
                  <a href="#" className="text-sm text-gray-400 hover:text-minecraft-blue transition-colors">Privacy Policy</a>
                  <div className="w-1 h-1 bg-gray-600 rounded-full" />
                  <a href="#" className="text-sm text-gray-400 hover:text-minecraft-blue transition-colors">Terms of Use</a>
                  <div className="w-1 h-1 bg-gray-600 rounded-full" />
                  <span className="text-sm text-gray-400">&copy; 2024 ADSetups</span>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default ServersPage;