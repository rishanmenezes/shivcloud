import React, { useState } from 'react';
import { Plus, Edit2, Trash2, Search, BookOpen, TrendingUp, TrendingDown, DollarSign, Building } from 'lucide-react';
import { ChartOfAccount } from '../../types';

const mockAccounts: ChartOfAccount[] = [
  {
    id: '1',
    name: 'Cash',
    type: 'asset',
    created_at: '2025-01-10'
  },
  {
    id: '2',
    name: 'Bank Account',
    type: 'asset',
    created_at: '2025-01-10'
  },
  {
    id: '3',
    name: 'Accounts Receivable',
    type: 'asset',
    created_at: '2025-01-10'
  },
  {
    id: '4',
    name: 'Inventory',
    type: 'asset',
    created_at: '2025-01-10'
  },
  {
    id: '5',
    name: 'Accounts Payable',
    type: 'liability',
    created_at: '2025-01-10'
  },
  {
    id: '6',
    name: 'Sales Revenue',
    type: 'income',
    created_at: '2025-01-10'
  },
  {
    id: '7',
    name: 'Purchase Expense',
    type: 'expense',
    created_at: '2025-01-10'
  },
  {
    id: '8',
    name: 'Owner Equity',
    type: 'equity',
    created_at: '2025-01-10'
  }
];

