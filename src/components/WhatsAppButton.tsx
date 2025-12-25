import { useState } from 'react';
import { X, Send } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const WHATSAPP_NUMBER = '8801842299275';
const DEFAULT_MESSAGE = 'Hi! I found your portfolio and would like to discuss a project.';

const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
  </svg>
);

export const WhatsAppButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState(DEFAULT_MESSAGE);

  const handleSend = () => {
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`, '_blank');
    setIsOpen(false);
  };

  return (
    <>
      {/* Floating Button with Pulse Ring */}
      <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50">
        {/* Animated Pulse Rings */}
        <motion.div
          className="absolute inset-0 rounded-full bg-[#25D366]"
          animate={{
            scale: [1, 1.5, 1.5],
            opacity: [0.4, 0, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeOut",
          }}
        />
        <motion.div
          className="absolute inset-0 rounded-full bg-[#25D366]"
          animate={{
            scale: [1, 1.8, 1.8],
            opacity: [0.3, 0, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeOut",
            delay: 0.5,
          }}
        />

        {/* Main Button */}
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close WhatsApp chat" : "Open WhatsApp chat"}
          aria-expanded={isOpen}
          className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br from-[#25D366] to-[#128C7E] text-white shadow-[0_8px_32px_rgba(37,211,102,0.4)] flex items-center justify-center overflow-hidden group"
          whileHover={{ scale: 1.1, rotate: isOpen ? 0 : 10 }}
          whileTap={{ scale: 0.95 }}
          initial={{ scale: 0, rotate: -180 }}
          animate={{ 
            scale: 1, 
            rotate: 0,
            y: [0, -8, 0],
          }}
          transition={{ 
            scale: { type: 'spring', stiffness: 260, damping: 20 },
            y: { duration: 2, repeat: Infinity, ease: "easeInOut" }
          }}
        >
          {/* Shine Effect */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12"
            initial={{ x: '-200%' }}
            animate={{ x: '200%' }}
            transition={{ duration: 3, repeat: Infinity, repeatDelay: 2 }}
          />

          <AnimatePresence mode="wait">
            {isOpen ? (
              <motion.div
                key="close"
                initial={{ rotate: -180, scale: 0 }}
                animate={{ rotate: 0, scale: 1 }}
                exit={{ rotate: 180, scale: 0 }}
                transition={{ duration: 0.3, type: 'spring' }}
              >
                <X className="w-7 h-7" />
              </motion.div>
            ) : (
              <motion.div
                key="chat"
                initial={{ rotate: 180, scale: 0 }}
                animate={{ rotate: 0, scale: 1 }}
                exit={{ rotate: -180, scale: 0 }}
                transition={{ duration: 0.3, type: 'spring' }}
              >
                <WhatsAppIcon className="w-8 h-8" />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.button>

      </div>

      {/* Chat Popup */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 40, scale: 0.8 }}
            transition={{ duration: 0.4, type: 'spring', bounce: 0.3 }}
            className="fixed bottom-24 right-4 sm:bottom-28 sm:right-6 z-50 w-[calc(100vw-2rem)] sm:w-[340px] max-w-[340px] bg-background border border-border rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.3)] overflow-hidden"
          >
            {/* Header with Gradient */}
            <div className="relative bg-gradient-to-br from-[#25D366] via-[#128C7E] to-[#075E54] px-5 py-5 overflow-hidden">
              {/* Decorative Circles */}
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-white/10 rounded-full" />
              <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-white/5 rounded-full" />
              
              <div className="relative flex items-center gap-4">
                <motion.div 
                  className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center ring-2 ring-white/30"
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                >
                  <WhatsAppIcon className="w-7 h-7 text-white" />
                </motion.div>
                <div>
                  <h4 className="font-bold text-white text-lg">Live Chat</h4>
                  <div className="flex items-center gap-2">
                    <motion.span 
                      className="w-2 h-2 rounded-full bg-green-300"
                      animate={{ scale: [1, 1.3, 1] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    />
                    <p className="text-sm text-white/80">Online now</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Body */}
            <div className="p-5 space-y-4 bg-gradient-to-b from-secondary/30 to-background">
              {/* Welcome Message Bubble */}
              <motion.div 
                className="bg-secondary rounded-2xl rounded-tl-sm p-4 max-w-[90%] shadow-sm"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
              >
                <p className="text-sm text-foreground leading-relaxed">
                  👋 Hi there! I'm Amamul Ahasan. How can I help you today? Feel free to send me a message!
                </p>
                <span className="text-xs text-muted-foreground mt-2 block">Just now</span>
              </motion.div>

              {/* Input Area */}
              <motion.div 
                className="space-y-3"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <label htmlFor="whatsapp-message" className="sr-only">Your message</label>
                <textarea
                  id="whatsapp-message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Type your message..."
                  rows={3}
                  className="w-full bg-secondary/50 border border-border/50 rounded-2xl p-4 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-[#25D366]/50 focus:border-[#25D366] resize-none transition-all"
                />

                <motion.button
                  onClick={handleSend}
                  className="w-full bg-gradient-to-r from-[#25D366] to-[#128C7E] hover:from-[#20BD5A] hover:to-[#0e7a6b] text-white font-semibold py-4 rounded-2xl transition-all flex items-center justify-center gap-3 shadow-lg shadow-[#25D366]/20"
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <WhatsAppIcon className="w-5 h-5" />
                  Start Conversation
                  <Send className="w-4 h-4" />
                </motion.button>
              </motion.div>
            </div>

            {/* Footer */}
            <div className="px-5 py-3 border-t border-border/50 bg-secondary/20">
              <p className="text-xs text-muted-foreground text-center">
                💬 Powered by WhatsApp • Usually replies instantly
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
