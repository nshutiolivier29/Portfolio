'use client';

import { useState, useRef, useEffect } from 'react';

export default function ChatWidget() {
    const [isOpen, setIsOpen] = useState(false);
    const [isTyping, setIsTyping] = useState(false);
    const [messages, setMessages] = useState<{ text: string; isUser: boolean }[]>([
        { text: "Hi there! 👋 Welcome to my portfolio.", isUser: false },
        { text: "I can help you with Project Inquiries, Services, or just say hi!", isUser: false },
    ]);
    const [inputValue, setInputValue] = useState("");
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, isOpen, isTyping]);

    const handleSendMessage = async (text: string) => {
        if (!text.trim()) return;

        // 1. Add User Message
        setMessages(prev => [...prev, { text: text, isUser: true }]);
        setInputValue("");

        // 2. Simulate Typing Delay
        setIsTyping(true);
        await new Promise(resolve => setTimeout(resolve, 1500));
        setIsTyping(false);

        // 3. Generate Smart Reply
        let reply = "Thanks for your message! I'll get back to you shortly.";
        const lowerText = text.toLowerCase();

        if (lowerText.includes('price') || lowerText.includes('cost') || lowerText.includes('rate')) {
            reply = "My rates vary depending on the project scope. Feel free to use the Contact form or email me for a quote!";
        } else if (lowerText.includes('service') || lowerText.includes('do you do')) {
            reply = "I specialize in Web Design, UI/UX, and Branding. Check out the Services section for more details.";
        } else if (lowerText.includes('hello') || lowerText.includes('hi')) {
            reply = "Hello! Great to see you here. How can I help you today?";
        } else if (lowerText.includes('contact') || lowerText.includes('email')) {
            reply = "You can reach me at nshutiolivier29@gmail.com or call me at 0784580525.";
        }

        setMessages(prev => [...prev, { text: reply, isUser: false }]);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        handleSendMessage(inputValue);
    };

    return (
        <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
            {/* Chat Window */}
            <div
                className={`
                    mb-4 w-80 md:w-96 bg-white/90 dark:bg-gray-900/90 backdrop-blur-xl border border-white/20 shadow-2xl rounded-3xl overflow-hidden transition-all duration-300 origin-bottom-right flex flex-col
                    ${isOpen ? 'opacity-100 scale-100 translate-y-0 h-[500px]' : 'opacity-0 scale-95 translate-y-10 pointer-events-none h-0'}
                `}
            >
                {/* Header */}
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-4 flex items-center justify-between shrink-0">
                    <div className="flex items-center space-x-3">
                        <div className="relative">
                            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-blue-600 font-bold overflow-hidden border-2 border-white/50">
                                <img src="/assets/profile-final.jpg" alt="Hirwa" className="w-full h-full object-cover" />
                            </div>
                            <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-400 rounded-full border-2 border-blue-600"></div>
                        </div>
                        <div>
                            <h3 className="text-white font-bold text-sm">Hirwa Nshuti</h3>
                            <p className="text-blue-100 text-xs">Online now</p>
                        </div>
                    </div>
                    <button
                        onClick={() => setIsOpen(false)}
                        className="text-white/80 hover:text-white transition-colors"
                    >
                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>

                {/* Messages Area */}
                <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50/50 dark:bg-black/20">
                    <div className="text-center text-xs text-gray-400 my-4">Today</div>
                    {messages.map((msg, idx) => (
                        <div key={idx} className={`flex ${msg.isUser ? 'justify-end' : 'justify-start'}`}>
                            <div
                                className={`
                                    max-w-[80%] p-3 rounded-2xl text-sm leading-relaxed animate-fade-in-up
                                    ${msg.isUser
                                        ? 'bg-blue-600 text-white rounded-br-none'
                                        : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 shadow-sm border border-gray-100 dark:border-gray-700 rounded-bl-none'
                                    }
                                `}
                            >
                                {msg.text}
                            </div>
                        </div>
                    ))}

                    {/* Typing Indicator */}
                    {isTyping && (
                        <div className="flex justify-start">
                            <div className="bg-white dark:bg-gray-800 p-4 rounded-2xl rounded-bl-none shadow-sm border border-gray-100 dark:border-gray-700 flex space-x-1">
                                <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></span>
                                <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></span>
                                <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></span>
                            </div>
                        </div>
                    )}
                    <div ref={messagesEndRef} />
                </div>

                {/* Quick Replies */}
                <div className="px-4 py-2 bg-gray-50 dark:bg-gray-900/50 flex gap-2 overflow-x-auto no-scrollbar">
                    {['Services', 'Pricing', 'Contact', 'Project'].map((q) => (
                        <button
                            key={q}
                            onClick={() => handleSendMessage(q)}
                            className="whitespace-nowrap px-3 py-1 bg-white dark:bg-gray-800 border border-blue-200 dark:border-blue-900 text-blue-600 dark:text-blue-400 text-xs rounded-full hover:bg-blue-50 dark:hover:bg-gray-700 transition-colors"
                        >
                            {q}
                        </button>
                    ))}
                </div>

                {/* Input Area */}
                <form onSubmit={handleSubmit} className="p-4 bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800 shrink-0">
                    <div className="relative flex items-center">
                        <input
                            type="text"
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                            placeholder="Type a message..."
                            className="w-full pl-4 pr-12 py-3 bg-gray-100 dark:bg-gray-800 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/50 dark:text-white transition-all"
                        />
                        <button
                            type="submit"
                            disabled={!inputValue.trim()}
                            className="absolute right-2 p-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                        >
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                            </svg>
                        </button>
                    </div>
                </form>
            </div>

            {/* Toggle Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className={`
                    group relative flex items-center justify-center w-14 h-14 rounded-full shadow-2xl transition-all duration-500
                    ${isOpen ? 'bg-red-500 rotate-90' : 'bg-gradient-to-r from-blue-600 to-purple-600 hover:scale-110'}
                `}
            >
                <span className={`absolute transition-all duration-300 ${isOpen ? 'opacity-100 rotate-0' : 'opacity-0 -rotate-90'}`}>
                    <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </span>
                <span className={`absolute transition-all duration-300 ${!isOpen ? 'opacity-100 rotate-0' : 'opacity-0 rotate-90'}`}>
                    {/* Robot Icon */}
                    <svg className="w-7 h-7 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="3" y="11" width="18" height="10" rx="2" />
                        <circle cx="12" cy="5" r="2" />
                        <path d="M12 7v4" />
                        <line x1="8" y1="16" x2="8" y2="16" />
                        <line x1="16" y1="16" x2="16" y2="16" />
                    </svg>
                </span>

                {/* Notification Dot */}
                {!isOpen && (
                    <span className="absolute top-0 right-0 w-4 h-4 bg-red-500 rounded-full border-2 border-white animate-bounce"></span>
                )}
            </button>
        </div>
    );
}
