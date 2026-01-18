import React, { useState } from 'react';
import { 
  Plus, 
  Minus, 
  Trash2, 
  Save, 
  X, 
  Printer, 
  Download, 
  Eye, 
  Copy, 
  Calendar, 
  Clock,
  User,
  Mail,
  Phone,
  MapPin,
  Package,
  Percent,
  IndianRupee,
  Hash,
  FileText,
  Calculator,
  Search,
  ChevronDown,
  Tag,
  Clock4,
  ShieldCheck,
  CreditCard,
  Smartphone,
  Building,
  Wallet,
  FileCheck,
  CheckCircle,
  AlertCircle,
  Building2,
  AtSign,
  Receipt,
  QrCode,
  Send,
  Bell,
  PhoneCall
} from 'lucide-react';

const AddInvoice = () => {
  const [invoice, setInvoice] = useState({
    invoiceNumber: 'INV-' + new Date().getFullYear() + '-' + String(Math.floor(Math.random() * 1000)).padStart(3, '0'),
    customer: 'Rajesh Kumar',
    customerEmail: 'rajesh.kumar@gmail.com',
    customerPhone: '+91 98765 43210',
    customerAddress: 'Mumbai, Maharashtra',
    date: new Date().toISOString().split('T')[0],
    dueDate: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
    status: 'pending',
    paymentMethod: 'UPI',
    currency: 'INR',
    taxRate: 18,
    discount: 0,
    notes: 'Thank you for your business! Membership valid for 30 days from invoice date.',
    terms: 'Payment due within 30 days. Late fees of 2% per month apply after due date.',
    items: [
      { id: 1, name: 'Monthly Membership', description: 'Premium Gym Access - Full Month', quantity: 1, price: 3000, total: 3000 },
      { id: 2, name: 'Personal Training', description: '5 Sessions Package', quantity: 5, price: 500, total: 2500 },
      { id: 3, name: 'Protein Supplements', description: 'Whey Protein 2kg', quantity: 2, price: 1000, total: 2000 }
    ]
  });

  const [showPreview, setShowPreview] = useState(false);
  const [customers] = useState([
    { id: 1, name: 'Rajesh Kumar', email: 'rajesh.kumar@gmail.com', phone: '+91 98765 43210', address: 'Mumbai, Maharashtra', type: 'Member' },
    { id: 2, name: 'Priya Sharma', email: 'priya.sharma@yahoo.com', phone: '+91 87654 32109', address: 'Andheri, Mumbai', type: 'Member' },
    { id: 3, name: 'Amit Patel', email: 'amit.patel@hotmail.com', phone: '+91 76543 21098', address: 'Bandra, Mumbai', type: 'Member' },
    { id: 4, name: 'Sunita Enterprises', email: 'accounts@sunitaenterprises.com', phone: '+91 2223456789', address: 'Corporate Office, Nariman Point', type: 'Corporate' }
  ]);

  const [products] = useState([
    { id: 1, name: 'Monthly Membership', description: 'Premium Gym Access', price: 3000, category: 'Membership' },
    { id: 2, name: 'Personal Training', description: '1 Session', price: 500, category: 'Services' },
    { id: 3, name: 'Yoga Classes', description: '10 Sessions Package', price: 4000, category: 'Classes' },
    { id: 4, name: 'Protein Supplements', description: 'Whey Protein 2kg', price: 1000, category: 'Products' },
    { id: 5, name: 'Locker Rent', description: 'Monthly Locker', price: 700, category: 'Services' },
    { id: 6, name: 'Massage Therapy', description: 'Deep Tissue - 60 mins', price: 800, category: 'Services' }
  ]);

  const handleItemChange = (id, field, value) => {
    setInvoice(prev => ({
      ...prev,
      items: prev.items.map(item => 
        item.id === id 
          ? { 
              ...item, 
              [field]: value,
              total: field === 'quantity' || field === 'price' 
                ? (field === 'quantity' ? value * item.price : item.quantity * value)
                : item.total
            }
          : item
      )
    }));
  };

  const addItem = () => {
    const newId = Math.max(...invoice.items.map(i => i.id), 0) + 1;
    setInvoice(prev => ({
      ...prev,
      items: [...prev.items, { id: newId, name: '', description: '', quantity: 1, price: 0, total: 0 }]
    }));
  };

  const removeItem = (id) => {
    if (invoice.items.length > 1) {
      setInvoice(prev => ({
        ...prev,
        items: prev.items.filter(item => item.id !== id)
      }));
    }
  };

  const addProduct = (product) => {
    const newId = Math.max(...invoice.items.map(i => i.id), 0) + 1;
    setInvoice(prev => ({
      ...prev,
      items: [...prev.items, { 
        id: newId, 
        name: product.name, 
        description: product.description, 
        quantity: 1, 
        price: product.price, 
        total: product.price 
      }]
    }));
  };

  const calculateTotals = () => {
    const subtotal = invoice.items.reduce((sum, item) => sum + item.total, 0);
    const discountAmount = (subtotal * invoice.discount) / 100;
    const taxAmount = ((subtotal - discountAmount) * invoice.taxRate) / 100;
    const total = subtotal - discountAmount + taxAmount;
    
    return { subtotal, discountAmount, taxAmount, total };
  };

  const { subtotal, discountAmount, taxAmount, total } = calculateTotals();

  const handleCustomerSelect = (customer) => {
    setInvoice(prev => ({
      ...prev,
      customer: customer.name,
      customerEmail: customer.email,
      customerPhone: customer.phone,
      customerAddress: customer.address
    }));
  };

  const handleSave = () => {
    const invoiceData = {
      ...invoice,
      subtotal,
      discountAmount,
      taxAmount,
      total,
      createdAt: new Date().toISOString()
    };
    console.log('Invoice saved:', invoiceData);
    alert('Invoice saved successfully!');
  };

  const handleSaveDraft = () => {
    console.log('Draft saved:', invoice);
    alert('Draft saved successfully!');
  };

  const handlePreview = () => {
    setShowPreview(true);
  };

  const handleDuplicate = () => {
    const newInvoiceNumber = 'INV-' + new Date().getFullYear() + '-' + String(Math.floor(Math.random() * 1000)).padStart(3, '0');
    setInvoice(prev => ({
      ...prev,
      invoiceNumber: newInvoiceNumber,
      date: new Date().toISOString().split('T')[0]
    }));
    alert('Invoice duplicated with new number!');
  };

  const handlePrintInvoice = () => {
    const printWindow = window.open('', '_blank');
    printWindow.document.write(`
      <html>
        <head>
          <title>Invoice ${invoice.invoiceNumber}</title>
          <style>
            body { font-family: Arial, sans-serif; padding: 40px; }
            .invoice-container { max-width: 800px; margin: 0 auto; }
            .invoice-header { text-align: center; margin-bottom: 40px; border-bottom: 2px solid #000; padding-bottom: 20px; }
            .invoice-details { display: flex; justify-content: space-between; margin-bottom: 40px; }
            .invoice-table { width: 100%; border-collapse: collapse; margin-bottom: 40px; }
            .invoice-table th, .invoice-table td { border: 1px solid #ddd; padding: 12px; text-align: left; }
            .invoice-table th { background-color: #f8f9fa; font-weight: bold; }
            .total-section { text-align: right; margin-top: 30px; }
            .notes-section { margin-top: 40px; padding-top: 20px; border-top: 1px solid #ddd; }
          </style>
        </head>
        <body>
          <div class="invoice-container">
            <div class="invoice-header">
              <h1>INVOICE</h1>
              <h2>${invoice.invoiceNumber}</h2>
              <p>Date: ${invoice.date} | Due Date: ${invoice.dueDate}</p>
            </div>
            
            <div class="invoice-details">
              <div>
                <h3>FROM</h3>
                <p><strong>FitPro Gym</strong></p>
                <p>123 Gym Street, Mumbai Central</p>
                <p>Mumbai - 400008</p>
                <p>Phone: +91 22 1234 5678</p>
                <p>Email: billing@fitprogym.com</p>
              </div>
              
              <div>
                <h3>BILL TO</h3>
                <p><strong>${invoice.customer}</strong></p>
                <p>${invoice.customerAddress}</p>
                <p>${invoice.customerPhone}</p>
                <p>${invoice.customerEmail}</p>
              </div>
            </div>
            
            <table class="invoice-table">
              <thead>
                <tr>
                  <th>Item</th>
                  <th>Description</th>
                  <th>Quantity</th>
                  <th>Price</th>
                  <th>Total</th>
                </tr>
              </thead>
              <tbody>
                ${invoice.items.map(item => `
                  <tr>
                    <td>${item.name}</td>
                    <td>${item.description}</td>
                    <td>${item.quantity}</td>
                    <td>₹${item.price}</td>
                    <td>₹${item.total}</td>
                  </tr>
                `).join('')}
              </tbody>
            </table>
            
            <div class="total-section">
              <p>Subtotal: ₹${subtotal}</p>
              ${invoice.discount > 0 ? `<p>Discount (${invoice.discount}%): -₹${discountAmount}</p>` : ''}
              <p>Tax (${invoice.taxRate}%): ₹${taxAmount}</p>
              <h3>Total Amount: ₹${total}</h3>
              <p>Status: ${invoice.status.toUpperCase()}</p>
              <p>Payment Method: ${invoice.paymentMethod}</p>
            </div>
            
            <div class="notes-section">
              <p><strong>Notes:</strong> ${invoice.notes}</p>
              <p><strong>Terms:</strong> ${invoice.terms}</p>
            </div>
          </div>
        </body>
      </html>
    `);
    printWindow.document.close();
    printWindow.print();
  };

  const statusColors = {
    paid: 'bg-green-100 text-green-800 border-green-200',
    pending: 'bg-yellow-100 text-yellow-800 border-yellow-200',
    partial: 'bg-blue-100 text-blue-800 border-blue-200',
    overdue: 'bg-red-100 text-red-800 border-red-200'
  };

  const statusIcons = {
    paid: CheckCircle,
    pending: Clock,
    partial: Clock4,
    overdue: AlertCircle
  };

  // Invoice Preview Modal Component
  const InvoicePreviewModal = ({ invoice, onClose }) => {
    const StatusIcon = statusIcons[invoice.status] || Clock;

    return (
      <div className="fixed inset-0 bg-white bg-opacity-50 flex items-center justify-center p-4 z-50">
        <div className="bg-white rounded-xl  border border-gray-200 border-dashed max-w-6xl w-full max-h-[90vh] overflow-hidden">
          {/* Modal Header */}
          <div className="bg-gray-900 px-6 py-4">
            <div className="flex  justify-between">
              <div className="flex space-x-3">
                <div>
                  <h2 className="text-xl font-bold text-white">Invoice Preview</h2>
                  <p className="text-gray-300 text-sm">{invoice.invoiceNumber}</p>
                </div>
              </div>
              <button
                onClick={onClose}
                className="p-2 hover:bg-gray-800 rounded-lg transition-colors"
              >
                <X className="w-5 h-5 text-white" />
              </button>
            </div>
          </div>

          {/* Invoice Content */}
          <div className="p-8 overflow-y-auto max-h-[calc(90vh-80px)] bg-white">
            {/* Invoice Header */}
            <div className="mb-8 pb-8 border-b-2 border-gray-800">
              <h1 className="text-3xl font-bold text-gray-900">INVOICE</h1>
              <div className="mt-2 flex items-center  space-x-6">
                <span className="text-lg font-semibold text-gray-700">{invoice.invoiceNumber}</span>
                <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium border ${statusColors[invoice.status]}`}>
                  <StatusIcon className="w-4 h-4 mr-1" />
                  {invoice.status.charAt(0).toUpperCase() + invoice.status.slice(1)}
                </span>
              </div>
              <div className="mt-4 flex  space-x-6 text-gray-600">
                <div className="flex items-center">
                  <Calendar className="w-4 h-4 mr-1" />
                  <span>Issue Date: {invoice.date}</span>
                </div>
                <div className="flex items-center">
                  <Clock className="w-4 h-4 mr-1" />
                  <span>Due Date: {invoice.dueDate}</span>
                </div>
              </div>
            </div>

            {/* From/To Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              {/* From */}
              

              {/* Bill To */}
              <div className="border border-gray-200 rounded-lg p-6">
                <div className="flex items-center mb-4">
                  <User className="w-5 h-5 text-gray-600 mr-2" />
                  <h3 className="text-lg font-semibold text-gray-900">BILL TO</h3>
                </div>
                <div className="space-y-2">
                  <p className="text-xl font-bold text-gray-900">{invoice.customer}</p>
                  <p className="text-gray-700">{invoice.customerAddress}</p>
                  <div className="pt-2 space-y-1">
                    <p className="text-gray-600 flex items-center">
                      <Phone className="w-4 h-4 mr-2" />
                      {invoice.customerPhone}
                    </p>
                    <p className="text-gray-600 flex items-center">
                      <Mail className="w-4 h-4 mr-2" />
                      {invoice.customerEmail}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Invoice Details */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                <p className="text-sm text-gray-500">Invoice Number</p>
                <p className="text-lg font-bold text-gray-900">{invoice.invoiceNumber}</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                <p className="text-sm text-gray-500">Invoice Date</p>
                <p className="text-lg font-bold text-gray-900">{invoice.date}</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                <p className="text-sm text-gray-500">Due Date</p>
                <p className={`text-lg font-bold ${invoice.status === 'overdue' ? 'text-red-600' : 'text-gray-900'}`}>
                  {invoice.dueDate}
                </p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                <p className="text-sm text-gray-500">Payment Method</p>
                <p className="text-lg font-bold text-gray-900">{invoice.paymentMethod || 'Not specified'}</p>
              </div>
            </div>

            {/* Items Table */}
            <div className="mb-8 overflow-x-auto">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">ITEMS & SERVICES</h3>
              <table className="min-w-full divide-y divide-gray-200 border border-gray-200 rounded-lg overflow-hidden">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Item</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Qty</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Total</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                  {invoice.items.map((item) => (
                    <tr key={item.id}>
                      <td className="px-6 py-4 text-sm font-medium text-gray-900">{item.name}</td>
                      <td className="px-6 py-4 text-sm text-gray-600">{item.description}</td>
                      <td className="px-6 py-4 text-sm text-gray-600">{item.quantity}</td>
                      <td className="px-6 py-4 text-sm text-gray-600">₹{item.price.toLocaleString()}</td>
                      <td className="px-6 py-4 text-sm font-bold text-gray-900">₹{item.total.toLocaleString()}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Summary */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">NOTES</h3>
                <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                  <p className="text-sm text-gray-700">{invoice.notes}</p>
                </div>
                <div className="mt-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">TERMS</h3>
                  <p className="text-sm text-gray-600">{invoice.terms}</p>
                </div>
              </div>
              <div>
                <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Subtotal</span>
                      <span className="font-medium">₹{subtotal.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Discount ({invoice.discount}%)</span>
                      <span className="font-medium text-green-600">- ₹{discountAmount.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Tax ({invoice.taxRate}%)</span>
                      <span className="font-medium">₹{taxAmount.toLocaleString()}</span>
                    </div>
                    <div className="border-t border-gray-300 pt-4 mt-4">
                      <div className="flex justify-between">
                        <span className="text-lg font-bold text-gray-900">Total Amount</span>
                        <span className="text-2xl font-bold text-blue-600">₹{total.toLocaleString()}</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* QR Code for UPI Payments */}
                {invoice.paymentMethod === 'UPI' && (
                  <div className="mt-6 p-4 border border-gray-200 rounded-lg text-center">
                    <div className="flex items-center justify-center mb-2">
                      <Smartphone className="w-4 h-4 mr-2 text-purple-600" />
                      <span className="text-sm font-medium text-gray-700">Scan to Pay via UPI</span>
                    </div>
                    <div className="flex justify-center">
                      <QrCode className="w-32 h-32 text-gray-700" />
                    </div>
                    <p className="text-xs text-gray-500 mt-2">UPI ID: gymfit@upi</p>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Modal Footer */}
          <div className="px-6 py-4 border-t border-gray-200 bg-gray-50 flex flex-wrap gap-2">
            <button
              onClick={handlePrintInvoice}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 flex items-center text-sm font-medium"
            >
              <Printer className="w-4 h-4 mr-2" />
              Print Invoice
            </button>
            <button
              onClick={() => alert('Email sent to ' + invoice.customerEmail)}
              className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 flex items-center text-sm font-medium"
            >
              <Send className="w-4 h-4 mr-2" />
              Send Email
            </button>
            {invoice.status !== 'paid' && (
              <button
                onClick={() => alert('Marked as paid')}
                className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 flex items-center text-sm font-medium"
              >
                <CheckCircle className="w-4 h-4 mr-2" />
                Mark as Paid
              </button>
            )}
            <button
              onClick={() => alert('Reminder sent')}
              className="px-4 py-2 bg-yellow-600 text-white rounded-lg hover:bg-yellow-700 flex items-center text-sm font-medium"
            >
              <Bell className="w-4 h-4 mr-2" />
              Send Reminder
            </button>
            <button
              onClick={onClose}
              className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 flex items-center text-sm font-medium"
            >
              Close Preview
            </button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen  p-4">
      <div className="mx-auto">
        {/* Header */}
        <div className="bg-white rounded-xl shadow border border-gray-200 mb-6">
          <div className="p-6 border-b border-gray-200">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="flex items-center space-x-3">
               
                <div>
                  <h1 className="text-2xl font-bold text-gray-900">Create New Invoice</h1>
                  <p className="text-gray-600">Fill in details and generate professional invoices</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
               
                <button
                  onClick={handlePreview}
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 flex items-center text-sm font-medium"
                >
                  <Eye className="w-4 h-4 mr-2" />
                  Preview Invoice
                </button>
              </div>
            </div>
          </div>

        
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column - Customer & Details */}
          <div className="lg:col-span-2 space-y-6">
            {/* Customer Section */}
            <div className="bg-white rounded-xl shadow border border-gray-200 p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg font-bold text-gray-900 flex items-center">
                  <User className="w-5 h-5 mr-2 text-blue-600" />
                  Customer Information
                </h2>
                <div className="relative">
                  <select 
                    className="appearance-none bg-gray-50 border border-gray-300 rounded-lg px-4 py-2 pr-8 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    onChange={(e) => handleCustomerSelect(customers.find(c => c.id == e.target.value) || customers[0])}
                  >
                    <option value="">Select Customer</option>
                    {customers.map(customer => (
                      <option key={customer.id} value={customer.id}>
                        {customer.name} - {customer.email}
                      </option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <span className="flex items-center">
                      <User className="w-4 h-4 mr-1" />
                      Customer Name *
                    </span>
                  </label>
                  <input
                    type="text"
                    value={invoice.customer}
                    onChange={(e) => setInvoice({...invoice, customer: e.target.value})}
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Enter customer name"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <span className="flex items-center">
                      <Mail className="w-4 h-4 mr-1" />
                      Email Address *
                    </span>
                  </label>
                  <input
                    type="email"
                    value={invoice.customerEmail}
                    onChange={(e) => setInvoice({...invoice, customerEmail: e.target.value})}
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="customer@example.com"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <span className="flex items-center">
                      <Phone className="w-4 h-4 mr-1" />
                      Phone Number
                    </span>
                  </label>
                  <input
                    type="tel"
                    value={invoice.customerPhone}
                    onChange={(e) => setInvoice({...invoice, customerPhone: e.target.value})}
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="+91 98765 43210"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <span className="flex items-center">
                      <MapPin className="w-4 h-4 mr-1" />
                      Billing Address
                    </span>
                  </label>
                  <textarea
                    value={invoice.customerAddress}
                    onChange={(e) => setInvoice({...invoice, customerAddress: e.target.value})}
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    rows="2"
                    placeholder="Enter billing address"
                  />
                </div>
              </div>
            </div>

            {/* Items Section */}
            <div className="bg-white rounded-xl shadow border border-gray-200 p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg font-bold text-gray-900 flex items-center">
                  <Package className="w-5 h-5 mr-2 text-blue-600" />
                  Invoice Items
                </h2>
                <button
                  onClick={addItem}
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 flex items-center text-sm font-medium"
                >
                  <Plus className="w-4 h-4 mr-2" />
                  Add Item
                </button>
              </div>

              {/* Quick Add Products */}
              <div className="mb-6">
                <h3 className="text-sm font-medium text-gray-700 mb-3 flex items-center">
                  Quick Add Products
                </h3>
                <div className="flex flex-wrap gap-2">
                  {products.slice(0, 6).map(product => (
                    <button
                      key={product.id}
                      onClick={() => addProduct(product)}
                      className="px-3 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg text-sm flex items-center"
                    >
                      <Plus className="w-3 h-3 mr-1" />
                      {product.name}
                      <span className="ml-2 text-blue-600 font-medium">₹{product.price}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Items Table */}
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Item</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Description</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Quantity</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Price</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Total</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase"></th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {invoice.items.map((item) => (
                      <tr key={item.id} className="hover:bg-gray-50">
                        <td className="px-4 py-3">
                          <input
                            type="text"
                            value={item.name}
                            onChange={(e) => handleItemChange(item.id, 'name', e.target.value)}
                            className="w-full px-3 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500"
                            placeholder="Item name"
                          />
                        </td>
                        <td className="px-4 py-3">
                          <input
                            type="text"
                            value={item.description}
                            onChange={(e) => handleItemChange(item.id, 'description', e.target.value)}
                            className="w-full px-3 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500"
                            placeholder="Description"
                          />
                        </td>
                        <td className="px-4 py-3">
                          <div className="flex items-center">
                            <button
                              onClick={() => handleItemChange(item.id, 'quantity', Math.max(1, item.quantity - 1))}
                              className="p-1 border border-gray-300 rounded-l"
                            >
                              <Minus className="w-4 h-4" />
                            </button>
                            <input
                              type="number"
                              value={item.quantity}
                              onChange={(e) => handleItemChange(item.id, 'quantity', parseInt(e.target.value) || 1)}
                              className="w-16 px-2 py-1 border-t border-b border-gray-300 text-center"
                              min="1"
                            />
                            <button
                              onClick={() => handleItemChange(item.id, 'quantity', item.quantity + 1)}
                              className="p-1 border border-gray-300 rounded-r"
                            >
                              <Plus className="w-4 h-4" />
                            </button>
                          </div>
                        </td>
                        <td className="px-4 py-3">
                          <div className="relative">
                            <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">₹</span>
                            <input
                              type="number"
                              value={item.price}
                              onChange={(e) => handleItemChange(item.id, 'price', parseFloat(e.target.value) || 0)}
                              className="w-full pl-8 pr-3 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500"
                              placeholder="0.00"
                              min="0"
                              step="0.01"
                            />
                          </div>
                        </td>
                        <td className="px-4 py-3">
                          <div className="text-lg font-bold text-gray-900">
                            ₹{item.total.toLocaleString()}
                          </div>
                        </td>
                        <td className="px-4 py-3">
                          <button
                            onClick={() => removeItem(item.id)}
                            className="p-2 text-red-600 hover:bg-red-50 rounded-lg"
                            disabled={invoice.items.length <= 1}
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Right Column - Summary & Actions */}
          <div className="space-y-6">
            {/* Summary Card */}
            <div className="bg-white rounded-xl shadow border border-gray-200 p-6">
              <h2 className="text-lg font-bold text-gray-900 mb-6 flex items-center">
                <Calculator className="w-5 h-5 mr-2 text-blue-600" />
                Invoice Summary
              </h2>
              
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Subtotal</span>
                  <span className="font-medium">₹{subtotal.toLocaleString()}</span>
                </div>
                
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <Percent className="w-4 h-4 mr-1 text-gray-400" />
                    <span className="text-gray-600">Discount</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <input
                      type="number"
                      value={invoice.discount}
                      onChange={(e) => setInvoice({...invoice, discount: parseFloat(e.target.value) || 0})}
                      className="w-16 px-2 py-1 border border-gray-300 rounded text-right"
                      min="0"
                      max="100"
                    />
                    <span className="text-gray-500">%</span>
                    <span className="w-24 text-right font-medium text-green-600">
                      -₹{discountAmount.toLocaleString()}
                    </span>
                  </div>
                </div>
                
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <Tag className="w-4 h-4 mr-1 text-gray-400" />
                    <span className="text-gray-600">Tax ({invoice.taxRate}%)</span>
                  </div>
                  <span className="font-medium">₹{taxAmount.toLocaleString()}</span>
                </div>
                
                <div className="border-t border-gray-200 pt-3">
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-bold text-gray-900">Total Amount</span>
                    <span className="text-2xl font-bold text-blue-600">₹{total.toLocaleString()}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Settings Card */}
            <div className="bg-white rounded-xl shadow border border-gray-200 p-6">
              <h2 className="text-lg font-bold text-gray-900 mb-6 flex items-center">
                <ShieldCheck className="w-5 h-5 mr-2 text-blue-600" />
                Invoice Settings
              </h2>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Payment Method
                  </label>
                  <select
                    value={invoice.paymentMethod}
                    onChange={(e) => setInvoice({...invoice, paymentMethod: e.target.value})}
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="UPI">UPI</option>
                    <option value="Credit Card">Credit Card</option>
                    <option value="Bank Transfer">Bank Transfer</option>
                    <option value="Cash">Cash</option>
                    <option value="Cheque">Cheque</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Tax Rate (%)
                  </label>
                  <input
                    type="number"
                    value={invoice.taxRate}
                    onChange={(e) => setInvoice({...invoice, taxRate: parseFloat(e.target.value) || 0})}
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                    min="0"
                    max="100"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Status
                  </label>
                  <select
                    value={invoice.status}
                    onChange={(e) => setInvoice({...invoice, status: e.target.value})}
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="pending">Pending</option>
                    <option value="paid">Paid</option>
                    <option value="partial">Partial</option>
                    <option value="overdue">Overdue</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Notes & Terms */}
            <div className="bg-white rounded-xl shadow border border-gray-200 p-6">
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Notes
                  </label>
                  <textarea
                    value={invoice.notes}
                    onChange={(e) => setInvoice({...invoice, notes: e.target.value})}
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                    rows="3"
                    placeholder="Add any additional notes..."
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Terms & Conditions
                  </label>
                  <textarea
                    value={invoice.terms}
                    onChange={(e) => setInvoice({...invoice, terms: e.target.value})}
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                    rows="3"
                    placeholder="Payment terms and conditions..."
                  />
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="bg-white rounded-xl shadow border border-gray-200 p-6">
              <div className="space-y-3">
                <button
                  onClick={handleSave}
                  className="w-full py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 flex items-center justify-center font-medium"
                >
                  <Save className="w-5 h-5 mr-2" />
                  Save & Send Invoice
                </button>
                
                <button
                  onClick={handleSaveDraft}
                  className="w-full py-3 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 flex items-center justify-center font-medium"
                >
                  <Clock4 className="w-5 h-5 mr-2" />
                  Save as Draft
                </button>
                
                <div className="grid grid-cols-2 gap-3 pt-3 border-t border-gray-200">
                  <button 
                    onClick={handlePrintInvoice}
                    className="py-2 border border-gray-300 rounded-lg hover:bg-gray-50 flex items-center justify-center text-sm"
                  >
                    <Printer className="w-4 h-4 mr-2" />
                    Print
                  </button>
                  <button className="py-2 border border-gray-300 rounded-lg hover:bg-gray-50 flex items-center justify-center text-sm">
                    <Download className="w-4 h-4 mr-2" />
                    Download
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Invoice Preview Modal */}
      {showPreview && (
        <InvoicePreviewModal
          invoice={invoice}
          onClose={() => setShowPreview(false)}
        />
      )}
    </div>
  );
};

export default AddInvoice;