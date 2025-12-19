import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send } from 'lucide-react';
import { startChatSession } from '../services/geminiService';
import { Chat, Content } from '@google/genai';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../translations';

interface Message {
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}

const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [chatInstance, setChatInstance] = useState<Chat | null>(null);
  const { language } = useLanguage();
  const t = translations[language].chatbot;

  const quickRepliesInitial = [
    t.quickReplies.restaurant,
    t.quickReplies.hotel,
    t.quickReplies.wellness,
    t.quickReplies.solutions
  ];
  
  const quickRepliesFollowUp = [
    t.quickReplies.howWork,
    t.quickReplies.bookCall,
    t.quickReplies.whatsapp
  ];

  const [showQuickReplies, setShowQuickReplies] = useState<string[]>(quickRepliesInitial);
  
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const chatWindowRef = useRef<HTMLDivElement>(null);

  // Re-initialize or update quick replies when language changes
  useEffect(() => {
    // If no interaction yet, reset to initial
    if (messages.length <= 1) {
       setShowQuickReplies(quickRepliesInitial);
    }
  }, [language]);

  // Initialize chat and load history
  useEffect(() => {
    const initChat = async () => {
      const savedHistory = localStorage.getItem('maison_chat_history');
      let initialHistory: Content[] = [];
      let uiMessages: Message[] = [];

      if (savedHistory) {
        try {
          const parsed = JSON.parse(savedHistory);
          uiMessages = parsed.map((m: any) => ({
            ...m,
            timestamp: new Date(m.timestamp)
          }));
          
          initialHistory = uiMessages.map(m => ({
            role: m.role,
            parts: [{ text: m.text }]
          }));
          
          setMessages(uiMessages);
          if (uiMessages.length > 2) {
             setShowQuickReplies(quickRepliesFollowUp);
          }
        } catch (e) {
          console.error("Failed to parse chat history", e);
        }
      } else {
         const welcomeMsg: Message = {
           role: 'model',
           text: t.welcome,
           timestamp: new Date()
         };
         setMessages([welcomeMsg]);
         initialHistory.push({ role: 'model', parts: [{ text: welcomeMsg.text }]});
      }

      try {
        const chat = await startChatSession(initialHistory);
        setChatInstance(chat);
      } catch (e) {
        console.error("Failed to start chat session", e);
      }
    };

    initChat();
  }, [language]); // Re-init on language change might be aggressive, but ensures prompt context if we were sending language to system prompt (we aren't yet, but good practice)

  useEffect(() => {
    if (messages.length > 0) {
      localStorage.setItem('maison_chat_history', JSON.stringify(messages));
    }
  }, [messages]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isLoading]);

  const handleSend = async (text: string = input) => {
    if (!text.trim() || !chatInstance) return;

    const userMsg: Message = { role: 'user', text: text, timestamp: new Date() };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);
    setShowQuickReplies([]);

    try {
      const result = await chatInstance.sendMessage({ message: text });
      const responseText = result.text;
      
      const botMsg: Message = { 
        role: 'model', 
        text: responseText || (language === 'fr' ? "J'ai du mal à me connecter. Veuillez réessayer plus tard." : "I'm having trouble connecting right now. Please try again later."), 
        timestamp: new Date() 
      };
      
      setMessages(prev => [...prev, botMsg]);
      
      if (text.toLowerCase().includes('restaurant') || text.toLowerCase().includes('hotel') || text.toLowerCase().includes('wellness') || text.toLowerCase().includes('bien-être')) {
         setShowQuickReplies(quickRepliesFollowUp);
      } else if (messages.length > 3) {
         setShowQuickReplies(quickRepliesFollowUp);
      } else {
         setShowQuickReplies([]);
      }

    } catch (error) {
      console.error("Chat error:", error);
      setMessages(prev => [...prev, { 
        role: 'model', 
        text: language === 'fr' ? "Désolé, je n'arrive pas à me connecter. Contactez-nous sur WhatsApp : https://wa.me/33767026912" : "Sorry, I'm having trouble connecting. Please try again or contact us on WhatsApp: https://wa.me/33767026912", 
        timestamp: new Date() 
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleQuickReply = (text: string) => {
    handleSend(text);
  };

  const renderMessageText = (text: string) => {
    const urlRegex = /(https?:\/\/[^\s]+)/g;
    return text.split(urlRegex).map((part, i) => {
      if (part.match(urlRegex)) {
        return <a key={i} href={part} target="_blank" rel="noopener noreferrer" className="text-terracotta underline hover:text-forest break-all">{part}</a>;
      }
      return part;
    });
  };

  return (
    <>
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 md:w-16 md:h-16 bg-terracotta rounded-full shadow-lg flex items-center justify-center text-white hover:bg-[#c96d55] transition-colors focus:outline-none"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
      >
        {isOpen ? <X size={28} /> : <MessageCircle size={32} />}
        <span className="absolute top-0 right-0 w-3 h-3 md:w-4 md:h-4 bg-[#25D366] border-2 border-white rounded-full"></span>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            ref={chatWindowRef}
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed z-50 bottom-24 right-4 w-[calc(100%-2rem)] md:w-[380px] h-[600px] max-h-[70vh] md:max-h-[80vh] bg-surface rounded-2xl shadow-2xl border border-forest/10 flex flex-col overflow-hidden"
          >
            <div className="bg-forest p-4 flex justify-between items-center text-cream shrink-0">
              <div className="flex flex-col">
                <span className="font-serif font-medium text-lg">Maison IA Studio</span>
                <span className="text-xs text-cream/70 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 bg-[#25D366] rounded-full animate-pulse"></span>
                  {t.online}
                </span>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-cream/80 hover:text-white">
                <X size={20} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-cream/50 scroll-smooth">
              {messages.map((msg, idx) => (
                <div
                  key={idx}
                  className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[85%] p-3.5 rounded-2xl text-sm leading-relaxed shadow-sm ${
                      msg.role === 'user'
                        ? 'bg-terracotta text-white rounded-tr-none'
                        : 'bg-white text-charcoal rounded-tl-none border border-forest/5'
                    }`}
                  >
                    <div className="whitespace-pre-wrap">{renderMessageText(msg.text)}</div>
                    <div className={`text-[10px] mt-1 text-right ${msg.role === 'user' ? 'text-white/70' : 'text-charcoal/40'}`}>
                      {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </div>
                  </div>
                </div>
              ))}
              
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-white p-3 rounded-2xl rounded-tl-none border border-forest/5 shadow-sm">
                    <div className="flex gap-1">
                      <motion.div 
                        className="w-1.5 h-1.5 bg-forest/40 rounded-full"
                        animate={{ y: [0, -5, 0] }}
                        transition={{ duration: 0.6, repeat: Infinity, delay: 0 }}
                      />
                      <motion.div 
                        className="w-1.5 h-1.5 bg-forest/40 rounded-full"
                        animate={{ y: [0, -5, 0] }}
                        transition={{ duration: 0.6, repeat: Infinity, delay: 0.2 }}
                      />
                      <motion.div 
                        className="w-1.5 h-1.5 bg-forest/40 rounded-full"
                        animate={{ y: [0, -5, 0] }}
                        transition={{ duration: 0.6, repeat: Infinity, delay: 0.4 }}
                      />
                    </div>
                  </div>
                </div>
              )}
              
              {!isLoading && showQuickReplies.length > 0 && (
                 <div className="flex flex-wrap gap-2 mt-2">
                    {showQuickReplies.map((reply, i) => (
                       <button
                         key={i}
                         onClick={() => handleQuickReply(reply)}
                         className="text-xs border border-terracotta text-terracotta hover:bg-terracotta hover:text-white px-3 py-1.5 rounded-full transition-colors bg-white font-medium"
                       >
                         {reply}
                       </button>
                    ))}
                 </div>
              )}
              
              <div ref={messagesEndRef} />
            </div>

            <div className="p-4 bg-white border-t border-forest/10 shrink-0">
              <form 
                onSubmit={(e) => { e.preventDefault(); handleSend(); }}
                className="flex items-center gap-2"
              >
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder={t.placeholder}
                  className="flex-1 bg-surface border border-forest/10 rounded-full px-4 py-2.5 text-sm focus:outline-none focus:border-terracotta/50 focus:ring-1 focus:ring-terracotta/50 transition-all placeholder:text-charcoal/40"
                />
                <button
                  type="submit"
                  disabled={!input.trim() || isLoading}
                  className="w-10 h-10 bg-terracotta text-white rounded-full flex items-center justify-center hover:bg-[#c96d55] disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-sm"
                >
                  <Send size={18} className={input.trim() ? 'ml-0.5' : ''} />
                </button>
              </form>
              <div className="text-[10px] text-center text-charcoal/30 mt-2 flex justify-center gap-4">
                  <span>Powered by Gemini AI</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Chatbot;