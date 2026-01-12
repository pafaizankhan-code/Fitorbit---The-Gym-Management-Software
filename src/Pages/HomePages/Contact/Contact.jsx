import React, { useState } from 'react';
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  CheckCircle,
  AlertCircle,
  User,
  MessageSquare,
  Building,
  Globe
} from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const contactInfo = [
    {
      icon: <Phone size={24} />,
      title: 'Phone',
      details: ['+1 (888) 888-8888', '+1 (999) 999-9999'],
      description: 'Call us Monday to Friday, 9AM - 6PM EST'
    },
    {
      icon: <Mail size={24} />,
      title: 'Email',
      details: ['support@fitorbit.com', 'sales@fitorbit.com'],
      description: 'We respond within 24 hours'
    },
    {
      icon: <MapPin size={24} />,
      title: 'Office',
      details: ['123 Fitness Street', 'Suite 500', 'San Francisco, CA 94107'],
      description: 'Visit our headquarters'
    },
    {
      icon: <Clock size={24} />,
      title: 'Business Hours',
      details: ['Monday - Friday: 9AM - 6PM', 'Saturday: 10AM - 2PM', 'Sunday: Closed'],
      description: 'Based on Eastern Standard Time'
    }
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        subject: '',
        message: ''
      });
      
      // Reset status after 5 seconds
      setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);
    }, 1500);
  };

  return (
    <section className="bg-white py-20">
      <div className="max-w-screen-2xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center mb-4">
            <div className="w-12 h-1 bg-blue-600 mr-3"></div>
            <span className="text-blue-600 font-bold tracking-wider uppercase text-sm">
              CONTACT US
            </span>
            <div className="w-12 h-1 bg-blue-600 ml-3"></div>
          </div>

          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Get in <span className="text-blue-600">Touch</span>
          </h1>
          
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Have questions about FitOrbit? Our team is here to help you with any inquiries.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column - Contact Information */}
          <div>
            <div className="bg-gray-50 rounded-xl p-8 border border-gray-200 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h2>
              
              <div className="space-y-8">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex">
                    <div className="flex-shrink-0 mr-6">
                      <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center">
                        <div className="text-blue-600">{info.icon}</div>
                      </div>
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-2">{info.title}</h3>
                      <div className="space-y-1 mb-2">
                        {info.details.map((detail, idx) => (
                          <p key={idx} className="text-gray-700">{detail}</p>
                        ))}
                      </div>
                      <p className="text-sm text-gray-500">{info.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="border border-gray-200 rounded-xl overflow-hidden">
              <div className="h-64 bg-gray-100 flex items-center justify-center">
                <div className="text-center">
                  <MapPin size={48} className="text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-600 font-medium">San Francisco, California</p>
                  <p className="text-gray-500 text-sm">Our Headquarters</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div>
            <div className="bg-white rounded-xl border border-gray-200 p-8">
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Send us a Message</h2>
                <p className="text-gray-600">
                  Fill out the form below and we'll get back to you as soon as possible.
                </p>
              </div>

              {/* Success Message */}
              {submitStatus === 'success' && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                  <div className="flex items-center">
                    <CheckCircle className="text-green-600 mr-3" size={24} />
                    <div>
                      <h4 className="font-bold text-green-800">Message Sent Successfully!</h4>
                      <p className="text-green-700">We'll get back to you within 24 hours.</p>
                    </div>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  {/* Name */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <div className="flex items-center">
                        <User size={16} className="mr-2" />
                        Full Name *
                      </div>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="John Doe"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <div className="flex items-center">
                        <Mail size={16} className="mr-2" />
                        Email Address *
                      </div>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="john@example.com"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <div className="flex items-center">
                        <Phone size={16} className="mr-2" />
                        Phone Number
                      </div>
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="(123) 456-7890"
                    />
                  </div>

                  {/* Company */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <div className="flex items-center">
                        <Building size={16} className="mr-2" />
                        Company / Gym Name
                      </div>
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="FitLife Gym"
                    />
                  </div>
                </div>

                {/* Subject */}
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Subject *
                  </label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
                  >
                    <option value="">Select a topic</option>
                    <option value="sales">Sales Inquiry</option>
                    <option value="support">Technical Support</option>
                    <option value="demo">Request a Demo</option>
                    <option value="partnership">Partnership Opportunity</option>
                    <option value="billing">Billing Question</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                {/* Message */}
                <div className="mb-8">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <div className="flex items-center">
                      <MessageSquare size={16} className="mr-2" />
                      Your Message *
                    </div>
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="6"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                    placeholder="Tell us how we can help you..."
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-4 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center ${
                    isSubmitting ? 'opacity-75 cursor-not-allowed' : ''
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></div>
                      Sending Message...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send size={20} className="ml-3" />
                    </>
                  )}
                </button>

                {/* Privacy Note */}
                <p className="text-gray-500 text-sm text-center mt-6">
                  By submitting this form, you agree to our{' '}
                  <a href="#" className="text-blue-600 hover:underline">Privacy Policy</a>. 
                  We'll never share your information with third parties.
                </p>
              </form>
            </div>

            {/* Additional Contact Options */}
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-blue-50 border border-blue-100 rounded-xl p-6">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center mr-4">
                    <Clock size={20} className="text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Quick Response</h4>
                    <p className="text-sm text-gray-600">We reply within 24 hours</p>
                  </div>
                </div>
              </div>

              <div className="bg-green-50 border border-green-100 rounded-xl p-6">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 rounded-lg bg-green-100 flex items-center justify-center mr-4">
                    <Globe size={20} className="text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Global Support</h4>
                    <p className="text-sm text-gray-600">Available in multiple languages</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Preview */}
        <div className="mt-20 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">
            Common Questions
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              {
                question: "What's your response time?",
                answer: "We typically respond within 24 hours on business days."
              },
              {
                question: "Do you offer phone support?",
                answer: "Yes, phone support is available for all paid plans."
              },
              {
                question: "Can I schedule a demo?",
                answer: "Absolutely! Request a demo through the form above."
              }
            ].map((faq, idx) => (
              <div key={idx} className="border border-gray-200 rounded-xl p-6 text-left">
                <h4 className="font-bold text-gray-900 mb-3">{faq.question}</h4>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
          <div className="mt-8">
            <a href="#" className="text-blue-600 font-bold hover:underline">
              View all FAQs →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;