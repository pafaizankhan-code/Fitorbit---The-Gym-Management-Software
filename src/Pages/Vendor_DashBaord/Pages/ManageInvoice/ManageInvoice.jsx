import React, { useState, useEffect, useMemo } from 'react';
import {
  Search,
  Filter,
  Download,
  Printer,
  Mail,
  Eye,
  Edit,
  Trash2,
  Plus,
  Calendar,
  User,
  CreditCard,
  IndianRupee,
  CheckCircle,
  XCircle,
  Clock,
  MoreVertical,
  ChevronDown,
  ChevronUp,
  FileText,
  RefreshCw,
  TrendingUp,
  TrendingDown,
  PieChart,
  BarChart3,
  Receipt,
  QrCode,
  Share2,
  Copy,
  ArrowUpRight,
  ArrowDownRight,
  DownloadCloud,
  UploadCloud,
  FilterX,
  CalendarDays,
  Users,
  Building,
  Package,
  Tag,
  Percent,
  Hash,
  FileSearch,
  AlertCircle,
  Bell,
  Shield,
  Lock,
  Unlock,
  RotateCcw,
  X,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  Smartphone,
  MapPin,
  Globe,
  MessageSquare,
  Send,
  Check,
  FileCheck,
  FileX,
  Clock4,
  CalendarClock,
  CreditCard as CardIcon,
  Smartphone as PhoneIcon,
  AtSign,
  Briefcase,
  Home,
  Building2,
  PhoneCall,
  MailCheck,
  SendHorizontal,
  FileBarChart,
  Wallet,
  ReceiptIndianRupee,
  FileDigit,
  Calculator
} from 'lucide-react';
import { Link } from 'react-router-dom';

