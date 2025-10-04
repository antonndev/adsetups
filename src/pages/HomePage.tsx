import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { 
  Server, Users, Rocket, ChevronRight, Github, 
  Database, Shield, Zap, Star, Cpu, Cloud, Check, 
  Globe, Sword, Castle, Home, ArrowRight, Sparkles,
  Crown, Gem
} from 'lucide-react';
import { TypewriterHeading } from '../components/TypewriterHeading';
import { Particles } from '../components/Particles';

const HeroBackground = () => {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.3], [1.1, 1.2]);
  const blur = useTransform(scrollYProgress, [0, 0.3], [0, 8]);

  const images = [
    "https://antonndev.github.io/wings.github.io/image1.png",
    "https://antonndev.github.io/wings.github.io/image2.png",
    "https://antonndev.github.io/wings.github.io/image3.png"
  ];

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 15000);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div 
      className="fixed inset-0 w-full h-full"
      style={{ opacity }}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={currentImage}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 w-full h-full"
          style={{ 
            scale,
            filter: blur.toString().includes('8') ? 'blur(8px)' : 'blur(0px)',
            backgroundImage: `url("${images[currentImage]}")`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />
      </AnimatePresence>
      <div className="absolute inset-0 bg-gradient-to-b from-minecraft-dark/70 via-minecraft-dark/90 to-minecraft-dark pointer-events-none" />
    </motion.div>
  );
};

const Logo = () => (
  <svg
    className="w-8 h-8"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M16 2L30 16L16 30L2 16L16 2Z"
      fill="url(#diamond-gradient)"
      className="animate-pulse-slow"
    />
    <path
      d="M16 6L26 16L16 26L6 16L16 6Z"
      fill="url(#inner-gradient)"
      fillOpacity="0.7"
    />
    <path
      d="M16 10L20 16L16 22L12 16L16 10Z"
      fill="white"
      fillOpacity="0.9"
    />
    <defs>
      <linearGradient id="diamond-gradient" x1="2" y1="2" x2="30" y2="30">
        <stop stopColor="#27A9E1" />
        <stop offset="1" stopColor="#1C7FA9" />
      </linearGradient>
      <linearGradient id="inner-gradient" x1="6" y1="6" x2="26" y2="26">
        <stop stopColor="#FFFFFF" />
        <stop offset="1" stopColor="#27A9E1" />
      </linearGradient>
    </defs>
  </svg>
);

