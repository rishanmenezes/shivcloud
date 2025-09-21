import React, { useState } from 'react';
import { Plus, Edit2, Trash2, Search, CreditCard, Calendar, User, IndianRupee, ArrowUpRight, ArrowDownLeft } from 'lucide-react';
import { Payment, Contact } from '../../types';

const mockContacts: Contact[] = [
  {
    id: '1',
    name: 'Azure Furniture',
    type: 'vendor',
    email: 'contact@azurefurniture.com',
    mobile: '+91 9876543210',
    address: { city: 'Mumbai', state: 'Maharashtra', pincode: '400001' },
    created_at: '2025-01-10'
  },
  {
    id: '2',
    name: 'Nimesh Pathak',
    type: 'customer',
    email: 'nimesh@example.com',
    mobile: '+91 8765432109',
    address: { city: 'Delhi', state: 'Delhi', pincode: '110001' },
    created_at: '2025-01-11'
  }
];

const mockPayments: Payment[] = [
  {
    id: '1',
    type: 'receipt',
    reference_id: 'INV-001',
    amount: 25000,
    method: 'bank',
    account_id: 'acc-1',
    payment_date: '2025-01-15',
    notes: 'Payment received for office chairs',
    created_at: '2025-01-15'
  },
  {
    id: '2',
    type: 'payment',
    reference_id: 'BILL-001',
    amount: 15000,
    method: 'cash',
    account_id: 'acc-2',
    payment_date: '2025-01-14',
    notes: 'Payment made for raw materials',
    created_at: '2025-01-14'
  }
];