export default function ChartOfAccounts() {
  const [accounts, setAccounts] = useState<ChartOfAccount[]>(mockAccounts);
  const [searchTerm, setSearchTerm] = useState('');
  const [showForm, setShowForm] = useState(false);
  const [editingAccount, setEditingAccount] = useState<ChartOfAccount | null>(null);
  const [filterType, setFilterType] = useState<ChartOfAccount['type'] | 'all'>('all');

  const [formData, setFormData] = useState({
    name: '',
    type: 'asset' as ChartOfAccount['type'],
    parent_id: ''
  });

  const filteredAccounts = accounts.filter(account => {
    const matchesSearch = account.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = filterType === 'all' || account.type === filterType;
    return matchesSearch && matchesType;
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (editingAccount) {
      setAccounts(accounts.map(account =>
        account.id === editingAccount.id
          ? { ...account, ...formData, parent_id: formData.parent_id || undefined }
          : account
      ));
    } else {
      const newAccount: ChartOfAccount = {
        id: Date.now().toString(),
        ...formData,
        parent_id: formData.parent_id || undefined,
        created_at: new Date().toISOString()
      };
      setAccounts([...accounts, newAccount]);
    }
    
    resetForm();
  };

  const resetForm = () => {
    setFormData({
      name: '',
      type: 'asset',
      parent_id: ''
    });
    setShowForm(false);
    setEditingAccount(null);
  };

  const handleEdit = (account: ChartOfAccount) => {
    setFormData({
      name: account.name,
      type: account.type,
      parent_id: account.parent_id || ''
    });
    setEditingAccount(account);
    setShowForm(true);
  };

  const handleDelete = (id: string) => {
    if (confirm('Are you sure you want to delete this account?')) {
      setAccounts(accounts.filter(account => account.id !== id));
    }
  };

  const getTypeColor = (type: ChartOfAccount['type']) => {
    switch (type) {
      case 'asset':
        return 'bg-green-100 text-green-800';
      case 'liability':
        return 'bg-red-100 text-red-800';
      case 'income':
        return 'bg-blue-100 text-blue-800';
      case 'expense':
        return 'bg-orange-100 text-orange-800';
      case 'equity':
        return 'bg-purple-100 text-purple-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getTypeIcon = (type: ChartOfAccount['type']) => {
    switch (type) {
      case 'asset':
        return <TrendingUp className="w-4 h-4" />;
      case 'liability':
        return <TrendingDown className="w-4 h-4" />;
      case 'income':
        return <DollarSign className="w-4 h-4" />;
      case 'expense':
        return <DollarSign className="w-4 h-4" />;
      case 'equity':
        return <Building className="w-4 h-4" />;
      default:
        return <BookOpen className="w-4 h-4" />;
    }
  };

  const accountsByType = {
    asset: filteredAccounts.filter(acc => acc.type === 'asset'),
    liability: filteredAccounts.filter(acc => acc.type === 'liability'),
    income: filteredAccounts.filter(acc => acc.type === 'income'),
    expense: filteredAccounts.filter(acc => acc.type === 'expense'),
    equity: filteredAccounts.filter(acc => acc.type === 'equity')
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Chart of Accounts</h1>
          <p className="text-gray-600 mt-1">Manage your accounting structure</p>
        </div>
        <button
          onClick={() => setShowForm(true)}
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center space-x-2 transition-colors"
        >
          <Plus className="w-4 h-4" />
          <span>Add Account</span>
        </button>
      </div>

      {/* Search and Filter */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search accounts..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
        <select
          value={filterType}
          onChange={(e) => setFilterType(e.target.value as ChartOfAccount['type'] | 'all')}
          className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        >
          <option value="all">All Types</option>
          <option value="asset">Assets</option>
          <option value="liability">Liabilities</option>
          <option value="income">Income</option>
          <option value="expense">Expenses</option>
          <option value="equity">Equity</option>
        </select>
      </div>

      {/* Account Form Modal */}
      {showForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-md">
            <h2 className="text-lg font-semibold mb-4">
              {editingAccount ? 'Edit Account' : 'Add New Account'}
            </h2>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Account Name</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="e.g., Cash, Bank Account"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Account Type</label>
                <select
                  value={formData.type}
                  onChange={(e) => setFormData({ ...formData, type: e.target.value as ChartOfAccount['type'] })}
                  className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="asset">Asset</option>
                  <option value="liability">Liability</option>
                  <option value="income">Income</option>
                  <option value="expense">Expense</option>
                  <option value="equity">Equity</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Parent Account (Optional)</label>
                <select
                  value={formData.parent_id}
                  onChange={(e) => setFormData({ ...formData, parent_id: e.target.value })}
                  className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">No Parent</option>
                  {accounts
                    .filter(acc => acc.type === formData.type && acc.id !== editingAccount?.id)
                    .map(acc => (
                      <option key={acc.id} value={acc.id}>{acc.name}</option>
                    ))
                  }
                </select>
              </div>
              
              <div className="flex space-x-3 pt-4">
                <button
                  type="submit"
                  className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg transition-colors"
                >
                  {editingAccount ? 'Update' : 'Create'}
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

      {/* Accounts by Type */}
      <div className="space-y-6">
        {Object.entries(accountsByType).map(([type, typeAccounts]) => (
          typeAccounts.length > 0 && (
            <div key={type} className="bg-white rounded-lg shadow-sm border border-gray-200">
              <div className="px-6 py-4 border-b border-gray-200">
                <div className="flex items-center space-x-2">
                  {getTypeIcon(type as ChartOfAccount['type'])}
                  <h3 className="text-lg font-semibold text-gray-900 capitalize">{type}s</h3>
                  <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded-full text-sm">
                    {typeAccounts.length}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <div className="grid grid-cols-1 gap-3">
                  {typeAccounts.map((account) => (
                    <div key={account.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <div className={`p-2 rounded-lg ${getTypeColor(account.type)}`}>
                            {getTypeIcon(account.type)}
                          </div>
                          <div>
                            <h4 className="font-semibold text-gray-900">{account.name}</h4>
                            <div className="flex items-center space-x-2 mt-1">
                              <span className={`px-2 py-1 rounded-full text-xs font-medium ${getTypeColor(account.type)}`}>
                                {account.type}
                              </span>
                              {account.parent_id && (
                                <span className="text-sm text-gray-500">
                                  Parent: {accounts.find(a => a.id === account.parent_id)?.name}
                                </span>
                              )}
                            </div>
                          </div>
                        </div>
                        
                        <div className="flex space-x-2">
                          <button
                            onClick={() => handleEdit(account)}
                            className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                          >
                            <Edit2 className="w-4 h-4" />
                          </button>
                          <button
                            onClick={() => handleDelete(account.id)}
                            className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )
        ))}
      </div>

      {filteredAccounts.length === 0 && (
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
          <div className="text-center">
            <BookOpen className="w-12 h-12 text-gray-400 mx-auto mb-4" />
            <p className="text-gray-500">No accounts found</p>
          </div>
        </div>
      )}
    </div>
  );
}