function HomePage() {
  const { scrollYProgress } = useScroll();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  const parallaxY = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 20;
      const y = (e.clientY / window.innerHeight - 0.5) * 20;
      setMousePosition({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const features = [
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Enterprise Security",
      description: "Advanced protection systems and regular security updates",
      color: "from-blue-500/20 to-blue-600/10",
      iconBg: "bg-blue-500/20",
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=2070"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Optimized Performance",
      description: "Highly optimized for maximum server performance",
      color: "from-blue-500/20 to-blue-600/10",
      iconBg: "bg-blue-500/20",
      image: "https://images.unsplash.com/photo-1614741118887-7a4ee193a5fa?q=80&w=2074"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "24/7 Support",
      description: "Dedicated support team ready to help anytime",
      color: "from-blue-500/20 to-blue-600/10",
      iconBg: "bg-blue-500/20",
      image: "https://d15yx0mnc9teae.cloudfront.net/sites/default/files/2021-10/contact-us-showcase.png"
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "Data Management",
      description: "Efficient data handling and backup systems",
      color: "from-blue-500/20 to-blue-600/10",
      iconBg: "bg-blue-500/20",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2034"
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Global Infrastructure",
      description: "Worldwide server locations for optimal performance",
      color: "from-blue-500/20 to-blue-600/10",
      iconBg: "bg-blue-500/20",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072"
    },
    {
      icon: <Sparkles className="w-6 h-6" />,
      title: "Custom Features",
      description: "Unique and customizable server features",
      color: "from-blue-500/20 to-blue-600/10",
      iconBg: "bg-blue-500/20",
      image: "https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?q=80&w=2070"
    }
  ];

  const testimonials = [
    {
      name: "EarthMC",
      role: "Customer",
      content: "Very simple, featured plugins, amazing ideas",
      rating: 5,
      image: "https://www.iconpacks.net/icons/1/free-user-icon-295-thumb.png",
      date: "May 2025"
    },
    {
      name: "AppleMC",
      role: "Customer",
      content: "Diamond company.",
      rating: 5,
      image: "https://www.iconpacks.net/icons/1/free-user-icon-295-thumb.png",
      date: "April 2025"
    },
    {
      name: "Lotc",
      role: "Customer",
      content: "These setups really boosted my server..",
      rating: 5,
      image: "https://www.iconpacks.net/icons/1/free-user-icon-295-thumb.png",
      date: "March 2025"
    }
  ];

  const serverProducts = [
    {
      title: "Premium Survival Setup",
      type: "Survival Server",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSu7pi9_sQYmcQqb_GBixa6_qsebOpR5LVZsg&s",
      description: "Feature-rich survival experience with economy, land claiming, and custom enchants",
      features: ["Advanced Economy System", "Land Claiming", "Custom Enchants", "Player Shops"],
      price: "$149.99",
      icon: <Sword className="w-6 h-6 text-emerald-400" />,
      link: "/servers/survival",
      color: "from-emerald-500/20 to-emerald-600/20",
      bgGradient: "from-emerald-950 to-emerald-900/50",
      borderHover: "hover:border-emerald-500/30",
      iconColor: "text-emerald-400"
    },
    {
      title: "Ultimate Skyblock",
      type: "Skyblock Server",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSu7pi9_sQYmcQqb_GBixa6_qsebOpR5LVZsg&s",
      description: "Advanced island progression system with unique challenges and rewards",
      features: ["Island Management", "Custom Missions", "Island Rankings", "Progressive System"],
      price: "$199.99",
      icon: <Crown className="w-6 h-6 text-purple-400" />,
      link: "/servers/skyblock",
      color: "from-purple-500/20 to-purple-600/20",
      bgGradient: "from-purple-950 to-purple-900/50",
      borderHover: "hover:border-purple-500/30",
      iconColor: "text-purple-400"
    },
    {
      title: "Network Lobby",
      type: "Hub System",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSu7pi9_sQYmcQqb_GBixa6_qsebOpR5LVZsg&s",
      description: "Professional network hub with seamless server connections",
      features: ["Server Selector", "Queue System", "Hub Features", "Player Stats"],
      price: "$99.99",
      icon: <Castle className="w-6 h-6 text-amber-400" />,
      link: "/servers/lobby",
      color: "from-amber-500/20 to-amber-600/20",
      bgGradient: "from-amber-950 to-amber-900/50",
      borderHover: "hover:border-amber-500/30",
      iconColor: "text-amber-400"
    }
  ];

  return (
    <div className="min-h-screen bg-minecraft-dark text-white">
      <HeroBackground />
      <div className="relative min-h-screen flex items-center pt-20">
        <motion.div 
          className="absolute inset-0 opacity-30"
          style={{ y: parallaxY }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-blue-500/10 to-transparent" />
          <div className="absolute inset-0 animated-bg opacity-5" />
        </motion.div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="flex items-center space-x-3 mb-6"
            >
              <div className="p-2 rounded-lg bg-blue-500/20 backdrop-blur-sm border border-blue-500/30">
                <Server className="w-6 h-6 text-blue-400" />
              </div>
              <span className="text-blue-400 font-medium">Premium Minecraft Solutions</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-6xl md:text-7xl font-bold mb-6"
            >
              <span className="block">Next Generation</span>
              <TypewriterHeading className="mt-2" />
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl text-gray-300 mb-8 max-w-2xl"
            >
              Experience the future of Minecraft hosting with our cutting-edge server setups.
              Built for performance, designed for success.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a
                href="/servers"
                className="group relative inline-flex items-center justify-center px-8 py-3 bg-gradient-to-r from-blue-500 to-blue-600 overflow-hidden rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20"
              >
                <span className="relative text-white font-medium flex items-center">
                  Explore Servers
                  <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </a>
              <a
                href="https://docs.adsetups.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center px-8 py-3 border-2 border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white font-medium rounded-lg transition-all hover:scale-105"
              >
                Documentation
              </a>
            </motion.div>
          </div>
        </div>

        <motion.div
          className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-minecraft-dark to-transparent"
          style={{ opacity }}
        />
      </div>

      <section id="servers" className="py-24 relative">
        <Particles count={50} color="#4ADE80" className="z-0" />
        <div className="absolute inset-0 bg-gradient-to-b from-minecraft-dark via-black/50 to-minecraft-dark" />
        
        <div className="container mx-auto px-6 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Premium Server Solutions</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Choose from our expertly crafted server packages, designed for optimal performance and player engagement
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {serverProducts.map((product, index) => (
              <Link
                to={product.link}
                key={index}
                onClick={() => window.scrollTo(0, 0)}
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ y: -10 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`group relative overflow-hidden rounded-2xl bg-gradient-to-b ${product.bgGradient} border border-white/10 ${product.borderHover} transition-all duration-300`}
                >
                  <motion.div 
                    className="absolute inset-0 overflow-hidden"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  >
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-full h-full object-cover opacity-50"
                    />
                  </motion.div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                  
                  <div className="relative p-6">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="p-2 rounded-lg bg-white/5 backdrop-blur-sm">
                        {product.icon}
                      </div>
                      <span className={`font-medium ${product.iconColor}`}>{product.type}</span>
                    </div>

                    <h3 className="text-2xl font-bold mb-3">{product.title}</h3>
                    <p className="text-gray-300 mb-4">{product.description}</p>

                    <div className="space-y-2 mb-6">
                      {product.features.map((feature, i) => (
                        <div key={i} className="flex items-center space-x-2 text-sm text-gray-400">
                          <Check className={`w-4 h-4 ${product.iconColor}`} />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>

                    <div className="flex items-center justify-between mt-6 pt-4 border-t border-white/10">
                      <span className={`text-2xl font-bold ${product.iconColor}`}>{product.price}</span>
                      <span className="flex items-center space-x-2 text-white group-hover:translate-x-2 transition-transform duration-300">
                        <span>View Details</span>
                        <ArrowRight className="w-5 h-5" />
                      </span>
                    </div>
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section id="features" className="py-24 relative overflow-hidden bg-gradient-to-b from-minecraft-dark via-blue-900/20 to-minecraft-dark">
        <Particles count={75} color="#A78BFA" className="z-0" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-500/10 via-transparent to-transparent opacity-30" />
        
        <div className="container mx-auto px-6 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Why Choose Us</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Experience the difference with our premium features and dedicated support
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`group relative overflow-hidden rounded-xl bg-gradient-to-br ${feature.color} backdrop-blur-sm border border-white/10 hover:border-blue-500/20 transition-all p-6`}
              >
                <motion.div 
                  className="absolute inset-0 opacity-20"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  transition={{ duration: 0.6 }}
                >
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="w-full h-full object-cover"
                  />
                </motion.div>
                <div className="relative z-10">
                  <div className={`p-3 rounded-lg ${feature.iconBg} w-fit mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="reviews" className="py-24 relative bg-gradient-to-b from-minecraft-dark via-blue-900/20 to-minecraft-dark">
        <Particles count={60} color="#F472B6" className="z-0" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,_var(--tw-gradient-stops))] from-blue-500/10 via-transparent to-transparent opacity-30" />
        <div className="container mx-auto px-6 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">What our Clients Say</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Don't just take our word for it, let our customers' reviews speak for themselves
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="p-6 rounded-2xl bg-gradient-to-br from-blue-500/5 to-blue-600/10 backdrop-blur-sm border border-white/10 hover:border-blue-500/30 transition-all"
              >
                <div className="flex items-center space-x-4 mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div className="flex-1">
                    <h3 className="font-bold">{testimonial.name}</h3>
                    <p className="text-blue-400 text-sm">{testimonial.role}</p>
                  </div>
                  <span className="text-sm text-gray-400">{testimonial.date}</span>
                </div>
                <p className="text-gray-300 mb-4">{testimonial.content}</p>
                <div className="flex items-center justify-between">
                  <div className="flex space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-blue-400 fill-blue-400" />
                    ))}
                  </div>
                  <span className="text-sm text-gray-400">Verified Purchase</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <footer className="relative py-16 bg-gradient-to-b from-minecraft-dark to-black overflow-hidden">
        <Particles count={40} color="#60A5FA" className="z-0" />
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDEwIEwgNDAgMTAgTSAxMCAwIEwgMTAgNDBNIDAgMjAgTCA0MCAyMCBNIDIwIDAgTCAyMCA0MCBNIDAgMzAgTCA0MCAzMCBNIDMwIDAgTCAzMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMjcyNzI3IiBvcGFjaXR5PSIwLjIiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-10" />
        </div>

        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Logo />
                <span className="text-xl font-bold bg-gradient-to-r from-white via-white to-minecraft-blue bg-clip-text text-transparent">
                  ADSetups
                </span>
              </div>
              <p className="text-gray-400">
                Crafting exceptional Minecraft server experiences since 2024
              </p>
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
              <h3 className="text-lg font-bold mb-4">Connect</h3>
              <div className="flex space-x-4">
                <a href="#" className="p-2 rounded-lg bg-white/5 hover:bg-minecraft-blue/20 text-gray-400 hover:text-minecraft-blue transition-all">
                  <Github className="w-5 h-5" />
                </a>
                <a href="#" className="p-2 rounded-lg bg-white/5 hover:bg-minecraft-blue/20 text-gray-400 hover:text-minecraft-blue transition-all">
                  <Users className="w-5 h-5" />
                </a>
                <a href="#" className="p-2 rounded-lg bg-white/5 hover:bg-minecraft-blue/20 text-gray-400 hover:text-minecraft-blue transition-all">
                  <Rocket className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-minecraft-blue/20 via-transparent to-minecraft-blue/20 animate-gradient" />
            <div className="relative border-t border-b border-minecraft-blue/20 py-6 backdrop-blur-sm">
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
        </div>
      </footer>
    </div>
  );
}

export default HomePage;
