import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

interface ChatbotProps {
  webhookUrl?: string;
}

const Chatbot: React.FC<ChatbotProps> = ({ 
  webhookUrl = 'https://automate.axonflash.com/webhook/lanchat' 
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [isOnline, setIsOnline] = useState(true);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (messages.length === 0) {
      const greetingMessage: Message = {
        id: 'greeting',
        text: "👋 Hello! I'm here to help you with your cab booking needs. How can I assist you today?",
        sender: 'bot',
        timestamp: new Date()
      };
      setMessages([greetingMessage]);
    }
  }, [messages.length]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  // Simplified online status (always online for lightweight version)
  useEffect(() => {
    setIsOnline(true);
  }, []);

  const sendMessage = async () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue.trim(),
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    try {
      const payload = {
        type: 'chat_message',
        message: userMessage.text,
        timestamp: userMessage.timestamp.toISOString(),
        sessionId: `chat_${Date.now()}`,
        userAgent: navigator.userAgent,
        source: 'lankadhish-chatbot',
        url: window.location.href
      };

      const response = await fetch(webhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      const rawText = await response.text();
      console.log("Webhook raw response:", rawText);

      let replyText: string;

      try {
        const parsed = JSON.parse(rawText);
        replyText = parsed.message || JSON.stringify(parsed);
      } catch {
        replyText = rawText || "✅ Message received. We'll get back to you soon.";
      }

      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: replyText,
        sender: 'bot',
        timestamp: new Date()
      };

      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);

    } catch (error) {
      console.error('Failed to send message:', error);

      const errorResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: "❌ Sorry, there was an issue sending your message. Please try again or call us directly at +91 9157575675.",
        sender: 'bot',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, errorResponse]);
      setIsTyping(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('en-US', { 
      hour: '2-digit', 
      minute: '2-digit',
      hour12: true 
    });
  };

  return (
    <>
      {/* Floating Chat Button */}
      {!isOpen && (
        <div className="fixed bottom-6 right-6 z-50">
          <Button onClick={() => setIsOpen(true)} className="w-14 h-14 rounded-full bg-gradient-to-r from-primary to-secondary shadow-lg" size="icon">
            <MessageCircle className="w-6 h-6 text-white" />
          </Button>
        </div>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 z-50 w-80 md:w-96 h-96 md:h-[500px]">
          <div className="bg-white rounded-lg shadow-2xl border border-gray-200 h-full flex flex-col overflow-hidden">
            <div className="bg-gradient-to-r from-primary to-secondary text-white p-4 flex items-center justify-between">
              <h3 className="font-semibold text-sm">Lankadhish Support</h3>
              <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)} className="w-8 h-8 text-white">
                <X className="w-4 h-4" />
              </Button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
              {messages.map((message) => (
                <div key={message.id} className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`rounded-lg px-3 py-2 ${message.sender === 'user' ? 'bg-primary text-white' : 'bg-white border text-gray-800'}`}>
                    <p className="text-sm leading-relaxed">{message.text}</p>
                    <p className="text-xs mt-1 text-gray-500">{formatTime(message.timestamp)}</p>
                  </div>
                </div>
              ))}

              {isTyping && <p className="text-xs text-gray-500">Bot is typing...</p>}
              <div ref={messagesEndRef} />
            </div>

            <div className="p-4 border-t border-gray-200 bg-white flex space-x-2">
              <Input 
                ref={inputRef} 
                value={inputValue} 
                onChange={(e) => setInputValue(e.target.value)} 
                onKeyDown={handleKeyDown} 
                placeholder="Type your message..." 
                className="flex-1 border-gray-300" 
              />
              <Button onClick={sendMessage} disabled={!inputValue.trim()} className="bg-primary" size="icon">
                <Send className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Chatbot;
