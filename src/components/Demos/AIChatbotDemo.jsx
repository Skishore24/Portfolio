import React, { useState, useRef, useEffect } from 'react';
import { Bot, Send, User, Sparkles, RefreshCw } from 'lucide-react';

const PERSONAS = [
  { id: 'plant', name: 'Plant Pathology AI', icon: '🌿', title: 'CNN Leaf Disease Classifier' },
  { id: 'filemanager', name: 'MCET File Assistant', icon: '📁', title: 'Campus Secure File Management' },
  { id: 'code', name: 'Kishore\'s Portfolio AI', icon: '💻', title: 'B.Tech AI & Data Science Assistant' },
];

const PRESET_PROMPTS = [
  { text: 'Tell me about Kishore\'s B.Tech AI & Data Science background.', persona: 'code' },
  { text: 'How does the Plant Disease Detection CNN model work?', persona: 'plant' },
  { text: 'What features are in the MCET File Manager Application?', persona: 'filemanager' },
  { text: 'What full-stack experience did Kishore gain at Netsaurs?', persona: 'code' },
];

const INITIAL_MESSAGES = {
  plant: [
    { sender: 'bot', text: 'Hello! I am Kishore\'s Plant Disease Detection AI. Ask me about our CNN image classification model and crop health scoring!' }
  ],
  filemanager: [
    { sender: 'bot', text: 'Greetings! I am the MCET File Manager Assistant. I can answer questions about campus authentication, secure file upload/download, and search!' }
  ],
  code: [
    { sender: 'bot', text: 'Hi! I am Kishore\'s AI Portfolio Assistant. Ask me anything about Kishore\'s projects, education at MCET Pollachi, or skills!' }
  ]
};