const ManageInvoice = () => {
  // State Management
  const [selectedInvoices, setSelectedInvoices] = useState([]);
  const [viewMode, setViewMode] = useState('list');
  const [sortBy, setSortBy] = useState('recent');
  const [filterMenuOpen, setFilterMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(8);
  const [activeFilters, setActiveFilters] = useState({
    status: [],
    paymentMethod: [],
    customerType: []
  });
  const [showAddInvoice, setShowAddInvoice] = useState(false);
  const [editingInvoice, setEditingInvoice] = useState(null);
  const [showBulkActions, setShowBulkActions] = useState(false);
  const [previewInvoice, setPreviewInvoice] = useState(null);
  const [quickStats, setQuickStats] = useState({
    totalRevenue: 0,
    collected: 0,
    pending: 0,
    overdue: 0
  });

  // Sample invoice data
  const [invoices, setInvoices] = useState([
    {
      id: 'INV-2024-001',
      customer: {
        name: 'Rajesh Kumar',
        type: 'Member',
        id: 'MEM-1001',
        email: 'rajesh.kumar@gmail.com',
        phone: '+91 98765 43210',
        address: 'Mumbai, Maharashtra'
      },
      date: '2024-01-15',
      dueDate: '2024-02-14',
      issueDate: '2024-01-15',
      amount: 5500,
      paidAmount: 5500,
      taxAmount: 838.98,
      discountAmount: 200,
      subtotal: 4861.02,
      status: 'paid',
      paymentMethod: 'UPI',
      paymentDate: '2024-01-15',
      items: [
        { id: 1, name: 'Monthly Membership', description: 'Premium Gym Access', quantity: 1, price: 3000, total: 3000 },
        { id: 2, name: 'Personal Training', description: '5 Sessions Package', quantity: 5, price: 500, total: 2500 },
        { id: 3, name: 'Protein Supplements', description: 'Whey Protein 2kg', quantity: 2, price: 1000, total: 2000 }
      ],
      taxRate: 18,
      discount: 200,
      notes: 'Thank you for your payment. Membership valid until Feb 14, 2024.',
      terms: 'Payment due within 30 days',
      createdBy: 'Admin',
      lastUpdated: '2024-01-15 14:30',
      qrCode: 'upi://pay?pa=gymfit@upi&am=5500&tn=INV-2024-001',
      invoiceNumber: 'INV-2024-001',
      currency: 'INR',
      billingAddress: 'FitPro Gym, Mumbai Central, Mumbai - 400008',
      shippingAddress: 'Same as billing'
    },
    {
      id: 'INV-2024-002',
      customer: {
        name: 'Priya Sharma',
        type: 'Member',
        id: 'MEM-1002',
        email: 'priya.sharma@yahoo.com',
        phone: '+91 87654 32109',
        address: 'Andheri, Mumbai'
      },
      date: '2024-01-16',
      dueDate: '2024-02-15',
      issueDate: '2024-01-16',
      amount: 8200,
      paidAmount: 4200,
      taxAmount: 1250.85,
      discountAmount: 0,
      subtotal: 6949.15,
      status: 'partial',
      paymentMethod: 'Credit Card',
      paymentDate: '2024-01-16',
      items: [
        { id: 1, name: 'Quarterly Membership', description: 'Full Gym Access', quantity: 1, price: 7500, total: 7500 },
        { id: 2, name: 'Locker Rent', description: 'Premium Locker - 3 Months', quantity: 3, price: 700, total: 2100 }
      ],
      taxRate: 18,
      discount: 0,
      notes: 'Balance payment pending. Next installment due on Feb 15.',
      terms: 'Payment in installments',
      createdBy: 'Staff',
      lastUpdated: '2024-01-16 10:15',
      qrCode: 'upi://pay?pa=gymfit@upi&am=4200&tn=INV-2024-002',
      invoiceNumber: 'INV-2024-002',
      currency: 'INR',
      billingAddress: 'FitPro Gym, Andheri West, Mumbai - 400053',
      shippingAddress: 'Same as billing'
    },
    {
      id: 'INV-2024-003',
      customer: {
        name: 'Amit Patel',
        type: 'Non-Member',
        id: 'VIS-1001',
        email: 'amit.patel@hotmail.com',
        phone: '+91 76543 21098',
        address: 'Bandra, Mumbai'
      },
      date: '2024-01-17',
      dueDate: '2024-01-17',
      issueDate: '2024-01-17',
      amount: 1200,
      paidAmount: 0,
      taxAmount: 183.05,
      discountAmount: 0,
      subtotal: 1016.95,
      status: 'pending',
      paymentMethod: 'Cash',
      paymentDate: null,
      items: [
        { id: 1, name: 'Day Pass', description: 'Full Day Access', quantity: 2, price: 500, total: 1000 },
        { id: 2, name: 'Towel Service', description: 'Premium Towel', quantity: 2, price: 100, total: 200 }
      ],
      taxRate: 18,
      discount: 0,
      notes: 'Walk-in customer. Payment expected on visit.',
      terms: 'Immediate payment',
      createdBy: 'Admin',
      lastUpdated: '2024-01-17 16:45',
      qrCode: null,
      invoiceNumber: 'INV-2024-003',
      currency: 'INR',
      billingAddress: 'FitPro Gym, Bandra, Mumbai - 400050',
      shippingAddress: 'Same as billing'
    },
    {
      id: 'INV-2024-004',
      customer: {
        name: 'Sunita Enterprises',
        type: 'Corporate',
        id: 'CORP-5001',
        email: 'accounts@sunitaenterprises.com',
        phone: '+91 2223456789',
        address: 'Corporate Office, Nariman Point'
      },
      date: '2024-01-18',
      dueDate: '2024-03-18',
      issueDate: '2024-01-18',
      amount: 45000,
      paidAmount: 45000,
      taxAmount: 6864.41,
      discountAmount: 5000,
      subtotal: 38135.59,
      status: 'paid',
      paymentMethod: 'Bank Transfer',
      paymentDate: '2024-01-18',
      items: [
        { id: 1, name: 'Corporate Package', description: '50 Employee Membership', quantity: 1, price: 40000, total: 40000 },
        { id: 2, name: 'Nutrition Consultation', description: 'Group Session - 5 hrs', quantity: 5, price: 1000, total: 5000 }
      ],
      taxRate: 18,
      discount: 5000,
      notes: 'Corporate client - 30 days credit period. Thank you for your business.',
      terms: 'Net 60 days',
      createdBy: 'Manager',
      lastUpdated: '2024-01-18 11:20',
      qrCode: null,
      invoiceNumber: 'INV-2024-004',
      currency: 'INR',
      billingAddress: 'FitPro Gym, Corporate Division, Mumbai - 400021',
      shippingAddress: 'Sunita Enterprises, Nariman Point'
    },
    {
      id: 'INV-2024-005',
      customer: {
        name: 'Vikram Singh',
        type: 'Member',
        id: 'MEM-1003',
        email: 'vikram.singh@gmail.com',
        phone: '+91 54321 09876',
        address: 'Andheri East, Mumbai'
      },
      date: '2024-01-19',
      dueDate: '2024-02-18',
      issueDate: '2024-01-19',
      amount: 6800,
      paidAmount: 0,
      taxAmount: 1037.29,
      discountAmount: 950,
      subtotal: 5762.71,
      status: 'overdue',
      paymentMethod: null,
      paymentDate: null,
      items: [
        { id: 1, name: 'Monthly Membership', description: 'Elite Package', quantity: 1, price: 3000, total: 3000 },
        { id: 2, name: 'Massage Therapy', description: 'Deep Tissue - 8 sessions', quantity: 8, price: 4750, total: 3800 }
      ],
      taxRate: 18,
      discount: 950,
      notes: 'Overdue by 5 days. Please clear payment immediately to avoid service suspension.',
      terms: 'Payment due on receipt',
      createdBy: 'Staff',
      lastUpdated: '2024-01-24 09:30',
      qrCode: 'upi://pay?pa=gymfit@upi&am=6800&tn=INV-2024-005',
      invoiceNumber: 'INV-2024-005',
      currency: 'INR',
      billingAddress: 'FitPro Gym, Andheri West, Mumbai - 400053',
      shippingAddress: 'Same as billing'
    },
    {
      id: 'INV-2024-006',
      customer: {
        name: 'Neha Gupta',
        type: 'Member',
        id: 'MEM-1004',
        email: 'neha.gupta@gmail.com',
        phone: '+91 43210 98765',
        address: 'Bandra West, Mumbai'
      },
      date: '2024-01-20',
      dueDate: '2024-02-19',
      issueDate: '2024-01-20',
      amount: 3500,
      paidAmount: 3500,
      taxAmount: 533.90,
      discountAmount: 0,
      subtotal: 2966.10,
      status: 'paid',
      paymentMethod: 'UPI',
      paymentDate: '2024-01-20',
      items: [
        { id: 1, name: 'Monthly Membership', description: 'Standard Package', quantity: 1, price: 3000, total: 3000 },
        { id: 2, name: 'Yoga Classes', description: '10 Sessions Package', quantity: 10, price: 500, total: 500 }
      ],
      taxRate: 18,
      discount: 0,
      notes: 'Payment received. Yoga classes scheduled as per plan.',
      terms: 'Payment due within 30 days',
      createdBy: 'Admin',
      lastUpdated: '2024-01-20 15:40',
      qrCode: 'upi://pay?pa=gymfit@upi&am=3500&tn=INV-2024-006',
      invoiceNumber: 'INV-2024-006',
      currency: 'INR',
      billingAddress: 'FitPro Gym, Bandra, Mumbai - 400050',
      shippingAddress: 'Same as billing'
    },
    {
      id: 'INV-2024-007',
      customer: {
        name: 'Corporate Solutions Ltd',
        type: 'Corporate',
        id: 'CORP-5002',
        email: 'finance@corpsolutions.com',
        phone: '+91 2229876543',
        address: 'Lower Parel, Mumbai'
      },
      date: '2024-01-21',
      dueDate: '2024-04-21',
      issueDate: '2024-01-21',
      amount: 75000,
      paidAmount: 25000,
      taxAmount: 11440.68,
      discountAmount: 0,
      subtotal: 63559.32,
      status: 'partial',
      paymentMethod: 'Cheque',
      paymentDate: '2024-01-21',
      items: [
        { id: 1, name: 'Annual Corporate Plan', description: '100 Employee Package', quantity: 1, price: 70000, total: 70000 },
        { id: 2, name: 'Health Checkup', description: 'Complete Body Checkup', quantity: 10, price: 5000, total: 5000 }
      ],
      taxRate: 18,
      discount: 0,
      notes: 'Instalment payment - 1st of 3 installments. Next due on Mar 21, 2024.',
      terms: 'Installment payment (3 months)',
      createdBy: 'Manager',
      lastUpdated: '2024-01-21 13:25',
      qrCode: null,
      invoiceNumber: 'INV-2024-007',
      currency: 'INR',
      billingAddress: 'FitPro Gym, Corporate Division, Mumbai - 400021',
      shippingAddress: 'Corporate Solutions Ltd, Lower Parel'
    },
    {
      id: 'INV-2024-008',
      customer: {
        name: 'Rohan Mehta',
        type: 'Member',
        id: 'MEM-1005',
        email: 'rohan.mehta@gmail.com',
        phone: '+91 32109 87654',
        address: 'Central Mumbai'
      },
      date: '2024-01-22',
      dueDate: '2024-02-21',
      issueDate: '2024-01-22',
      amount: 4200,
      paidAmount: 0,
      taxAmount: 640.68,
      discountAmount: 0,
      subtotal: 3559.32,
      status: 'pending',
      paymentMethod: 'Debit Card',
      paymentDate: null,
      items: [
        { id: 1, name: 'Monthly Membership', description: 'Premium Package', quantity: 1, price: 3000, total: 3000 },
        { id: 2, name: 'Swimming Pool Access', description: 'Monthly Access', quantity: 1, price: 1200, total: 1200 }
      ],
      taxRate: 18,
      discount: 0,
      notes: 'Payment expected today. Please complete payment to activate swimming access.',
      terms: 'Payment due on receipt',
      createdBy: 'Staff',
      lastUpdated: '2024-01-22 17:10',
      qrCode: 'upi://pay?pa=gymfit@upi&am=4200&tn=INV-2024-008',
      invoiceNumber: 'INV-2024-008',
      currency: 'INR',
      billingAddress: 'FitPro Gym, Mumbai Central, Mumbai - 400008',
      shippingAddress: 'Same as billing'
    }
  ]);

  // Filter options
  const statusOptions = [
    { id: 'paid', label: 'Paid', count: 3, color: 'green', icon: CheckCircle },
    { id: 'pending', label: 'Pending', count: 2, color: 'yellow', icon: Clock },
    { id: 'partial', label: 'Partial', count: 2, color: 'blue', icon: Clock4 },
    { id: 'overdue', label: 'Overdue', count: 1, color: 'red', icon: AlertCircle }
  ];

  const paymentMethodOptions = [
    { id: 'UPI', label: 'UPI', count: 3, icon: Smartphone },
    { id: 'Credit Card', label: 'Credit Card', count: 1, icon: CreditCard },
    { id: 'Cash', label: 'Cash', count: 1, icon: IndianRupee },
    { id: 'Bank Transfer', label: 'Bank Transfer', count: 1, icon: Building2 },
    { id: 'Cheque', label: 'Cheque', count: 1, icon: FileCheck },
    { id: 'Debit Card', label: 'Debit Card', count: 1, icon: CardIcon }
  ];

  const customerTypeOptions = [
    { id: 'Member', label: 'Member', count: 5, icon: Users },
    { id: 'Corporate', label: 'Corporate', count: 2, icon: Building },
    { id: 'Non-Member', label: 'Non-Member', count: 1, icon: User }
  ];

  // Stats calculation
  const stats = useMemo(() => {
    const totalRevenue = invoices.reduce((sum, invoice) => sum + invoice.amount, 0);
    const collected = invoices.reduce((sum, invoice) => sum + invoice.paidAmount, 0);
    const pending = totalRevenue - collected;
    const overdue = invoices
      .filter(inv => inv.status === 'overdue')
      .reduce((sum, inv) => sum + (inv.amount - inv.paidAmount), 0);
    
    const paidCount = invoices.filter(inv => inv.status === 'paid').length;
    const pendingCount = invoices.filter(inv => inv.status === 'pending').length;
    const partialCount = invoices.filter(inv => inv.status === 'partial').length;
    const overdueCount = invoices.filter(inv => inv.status === 'overdue').length;

    return {
      totalRevenue,
      collected,
      pending,
      overdue,
      paidCount,
      pendingCount,
      partialCount,
      overdueCount,
      collectionRate: totalRevenue > 0 ? (collected / totalRevenue * 100).toFixed(1) : 0
    };
  }, [invoices]);

  // Detect screen size
  useEffect(() => {
    const checkScreenSize = () => {
      const width = window.innerWidth;
      setIsMobile(width < 640);
      setIsTablet(width >= 640 && width < 1024);
      
      if (width < 480) {
        setItemsPerPage(2);
      } else if (width < 640) {
        setItemsPerPage(3);
      } else if (width < 768) {
        setItemsPerPage(4);
      } else if (width < 1024) {
        setItemsPerPage(6);
      } else {
        setItemsPerPage(8);
      }
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  // Filter and sort invoices
  const filteredAndSortedInvoices = useMemo(() => {
    let filtered = [...invoices];

    // Apply search
    if (searchQuery) {
      filtered = filtered.filter(invoice => 
        invoice.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
        invoice.customer.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        invoice.customer.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
        invoice.customer.id.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Apply status filters
    if (activeFilters.status.length > 0) {
      filtered = filtered.filter(invoice => 
        activeFilters.status.includes(invoice.status)
      );
    }

    // Apply payment method filters
    if (activeFilters.paymentMethod.length > 0) {
      filtered = filtered.filter(invoice => 
        activeFilters.paymentMethod.includes(invoice.paymentMethod)
      );
    }

    // Apply customer type filters
    if (activeFilters.customerType.length > 0) {
      filtered = filtered.filter(invoice => 
        activeFilters.customerType.includes(invoice.customer.type)
      );
    }

    // Apply sorting
    filtered.sort((a, b) => {
      switch(sortBy) {
        case 'amount':
          return b.amount - a.amount;
        case 'customer':
          return a.customer.name.localeCompare(b.customer.name);
        case 'date':
          return new Date(b.date) - new Date(a.date);
        case 'dueDate':
          return new Date(a.dueDate) - new Date(b.dueDate);
        case 'recent':
        default:
          return new Date(b.date) - new Date(a.date);
      }
    });

    return filtered;
  }, [invoices, searchQuery, activeFilters, sortBy]);

  // Pagination
  const totalPages = Math.ceil(filteredAndSortedInvoices.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentInvoices = filteredAndSortedInvoices.slice(startIndex, endIndex);

  // Status colors and icons
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

  const paymentMethodColors = {
    'UPI': 'bg-purple-100 text-purple-800',
    'Credit Card': 'bg-blue-100 text-blue-800',
    'Debit Card': 'bg-blue-100 text-blue-800',
    'Cash': 'bg-green-100 text-green-800',
    'Bank Transfer': 'bg-indigo-100 text-indigo-800',
    'Cheque': 'bg-gray-100 text-gray-800'
  };

  const customerTypeColors = {
    'Member': 'bg-blue-100 text-blue-800 border-blue-200',
    'Corporate': 'bg-purple-100 text-purple-800 border-purple-200',
    'Non-Member': 'bg-gray-100 text-gray-800 border-gray-200'
  };

  // Helper functions
  const toggleInvoiceSelection = (id) => {
    setSelectedInvoices(prev => 
      prev.includes(id) 
        ? prev.filter(invoiceId => invoiceId !== id)
        : [...prev, id]
    );
  };

  const selectAllInvoices = () => {
    if (selectedInvoices.length === currentInvoices.length) {
      setSelectedInvoices([]);
    } else {
      setSelectedInvoices(currentInvoices.map(invoice => invoice.id));
    }
  };

  const toggleFilter = (type, value) => {
    setActiveFilters(prev => {
      const currentValues = prev[type];
      if (currentValues.includes(value)) {
        return {
          ...prev,
          [type]: currentValues.filter(v => v !== value)
        };
      } else {
        return {
          ...prev,
          [type]: [...currentValues, value]
        };
      }
    });
  };

  const clearAllFilters = () => {
    setActiveFilters({
      status: [],
      paymentMethod: [],
      customerType: []
    });
    setSearchQuery('');
  };

  const handleDeleteInvoice = (id) => {
    if (window.confirm('Are you sure you want to delete this invoice?')) {
      setInvoices(prev => prev.filter(invoice => invoice.id !== id));
      setSelectedInvoices(prev => prev.filter(invoiceId => invoiceId !== id));
      if (previewInvoice?.id === id) setPreviewInvoice(null);
    }
  };

  const handleBulkDelete = () => {
    if (window.confirm(`Are you sure you want to delete ${selectedInvoices.length} invoices?`)) {
      setInvoices(prev => prev.filter(invoice => !selectedInvoices.includes(invoice.id)));
      setSelectedInvoices([]);
      setPreviewInvoice(null);
    }
  };

  const handleMarkAsPaid = (id) => {
    setInvoices(prev => prev.map(invoice => 
      invoice.id === id ? { ...invoice, status: 'paid', paidAmount: invoice.amount, paymentDate: new Date().toISOString().split('T')[0] } : invoice
    ));
    if (previewInvoice?.id === id) {
      setPreviewInvoice(prev => ({ ...prev, status: 'paid', paidAmount: prev.amount, paymentDate: new Date().toISOString().split('T')[0] }));
    }
  };

  const handleSendReminder = (id) => {
    const invoice = invoices.find(inv => inv.id === id);
    alert(`Reminder sent for invoice ${id} to ${invoice.customer.email}`);
  };

  const handlePrintInvoice = (id) => {
    const invoice = invoices.find(inv => inv.id === id);
    const printWindow = window.open('', '_blank');
    printWindow.document.write(`
      <html>
        <head>
          <title>Invoice ${id}</title>
          <style>
            body { font-family: Arial, sans-serif; padding: 20px; }
            .invoice-header { text-align: center; margin-bottom: 30px; }
            .invoice-details { margin-bottom: 30px; }
            .invoice-table { width: 100%; border-collapse: collapse; margin-bottom: 30px; }
            .invoice-table th, .invoice-table td { border: 1px solid #ddd; padding: 8px; text-align: left; }
            .invoice-table th { background-color: #f8f9fa; }
            .total-section { text-align: right; margin-top: 20px; }
          </style>
        </head>
        <body>
          <div class="invoice-header">
            <h1>Invoice: ${id}</h1>
            <p>Date: ${invoice.date}</p>
          </div>
          <div class="invoice-details">
            <p><strong>Customer:</strong> ${invoice.customer.name}</p>
            <p><strong>Email:</strong> ${invoice.customer.email}</p>
          </div>
          <table class="invoice-table">
            <thead>
              <tr>
                <th>Item</th>
                <th>Quantity</th>
                <th>Price</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              ${invoice.items.map(item => `
                <tr>
                  <td>${item.name}</td>
                  <td>${item.quantity}</td>
                  <td>₹${item.price}</td>
                  <td>₹${item.total}</td>
                </tr>
              `).join('')}
            </tbody>
          </table>
          <div class="total-section">
            <h3>Total Amount: ₹${invoice.amount}</h3>
            <p>Status: ${invoice.status.toUpperCase()}</p>
          </div>
        </body>
      </html>
    `);
    printWindow.document.close();
    printWindow.print();
  };

  const handleSendEmail = (id) => {
    const invoice = invoices.find(inv => inv.id === id);
    const subject = `Invoice ${id} from FitPro Gym`;
    const body = `Dear ${invoice.customer.name},\n\nPlease find attached invoice ${id} for amount ₹${invoice.amount}.\n\nThank you,\nFitPro Gym Team`;
    window.open(`mailto:${invoice.customer.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`);
  };

  const exportToCSV = () => {
    const headers = ['Invoice ID', 'Customer', 'Date', 'Due Date', 'Amount', 'Paid', 'Status', 'Payment Method'];
    const csvData = filteredAndSortedInvoices.map(invoice => [
      invoice.id,
      invoice.customer.name,
      invoice.date,
      invoice.dueDate,
      invoice.amount,
      invoice.paidAmount,
      invoice.status,
      invoice.paymentMethod || 'N/A'
    ]);

    const csvContent = [
      headers.join(','),
      ...csvData.map(row => row.map(cell => `"${cell}"`).join(','))
    ].join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `invoices_${new Date().toISOString().split('T')[0]}.csv`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
  };

  const handleAddInvoice = (newInvoice) => {
    const maxId = Math.max(...invoices.map(inv => parseInt(inv.id.split('-').pop())), 0);
    const invoiceWithId = {
      ...newInvoice,
      id: `INV-2024-${String(maxId + 1).padStart(3, '0')}`,
      invoiceNumber: `INV-2024-${String(maxId + 1).padStart(3, '0')}`,
      date: new Date().toISOString().split('T')[0],
      issueDate: new Date().toISOString().split('T')[0],
      status: 'pending',
      paidAmount: 0,
      lastUpdated: new Date().toISOString().replace('T', ' ').split('.')[0]
    };
    
    setInvoices(prev => [invoiceWithId, ...prev]);
    setShowAddInvoice(false);
    alert('Invoice created successfully!');
  };

  // Invoice Preview Modal Component
  const InvoicePreviewModal = ({ invoice, onClose }) => {
    if (!invoice) return null;

    const StatusIcon = statusIcons[invoice.status];

    return (
      <div className="fixed inset-0 bg-white bg-opacity-50 flex items-center justify-center p-4 z-50">
        <div className="bg-white rounded-xl sm:rounded-2xl  border border-gray-200 border-dashed max-w-4xl w-full max-h-[90vh] overflow-hidden">
          {/* Modal Header */}
          <div className="bg-blue-600 px-4 sm:px-6 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div>
                  <h2 className="text-xl font-bold text-white">Invoice Preview</h2>
                  <p className="text-blue-100 text-sm">{invoice.id}</p>
                </div>
              </div>
              <button
                onClick={onClose}
                className="p-2 hover:bg-white/20 rounded-lg transition-colors"
              >
                <X className="w-5 h-5 text-white" />
              </button>
            </div>
          </div>

          {/* Modal Content */}
          <div className="p-4 sm:p-6 overflow-y-auto max-h-[calc(90vh-80px)]">
            {/* Invoice Header */}
            <div className="flex flex-col sm:flex-row justify-between mb-6 pb-6 border-b border-gray-200">
              <div>
                <div className="flex items-center space-x-2 mb-2">
                  <div className={`px-3 py-1 rounded-full text-sm font-medium ${statusColors[invoice.status]}`}>
                    <StatusIcon className="inline w-4 h-4 mr-1" />
                    {invoice.status.charAt(0).toUpperCase() + invoice.status.slice(1)}
                  </div>
                  <div className={`px-3 py-1 rounded-full text-sm font-medium ${customerTypeColors[invoice.customer.type]}`}>
                    {invoice.customer.type}
                  </div>
                </div>
                <h1 className="text-2xl font-bold text-gray-900">{invoice.id}</h1>
                <p className="text-gray-600">Issued on {invoice.issueDate}</p>
              </div>
              <div className="mt-4 sm:mt-0">
                <div className="text-right">
                  <p className="text-sm text-gray-600">Invoice Number</p>
                  <p className="text-lg font-bold text-gray-900">{invoice.invoiceNumber}</p>
                </div>
                {invoice.qrCode && (
                  <div className="mt-4">
                    <QrCode className="w-24 h-24 mx-auto" />
                    <p className="text-xs text-gray-500 text-center mt-2">Scan to pay</p>
                  </div>
                )}
              </div>
            </div>

            {/* From/To Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <h3 className="text-sm font-semibold text-gray-700 mb-2">FROM</h3>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="font-bold">FitPro Gym</p>
                  <p className="text-sm text-gray-600">{invoice.billingAddress}</p>
                  <p className="text-sm text-gray-600 mt-1">Phone: +91 22 1234 5678</p>
                  <p className="text-sm text-gray-600">Email: billing@fitprogym.com</p>
                </div>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-gray-700 mb-2">BILL TO</h3>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="font-bold">{invoice.customer.name}</p>
                  <p className="text-sm text-gray-600">{invoice.customer.address}</p>
                  <p className="text-sm text-gray-600 mt-1">
                    <PhoneIcon className="inline w-3 h-3 mr-1" />
                    {invoice.customer.phone}
                  </p>
                  <p className="text-sm text-gray-600">
                    <AtSign className="inline w-3 h-3 mr-1" />
                    {invoice.customer.email}
                  </p>
                  <p className="text-sm text-gray-600 mt-2">
                    <span className="font-medium">Customer ID:</span> {invoice.customer.id}
                  </p>
                </div>
              </div>
            </div>

            {/* Invoice Details */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              <div className="bg-gray-50 p-3 rounded-lg">
                <p className="text-xs text-gray-500">Invoice Date</p>
                <p className="font-bold text-gray-900">{invoice.date}</p>
              </div>
              <div className="bg-gray-50 p-3 rounded-lg">
                <p className="text-xs text-gray-500">Due Date</p>
                <p className={`font-bold ${invoice.status === 'overdue' ? 'text-red-600' : 'text-gray-900'}`}>
                  {invoice.dueDate}
                </p>
              </div>
              <div className="bg-gray-50 p-3 rounded-lg">
                <p className="text-xs text-gray-500">Payment Method</p>
                <p className="font-bold text-gray-900">{invoice.paymentMethod || 'Not specified'}</p>
              </div>
              <div className="bg-gray-50 p-3 rounded-lg">
                <p className="text-xs text-gray-500">Payment Date</p>
                <p className="font-bold text-gray-900">{invoice.paymentDate || 'Pending'}</p>
              </div>
            </div>

            {/* Items Table */}
            <div className="mb-6 overflow-x-auto">
              <h3 className="text-sm font-semibold text-gray-700 mb-3">ITEMS</h3>
              <table className="min-w-full divide-y divide-gray-200 border border-gray-200 rounded-lg overflow-hidden">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Item</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Description</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Qty</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Price</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Total</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                  {invoice.items.map((item) => (
                    <tr key={item.id}>
                      <td className="px-4 py-3 text-sm font-medium text-gray-900">{item.name}</td>
                      <td className="px-4 py-3 text-sm text-gray-600">{item.description}</td>
                      <td className="px-4 py-3 text-sm text-gray-600">{item.quantity}</td>
                      <td className="px-4 py-3 text-sm text-gray-600">₹{item.price.toLocaleString()}</td>
                      <td className="px-4 py-3 text-sm font-bold text-gray-900">₹{item.total.toLocaleString()}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Summary */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div>
                <h3 className="text-sm font-semibold text-gray-700 mb-3">NOTES</h3>
                <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                  <p className="text-sm text-gray-700">{invoice.notes}</p>
                </div>
                <div className="mt-4">
                  <h3 className="text-sm font-semibold text-gray-700 mb-2">TERMS</h3>
                  <p className="text-sm text-gray-600">{invoice.terms}</p>
                </div>
              </div>
              <div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Subtotal</span>
                      <span className="text-sm font-medium text-gray-900">₹{invoice.subtotal.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Discount</span>
                      <span className="text-sm font-medium text-green-600">- ₹{invoice.discountAmount.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Tax ({invoice.taxRate}%)</span>
                      <span className="text-sm font-medium text-gray-900">₹{invoice.taxAmount.toLocaleString()}</span>
                    </div>
                    <div className="border-t border-gray-300 pt-2 mt-2">
                      <div className="flex justify-between">
                        <span className="text-base font-bold text-gray-900">Total Amount</span>
                        <span className="text-2xl font-bold text-blue-600">₹{invoice.amount.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between mt-2">
                        <span className="text-base font-bold text-gray-900">Paid Amount</span>
                        <span className="text-xl font-bold text-green-600">₹{invoice.paidAmount.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between mt-2">
                        <span className="text-base font-bold text-gray-900">Balance Due</span>
                        <span className="text-xl font-bold text-red-600">₹{(invoice.amount - invoice.paidAmount).toLocaleString()}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Modal Footer */}
          <div className="px-4 sm:px-6 py-4 border-t border-gray-200 bg-gray-50 flex flex-wrap gap-2">
            <button
              onClick={() => handlePrintInvoice(invoice.id)}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 flex items-center text-sm font-medium"
            >
              <Printer className="w-4 h-4 mr-2" />
              Print Invoice
            </button>
            <button
              onClick={() => handleSendEmail(invoice.id)}
              className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 flex items-center text-sm font-medium"
            >
              <Send className="w-4 h-4 mr-2" />
              Send Email
            </button>
            {invoice.status !== 'paid' && (
              <button
                onClick={() => handleMarkAsPaid(invoice.id)}
                className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 flex items-center text-sm font-medium"
              >
                <CheckCircle className="w-4 h-4 mr-2" />
                Mark as Paid
              </button>
            )}
            <button
              onClick={() => handleSendReminder(invoice.id)}
              className="px-4 py-2 bg-yellow-600 text-white rounded-lg hover:bg-yellow-700 flex items-center text-sm font-medium"
            >
              <Bell className="w-4 h-4 mr-2" />
              Send Reminder
            </button>
            <button
              onClick={onClose}
              className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 flex items-center text-sm font-medium"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 md:p-3 p-1">
      {/* Header Section */}
      <div className="bg-white rounded-xl sm:rounded-2xl shadow-sm border border-gray-200 p-3 sm:p-4 md:p-6 mb-4 sm:mb-6">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-4 sm:mb-6">
          <div className="mb-4 lg:mb-0">
            <div className="flex items-center space-x-2 sm:space-x-3 mb-2">
             
              <div>
                <h1 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900">Manage Invoices</h1>
                <p className="text-xs sm:text-sm text-gray-600 mt-1">Create, track, and manage all invoices in one place</p>
              </div>
            </div>
            
            {/* Stats - Mobile Compact */}
            <div className="flex flex-wrap gap-2 sm:gap-3 mt-3">
              <div className="flex items-center space-x-1 sm:space-x-2">
                <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-green-600" />
                <span className="text-xs sm:text-sm text-gray-700">
                  Paid: <span className="font-bold">{stats.paidCount}</span>
                </span>
              </div>
              <div className="flex items-center space-x-1 sm:space-x-2">
                <Clock className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-600" />
                <span className="text-xs sm:text-sm text-gray-700">
                  Pending: <span className="font-bold">{stats.pendingCount}</span>
                </span>
              </div>
              <div className="flex items-center space-x-1 sm:space-x-2">
                <IndianRupee className="w-3 h-3 sm:w-4 sm:h-4 text-green-600" />
                <span className="text-xs sm:text-sm text-gray-700">
                  <span className="font-bold">₹{stats.totalRevenue.toLocaleString()}</span>
                </span>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 sm:gap-3">
           <Link>
            <button 
              onClick={() => setShowAddInvoice(true)}
              className="flex items-center space-x-1 sm:space-x-2 bg-blue-600 text-white px-3 py-2 sm:px-4 sm:py-2.5 rounded-lg hover:bg-blue-700 transition-colors text-sm sm:text-base"
            >
              <Plus className="w-3 h-3 sm:w-4 sm:h-4" />
              <span className="font-medium">New Invoice</span>
            </button>
           </Link>
            <button 
              onClick={exportToCSV}
              className="flex items-center space-x-1 sm:space-x-2 bg-white border border-gray-300 text-gray-700 px-3 py-2 sm:px-4 sm:py-2.5 rounded-lg hover:bg-gray-50 transition-colors text-sm sm:text-base"
            >
              <Download className="w-3 h-3 sm:w-4 sm:h-4" />
              <span className="font-medium hidden xs:inline">Export</span>
            </button>
            {!isMobile && (
              <button 
                onClick={() => window.print()}
                className="flex items-center space-x-1 sm:space-x-2 bg-white border border-gray-300 text-gray-700 px-3 py-2 sm:px-4 sm:py-2.5 rounded-lg hover:bg-gray-50 transition-colors text-sm sm:text-base"
              >
                <Printer className="w-3 h-3 sm:w-4 sm:h-4" />
                <span className="font-medium hidden sm:inline">Print</span>
              </button>
            )}
          </div>
        </div>

        {/* Search and Filter Bar */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 sm:gap-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search invoices by ID, customer, or email..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 sm:pl-10 pr-3 sm:pr-4 py-2.5 sm:py-3 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent text-sm sm:text-base"
            />
          </div>

          <div className="relative">
            <button
              onClick={() => setFilterMenuOpen(!filterMenuOpen)}
              className="w-full flex items-center justify-between px-3 sm:px-4 py-2.5 sm:py-3 bg-gray-50 border border-gray-300 rounded-lg hover:bg-gray-100 text-sm sm:text-base"
            >
              <div className="flex items-center space-x-1 sm:space-x-2">
                <Filter className="w-3 h-3 sm:w-4 sm:h-4 text-gray-600" />
                <span className="text-gray-700">
                  Filters
                  {Object.values(activeFilters).flat().length > 0 && (
                    <span className="ml-1 sm:ml-2 bg-blue-600 text-white text-xs px-1.5 py-0.5 rounded-full">
                      {Object.values(activeFilters).flat().length}
                    </span>
                  )}
                </span>
              </div>
              <ChevronDown className={`w-3 h-3 sm:w-4 sm:h-4 text-gray-600 transition-transform ${filterMenuOpen ? 'rotate-180' : ''}`} />
            </button>
            
            {filterMenuOpen && (
              <div className="absolute top-full mt-2 w-full bg-white border border-gray-200 rounded-lg shadow-lg z-50 p-3 sm:p-4 max-h-80 sm:max-h-96 overflow-y-auto">
                <div className="space-y-3 sm:space-y-4">
                  {/* Status Filters */}
                  <div>
                    <h4 className="font-medium text-gray-700 mb-1 sm:mb-2 text-sm sm:text-base">Status</h4>
                    <div className="space-y-1 sm:space-y-2">
                      {statusOptions.map(option => {
                        const Icon = option.icon;
                        return (
                          <label key={option.id} className="flex items-center justify-between cursor-pointer text-xs sm:text-sm">
                            <div className="flex items-center space-x-1 sm:space-x-2">
                              <input 
                                type="checkbox" 
                                checked={activeFilters.status.includes(option.id)}
                                onChange={() => toggleFilter('status', option.id)}
                                className="rounded text-blue-600 w-3 h-3 sm:w-4 sm:h-4"
                              />
                              <div className="flex items-center space-x-1 sm:space-x-2">
                                <Icon className={`w-3 h-3 sm:w-4 sm:h-4 text-${option.color}-600`} />
                                <span className="text-gray-700">{option.label}</span>
                              </div>
                            </div>
                            <span className="text-xs text-gray-500 bg-gray-100 px-1.5 py-0.5 rounded">
                              {option.count}
                            </span>
                          </label>
                        );
                      })}
                    </div>
                  </div>

                  {/* Payment Method Filters */}
                  <div>
                    <h4 className="font-medium text-gray-700 mb-1 sm:mb-2 text-sm sm:text-base">Payment Method</h4>
                    <div className="space-y-1 sm:space-y-2">
                      {paymentMethodOptions.map(option => {
                        const Icon = option.icon;
                        return (
                          <label key={option.id} className="flex items-center justify-between cursor-pointer text-xs sm:text-sm">
                            <div className="flex items-center space-x-1 sm:space-x-2">
                              <input 
                                type="checkbox" 
                                checked={activeFilters.paymentMethod.includes(option.label)}
                                onChange={() => toggleFilter('paymentMethod', option.label)}
                                className="rounded text-blue-600 w-3 h-3 sm:w-4 sm:h-4"
                              />
                              <div className="flex items-center space-x-1 sm:space-x-2">
                                <Icon className="w-3 h-3 sm:w-4 sm:h-4 text-gray-500" />
                                <span className="text-gray-700">{option.label}</span>
                              </div>
                            </div>
                            <span className="text-xs text-gray-500 bg-gray-100 px-1.5 py-0.5 rounded">
                              {option.count}
                            </span>
                          </label>
                        );
                      })}
                    </div>
                  </div>

                  {/* Customer Type Filters */}
                  <div>
                    <h4 className="font-medium text-gray-700 mb-1 sm:mb-2 text-sm sm:text-base">Customer Type</h4>
                    <div className="space-y-1 sm:space-y-2">
                      {customerTypeOptions.map(option => {
                        const Icon = option.icon;
                        return (
                          <label key={option.id} className="flex items-center justify-between cursor-pointer text-xs sm:text-sm">
                            <div className="flex items-center space-x-1 sm:space-x-2">
                              <input 
                                type="checkbox" 
                                checked={activeFilters.customerType.includes(option.label)}
                                onChange={() => toggleFilter('customerType', option.label)}
                                className="rounded text-blue-600 w-3 h-3 sm:w-4 sm:h-4"
                              />
                              <div className="flex items-center space-x-1 sm:space-x-2">
                                <Icon className="w-3 h-3 sm:w-4 sm:h-4 text-gray-500" />
                                <span className="text-gray-700">{option.label}</span>
                              </div>
                            </div>
                            <span className="text-xs text-gray-500 bg-gray-100 px-1.5 py-0.5 rounded">
                              {option.count}
                            </span>
                          </label>
                        );
                      })}
                    </div>
                  </div>
                </div>
                <div className="flex justify-between mt-3 sm:mt-4 pt-3 border-t border-gray-200">
                  <button 
                    onClick={clearAllFilters}
                    className="text-xs sm:text-sm text-gray-600 hover:text-gray-800 flex items-center"
                  >
                    <X className="w-3 h-3 mr-1" />
                    Clear All
                  </button>
                  <button 
                    onClick={() => setFilterMenuOpen(false)}
                    className="text-xs sm:text-sm bg-blue-600 text-white px-3 py-1.5 rounded hover:bg-blue-700"
                  >
                    Apply Filters
                  </button>
                </div>
              </div>
            )}
          </div>

          <div className="flex items-center space-x-2 sm:space-x-3">
            <select 
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="flex-1 px-3 sm:px-4 py-2.5 sm:py-3 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 text-sm sm:text-base"
            >
              <option value="recent">Most Recent</option>
              <option value="amount">Amount (High to Low)</option>
              <option value="customer">Customer Name</option>
              <option value="date">Invoice Date</option>
              <option value="dueDate">Due Date</option>
            </select>
            
            <div className="flex border border-gray-300 rounded-lg overflow-hidden">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 sm:p-3 ${viewMode === 'grid' ? 'bg-blue-600 text-white' : 'bg-white text-gray-700'}`}
              >
                <div className="grid grid-cols-2 gap-0.5 sm:gap-1 w-4 h-4 sm:w-5 sm:h-5">
                  <div className="bg-current rounded-sm"></div>
                  <div className="bg-current rounded-sm"></div>
                  <div className="bg-current rounded-sm"></div>
                  <div className="bg-current rounded-sm"></div>
                </div>
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 sm:p-3 ${viewMode === 'list' ? 'bg-blue-600 text-white' : 'bg-white text-gray-700'}`}
              >
                <div className="flex flex-col space-y-0.5 sm:space-y-1 w-4 h-4 sm:w-5 sm:h-5">
                  <div className="bg-current h-0.5 sm:h-1 rounded-sm"></div>
                  <div className="bg-current h-0.5 sm:h-1 rounded-sm"></div>
                  <div className="bg-current h-0.5 sm:h-1 rounded-sm"></div>
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Active Filters */}
        {Object.values(activeFilters).flat().length > 0 && (
          <div className="mt-3 sm:mt-4 flex flex-wrap gap-1.5 sm:gap-2">
            {activeFilters.status.map(status => (
              <span key={status} className="inline-flex items-center px-2 py-0.5 sm:px-3 sm:py-1 bg-gray-100 text-gray-700 rounded-full text-xs sm:text-sm">
                {statusOptions.find(s => s.id === status)?.label}
                <button onClick={() => toggleFilter('status', status)} className="ml-1">
                  <X className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
                </button>
              </span>
            ))}
            {activeFilters.paymentMethod.map(method => (
              <span key={method} className="inline-flex items-center px-2 py-0.5 sm:px-3 sm:py-1 bg-gray-100 text-gray-700 rounded-full text-xs sm:text-sm">
                {method}
                <button onClick={() => toggleFilter('paymentMethod', method)} className="ml-1">
                  <X className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
                </button>
              </span>
            ))}
            {activeFilters.customerType.map(type => (
              <span key={type} className="inline-flex items-center px-2 py-0.5 sm:px-3 sm:py-1 bg-gray-100 text-gray-700 rounded-full text-xs sm:text-sm">
                {type}
                <button onClick={() => toggleFilter('customerType', type)} className="ml-1">
                  <X className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
                </button>
              </span>
            ))}
            <button 
              onClick={clearAllFilters}
              className="text-xs sm:text-sm text-blue-600 hover:text-blue-800 ml-1 sm:ml-2"
            >
              Clear all
            </button>
          </div>
        )}
      </div>

      {/* Invoices Grid/List View */}
      <div className="bg-white rounded-xl sm:rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
        {/* Table Header */}
        <div className="bg-gray-50 border-b border-gray-200 p-3 sm:p-4">
          <div className="flex flex-col xs:flex-row xs:items-center justify-between space-y-2 xs:space-y-0">
            <div className="flex items-center space-x-2 sm:space-x-3">
              <input
                type="checkbox"
                checked={selectedInvoices.length > 0 && selectedInvoices.length === currentInvoices.length}
                onChange={selectAllInvoices}
                className="w-3 h-3 sm:w-4 sm:h-4 text-blue-600 rounded border-gray-300"
              />
              <span className="text-xs sm:text-sm text-gray-700">
                {selectedInvoices.length > 0 
                  ? `${selectedInvoices.length} selected` 
                  : `${filteredAndSortedInvoices.length} invoices`
                }
              </span>
            </div>
            
            {selectedInvoices.length > 0 && (
              <div className="flex items-center space-x-2 sm:space-x-3">
                <button 
                  onClick={() => setShowBulkActions(!showBulkActions)}
                  className="text-xs sm:text-sm text-blue-600 hover:text-blue-800"
                >
                  Bulk Actions
                </button>
                <button 
                  onClick={handleBulkDelete}
                  className="flex items-center space-x-1 text-red-600 hover:text-red-800 text-xs sm:text-sm"
                >
                  <Trash2 className="w-3 h-3 sm:w-4 sm:h-4" />
                  <span className="hidden xs:inline">Delete</span>
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Bulk Actions Menu */}
        {showBulkActions && selectedInvoices.length > 0 && (
          <div className="bg-blue-50 border-b border-blue-100 p-3 sm:p-4">
            <div className="flex flex-wrap gap-2 sm:gap-3">
              <button
                onClick={() => alert(`Sending email to ${selectedInvoices.length} invoices`)}
                className="flex items-center space-x-1 sm:space-x-2 px-3 py-1.5 sm:px-4 sm:py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 text-xs sm:text-sm"
              >
                <Mail className="w-3 h-3 sm:w-4 sm:h-4" />
                <span>Send Email</span>
              </button>
              <button
                onClick={exportToCSV}
                className="flex items-center space-x-1 sm:space-x-2 px-3 py-1.5 sm:px-4 sm:py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 text-xs sm:text-sm"
              >
                <Download className="w-3 h-3 sm:w-4 sm:h-4" />
                <span>Export Selected</span>
              </button>
              <button
                onClick={() => alert(`Marking ${selectedInvoices.length} invoices as paid`)}
                className="flex items-center space-x-1 sm:space-x-2 px-3 py-1.5 sm:px-4 sm:py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 text-xs sm:text-sm"
              >
                <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-green-600" />
                <span>Mark as Paid</span>
              </button>
            </div>
          </div>
        )}

        {/* Invoices Grid View */}
        {viewMode === 'grid' && (
          <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 p-3 sm:p-4">
            {currentInvoices.map(invoice => {
              const StatusIcon = statusIcons[invoice.status];
              const PaymentIcon = paymentMethodOptions.find(m => m.label === invoice.paymentMethod)?.icon || CreditCard;
              
              return (
                <div key={invoice.id} className="bg-white border border-gray-200 rounded-lg sm:rounded-xl hover:border-gray-300 transition-all duration-300 hover:shadow-sm sm:hover:shadow-md">
                  {/* Card Header */}
                  <div className="p-3 sm:p-4 border-b border-gray-100">
                    <div className="flex items-start justify-between">
                      <div className="flex items-center space-x-2 sm:space-x-3">
                        <input
                          type="checkbox"
                          checked={selectedInvoices.includes(invoice.id)}
                          onChange={() => toggleInvoiceSelection(invoice.id)}
                          className="w-3 h-3 sm:w-4 sm:h-4 text-blue-600 rounded border-gray-300"
                        />
                       
                        <div className="min-w-0 flex-1">
                          <h3 className="font-bold text-gray-900 truncate text-sm sm:text-base">{invoice.id}</h3>
                          <p className="text-xs text-gray-600 truncate">{invoice.customer.name}</p>
                        </div>
                      </div>
                      <div className="relative">
                        <button className="p-1 sm:p-2 hover:bg-gray-100 rounded-lg">
                          <MoreVertical className="w-4 h-4 sm:w-5 sm:h-5 text-gray-500" />
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="p-3 sm:p-4 space-y-3 sm:space-y-4">
                    {/* Status and Customer Type */}
                    <div className="flex items-center justify-between">
                      <span className={`inline-flex items-center px-2 py-0.5 sm:px-3 sm:py-1 rounded-full text-xs font-medium border ${statusColors[invoice.status]}`}>
                        <StatusIcon className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
                        <span className="text-xs">{isMobile ? invoice.status.charAt(0).toUpperCase() : invoice.status}</span>
                      </span>
                      <span className={`inline-flex items-center px-2 py-0.5 sm:px-3 sm:py-1 rounded-full text-xs font-medium border ${customerTypeColors[invoice.customer.type]}`}>
                        {isMobile ? invoice.customer.type.charAt(0) : invoice.customer.type}
                      </span>
                    </div>

                    {/* Dates */}
                    <div className="grid grid-cols-2 gap-2 sm:gap-3">
                      <div className="bg-gray-50 p-2 sm:p-3 rounded-lg">
                        <div className="text-xs text-gray-500">Issue Date</div>
                        <div className="text-sm sm:text-base font-bold text-gray-900">{invoice.date}</div>
                      </div>
                      <div className="bg-gray-50 p-2 sm:p-3 rounded-lg">
                        <div className="text-xs text-gray-500">Due Date</div>
                        <div className={`text-sm sm:text-base font-bold ${invoice.status === 'overdue' ? 'text-red-600' : 'text-gray-900'}`}>
                          {invoice.dueDate}
                        </div>
                      </div>
                    </div>

                    {/* Amount */}
                    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-3 sm:p-4 rounded-lg border border-blue-100">
                      <div className="flex justify-between items-center">
                        <div>
                          <div className="text-xs text-gray-600">Total Amount</div>
                          <div className="text-lg sm:text-xl font-bold text-gray-900">₹{invoice.amount.toLocaleString()}</div>
                        </div>
                        <div className="text-right">
                          <div className="text-xs text-gray-600">Paid</div>
                          <div className="text-lg sm:text-xl font-bold text-green-600">₹{invoice.paidAmount.toLocaleString()}</div>
                        </div>
                      </div>
                      <div className="mt-2">
                        <div className="w-full bg-gray-200 rounded-full h-1.5 sm:h-2">
                          <div 
                            className={`h-1.5 sm:h-2 rounded-full ${invoice.status === 'paid' ? 'bg-green-500' : invoice.status === 'partial' ? 'bg-blue-500' : 'bg-red-500'}`}
                            style={{ width: `${(invoice.paidAmount / invoice.amount) * 100}%` }}
                          ></div>
                        </div>
                        <div className="flex justify-between text-xs text-gray-500 mt-1">
                          <span>{((invoice.paidAmount / invoice.amount) * 100).toFixed(1)}% Paid</span>
                          <span>₹{(invoice.amount - invoice.paidAmount).toLocaleString()} Due</span>
                        </div>
                      </div>
                    </div>

                    {/* Payment Method */}
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center">
                        <PaymentIcon className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2 text-gray-500" />
                        <span className="text-gray-700">{invoice.paymentMethod || 'Not set'}</span>
                      </div>
                      <span className={`px-2 py-0.5 rounded text-xs ${paymentMethodColors[invoice.paymentMethod] || 'bg-gray-100 text-gray-800'}`}>
                        {invoice.paymentMethod ? invoice.paymentMethod.split(' ')[0] : 'N/A'}
                      </span>
                    </div>

                    {/* Items Preview */}
                    {!isMobile && (
                      <div className="border-t border-gray-100 pt-2">
                        <div className="text-xs text-gray-500 mb-1">Items ({invoice.items.length})</div>
                        <div className="space-y-1">
                          {invoice.items.slice(0, 2).map((item, idx) => (
                            <div key={idx} className="flex justify-between text-xs">
                              <span className="text-gray-700 truncate">{item.name}</span>
                              <span className="font-medium">₹{item.total}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Card Footer */}
                  <div className="p-3 sm:p-4 border-t border-gray-100 bg-gray-50">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-1 sm:space-x-2">
                        <button 
                          onClick={() => setPreviewInvoice(invoice)}
                          className="p-1.5 sm:p-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                          title="View Details"
                        >
                          <Eye className="w-3 h-3 sm:w-4 sm:h-4" />
                        </button>
                        <button 
                          onClick={() => handleSendEmail(invoice.id)}
                          className="p-1.5 sm:p-2 text-gray-600 hover:text-green-600 hover:bg-green-50 rounded-lg transition-colors"
                          title="Send Email"
                        >
                          <Mail className="w-3 h-3 sm:w-4 sm:h-4" />
                        </button>
                      </div>
                      <div className="flex items-center space-x-1 sm:space-x-2">
                        <button 
                          onClick={() => handlePrintInvoice(invoice.id)}
                          className="p-1.5 sm:p-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                          title="Print"
                        >
                          <Printer className="w-3 h-3 sm:w-4 sm:h-4" />
                        </button>
                        {invoice.status !== 'paid' && (
                          <button 
                            onClick={() => handleMarkAsPaid(invoice.id)}
                            className="p-1.5 sm:p-2 text-gray-600 hover:text-green-600 hover:bg-green-50 rounded-lg transition-colors"
                            title="Mark as Paid"
                          >
                            <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4" />
                          </button>
                        )}
                        <button 
                          onClick={() => handleDeleteInvoice(invoice.id)}
                          className="p-1.5 sm:p-2 text-gray-600 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                          title="Delete"
                        >
                          <Trash2 className="w-3 h-3 sm:w-4 sm:h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Invoices List View */}
        {viewMode === 'list' && (
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-2 sm:px-6 sm:py-3 text-left">
                    <input
                      type="checkbox"
                      checked={selectedInvoices.length > 0 && selectedInvoices.length === currentInvoices.length}
                      onChange={selectAllInvoices}
                      className="w-3 h-3 sm:w-4 sm:h-4 text-blue-600 rounded border-gray-300"
                    />
                  </th>
                  <th className="px-4 py-2 sm:px-6 sm:py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Invoice</th>
                  {!isMobile && (
                    <>
                      <th className="px-4 py-2 sm:px-6 sm:py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Customer</th>
                      <th className="px-4 py-2 sm:px-6 sm:py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Dates</th>
                    </>
                  )}
                  <th className="px-4 py-2 sm:px-6 sm:py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
                  <th className="px-4 py-2 sm:px-6 sm:py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                  {!isMobile && (
                    <th className="px-4 py-2 sm:px-6 sm:py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Payment</th>
                  )}
                  <th className="px-4 py-2 sm:px-6 sm:py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {currentInvoices.map(invoice => {
                  const StatusIcon = statusIcons[invoice.status];
                  const PaymentIcon = paymentMethodOptions.find(m => m.label === invoice.paymentMethod)?.icon || CreditCard;
                  
                  return (
                    <tr key={invoice.id} className="hover:bg-gray-50">
                      <td className="px-4 py-3 sm:px-6 sm:py-4">
                        <input
                          type="checkbox"
                          checked={selectedInvoices.includes(invoice.id)}
                          onChange={() => toggleInvoiceSelection(invoice.id)}
                          className="w-3 h-3 sm:w-4 sm:h-4 text-blue-600 rounded border-gray-300"
                        />
                      </td>
                      <td className="px-4 py-3 sm:px-6 sm:py-4">
                        <div className="flex items-center">
                          <div className="bg-gradient-to-br from-blue-600 to-indigo-600 w-8 h-8 rounded-lg flex items-center justify-center">
                            <Receipt className="w-4 h-4 text-white" />
                          </div>
                          <div className="ml-3">
                            <div className="text-sm font-medium text-gray-900 truncate max-w-[120px] sm:max-w-none">{invoice.id}</div>
                            <div className="text-xs text-gray-500">{invoice.customer.type}</div>
                            {isMobile && (
                              <div className="text-xs text-gray-600 truncate max-w-[120px]">{invoice.customer.name}</div>
                            )}
                          </div>
                        </div>
                      </td>
                      {!isMobile && (
                        <>
                          <td className="px-4 py-3 sm:px-6 sm:py-4">
                            <div className="text-sm font-medium text-gray-900">{invoice.customer.name}</div>
                            <div className="text-xs text-gray-500 truncate max-w-[150px]">{invoice.customer.email}</div>
                          </td>
                          <td className="px-4 py-3 sm:px-6 sm:py-4">
                            <div className="text-sm text-gray-900">Issue: {invoice.date}</div>
                            <div className={`text-xs ${invoice.status === 'overdue' ? 'text-red-600 font-medium' : 'text-gray-500'}`}>
                              Due: {invoice.dueDate}
                            </div>
                          </td>
                        </>
                      )}
                      <td className="px-4 py-3 sm:px-6 sm:py-4">
                        <div className="text-sm font-bold text-gray-900">₹{invoice.amount.toLocaleString()}</div>
                        <div className="text-xs text-gray-500">
                          Paid: <span className="text-green-600 font-medium">₹{invoice.paidAmount.toLocaleString()}</span>
                        </div>
                      </td>
                      <td className="px-4 py-3 sm:px-6 sm:py-4">
                        <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${statusColors[invoice.status]}`}>
                          <StatusIcon className="w-3 h-3 mr-1" />
                          {isMobile ? invoice.status.charAt(0).toUpperCase() : invoice.status.toUpperCase()}
                        </span>
                      </td>
                      {!isMobile && (
                        <td className="px-4 py-3 sm:px-6 sm:py-4">
                          <div className="flex items-center">
                            <PaymentIcon className="w-3 h-3 sm:w-4 sm:h-4 mr-1 text-gray-500" />
                            <span className="text-sm text-gray-700">{invoice.paymentMethod || 'Not set'}</span>
                          </div>
                        </td>
                      )}
                      <td className="px-4 py-3 sm:px-6 sm:py-4">
                        <div className="flex items-center space-x-1">
                          <button 
                            onClick={() => setPreviewInvoice(invoice)}
                            className="p-1.5 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg"
                            title="View"
                          >
                            <Eye className="w-3 h-3 sm:w-4 sm:h-4" />
                          </button>
                          <button 
                            onClick={() => handlePrintInvoice(invoice.id)}
                            className="p-1.5 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg"
                            title="Print"
                          >
                            <Printer className="w-3 h-3 sm:w-4 sm:h-4" />
                          </button>
                          {invoice.status !== 'paid' && (
                            <button 
                              onClick={() => handleMarkAsPaid(invoice.id)}
                              className="p-1.5 text-gray-600 hover:text-green-600 hover:bg-green-50 rounded-lg"
                              title="Mark as Paid"
                            >
                              <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4" />
                            </button>
                          )}
                          {!isMobile && (
                            <button 
                              onClick={() => handleDeleteInvoice(invoice.id)}
                              className="p-1.5 text-gray-600 hover:text-red-600 hover:bg-red-50 rounded-lg"
                              title="Delete"
                            >
                              <Trash2 className="w-3 h-3 sm:w-4 sm:h-4" />
                            </button>
                          )}
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}

        {/* No Results */}
        {currentInvoices.length === 0 && (
          <div className="py-8 sm:py-12 text-center">
            <div className="mx-auto w-16 h-16 sm:w-24 sm:h-24 bg-gray-100 rounded-full flex items-center justify-center mb-4">
              <Receipt className="w-8 h-8 sm:w-12 sm:h-12 text-gray-400" />
            </div>
            <h3 className="text-base sm:text-lg font-medium text-gray-900 mb-2">No invoices found</h3>
            <p className="text-gray-500 text-sm sm:text-base mb-6">Try adjusting your search or filters</p>
            <button 
              onClick={clearAllFilters}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 text-sm sm:text-base"
            >
              Clear all filters
            </button>
          </div>
        )}

        {/* Pagination */}
        {filteredAndSortedInvoices.length > 0 && (
          <div className="p-4 sm:p-6 border-t border-gray-200">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between">
              <div className="text-xs sm:text-sm text-gray-600 mb-3 sm:mb-0">
                Showing {startIndex + 1} to {Math.min(endIndex, filteredAndSortedInvoices.length)} of {filteredAndSortedInvoices.length} invoices
              </div>
              <div className="flex items-center space-x-1 sm:space-x-2">
                <button 
                  onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                  disabled={currentPage === 1}
                  className="px-2 py-1.5 sm:px-3 sm:py-2 border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed text-sm"
                >
                  <ChevronLeft className="w-3 h-3 sm:w-4 sm:h-4" />
                </button>
                {[...Array(Math.min(3, totalPages))].map((_, index) => {
                  let page;
                  if (totalPages <= 3) {
                    page = index + 1;
                  } else if (currentPage <= 2) {
                    page = index + 1;
                  } else if (currentPage >= totalPages - 1) {
                    page = totalPages - 2 + index;
                  } else {
                    page = currentPage - 1 + index;
                  }
                  return (
                    <button
                      key={page}
                      onClick={() => setCurrentPage(page)}
                      className={`px-2.5 py-1.5 sm:px-3 sm:py-2 border rounded-lg text-xs sm:text-sm ${
                        page === currentPage
                          ? 'bg-blue-600 text-white border-blue-600'
                          : 'border-gray-300 hover:bg-gray-50'
                      }`}
                    >
                      {page}
                    </button>
                  );
                })}
                {totalPages > 3 && (
                  <span className="px-2 py-1.5 text-gray-500 text-sm">...</span>
                )}
                <button 
                  onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                  disabled={currentPage === totalPages}
                  className="px-2 py-1.5 sm:px-3 sm:py-2 border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed text-sm"
                >
                  <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4" />
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Quick Stats */}
      <div className="mt-4 sm:mt-6 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
        <div className="bg-gradient-to-r from-green-600 to-green-700 text-white p-3 sm:p-5 rounded-xl sm:rounded-2xl">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-lg sm:text-2xl font-bold">₹{stats.totalRevenue.toLocaleString()}</div>
              <div className="text-green-200 text-xs sm:text-sm">Total Revenue</div>
            </div>
            <TrendingUp className="w-6 h-6 sm:w-8 sm:h-8 text-green-300" />
          </div>
        </div>
        
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-3 sm:p-5 rounded-xl sm:rounded-2xl">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-lg sm:text-2xl font-bold">₹{stats.collected.toLocaleString()}</div>
              <div className="text-blue-200 text-xs sm:text-sm">Collected Amount</div>
            </div>
            <CheckCircle className="w-6 h-6 sm:w-8 sm:h-8 text-blue-300" />
          </div>
        </div>
        
        <div className="bg-gradient-to-r from-yellow-600 to-yellow-700 text-white p-3 sm:p-5 rounded-xl sm:rounded-2xl">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-lg sm:text-2xl font-bold">₹{stats.pending.toLocaleString()}</div>
              <div className="text-yellow-200 text-xs sm:text-sm">Pending Amount</div>
            </div>
            <Clock className="w-6 h-6 sm:w-8 sm:h-8 text-yellow-300" />
          </div>
        </div>
        
        <div className="bg-gradient-to-r from-red-600 to-red-700 text-white p-3 sm:p-5 rounded-xl sm:rounded-2xl">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-lg sm:text-2xl font-bold">₹{stats.overdue.toLocaleString()}</div>
              <div className="text-red-200 text-xs sm:text-sm">Overdue Amount</div>
            </div>
            <AlertCircle className="w-6 h-6 sm:w-8 sm:h-8 text-red-300" />
          </div>
        </div>
      </div>

      {/* Invoice Preview Modal */}
      {previewInvoice && (
        <InvoicePreviewModal
          invoice={previewInvoice}
          onClose={() => setPreviewInvoice(null)}
        />
      )}

    
    </div>
  );
};

export default ManageInvoice;