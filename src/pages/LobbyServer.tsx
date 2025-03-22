import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  ArrowLeft, Check, Shield, Zap, Users, Castle, Network, 
  Boxes, Workflow, Star, Layout, Cpu, Globe, Rocket, BadgeCheck, Info 
} from 'lucide-react';
import { EulaDialog } from '../components/EulaDialog';

function LobbyServer() {
  const [activeTab, setActiveTab] = useState('overview');
  const [isEulaOpen, setIsEulaOpen] = useState(false);

  const addons = [
    {
      name: "Server Manager",
      description: "Advanced server management and monitoring",
      icon: <Cpu className="w-6 h-6 text-blue-400" />,
      features: [
        "Real-time monitoring",
        "Performance tracking",
        "Resource allocation",
        "Load balancing"
      ]
    },
    {
      name: "Network Hub",
      description: "Centralized network management system",
      icon: <Globe className="w-6 h-6 text-green-400" />,
      features: [
        "Server navigation",
        "Player distribution",
        "Network stats",
        "Cross-server chat"
      ]
    },
    {
      name: "Queue System",
      description: "Advanced queue management for servers",
      icon: <Layout className="w-6 h-6 text-purple-400" />,
      features: [
        "Priority queues",
        "Server balancing",
        "Queue statistics",
        "VIP system"
      ]
    },
    {
      name: "Network Events",
      description: "Network-wide event management system",
      icon: <Rocket className="w-6 h-6 text-red-400" />,
      features: [
        "Event scheduling",
        "Reward distribution",
        "Participation tracking",
        "Leaderboards"
      ]
    }
  ];

  const renderStars = (rating: number) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    
    return (
      <div className="flex items-center space-x-2">
        {[...Array(fullStars)].map((_, i) => (
          <Star key={i} className="w-5 h-5 text-minecraft-blue fill-minecraft-blue" />
        ))}
        {hasHalfStar && (
          <div className="relative w-5 h-5">
            <Star className="absolute w-5 h-5 text-minecraft-blue" />
            <div className="absolute w-[50%] h-5 overflow-hidden">
              <Star className="w-5 h-5 text-minecraft-blue fill-minecraft-blue" />
            </div>
          </div>
        )}
        <span className="text-gray-400 ml-2">{rating}/5</span>
      </div>
    );
  };

  const handleSetupClick = () => {
    window.open('https://builtbybit.com/resources/setup-service.12345', '_blank');
  };

  return (
    <div className="min-h-screen bg-minecraft-dark text-white">
      <EulaDialog
        isOpen={isEulaOpen}
        onClose={() => setIsEulaOpen(false)}
        productName="Network Lobby"
      />
      
      {/* Navigation bar with Back to Home button */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-xl border-b border-white/10">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-end h-20">
            <Link 
              to="/" 
              className="flex items-center space-x-2 text-gray-400 hover:text-minecraft-blue transition-colors px-4 py-2 rounded-lg border border-white/10 hover:border-minecraft-blue/30"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Back to Home</span>
            </Link>
          </div>
        </div>
      </nav>

      <div className="pt-24 bg-gradient-to-b from-black/50 to-transparent">
        <div className="container mx-auto px-6 py-12">
          <div className="flex items-start justify-between">
            <div>
              <div className="flex items-center space-x-4 mb-4">
                <div className="p-2 rounded-lg bg-gradient-to-br from-purple-500 to-purple-700">
                  <svg
                    className="w-8 h-8"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    {/* Throne base */}
                    <rect x="4" y="14" width="16" height="10" fill="#FFD700" />
                    
                    {/* Throne back */}
                    <rect x="4" y="4" width="16" height="10" fill="#FFD700" />
                    
                    {/* Throne decorative elements */}
                    <path d="M3 4 L21 4 L19 6 L5 6 Z" fill="#FFC000" />
                    <path d="M5 8 L19 8 L17 10 L7 10 Z" fill="#FFC000" />
                    
                    {/* Throne arms */}
                    <rect x="2" y="10" width="4" height="14" fill="#FFD700" />
                    <rect x="18" y="10" width="4" height="14" fill="#FFD700" />
                    
                    {/* Crown on top */}
                    <path d="M8 2 L12 0 L16 2 L14 4 L10 4 Z" fill="#FFD700" />
                    
                    {/* Minecraft character */}
                    <rect x="9" y="12" width="6" height="6" fill="#8B4513" /> {/* Head */}
                    <rect x="10" y="18" width="4" height="4" fill="#4169E1" /> {/* Body */}
                    <rect x="8" y="18" width="2" height="4" fill="#4169E1" /> {/* Left arm */}
                    <rect x="14" y="18" width="2" height="4" fill="#4169E1" /> {/* Right arm */}
                    
                    {/* Crown on character */}
                    <path d="M9 11 L15 11 L14 12 L10 12 Z" fill="#FFD700" />
                    
                    {/* Gems on throne */}
                    <circle cx="6" cy="7" r="1" fill="#FF0000" />
                    <circle cx="18" cy="7" r="1" fill="#0000FF" />
                    <circle cx="12" cy="5" r="1" fill="#00FF00" />
                  </svg>
                </div>
                <div>
                  <h1 className="text-4xl font-bold" style={{ color: '#9B4BE3' }}>Network Lobby</h1>
                  <p className="text-gray-400">Network Hub | Advanced Queue System, Server Management, Network Events, Performance Monitoring</p>
                </div>
              </div>
              {renderStars(4.5)}
            </div>
            <div className="text-right">
              <div className="mb-2">
                <button
                  onClick={() => setIsEulaOpen(true)}
                  className="text-sm text-gray-400 hover:text-minecraft-blue transition-colors"
                >
                  EULA: Standard EULA
                  <span className="inline-block ml-2 text-xs bg-minecraft-blue/20 text-minecraft-blue px-2 py-1 rounded">?</span>
                </button>
              </div>
              <div className="flex items-center space-x-4">
                <button 
                  onClick={handleSetupClick}
                  className="px-4 py-3 border border-minecraft-blue text-minecraft-blue hover:bg-minecraft-blue hover:text-white font-medium rounded-lg transition-all"
                >
                  Installation / Setup - $9.99
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-b border-white/10">
        <div className="container mx-auto px-6">
          <div className="flex space-x-8">
            {[
              { id: 'overview', label: 'Overview' },
              { id: 'dependencies', label: 'Dependencies' },
              { id: 'updates', label: 'Updates (10)' },
              { id: 'reviews', label: 'Reviews (28)' },
              { id: 'history', label: 'History' }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`py-4 px-2 relative ${
                  activeTab === tab.id
                    ? 'text-minecraft-blue'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                {tab.label}
                {activeTab === tab.id && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-minecraft-blue"
                  />
                )}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-12">
        {activeTab === 'overview' && (
          <div className="grid grid-cols-12 gap-8">
            <div className="col-span-8">
              <div className="bg-white/5 rounded-xl p-8 mb-8 transform perspective-1000">
                <div className="aspect-video mb-8 rounded-lg overflow-hidden relative group">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <img
                    src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2070"
                    alt="Network Lobby Preview"
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <h3 className="text-2xl font-bold mb-2">Network Lobby</h3>
                    <p className="text-gray-200">Experience seamless server management with our advanced network hub system.</p>
                  </div>
                </div>
                <div className="prose prose-invert max-w-none">
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    Our setup isn't just thrown together and crossed fingers. We've put it through the wringer, running it live on Akura's Network to make sure it's as sturdy as a minecraft fortress. Thanks to the optimization of every aspect, including the integration of mysql, you're not just getting a well-crafted server, but one that has been proven to perform flawlessly even under heavy player loads.
                  </p>
                </div>

                {/* Addons Grid */}
                <div className="grid grid-cols-2 gap-6 mt-8">
                  {addons.map((addon, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="bg-white/5 rounded-lg p-6 border border-white/10 hover:border-minecraft-blue/30 transition-all group"
                    >
                      <div className="flex items-start space-x-4">
                        <div className="p-3 rounded-lg bg-white/5 group-hover:scale-110 transition-transform">
                          {addon.icon}
                        </div>
                        <div>
                          <h3 className="text-lg font-bold mb-2">{addon.name}</h3>
                          <p className="text-gray-400 text-sm mb-4">{addon.description}</p>
                          <ul className="space-y-2">
                            {addon.features.map((feature, i) => (
                              <li key={i} className="flex items-center space-x-2 text-sm text-gray-300">
                                <Check className="w-4 h-4 text-minecraft-blue" />
                                <span>{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                <div className="grid grid-cols-2 gap-8 mt-8">
                  <div>
                    <h3 className="text-xl font-bold mb-4 text-minecraft-blue">Core Features</h3>
                    <ul className="space-y-3">
                      {[
                        "Server Selector",
                        "Queue System",
                        "Hub Features",
                        "Player Stats",
                        "Network Events",
                        "Cross-server Chat"
                      ].map((feature, index) => (
                        <li key={index} className="flex items-center space-x-2 text-gray-300">
                          <Check className="w-4 h-4 text-minecraft-blue" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-4 text-minecraft-blue">Requirements</h3>
                    <ul className="space-y-3">
                      <li className="flex items-center space-x-3 text-gray-300">
                        <Shield className="w-5 h-5 text-minecraft-blue" />
                        <span>Minimum 4GB RAM recommended</span>
                      </li>
                      <li className="flex items-center space-x-3 text-gray-300">
                        <Zap className="w-5 h-5 text-minecraft-blue" />
                        <span>Java 17 or higher</span>
                      </li>
                      <li className="flex items-center space-x-3 text-gray-300">
                        <Users className="w-5 h-5 text-minecraft-blue" />
                        <span>Supports up to 1000 concurrent players</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="space-y-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  className="bg-white/5 rounded-xl p-8 transform hover:scale-[1.02] transition-transform"
                >
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="p-3 rounded-lg bg-green-500/20">
                      <Network className="w-8 h-8 text-green-500" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold">Server Connector</h3>
                      <p className="text-gray-400">Seamless server switching system</p>
                    </div>
                  </div>
                  <div className="aspect-video rounded-lg overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2070"
                      alt="Server Connector"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  className="bg-white/5 rounded-xl p-8 transform hover:scale-[1.02] transition-transform"
                >
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="p-3 rounded-lg bg-orange-500/20">
                      <Workflow className="w-8 h-8 text-orange-500" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold">Queue System</h3>
                      <p className="text-gray-400">Advanced server queue management</p>
                    </div>
                  </div>
                  <div className="aspect-video rounded-lg overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2070"
                      alt="Queue System"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </motion.div>
              </div>
            </div>

            <div className="col-span-4 space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="relative bg-gradient-to-br from-minecraft-blue/5 to-transparent rounded-xl overflow-hidden backdrop-blur-sm"
              >
                <div className="absolute inset-0">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-minecraft-blue/10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2" />
                  <div className="absolute bottom-0 left-0 w-40 h-40 bg-blue-500/5 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2" />
                </div>

                <div className="relative p-6 space-y-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="bg-gradient-to-br from-minecraft-blue/20 to-blue-600/10 p-2 rounded-lg">
                        <Info className="w-5 h-5 text-minecraft-blue" />
                      </div>
                      <h3 className="text-xl font-bold">Product Information</h3>
                    </div>
                  </div>

                  <div className="grid gap-4">
                    {[
                      { 
                        label: 'Release Status',
                        value: 'April 25, 2025',
                      },
                      { 
                        label: 'Updated',
                        value: 'April 25, 2025',
                      },
                      { 
                        label: 'Purchases',
                        value: '0',
                      },
                      {
                        label: 'Downloads',
                        value: '1',
                      }
                    ].map((item, index) => (
                      <motion.div
                        key={item.label}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 * index }}
                        className="bg-white/5 rounded-lg p-4 backdrop-blur-sm relative overflow-hidden group hover:bg-white/10 transition-all"
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-minecraft-blue/0 via-minecraft-blue/5 to-minecraft-blue/0 opacity-0 group-hover:opacity-100 transition-opacity" />
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-gray-400 text-sm">{item.label}</span>
                        </div>
                        <div className="flex items-baseline space-x-2">
                          <p className="font-medium text-lg">{item.value}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  <div className="bg-white/5 rounded-lg p-4 backdrop-blur-sm">
                    <h4 className="font-medium mb-3">Tags</h4>
                    <div className="flex flex-wrap gap-2">
                      {['1.21.x', 'Network', 'Lobby', 'setup', 'server'].map(version => (
                        <span
                          key={version}
                          className="px-2 py-1 bg-minecraft-blue/10 text-minecraft-blue rounded-md text-sm"
                        >
                          {version}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-white/10">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-400">Support Status</span>
                      <div className="flex items-center space-x-1 text-green-400">
                        <span className="w-2 h-2 bg-green-400 rounded-full" />
                        <span>Active</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="bg-white/5 rounded-xl p-6"
              >
              </motion.div>
            </div>
          </div>
        )}

        {activeTab === 'dependencies' && (
          <div className="bg-white/5 rounded-xl p-8">
            <h2 className="text-2xl font-bold mb-6">Required Dependencies</h2>
          </div>
        )}

        {activeTab === 'updates' && (
          <div className="bg-white/5 rounded-xl p-8">
            <h2 className="text-2xl font-bold mb-6">Update History</h2>
          </div>
        )}

        {activeTab === 'reviews' && (
          <div className="space-y-8">
            <div className="bg-white/5 rounded-xl p-8">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-2xl font-bold">Featured Reviews</h2>
              </div>

              <div className="grid gap-6">
                {[
                  {
                    user: "SkyMaster",
                    rating: 5,
                    date: "March 15, 2025",
                    content: "Absolutely incredible setup! The temperature system adds a whole new dimension to survival gameplay. Performance is outstanding even with 100+ players.",
                    verified: true
                  },
                  {
                    user: "CraftQueen",
                    rating: 4.5,
                    date: "March 10, 2025",
                    content: "Love the custom enchants and dungeon system. The only minor issue was initial setup complexity, but support team was very helpful.",
                    verified: true
                  }
                ].map((review, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-white/5 rounded-lg p-6 border border-white/10 hover:border-minecraft-blue/30 transition-all"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-minecraft-blue to-blue-600 flex items-center justify-center text-white font-bold">
                          {review.user[0]}
                        </div>
                        <div>
                          <h4 className="font-bold">{review.user}</h4>
                          <div className="flex items-center space-x-2">
                            {renderStars(review.rating)}
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        {review.verified && (
                          <div className="flex items-center space-x-1 text-green-400 text-sm">
                            <BadgeCheck className="w-4 h-4" />
                            <span>Verified Purchase</span>
                          </div>
                        )}
                        <span className="text-sm text-gray-400">{review.date}</span>
                      </div>
                    </div>
                    <p className="text-gray-300">{review.content}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'history' && (
          <div className="bg-white/5 rounded-xl p-8">
            <h2 className="text-2xl font-bold mb-6">Version History</h2>
          </div>
        )}
      </div>
    </div>
  );
}

export default LobbyServer;