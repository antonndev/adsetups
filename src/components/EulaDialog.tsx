import React from 'react';
import { X, Check, XCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface EulaDialogProps {
  isOpen: boolean;
  onClose: () => void;
  productName: string;
}

export function EulaDialog({ isOpen, onClose, productName }: EulaDialogProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={(e) => {
            if (e.target === e.currentTarget) onClose();
          }}
        >
          <motion.div
            initial={{ 
              scale: 0,
              opacity: 0,
              y: 100
            }}
            animate={{ 
              scale: 1,
              opacity: 1,
              y: 0
            }}
            exit={{ 
              scale: 0,
              opacity: 0,
              y: 100
            }}
            transition={{ 
              type: "spring",
              damping: 25,
              stiffness: 300
            }}
            className="bg-gradient-to-b from-minecraft-dark/95 to-black/95 backdrop-blur-md border border-white/20 rounded-xl max-w-lg w-full overflow-hidden shadow-2xl shadow-minecraft-blue/20 origin-bottom"
          >
            <div className="relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-minecraft-blue/20 to-purple-500/20 opacity-70" />
              <div className="relative flex items-center justify-between p-4">
                <div className="flex items-center space-x-2">
                  <div className="relative p-2 rounded-lg bg-gradient-to-br from-minecraft-blue to-blue-600 shadow-lg">
                    <svg 
                      className="w-6 h-6 text-white"
                      viewBox="0 0 24 24" 
                      fill="none" 
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path 
                        d="M12 2L4 6V12C4 16.4183 7.58172 20 12 20C16.4183 20 20 16.4183 20 12V6L12 2Z" 
                        className="stroke-current" 
                        strokeWidth="2" 
                        strokeLinecap="round" 
                        strokeLinejoin="round"
                      />
                      <path 
                        d="M12 11C13.1046 11 14 10.1046 14 9C14 7.89543 13.1046 7 12 7C10.8954 7 10 7.89543 10 9C10 10.1046 10.8954 11 12 11ZM12 11V16" 
                        className="stroke-current" 
                        strokeWidth="2" 
                        strokeLinecap="round" 
                        strokeLinejoin="round"
                      />
                    </svg>
                    <div className="absolute inset-0 rounded-lg bg-white/30 backdrop-blur-sm opacity-0 hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <h2 className="text-xl font-bold text-white">EULA for {productName}</h2>
                </div>
                <button
                  onClick={onClose}
                  className="text-gray-400 hover:text-white transition-colors p-2 hover:bg-white/10 rounded-lg"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>
            
            <div className="px-4 py-3 space-y-4 relative z-10">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
              >
                <h3 className="text-lg font-semibold text-white mb-2">{productName}</h3>
                <p className="text-base text-gray-300">
                  This product uses BuiltByBit's Standard EULA which includes only permissions and limitations.
                </p>
              </motion.div>
              
              <div className="grid grid-cols-2 gap-4">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="bg-white/5 backdrop-blur-sm p-4 rounded-lg border border-white/10 hover:border-minecraft-blue/50 transition-all hover:shadow-lg hover:shadow-minecraft-blue/20"
                >
                  <h3 className="text-base font-semibold text-minecraft-blue mb-3 flex items-center">
                    <Check className="w-5 h-5 mr-2" />
                    Permissions
                  </h3>
                  <ul className="space-y-2">
                    {[
                      'Hosting',
                      'Commercial use',
                      'Modification'
                    ].map((permission, index) => (
                      <motion.li
                        key={permission}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 + (index * 0.1) }}
                        className="flex items-center space-x-2 text-base text-gray-300"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
                        <span>{permission}</span>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="bg-white/5 backdrop-blur-sm p-4 rounded-lg border border-white/10 hover:border-red-500/50 transition-all hover:shadow-lg hover:shadow-red-500/20"
                >
                  <h3 className="text-base font-semibold text-red-400 mb-3 flex items-center">
                    <XCircle className="w-5 h-5 mr-2" />
                    Limitations
                  </h3>
                  <ul className="space-y-2">
                    {[
                      'Resale',
                      'Relicense',
                      'Refunds',
                      'Redistribution'
                    ].map((limitation, index) => (
                      <motion.li
                        key={limitation}
                        initial={{ opacity: 0, x: 10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 + (index * 0.1) }}
                        className="flex items-center space-x-2 text-base text-gray-300"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-red-500" />
                        <span>{limitation}</span>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              </div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="bg-gradient-to-r from-minecraft-blue/10 to-purple-500/10 backdrop-blur-sm p-4 rounded-lg border border-white/20"
              >
                <p className="text-base text-gray-300">
                  All buyers are guaranteed <span className="font-semibold text-minecraft-blue">one</span> working copy and support if the product does not function as described.
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="text-gray-400 text-sm"
              >
                This license is an extension of{' '}
                <a 
                  href="https://builtbybit.com/wiki/merchant-agreement/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-minecraft-blue hover:underline"
                >
                  BuiltByBit's Merchant Agreement
                </a>
                .
              </motion.div>
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex justify-end px-4 py-3 border-t border-white/10 bg-black/10 backdrop-blur-sm relative z-10"
            >
              <button
                onClick={onClose}
                className="px-6 py-2.5 bg-gradient-to-r from-minecraft-blue to-minecraft-blue-dark text-white font-medium rounded-lg transition-all hover:scale-105 hover:shadow-lg hover:shadow-minecraft-blue/20"
              >
                I understand
              </button>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}