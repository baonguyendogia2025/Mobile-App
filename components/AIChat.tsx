import React, { useState, useEffect, useRef } from 'react';
import { ChatMessage } from '../types';
import { SendIcon, MicrophoneIcon } from './Icons';
import { GoogleGenAI, Type } from "@google/genai";

const initialMessages: ChatMessage[] = [
  {
    sender: 'ai',
    text: "Hello! I'm your AI assistant. How can I help you today?",
    timestamp: '03:42 PM',
  },
];

const SuggestionChip: React.FC<{ text: string, onClick: () => void }> = ({ text, onClick }) => (
    <button onClick={onClick} className="bg-neutral-200 text-neutral-700 text-sm font-medium px-4 py-2 rounded-full hover:bg-neutral-300 transition-colors">
        {text}
    </button>
);

const AIChat: React.FC = () => {
    const [messages, setMessages] = useState<ChatMessage[]>(initialMessages);
    const [inputText, setInputText] = useState('');
    const [suggestions, setSuggestions] = useState<string[]>(['AR Tech', '3D Modeling', 'News']);
    const [isLoadingSuggestions, setIsLoadingSuggestions] = useState(false);
    const chatEndRef = useRef<HTMLDivElement>(null);

    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

    useEffect(() => {
        chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages]);
    
    const generateSuggestions = async (lastMessage: string) => {
        setIsLoadingSuggestions(true);
        try {
            const response = await ai.models.generateContent({
                model: "gemini-2.5-flash",
                contents: `Based on this AI message, generate 3 concise and relevant user reply suggestions:\n\nAI Message: "${lastMessage}"`,
                config: {
                    responseMimeType: "application/json",
                    responseSchema: {
                        type: Type.ARRAY,
                        items: { type: Type.STRING },
                    },
                },
            });
            const suggestionsArray = JSON.parse(response.text);
            if (Array.isArray(suggestionsArray)) {
                setSuggestions(suggestionsArray.slice(0, 3)); // Ensure only 3 suggestions
            }
        } catch (error) {
            console.error("Error generating suggestions:", error);
            setSuggestions([]); // Clear suggestions on error
        } finally {
            setIsLoadingSuggestions(false);
        }
    };
    
    const sendMessage = (messageText: string) => {
        if (messageText.trim() === '') return;

        const newUserMessage: ChatMessage = {
            sender: 'user',
            text: messageText,
            timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        };

        setMessages(prev => [...prev, newUserMessage]);
        setInputText('');
        setSuggestions([]); // Clear old suggestions immediately

        // Simulate AI response
        setTimeout(() => {
            const aiResponse: ChatMessage = {
                sender: 'ai',
                text: `I'm processing your request about "${messageText}"...`,
                timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
            };
            setMessages(prev => [...prev, aiResponse]);
            generateSuggestions(aiResponse.text);
        }, 1000);
    };

    const handleSend = () => {
       sendMessage(inputText);
    };

    return (
        <div className="flex flex-col h-full bg-neutral-100">
            {/* Header */}
            <header className="flex items-center p-4 border-b border-neutral-200 bg-white">
                <div className="relative">
                    <div className="w-12 h-12 bg-purple-200 rounded-full flex items-center justify-center">
                        <svg className="w-8 h-8 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c.251.042.502.095.752.152v5.451a2.25 2.25 0 00.659 1.591l2.243 2.243c.33.33.78.47 1.21.372M9.75 3.104a2.25 2.25 0 00-1.5 2.122v5.714a2.25 2.25 0 00.659 1.591L9.5 14.5M14.25 10.5a2.25 2.25 0 00-2.25-2.25v5.714a2.25 2.25 0 001.5 2.122l2.243 1.121c.33.166.702.248 1.07.248s.74-.082 1.07-.248l2.243-1.121a2.25 2.25 0 001.5-2.122v-5.714a2.25 2.25 0 00-2.25-2.25h-5.25z"></path></svg>
                    </div>
                    <span className="absolute bottom-0 right-0 block h-3 w-3 rounded-full bg-green-500 ring-2 ring-white"></span>
                </div>
                <div className="ml-4">
                    <h2 className="font-bold text-lg text-neutral-800">AI Assistant</h2>
                    <p className="text-sm text-neutral-500">Online • Always here to help</p>
                </div>
            </header>

            {/* Chat Body */}
            <div className="flex-1 p-4 space-y-4 overflow-y-auto">
                {messages.map((msg, index) => (
                    <div key={index} className={`flex items-end gap-2 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                        {msg.sender === 'ai' && (
                            <div className="w-8 h-8 bg-purple-200 rounded-full flex items-center justify-center flex-shrink-0">
                                <svg className="w-5 h-5 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c.251.042.502.095.752.152v5.451a2.25 2.25 0 00.659 1.591l2.243 2.243c.33.33.78.47 1.21.372M9.75 3.104a2.25 2.25 0 00-1.5 2.122v5.714a2.25 2.25 0 00.659 1.591L9.5 14.5M14.25 10.5a2.25 2.25 0 00-2.25-2.25v5.714a2.25 2.25 0 001.5 2.122l2.243 1.121c.33.166.702.248 1.07.248s.74-.082 1.07-.248l2.243-1.121a2.25 2.25 0 001.5-2.122v-5.714a2.25 2.25 0 00-2.25-2.25h-5.25z"></path></svg>
                            </div>
                        )}
                        <div>
                            <div className={`px-4 py-2 rounded-2xl max-w-xs md:max-w-md ${msg.sender === 'user' ? 'bg-blue-600 text-white rounded-br-none' : 'bg-white text-neutral-800 rounded-bl-none'}`}>
                                <p>{msg.text}</p>
                            </div>
                            <p className={`text-xs text-neutral-400 mt-1 ${msg.sender === 'user' ? 'text-right' : 'text-left'}`}>{msg.timestamp}</p>
                        </div>
                    </div>
                ))}
                <div ref={chatEndRef} />
            </div>

            {/* Input Area */}
            <footer className="p-4 bg-white border-t border-neutral-200">
                <div className="flex gap-2 justify-center mb-3 h-9">
                    {isLoadingSuggestions && <p className="text-sm text-neutral-400">Generating suggestions...</p>}
                    {!isLoadingSuggestions && suggestions.map((text, index) => (
                        <SuggestionChip key={index} text={text} onClick={() => sendMessage(text)} />
                    ))}
                </div>
                <div className="flex items-center bg-neutral-100 rounded-full p-2">
                    <button className="p-2 text-neutral-500 hover:text-neutral-700">
                        <MicrophoneIcon className="w-6 h-6" />
                    </button>
                    <input
                        type="text"
                        value={inputText}
                        onChange={(e) => setInputText(e.target.value)}
                        onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                        placeholder="Type your message..."
                        className="flex-1 bg-transparent outline-none px-2 text-neutral-800 placeholder-neutral-500"
                    />
                    <button onClick={handleSend} className="p-2 bg-neutral-800 text-white rounded-full hover:bg-neutral-900 disabled:bg-neutral-400" disabled={!inputText.trim()}>
                        <SendIcon className="w-5 h-5" />
                    </button>
                </div>
            </footer>
        </div>
    );
};

export default AIChat;