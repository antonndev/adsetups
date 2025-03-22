import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';

export function Newsletter() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    
    // Simulate API call
    setTimeout(() => {
      setStatus('success');
      setEmail('');
      setTimeout(() => setStatus('idle'), 3000);
    }, 1000);
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <form onSubmit={handleSubmit} className="relative">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 focus:border-minecraft-blue/50 focus:ring focus:ring-minecraft-blue/20 transition-all outline-none text-white placeholder-gray-400"
        />
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          type="submit"
          disabled={status === 'loading' || status === 'success'}
          className="absolute right-2 top-2 px-4 py-1.5 bg-minecraft-blue text-white rounded-md flex items-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <span>Subscribe</span>
          <Send className="w-4 h-4" />
        </motion.button>
      </form>
      
      {status === 'success' && (
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-2 text-green-400 text-sm"
        >
          Thanks for subscribing!
        </motion.p>
      )}
    </div>
  );
}