export default function AIChatbotDemo() {
  const [activePersona, setActivePersona] = useState('code');
  const [messages, setMessages] = useState(INITIAL_MESSAGES.code);
  const [inputVal, setInputVal] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const chatEndRef = useRef(null);

  const scrollToBottom = () => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const handlePersonaChange = (personaId) => {
    setActivePersona(personaId);
    setMessages(INITIAL_MESSAGES[personaId]);
  };

  const getBotResponse = (userText, persona) => {
    const textLower = userText.toLowerCase();

    if (persona === 'plant') {
      if (textLower.includes('how') || textLower.includes('work') || textLower.includes('disease') || textLower.includes('cnn')) {
        return "The Plant Disease Detection model uses Convolutional Neural Networks (CNN) in Python to classify leaf diseases. It processes leaf imagery, scores plant health, and visualizes disease diagnosis in real-time!";
      }
      return "I analyze crop leaf samples to detect fungal and bacterial pathologies with high diagnostic accuracy and provide treatment recommendations.";
    }

    if (persona === 'filemanager') {
      if (textLower.includes('mcet') || textLower.includes('file') || textLower.includes('feature')) {
        return "The MCET File Manager Application is a secure full-stack platform built with Node.js, Express, and database storage. Features include encrypted file uploads/downloads, role authentication, and multi-criteria search filtering.";
      }
      return "The campus file management platform simplifies student and faculty file sharing with secure access controls.";
    }

    // Code / Portfolio AI Persona
    if (textLower.includes('b.tech') || textLower.includes('education') || textLower.includes('college') || textLower.includes('mcet')) {
      return "Kishore Kumar S is pursuing B.Tech in Artificial Intelligence and Data Science (2023-2027) at Dr. Mahalingam College of Engineering and Technology, Pollachi (Anna University).";
    }
    if (textLower.includes('netsaurs') || textLower.includes('intern') || textLower.includes('work')) {
      return "Kishore worked as a Web Development Intern at Netsaurs (June 2025), building core full-stack product features, managing Git version control, integrating APIs, database management, testing, and cloud deployment.";
    }

    return `Thank you for asking! As an AI assistant powered by Kishore's RAG & LLM architecture, I process your query with semantic context to provide accurate information.`;
  };

  const sendMessage = (textToSend) => {
    const text = textToSend || inputVal;
    if (!text.trim() || isTyping) return;

    const newMessages = [...messages, { sender: 'user', text }];
    setMessages(newMessages);
    if (!textToSend) setInputVal('');
    setIsTyping(true);

    setTimeout(() => {
      const responseText = getBotResponse(text, activePersona);
      setMessages([...newMessages, { sender: 'bot', text: responseText }]);
      setIsTyping(false);
    }, 1000);
  };

  return (
    <div className="space-y-4 text-slate-200">
      <div className="bg-slate-900/90 border border-indigo-500/20 rounded-2xl p-5 backdrop-blur-md">
        {/* Header */}
        <div className="flex flex-wrap items-center justify-between mb-4 gap-2">
          <div className="flex items-center gap-2 text-indigo-400 font-semibold text-lg">
            <Bot className="w-5 h-5" />
            <span>Interactive AI Chatbot & RAG Engine Playground</span>
          </div>
          <span className="text-xs bg-indigo-500/10 text-indigo-300 border border-indigo-500/30 px-3 py-1 rounded-full font-mono flex items-center gap-1">
            <Sparkles className="w-3 h-3 text-indigo-400" /> RAG Architecture
          </span>
        </div>

        {/* Persona Selector */}
        <div className="flex gap-2 mb-4 overflow-x-auto pb-1">
          {PERSONAS.map((p) => (
            <button
              key={p.id}
              onClick={() => handlePersonaChange(p.id)}
              className={`text-xs px-3 py-1.5 rounded-xl border flex items-center gap-1.5 whitespace-nowrap transition-all cursor-pointer ${
                activePersona === p.id
                  ? 'bg-indigo-500/20 text-indigo-300 border-indigo-500/50 shadow-md font-medium'
                  : 'bg-slate-950/60 text-slate-400 border-slate-800 hover:border-slate-700'
              }`}
            >
              <span>{p.icon}</span>
              <span>{p.name}</span>
            </button>
          ))}
        </div>

        {/* Preset Prompt Badges */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {PRESET_PROMPTS.map((prompt, idx) => (
            <button
              key={idx}
              onClick={() => {
                if (prompt.persona !== activePersona) {
                  setActivePersona(prompt.persona);
                }
                sendMessage(prompt.text);
              }}
              className="text-[11px] bg-slate-950/80 hover:bg-indigo-500/10 text-slate-300 hover:text-indigo-300 border border-slate-800 hover:border-indigo-500/30 px-2.5 py-1 rounded-lg transition-all cursor-pointer"
            >
              ⚡ "{prompt.text}"
            </button>
          ))}
        </div>

        {/* Chat Stream Window */}
        <div className="bg-slate-950 border border-slate-800 rounded-xl p-4 h-[260px] overflow-y-auto space-y-3 mb-3">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`flex items-start gap-2.5 ${
                msg.sender === 'user' ? 'flex-row-reverse' : 'flex-row'
              }`}
            >
              <div
                className={`w-7 h-7 rounded-lg flex items-center justify-center text-xs font-bold shrink-0 ${
                  msg.sender === 'user'
                    ? 'bg-cyan-500 text-slate-950'
                    : 'bg-indigo-600 text-white'
                }`}
              >
                {msg.sender === 'user' ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
              </div>

              <div
                className={`max-w-[82%] text-xs rounded-2xl p-3 leading-relaxed ${
                  msg.sender === 'user'
                    ? 'bg-cyan-500/15 text-cyan-200 border border-cyan-500/30 rounded-tr-none'
                    : 'bg-slate-900 text-slate-200 border border-slate-800 rounded-tl-none'
                }`}
              >
                {msg.text}
              </div>
            </div>
          ))}

          {isTyping && (
            <div className="flex items-center gap-2 text-xs text-indigo-400 font-mono bg-slate-900/60 p-2.5 rounded-xl border border-slate-800 w-fit">
              <RefreshCw className="w-3.5 h-3.5 animate-spin" />
              <span>AI Thinking & retrieving response...</span>
            </div>
          )}
          <div ref={chatEndRef} />
        </div>

        {/* Input Bar */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            sendMessage();
          }}
          className="flex items-center gap-2"
        >
          <input
            type="text"
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
            placeholder={`Ask ${PERSONAS.find(p => p.id === activePersona)?.name}...`}
            className="flex-1 bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2.5 text-xs text-slate-100 placeholder-slate-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all"
          />
          <button
            type="submit"
            disabled={!inputVal.trim() || isTyping}
            className="bg-indigo-600 hover:bg-indigo-500 disabled:opacity-40 text-white px-4 py-2.5 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-all cursor-pointer"
          >
            <span>Send</span>
            <Send className="w-3.5 h-3.5" />
          </button>
        </form>
      </div>
    </div>
  );
}
