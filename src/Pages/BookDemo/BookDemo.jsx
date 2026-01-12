import React, { useState } from 'react';
import {
  Calendar,
  Clock,
  Users,
  Building,
  Phone,
  Mail,
  MapPin,
  Award,
  Star,
  Check,
  ChevronLeft,
  ChevronRight,
  Shield,
  Zap,
  TrendingUp,
  X
} from 'lucide-react';

const BookDemo = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [step, setStep] = useState(1);
  const [currentMonth, setCurrentMonth] = useState(new Date());

  const generateCalendar = () => {
    const year = currentMonth.getFullYear();
    const month = currentMonth.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDay = firstDay.getDay();
    
    const days = [];
    const today = new Date();
    
    for (let i = 0; i < startingDay; i++) {
      const prevDate = new Date(year, month, -i);
      days.unshift({
        date: prevDate.getDate(),
        month: 'prev',
        fullDate: prevDate,
        disabled: true
      });
    }
    
    for (let i = 1; i <= daysInMonth; i++) {
      const currentDate = new Date(year, month, i);
      const isPast = currentDate < today;
      const isToday = currentDate.toDateString() === today.toDateString();
      
      days.push({
        date: i,
        month: 'current',
        fullDate: currentDate,
        disabled: isPast,
        isToday
      });
    }
    
    const totalCells = 42;
    const nextDays = totalCells - days.length;
    for (let i = 1; i <= nextDays; i++) {
      const nextDate = new Date(year, month + 1, i);
      days.push({
        date: i,
        month: 'next',
        fullDate: nextDate,
        disabled: true
      });
    }
    
    return days;
  };

  const timeSlots = [
    { time: '09:00', label: '9:00 AM', available: true },
    { time: '10:00', label: '10:00 AM', available: true },
    { time: '11:00', label: '11:00 AM', available: false },
    { time: '12:00', label: '12:00 PM', available: true },
    { time: '13:00', label: '1:00 PM', available: true },
    { time: '14:00', label: '2:00 PM', available: true },
    { time: '15:00', label: '3:00 PM', available: true },
    { time: '16:00', label: '4:00 PM', available: false },
  ];

  const experts = [
    { name: 'Sarah Johnson', role: 'Enterprise Solutions', expertise: 'Multi-location Gyms', rating: 4.9 },
    { name: 'Michael Chen', role: 'Operations Specialist', expertise: 'Workflow Optimization', rating: 4.8 },
    { name: 'David Wilson', role: 'Sales Director', expertise: 'Revenue Growth', rating: 4.9 },
  ];

  const demoTopics = [
    { title: 'Member Management', icon: <Users size={20} /> },
    { title: 'Financial Reporting', icon: <TrendingUp size={20} /> },
    { title: 'Class Scheduling', icon: <Calendar size={20} /> },
    { title: 'Mobile App', icon: <Zap size={20} /> },
  ];

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    notes: ''
  });

  const handleDateSelect = (day) => {
    if (!day.disabled && day.month === 'current') {
      setSelectedDate(day.fullDate);
    }
  };

  const handleTimeSelect = (time) => {
    if (time.available) {
      setSelectedTime(time.time);
    }
  };

  const handleNext = () => {
    if (selectedDate && selectedTime) {
      setStep(2);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ selectedDate, selectedTime, formData });
  };

  const formatDate = (date) => {
    return date.toLocaleDateString('en-US', { 
      weekday: 'long', 
      month: 'long', 
      day: 'numeric',
      year: 'numeric'
    });
  };

  const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  return (
    <section className="bg-gradient-to-b from-gray-50 to-white py-8 sm:py-12 md:py-20">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <div className="inline-flex items-center justify-center mb-4 sm:mb-6">
            <div className="w-8 sm:w-12 md:w-16 h-1 bg-blue-600"></div>
            <span className="mx-3 sm:mx-4 md:mx-6 text-blue-600 font-bold tracking-widest text-xs sm:text-sm uppercase">
              SCHEDULE DEMO
            </span>
            <div className="w-8 sm:w-12 md:w-16 h-1 bg-blue-600"></div>
          </div>
          
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
            Book a <span className="text-blue-600">Personalized Demo</span>
          </h1>
          
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl sm:max-w-3xl mx-auto px-2">
            Experience FitOrbit with our expert team. Select your preferred time and 
            get a tailored walkthrough of our platform.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
          {/* Left Column - Calendar & Time Selection */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl sm:rounded-2xl border border-gray-200 shadow-sm p-4 sm:p-6 md:p-8">
              {/* Progress Steps */}
              <div className="flex items-center justify-between mb-6 sm:mb-8 md:mb-10">
                <div className="flex items-center space-x-2 sm:space-x-4">
                  <div className={`w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-full flex items-center justify-center ${step === 1 ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-400'}`}>
                    1
                  </div>
                  <div className="text-xs sm:text-sm">
                    <div className="font-bold">Select Time</div>
                    <div className="text-gray-500 hidden xs:block">Choose date & time</div>
                  </div>
                </div>
                
                <div className="h-px w-8 sm:w-12 md:w-16 lg:w-20 bg-gray-300"></div>
                
                <div className="flex items-center space-x-2 sm:space-x-4">
                  <div className={`w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-full flex items-center justify-center ${step === 2 ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-400'}`}>
                    2
                  </div>
                  <div className="text-xs sm:text-sm">
                    <div className="font-bold">Enter Details</div>
                    <div className="text-gray-500 hidden xs:block">Your information</div>
                  </div>
                </div>
              </div>

              {step === 1 ? (
                <>
                  {/* Calendar */}
                  <div className="mb-6 sm:mb-8 md:mb-10">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 sm:mb-6">
                      <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-0">Select a Date</h3>
                      <div className="flex items-center justify-between sm:justify-start space-x-4">
                        <button 
                          onClick={() => setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1))}
                          className="p-1 sm:p-2 hover:bg-gray-100 rounded-lg"
                        >
                          <ChevronLeft size={18} sm:size={20} />
                        </button>
                        <span className="font-bold text-gray-900 text-sm sm:text-base">
                          {currentMonth.toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}
                        </span>
                        <button 
                          onClick={() => setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1))}
                          className="p-1 sm:p-2 hover:bg-gray-100 rounded-lg"
                        >
                          <ChevronRight size={18} sm:size={20} />
                        </button>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-7 gap-1 sm:gap-2 mb-3 sm:mb-4">
                      {daysOfWeek.map(day => (
                        <div key={day} className="text-center text-xs sm:text-sm font-bold text-gray-500 py-1 sm:py-2">
                          {day.substring(0, 1)}
                        </div>
                      ))}
                    </div>
                    
                    <div className="grid grid-cols-7 border border-gray-200 rounded-lg overflow-hidden">
                      {generateCalendar().map((day, index) => (
                        <button
                          key={index}
                          onClick={() => handleDateSelect(day)}
                          disabled={day.disabled}
                          className={`h-10 sm:h-12 md:h-14 flex flex-col items-center justify-center border-r border-b border-gray-200
                            ${index % 7 === 6 ? 'border-r-0' : ''} 
                            ${index >= generateCalendar().length - 7 ? 'border-b-0' : ''}
                            ${
                              day.disabled
                                ? 'text-gray-300 cursor-not-allowed bg-gray-50'
                                : selectedDate &&
                                  day.fullDate.toDateString() === selectedDate.toDateString()
                                ? 'bg-blue-600 text-white'
                                : day.isToday
                                ? 'bg-blue-50 text-blue-600'
                                : 'text-gray-700 hover:bg-gray-50'
                            }
                          `}
                        >
                          <span
                            className={`font-medium text-sm sm:text-base ${
                              day.month !== 'current' ? 'opacity-50' : ''
                            }`}
                          >
                            {day.date}
                          </span>

                          {day.isToday && !selectedDate && (
                            <span className="text-[10px] sm:text-xs text-blue-600">Today</span>
                          )}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Time Selection */}
                  <div className="mb-6 sm:mb-8">
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-4 sm:mb-6">Select a Time</h3>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3">
                      {timeSlots.map((slot) => (
                        <button
                          key={slot.time}
                          onClick={() => handleTimeSelect(slot)}
                          disabled={!slot.available}
                          className={`p-3 sm:p-4 rounded-lg sm:rounded-xl border-2 flex flex-col items-center justify-center ${
                            selectedTime === slot.time
                              ? 'border-blue-600 bg-blue-50'
                              : slot.available
                              ? 'border-gray-200 hover:border-blue-400 hover:bg-blue-50'
                              : 'border-gray-100 bg-gray-50 text-gray-400 cursor-not-allowed'
                          }`}
                        >
                          <div className="flex items-center">
                            <Clock size={14} sm:size={16} md:size={18} className="mr-1 sm:mr-2" />
                            <span className="font-bold text-xs sm:text-sm md:text-base">{slot.label}</span>
                          </div>
                          {!slot.available && (
                            <span className="text-[10px] sm:text-xs mt-1 text-red-500">Booked</span>
                          )}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Selected Time Summary */}
                  {(selectedDate || selectedTime) && (
                    <div className="bg-blue-50 border border-blue-200 rounded-lg sm:rounded-xl p-4 sm:p-6 mb-6 sm:mb-8">
                      <h4 className="font-bold text-gray-900 mb-3 sm:mb-4">Your Selected Time</h4>
                      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
                        <div className="flex items-start sm:items-center mb-3 sm:mb-0">
                          <Calendar className="text-blue-600 mr-2 sm:mr-3 mt-1 sm:mt-0" size={20} sm:size={24} />
                          <div>
                            <div className="font-bold text-gray-900 text-sm sm:text-base">
                              {selectedDate ? formatDate(selectedDate) : 'Select a date'}
                            </div>
                            <div className="text-gray-600 text-sm sm:text-base">
                              {selectedTime || 'Select a time'}
                            </div>
                          </div>
                        </div>
                        <button
                          onClick={handleNext}
                          disabled={!selectedDate || !selectedTime}
                          className={`px-4 sm:px-6 md:px-8 py-2 sm:py-3 rounded-lg font-bold text-sm sm:text-base w-full sm:w-auto ${
                            selectedDate && selectedTime
                              ? 'bg-blue-600 text-white hover:bg-blue-700'
                              : 'bg-gray-100 text-gray-400 cursor-not-allowed'
                          }`}
                        >
                          Continue to Details
                        </button>
                      </div>
                    </div>
                  )}
                </>
              ) : (
                /* Step 2: Contact Details */
                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                  <div className="mb-4 sm:mb-6 md:mb-8">
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-1 sm:mb-2">Your Information</h3>
                    <p className="text-gray-600 text-sm sm:text-base">
                      Please provide your details for the demo confirmation.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1 sm:mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        required
                        className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm sm:text-base"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1 sm:mb-2">
                        Email Address *
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} sm:size={20} />
                        <input
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({...formData, email: e.target.value})}
                          required
                          className="w-full pl-10 sm:pl-12 pr-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm sm:text-base"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1 sm:mb-2">
                        Phone Number *
                      </label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} sm:size={20} />
                        <input
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({...formData, phone: e.target.value})}
                          required
                          className="w-full pl-10 sm:pl-12 pr-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm sm:text-base"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1 sm:mb-2">
                        Gym/Company Name *
                      </label>
                      <div className="relative">
                        <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} sm:size={20} />
                        <input
                          type="text"
                          value={formData.company}
                          onChange={(e) => setFormData({...formData, company: e.target.value})}
                          required
                          className="w-full pl-10 sm:pl-12 pr-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm sm:text-base"
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1 sm:mb-2">
                      Additional Notes (Optional)
                    </label>
                    <textarea
                      value={formData.notes}
                      onChange={(e) => setFormData({...formData, notes: e.target.value})}
                      rows="3"
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none text-sm sm:text-base"
                      placeholder="Specific topics you'd like to cover..."
                    />
                  </div>

                  <div className="flex flex-col sm:flex-row justify-between items-center pt-4 sm:pt-6 border-t border-gray-200 gap-3 sm:gap-0">
                    <button
                      type="button"
                      onClick={() => setStep(1)}
                      className="px-4 sm:px-6 py-2 sm:py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 w-full sm:w-auto text-sm sm:text-base"
                    >
                      Back
                    </button>
                    <button
                      type="submit"
                      className="px-4 sm:px-6 md:px-8 py-2 sm:py-3 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 w-full sm:w-auto text-sm sm:text-base"
                    >
                      Confirm Demo Booking
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>

          {/* Right Column - Expert Info */}
          <div className="space-y-4 sm:space-y-6 md:space-y-8">
            {/* Demo Summary */}
            <div className="bg-white rounded-xl sm:rounded-2xl border border-gray-200 shadow-sm p-4 sm:p-6 md:p-8">
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-4 sm:mb-6">Demo Summary</h3>
              
              <div className="space-y-4 sm:space-y-6">
                {selectedDate && selectedTime && (
                  <>
                    <div className="flex items-start sm:items-center justify-between p-3 sm:p-4 bg-blue-50 rounded-lg">
                      <div className="flex-1">
                        <div className="text-xs sm:text-sm text-gray-600">Date & Time</div>
                        <div className="font-bold text-gray-900 text-sm sm:text-base">
                          {formatDate(selectedDate)} at {selectedTime}
                        </div>
                      </div>
                      <button 
                        onClick={() => {
                          setSelectedDate(null);
                          setSelectedTime(null);
                          setStep(1);
                        }}
                        className="text-gray-400 hover:text-gray-600 ml-2"
                      >
                        <X size={16} sm:size={20} />
                      </button>
                    </div>
                  </>
                )}
                
                <div>
                  <div className="text-xs sm:text-sm text-gray-600 mb-1 sm:mb-2">Duration</div>
                  <div className="font-bold text-gray-900 text-sm sm:text-base">45 minutes</div>
                </div>
                
                <div>
                  <div className="text-xs sm:text-sm text-gray-600 mb-1 sm:mb-2">Format</div>
                  <div className="font-bold text-gray-900 text-sm sm:text-base">Live Video Call</div>
                </div>
              </div>
            </div>

            {/* Demo Topics */}
            <div className="bg-white rounded-xl sm:rounded-2xl border border-gray-200 shadow-sm p-4 sm:p-6 md:p-8">
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-4 sm:mb-6">What We'll Cover</h3>
              
              <div className="grid grid-cols-2 gap-2 sm:gap-4">
                {demoTopics.map((topic) => (
                  <div key={topic.title} className="flex flex-col items-center p-2 sm:p-3 md:p-4 border border-gray-200 rounded-lg">
                    <div className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-lg bg-blue-100 flex items-center justify-center mb-2 sm:mb-3">
                      {React.cloneElement(topic.icon, { size: 16 })}
                    </div>
                    <div className="text-xs sm:text-sm font-medium text-gray-900 text-center leading-tight">{topic.title}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookDemo;