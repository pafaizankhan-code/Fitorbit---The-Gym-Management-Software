import React, { useState, useEffect } from 'react';
import { Cookie, X, ChevronDown, ChevronUp, Check, Shield } from 'lucide-react';

const SimpleCookieConsent = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [userChoice, setUserChoice] = useState(null);

  // Check localStorage for previous choice
  useEffect(() => {
    const cookieChoice = localStorage.getItem('cookieConsent');
    if (cookieChoice) {
      // User has already made a choice, don't show the banner
      setUserChoice(cookieChoice);
      return;
    }

    // Show after 2 seconds only if no choice was made before
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsVisible(false);
      setIsClosing(false);
    }, 300);
  };

  const handleAccept = () => {
    const choice = 'accepted';
    setUserChoice(choice);
    localStorage.setItem('cookieConsent', choice);
    handleClose();
  };

  const handleReject = () => {
    const choice = 'rejected';
    setUserChoice(choice);
    localStorage.setItem('cookieConsent', choice);
    handleClose();
  };

  const handleCustomize = () => {
    setIsExpanded(!isExpanded);
  };

  // Don't show the banner if user already made a choice
  if (localStorage.getItem('cookieConsent') && !isVisible) {
    return null;
  }

  if (!isVisible) return null;

  return (
    <>
      {/* Overlay */}
      <div 
        className={`fixed inset-0 bg-black/30 z-40 transition-opacity duration-300 ${
          isClosing ? 'opacity-0' : 'opacity-100'
        }`}
        onClick={handleClose}
      />

      {/* Cookie Consent Modal */}
      <div className={`fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50 w-full  transition-all duration-300 ${
        isClosing 
          ? 'translate-y-full opacity-0' 
          : 'translate-y-0 opacity-100'
      }`}>
        <div className="mx-4">
          <div className="bg-white border-2 border-gray-300 rounded-xl shadow-2xl">
            {/* Header */}
            <div className="p-5 border-b border-gray-200 relative">
              <div className="flex items-start space-x-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center shadow-sm">
                  <Cookie className="text-white" size={22} />
                </div>
                <div className="flex-1">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="font-bold text-gray-900 text-lg">Cookie Preferences</h3>
                      <p className="text-sm text-gray-600 mt-1">We value your privacy</p>
                    </div>
                    <button 
                      onClick={handleClose}
                      className="ml-4 p-1.5 hover:bg-gray-100 rounded-lg transition-colors"
                    >
                      <X size={20} className="text-gray-500" />
                    </button>
                  </div>
                </div>
              </div>
              
              {/* Progress bar */}
              <div className="mt-3 h-1 w-full bg-gray-200 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-blue-600 transition-all duration-1000 ease-out"
                  style={{ width: userChoice ? '100%' : '0%' }}
                />
              </div>
            </div>

            {/* Content */}
            <div className="p-5">
              <div className="flex items-start mb-4">
                <Shield size={18} className="text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                <p className="text-gray-700">
                  We use cookies to enhance your browsing experience, analyze site traffic, and personalize content. 
                  By clicking "Accept All", you consent to our use of cookies.
                </p>
              </div>

              {/* Expandable Details */}
              <div className={`overflow-hidden transition-all duration-300 ${
                isExpanded ? 'max-h-96 mb-4' : 'max-h-0'
              }`}>
                <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                  <h4 className="font-bold text-gray-900 mb-3">Cookie Categories</h4>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 bg-white border border-gray-200 rounded-lg">
                      <div>
                        <div className="font-medium text-gray-900">Essential Cookies</div>
                        <div className="text-sm text-gray-600">Required for basic functions</div>
                      </div>
                      <span className="text-xs bg-blue-100 text-blue-700 px-3 py-1.5 rounded-full font-medium">
                        Always Active
                      </span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-white border border-gray-200 rounded-lg">
                      <div>
                        <div className="font-medium text-gray-900">Analytics Cookies</div>
                        <div className="text-sm text-gray-600">Help us improve our services</div>
                      </div>
                      <span className="text-xs bg-gray-100 text-gray-700 px-3 py-1.5 rounded-full font-medium">
                        Optional
                      </span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-white border border-gray-200 rounded-lg">
                      <div>
                        <div className="font-medium text-gray-900">Marketing Cookies</div>
                        <div className="text-sm text-gray-600">Personalize your experience</div>
                      </div>
                      <span className="text-xs bg-gray-100 text-gray-700 px-3 py-1.5 rounded-full font-medium">
                        Optional
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Toggle Button */}
              <button 
                onClick={handleCustomize}
                className="flex items-center text-sm text-blue-600 hover:text-blue-800 font-medium mb-4"
              >
                {isExpanded ? <ChevronUp size={16} className="mr-2" /> : <ChevronDown size={16} className="mr-2" />}
                {isExpanded ? 'Show less details' : 'Customize cookie settings'}
              </button>

              {/* Action Buttons */}
              <div className="flex space-x-3">
                <button
                  onClick={handleReject}
                  className="flex-1 py-3 border-2 border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 hover:border-gray-400 transition-all duration-200 active:scale-95"
                >
                  Reject All
                </button>
                <button
                  onClick={handleAccept}
                  className="flex-1 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-medium rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-200 shadow-md hover:shadow-lg active:scale-95 flex items-center justify-center"
                >
                  <Check size={18} className="mr-2" />
                  Accept All
                </button>
              </div>

              {/* Success/Choice Message */}
              {userChoice && (
                <div className={`mt-4 p-3 rounded-lg text-center transition-all duration-300 ${
                  userChoice === 'accepted' ? 'bg-green-50 border border-green-200 text-green-800' : 
                  'bg-gray-50 border border-gray-200 text-gray-700'
                }`}>
                  <div className="flex items-center justify-center">
                    <Check size={18} className="mr-2" />
                    <span className="font-medium">
                      {userChoice === 'accepted' 
                        ? 'Cookies accepted! Thank you.' 
                        : 'Essential cookies only. Preferences saved.'}
                    </span>
                  </div>
                  <p className="text-sm mt-1 opacity-75">
                    Your preference has been saved in your browser.
                  </p>
                </div>
              )}

              {/* Policy Links */}
              <div className="mt-6 pt-4 border-t border-gray-200">
                <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
                  <div className="text-sm text-gray-600">
                    By continuing, you agree to our{' '}
                    <a href="#" className="text-blue-600 hover:text-blue-800 font-medium hover:underline">
                      Cookie Policy
                    </a>
                  </div>
                  <a 
                    href="#" 
                    className="text-sm text-gray-600 hover:text-gray-900 hover:underline flex items-center"
                  >
                    Privacy Policy
                    <ChevronDown size={14} className="ml-1 transform rotate-270" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Success Toast for Accept */}
      {userChoice === 'accepted' && !isVisible && (
        <div className="fixed bottom-6 right-6 z-50 animate-slide-up">
          <div className="bg-green-500 text-white px-4 py-3 rounded-lg shadow-lg flex items-center">
            <Check size={18} className="mr-2" />
            <span>Cookies preferences saved successfully!</span>
          </div>
        </div>
      )}
    </>
  );
};

export default SimpleCookieConsent;