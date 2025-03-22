import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  ArrowLeft, Check, Shield, Zap, Users, Globe, Gem, Trophy, 
  Target, Star, Rocket, Sparkles, Crown, Boxes, BadgeCheck, Info 
} from 'lucide-react';
import { EulaDialog } from '../components/EulaDialog';

function SkyblockServer() {
  const [activeTab, setActiveTab] = useState('overview');
  const [isEulaOpen, setIsEulaOpen] = useState(false);

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

  const addons = [
    {
      name: "Island Progression",
      description: "Advanced island leveling and progression system",
      icon: <Rocket className="w-6 h-6 text-blue-400" />,
      features: [
        "Custom island levels",
        "Achievement system",
        "Island challenges",
        "Progression rewards"
      ]
    },
    {
      name: "Magic System",
      description: "Unique magical abilities and spells",
      icon: <Sparkles className="w-6 h-6 text-purple-400" />,
      features: [
        "Custom spells",
        "Magic wands",
        "Elemental powers",
        "Spell crafting"
      ]
    },
    {
      name: "Island Wars",
      description: "Competitive island vs island combat",
      icon: <Crown className="w-6 h-6 text-yellow-400" />,
      features: [
        "Island raids",
        "Territory control",
        "War rewards",
        "Alliance system"
      ]
    },
    {
      name: "Resource Generation",
      description: "Advanced resource management and automation",
      icon: <Boxes className="w-6 h-6 text-green-400" />,
      features: [
        "Auto miners",
        "Resource collectors",
        "Upgrade system",
        "Production chains"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-minecraft-dark text-white">
      <EulaDialog
        isOpen={isEulaOpen}
        onClose={() => setIsEulaOpen(false)}
        productName="Ultimate Skyblock"
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
                <div className="p-2 rounded-lg bg-gradient-to-br from-blue-500 to-blue-700">
                  <svg
                    className="w-8 h-8"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    {/* Sky */}
                    <rect width="24" height="24" fill="#87CEEB" />
                    {/* Main floating island */}
                    <path d="M4 12 L12 12 L20 12 L18 16 L6 16 Z" fill="#8B5E34" />
                    <path d="M6 12 L18 12 L16 8 L8 8 Z" fill="#5B8731" />
                    {/* Smaller floating islands */}
                    <path d="M2 18 L6 18 L5 20 L3 20 Z" fill="#8B5E34" />
                    <path d="M3 18 L5 18 L4 16 L3.5 16 Z" fill="#5B8731" />
                    <path d="M18 18 L22 18 L21 20 L19 20 Z" fill="#8B5E34" />
                    <path d="M19 18 L21 18 L20 16 L19.5 16 Z" fill="#5B8731" />
                    {/* Trees */}
                    <path d="M10 8 L12 4 L14 8 Z" fill="#2E5B1A" />
                    <rect x="11" y="8" width="2" height="2" fill="#4A3728" />
                  </svg>
                </div>
                <div>
                  <h1 className="text-4xl font-bold" style={{ color: '#3498DB' }}>Ultimate Skyblock</h1>
                  <p className="text-gray-400">SkyBlock | Engaging Dungeons, Strategic Wars, Streamlined Performance, Thoroughly Tested Features, Customized GUIs, Enhanced Enchantments</p>
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

      {/* Tab Navigation */}
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

      {/* Content Area */}
      <div className="container mx-auto px-6 py-12">
        {activeTab === 'overview' && (
          <div className="grid grid-cols-12 gap-8">
            <div className="col-span-8">
              <div className="bg-white/5 rounded-xl p-8 mb-8 transform perspective-1000">
                <div className="aspect-video mb-8 rounded-lg overflow-hidden relative group">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <img
                    src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2070"
                    alt="Skyblock Server Preview"
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <h3 className="text-2xl font-bold mb-2">Ultimate Skyblock</h3>
                    <p className="text-gray-200">Experience skyblock like never before with our unique progression system and enhanced mechanics.</p>
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
                        "Island Management",
                        "Custom Missions",
                        "Island Rankings",
                        "Progressive System",
                        "Economy System",
                        "Player Shops"
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
                        <span>Minimum 12GB RAM recommended</span>
                      </li>
                      <li className="flex items-center space-x-3 text-gray-300">
                        <Zap className="w-5 h-5 text-minecraft-blue" />
                        <span>Java 17 or higher</span>
                      </li>
                      <li className="flex items-center space-x-3 text-gray-300">
                        <Users className="w-5 h-5 text-minecraft-blue" />
                        <span>Supports up to 300 concurrent players</span>
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
                    <div className="p-3 rounded-lg bg-purple-500/20">
                      <Gem className="w-8 h-8 text-purple-500" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold">Custom Missions</h3>
                      <p className="text-gray-400">100+ unique missions and challenges</p>
                    </div>
                  </div>
                  <div className="aspect-video rounded-lg overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2070"
                      alt="Custom Missions"
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
                    <div className="p-3 rounded-lg bg-yellow-500/20">
                      <Trophy className="w-8 h-8 text-yellow-500" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold">Island Rankings</h3>
                      <p className="text-gray-400">Competitive island ranking system</p>
                    </div>
                  </div>
                  <div className="aspect-video rounded-lg overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2070"
                      alt="Island Rankings"
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
                      {['1.21.x', 'Skyblock', 'Islands', 'setup', 'server'].map(version => (
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

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
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

export default SkyblockServer;