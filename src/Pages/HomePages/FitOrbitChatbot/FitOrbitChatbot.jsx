import React, { useState, useEffect, useRef } from 'react';
import {
  MessageSquare,
  Send,
  X,
  Minimize2,
  Maximize2,
  User,
  Bot,
  Phone,
  Calendar,
  IndianRupee,
  Users,
  FileText,
  HelpCircle,
  ChevronRight,
  Clock,
  CheckCircle,
  AlertCircle,
  Sparkles,
  Volume2,
  Mic,
  Paperclip,
  ThumbsUp,
  ThumbsDown,
  Settings,
  History,
  Star
} from 'lucide-react';

const FitOrbitChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [userPreferences, setUserPreferences] = useState({
    name: '',
    role: '',
    gymSize: '',
    demoBooked: false
  });
  const [showQuickActions, setShowQuickActions] = useState(true);
  const [conversationStep, setConversationStep] = useState(0);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    // Initialize with welcome message
    if (isOpen && messages.length === 0) {
      setTimeout(() => {
        setMessages([
          {
            id: 1,
            text: "Hello! I'm your FitOrbit Assistant 👋",
            sender: 'bot',
            timestamp: new Date(),
            type: 'welcome'
          },
          {
            id: 2,
            text: "I'm here to help you learn about our gym management software and answer any questions you might have.",
            sender: 'bot',
            timestamp: new Date(),
            type: 'intro'
          },
          {
            id: 3,
            text: "What would you like to know about FitOrbit?",
            sender: 'bot',
            timestamp: new Date(),
            type: 'question'
          }
        ]);
        setShowQuickActions(true);
      }, 500);
    }
  }, [isOpen]);

  const quickActions = [
    {
      id: 1,
      title: 'Features Overview',
      description: 'Learn about our features',
      icon: <Sparkles size={18} />,
      color: 'bg-blue-100 text-blue-600'
    },
    {
      id: 2,
      title: 'Pricing Plans',
      description: 'See our pricing options',
      icon: <IndianRupee size={18} />,
      color: 'bg-green-100 text-green-600'
    },
    {
      id: 3,
      title: 'Book a Demo',
      description: 'Schedule a live demo',
      icon: <Calendar size={18} />,
      color: 'bg-purple-100 text-purple-600'
    },
    {
      id: 4,
      title: 'Contact Sales',
      description: 'Talk to our experts',
      icon: <Phone size={18} />,
      color: 'bg-orange-100 text-orange-600'
    }
  ];

  const featureCategories = [
    {
      name: 'Member Management',
      icon: <Users size={20} />,
      features: ['Member Profiles', 'Attendance Tracking', 'Membership Plans', 'Progress Tracking']
    },
    {
      name: 'Financial Tools',
      icon: <IndianRupee size={20} />,
      features: ['Automated Billing', 'Payment Processing', 'Revenue Reports', 'Expense Tracking']
    },
    {
      name: 'Operations',
      icon: <Calendar size={20} />,
      features: ['Class Scheduling', 'Trainer Management', 'Equipment Tracking', 'Staff Management']
    },
    {
      name: 'Analytics',
      icon: <FileText size={20} />,
      features: ['Performance Dashboard', 'Member Insights', 'Financial Analytics', 'Growth Reports']
    }
  ];

  const handleQuickAction = (actionId) => {
    setShowQuickActions(false);
    const userMsg = {
      id: messages.length + 1,
      text: getActionText(actionId),
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMsg]);
    setIsTyping(true);

    setTimeout(() => {
      const botResponse = getBotResponse(actionId);
      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1500);
  };

  const getActionText = (actionId) => {
    switch(actionId) {
      case 1: return "Tell me about FitOrbit features";
      case 2: return "What are the pricing plans?";
      case 3: return "I'd like to book a demo";
      case 4: return "I want to contact sales";
      default: return "Tell me more";
    }
  };

  const getBotResponse = (actionId) => {
    const responses = {
      1: {
        id: messages.length + 2,
        text: "FitOrbit offers comprehensive gym management solutions. Here are our main features:",
        sender: 'bot',
        timestamp: new Date(),
        type: 'features',
        features: featureCategories
      },
      2: {
        id: messages.length + 2,
        text: "We offer flexible pricing plans for gyms of all sizes:",
        sender: 'bot',
        timestamp: new Date(),
        type: 'pricing',
        plans: [
          { name: 'Starter', price: '$49/month', for: 'Small gyms (<100 members)' },
          { name: 'Professional', price: '$99/month', for: 'Growing gyms (100-500 members)' },
          { name: 'Enterprise', price: 'Custom', for: 'Multi-location chains' }
        ]
      },
      3: {
        id: messages.length + 2,
        text: "Great! I'd be happy to help you schedule a demo. Let me ask a few questions first.",
        sender: 'bot',
        timestamp: new Date(),
        type: 'demo_start'
      },
      4: {
        id: messages.length + 2,
        text: "Our sales team would love to help! What's the best way to reach you?",
        sender: 'bot',
        timestamp: new Date(),
        type: 'contact_sales'
      }
    };
    return responses[actionId];
  };

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!inputMessage.trim()) return;

    const userMsg = {
      id: messages.length + 1,
      text: inputMessage,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMsg]);
    setInputMessage('');
    setIsTyping(true);

    // Simulate bot response
    setTimeout(() => {
      const responses = [
        "FitOrbit can help with that! Our software includes features for member management, billing, and scheduling.",
        "That's a great question! Let me connect you with more specific information.",
        "I can help you with that. Would you like me to explain our solutions for that?",
        "Thanks for asking! FitOrbit has specialized features to handle that requirement."
      ];
      
      const botResponse = {
        id: messages.length + 2,
        text: responses[Math.floor(Math.random() * responses.length)],
        sender: 'bot',
        timestamp: new Date(),
        type: 'text'
      };

      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1500);
  };

  const renderMessage = (message) => {
    const isBot = message.sender === 'bot';
    
    return (
      <div
        key={message.id}
        className={`flex ${isBot ? 'justify-start' : 'justify-end'} mb-4`}
      >
        <div className={`flex max-w-[85%] ${isBot ? 'flex-row' : 'flex-row-reverse'}`}>
          {/* Avatar */}
          <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${isBot ? 'mr-3 bg-blue-100' : 'ml-3 bg-gray-100'}`}>
            {isBot ? (
              <Bot size={16} className="text-blue-600" />
            ) : (
              <User size={16} className="text-gray-600" />
            )}
          </div>
          
          {/* Message Content */}
          <div>
            {/* Message Bubble */}
            <div className={`rounded-2xl px-4 py-3 ${isBot ? 'bg-blue-50 border border-blue-100' : 'bg-gray-100 border border-gray-200'}`}>
              <p className="text-gray-800">{message.text}</p>
              
              {/* Features Grid */}
              {message.type === 'features' && message.features && (
                <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-3">
                  {message.features.map((category, idx) => (
                    <div key={idx} className="bg-white border border-gray-200 rounded-lg p-4">
                      <div className="flex items-center mb-3">
                        <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center mr-3">
                          <div className="text-blue-600">{category.icon}</div>
                        </div>
                        <h4 className="font-bold text-gray-900">{category.name}</h4>
                      </div>
                      <ul className="space-y-1">
                        {category.features.map((feature, fIdx) => (
                          <li key={fIdx} className="flex items-center text-sm text-gray-600">
                            <CheckCircle size={14} className="text-green-500 mr-2" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}
              
              {/* Pricing Plans */}
              {message.type === 'pricing' && message.plans && (
                <div className="mt-4 space-y-3">
                  {message.plans.map((plan, idx) => (
                    <div key={idx} className="bg-white border border-gray-200 rounded-lg p-4">
                      <div className="flex justify-between items-center mb-2">
                        <h4 className="font-bold text-gray-900">{plan.name}</h4>
                        <span className="font-bold text-blue-600">{plan.price}</span>
                      </div>
                      <p className="text-sm text-gray-600">{plan.for}</p>
                    </div>
                  ))}
                  <button className="w-full mt-3 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors">
                    View Detailed Pricing
                  </button>
                </div>
              )}
            </div>
            
            {/* Timestamp */}
            <div className={`text-xs text-gray-500 mt-1 ${isBot ? 'text-left' : 'text-right'}`}>
              {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
            </div>
          </div>
        </div>
      </div>
    );
  };

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-50 bg-blue-600 text-white p-4 rounded-full shadow-xl hover:bg-blue-700 transition-all duration-300 hover:scale-110"
      >
        <MessageSquare size={24} />
      </button>
    );
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isMinimized ? (
        <div className="bg-white border border-gray-200 rounded-xl shadow-xl w-80">
          {/* Minimized Header */}
          <div className="p-4 bg-blue-600 text-white rounded-t-xl flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                <Bot size={18} />
              </div>
              <div>
                <h3 className="font-bold">FitOrbit Assistant</h3>
                <p className="text-xs opacity-80">Click to expand</p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <button 
                onClick={() => setIsMinimized(false)}
                className="p-1 hover:bg-white/20 rounded"
              >
                <Maximize2 size={18} />
              </button>
              <button 
                onClick={() => setIsOpen(false)}
                className="p-1 hover:bg-white/20 rounded"
              >
                <X size={18} />
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="bg-white border border-gray-200 rounded-xl shadow-xl w-full max-w-md">
          {/* Header */}
          <div className="p-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-t-xl flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                <Bot size={22} />
              </div>
              <div>
                <h3 className="font-bold text-lg">FitOrbit Assistant</h3>
                <p className="text-sm opacity-90">Your gym management expert</p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <button 
                onClick={() => setIsMinimized(true)}
                className="p-2 hover:bg-white/20 rounded-lg transition-colors"
              >
                <Minimize2 size={20} />
              </button>
              <button 
                onClick={() => setIsOpen(false)}
                className="p-2 hover:bg-white/20 rounded-lg transition-colors"
              >
                <X size={20} />
              </button>
            </div>
          </div>

          {/* Chat Body */}
          <div className="h-96 flex flex-col">
            {/* Messages Container */}
            <div className="flex-1 overflow-y-auto p-4 bg-gray-50">
              {messages.map(renderMessage)}
              
              {/* Quick Actions */}
              {showQuickActions && messages.length <= 3 && (
                <div className="mb-4">
                  <div className="flex items-center mb-3">
                    <div className="w-6 h-px bg-gray-300 flex-1"></div>
                    <span className="px-3 text-sm text-gray-500">Quick Actions</span>
                    <div className="w-6 h-px bg-gray-300 flex-1"></div>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    {quickActions.map((action) => (
                      <button
                        key={action.id}
                        onClick={() => handleQuickAction(action.id)}
                        className={`p-3 rounded-lg border border-gray-200 hover:border-blue-300 transition-all hover:scale-[1.02] ${action.color.split(' ')[1]} bg-white`}
                      >
                        <div className="flex items-center mb-2">
                          <div className={`w-8 h-8 rounded-lg ${action.color.split(' ')[0]} flex items-center justify-center mr-2`}>
                            {action.icon}
                          </div>
                          <span className="font-bold text-gray-900">{action.title}</span>
                        </div>
                        <p className="text-xs text-gray-600 text-left">{action.description}</p>
                      </button>
                    ))}
                  </div>
                </div>
              )}
              
              {/* Typing Indicator */}
              {isTyping && (
                <div className="flex items-center mb-4">
                  <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                    <Bot size={16} className="text-blue-600" />
                  </div>
                  <div className="bg-blue-50 border border-blue-100 rounded-2xl px-4 py-3">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                      <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{animationDelay: '0.4s'}}></div>
                    </div>
                  </div>
                </div>
              )}
              
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className="border-t border-gray-200 p-4 bg-white">
              <form onSubmit={handleSendMessage} className="flex items-center space-x-2">
                <div className="flex-1 relative">
                  <input
                    type="text"
                    value={inputMessage}
                    onChange={(e) => setInputMessage(e.target.value)}
                    placeholder="Type your message here..."
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  <div className="absolute right-3 top-1/2 transform -translate-y-1/2 flex items-center space-x-2">
                    <button type="button" className="text-gray-400 hover:text-gray-600">
                      <Paperclip size={18} />
                    </button>
                    <button type="button" className="text-gray-400 hover:text-gray-600">
                      <Mic size={18} />
                    </button>
                  </div>
                </div>
                <button
                  type="submit"
                  disabled={!inputMessage.trim()}
                  className={`p-3 rounded-lg ${inputMessage.trim() ? 'bg-blue-600 hover:bg-blue-700' : 'bg-gray-200'} text-white transition-colors`}
                >
                  <Send size={20} />
                </button>
              </form>
              
              {/* Quick Suggestions */}
              <div className="mt-3 flex flex-wrap gap-2">
                {["How much does it cost?", "Book a demo", "Member features", "Pricing plans"].map((suggestion, idx) => (
                  <button
                    key={idx}
                    onClick={() => setInputMessage(suggestion)}
                    className="px-3 py-1.5 text-sm bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-full border border-gray-300 transition-colors"
                  >
                    {suggestion}
                  </button>
                ))}
              </div>

              {/* Footer */}
              <div className="mt-4 pt-3 border-t border-gray-200">
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <div className="flex items-center space-x-4">
                    <button className="flex items-center hover:text-gray-700">
                      <History size={14} className="mr-1" />
                      History
                    </button>
                    <button className="flex items-center hover:text-gray-700">
                      <Settings size={14} className="mr-1" />
                      Settings
                    </button>
                  </div>
                  <div className="flex items-center">
                    <Star size={14} className="mr-1" />
                    <span>Powered by FitOrbit AI</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FitOrbitChatbot;