export default function Payments() {
  const [payments, setPayments] = useState<Payment[]>(mockPayments);
  const [searchTerm, setSearchTerm] = useState('');
  const [showForm, setShowForm] = useState(false);
  const [editingPayment, setEditingPayment] = useState<Payment | null>(null);
  const [filterType, setFilterType] = useState<Payment['type'] | 'all'>('all');

  const [formData, setFormData] = useState({
    type: 'receipt' as Payment['type'],
    reference_id: '',
    amount: 0,
    method: 'cash' as Payment['method'],
    account_id: '',
    payment_date: new Date().toISOString().split('T')[0],
    notes: ''
  });

  const filteredPayments = payments.filter(payment => {
    const matchesSearch = payment.reference_id.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         payment.notes?.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = filterType === 'all' || payment.type === filterType;
    return matchesSearch && matchesType;
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (editingPayment) {
      setPayments(payments.map(payment =>
        payment.id === editingPayment.id
          ? { ...payment, ...formData }
          : payment
      ));
    } else {
      const newPayment: Payment = {
        id: Date.now().toString(),
        ...formData,
        created_at: new Date().toISOString()
      };
      setPayments([...payments, newPayment]);
    }
    
    resetForm();
  };

  const resetForm = () => {
    setFormData({
      type: 'receipt',
      reference_id: '',
      amount: 0,
      method: 'cash',
      account_id: '',
      payment_date: new Date().toISOString().split('T')[0],
      notes: ''
    });
    setShowForm(false);
    setEditingPayment(null);
  };

  const handleEdit = (payment: Payment) => {
    setFormData({
      type: payment.type,
      reference_id: payment.reference_id,
      amount: payment.amount,
      method: payment.method,
      account_id: payment.account_id,
      payment_date: payment.payment_date,
      notes: payment.notes || ''
    });
    setEditingPayment(payment);
    setShowForm(true);
  };

  const handleDelete = (id: string) => {
    if (confirm('Are you sure you want to delete this payment?')) {
      setPayments(payments.filter(payment => payment.id !== id));
    }
  };

  const getTypeColor = (type: Payment['type']) => {
    return type === 'receipt' ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800';
  };

  const getTypeIcon = (type: Payment['type']) => {
    return type === 'receipt' ? 
      <ArrowDownLeft className="w-4 h-4" /> : 
      <ArrowUpRight className="w-4 h-4" />;
  };

  const getMethodColor = (method: Payment['method']) => {
    return method === 'cash' ? 'bg-orange-100 text-orange-800' : 'bg-purple-100 text-purple-800';
  };

  const totalReceipts = payments
    .filter(p => p.type === 'receipt')
    .reduce((sum, p) => sum + p.amount, 0);

  const totalPayments = payments
    .filter(p => p.type === 'payment')
    .reduce((sum, p) => sum + p.amount, 0);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Payments</h1>
          <p className="text-gray-600 mt-1">Manage receipts and payments</p>
        </div>
        <button
          onClick={() => setShowForm(true)}
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center space-x-2 transition-colors"
        >
          <Plus className="w-4 h-4" />
          <span>Record Payment</span>
        </button>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-green-50 p-6 rounded-lg border border-green-200">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-green-100 rounded-lg">
              <ArrowDownLeft className="w-6 h-6 text-green-600" />
            </div>
            <div>
              <p className="text-sm font-medium text-green-600">Total Receipts</p>
              <p className="text-2xl font-bold text-green-900">₹{totalReceipts.toLocaleString()}</p>
            </div>
          </div>
        </div>
        
        <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-blue-100 rounded-lg">
              <ArrowUpRight className="w-6 h-6 text-blue-600" />
            </div>
            <div>
              <p className="text-sm font-medium text-blue-600">Total Payments</p>
              <p className="text-2xl font-bold text-blue-900">₹{totalPayments.toLocaleString()}</p>
            </div>
          </div>
        </div>
        
        <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-gray-100 rounded-lg">
              <IndianRupee className="w-6 h-6 text-gray-600" />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-600">Net Cash Flow</p>
              <p className={`text-2xl font-bold ${totalReceipts - totalPayments >= 0 ? 'text-green-900' : 'text-red-900'}`}>
                ₹{(totalReceipts - totalPayments).toLocaleString()}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Search and Filter */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search payments..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
        <select
          value={filterType}
          onChange={(e) => setFilterType(e.target.value as Payment['type'] | 'all')}
          className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        >
          <option value="all">All Types</option>
          <option value="receipt">Receipts</option>
          <option value="payment">Payments</option>
        </select>
      </div>

      {/* Payment Form Modal */}
      {showForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-md max-h-[90vh] overflow-y-auto">
            <h2 className="text-lg font-semibold mb-4">
              {editingPayment ? 'Edit Payment' : 'Record Payment'}
            </h2>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Type</label>
                <select
                  value={formData.type}
                  onChange={(e) => setFormData({ ...formData, type: e.target.value as Payment['type'] })}
                  className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="receipt">Receipt (Money In)</option>
                  <option value="payment">Payment (Money Out)</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Reference ID</label>
                <input
                  type="text"
                  required
                  value={formData.reference_id}
                  onChange={(e) => setFormData({ ...formData, reference_id: e.target.value })}
                  className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="e.g., INV-001, BILL-001"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Amount</label>
                <input
                  type="number"
                  required
                  min="0"
                  step="0.01"
                  value={formData.amount}
                  onChange={(e) => setFormData({ ...formData, amount: parseFloat(e.target.value) || 0 })}
                  className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Payment Method</label>
                <select
                  value={formData.method}
                  onChange={(e) => setFormData({ ...formData, method: e.target.value as Payment['method'] })}
                  className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="cash">Cash</option>
                  <option value="bank">Bank Transfer</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Account ID</label>
                <input
                  type="text"
                  required
                  value={formData.account_id}
                  onChange={(e) => setFormData({ ...formData, account_id: e.target.value })}
                  className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="e.g., Cash Account, Bank Account"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Payment Date</label>
                <input
                  type="date"
                  required
                  value={formData.payment_date}
                  onChange={(e) => setFormData({ ...formData, payment_date: e.target.value })}
                  className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Notes (Optional)</label>
                <textarea
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  rows={3}
                  placeholder="Additional notes..."
                />
              </div>
              
              <div className="flex space-x-3 pt-4">
                <button
                  type="submit"
                  className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg transition-colors"
                >
                  {editingPayment ? 'Update' : 'Record'}
                </button>
                <button
                  type="button"
                  onClick={resetForm}
                  className="flex-1 bg-gray-300 hover:bg-gray-400 text-gray-700 py-2 rounded-lg transition-colors"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Payments List */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200">
        <div className="p-6">
          <div className="space-y-4">
            {filteredPayments.map((payment) => (
              <div key={payment.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-3">
                      <div className={`p-2 rounded-lg ${getTypeColor(payment.type)}`}>
                        {getTypeIcon(payment.type)}
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">{payment.reference_id}</h3>
                        <div className="flex items-center space-x-2 mt-1">
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${getTypeColor(payment.type)}`}>
                            {payment.type}
                          </span>
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${getMethodColor(payment.method)}`}>
                            {payment.method}
                          </span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-sm text-gray-600">
                      <div className="flex items-center space-x-2">
                        <IndianRupee className="w-4 h-4" />
                        <span className={`font-semibold ${payment.type === 'receipt' ? 'text-green-600' : 'text-blue-600'}`}>
                          ₹{payment.amount.toLocaleString()}
                        </span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Calendar className="w-4 h-4" />
                        <span>{new Date(payment.payment_date).toLocaleDateString()}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <User className="w-4 h-4" />
                        <span>{payment.account_id}</span>
                      </div>
                      <div>
                        {payment.notes && (
                          <span className="text-gray-500 italic">{payment.notes}</span>
                        )}
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex space-x-2 ml-4">
                    <button
                      onClick={() => handleEdit(payment)}
                      className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                    >
                      <Edit2 className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => handleDelete(payment.id)}
                      className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {filteredPayments.length === 0 && (
            <div className="text-center py-8">
              <CreditCard className="w-12 h-12 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-500">No payments found</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}