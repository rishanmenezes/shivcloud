import React, { useState } from 'react';
import { Plus, Edit2, Trash2, Search, Calculator, Percent } from 'lucide-react';
import { Tax } from '../../types';

const mockTaxes: Tax[] = [
  {
    id: '1',
    name: 'GST 5%',
    computation_method: 'percentage',
    rate: 5,
    applicable_on: 'both',
    created_at: '2025-01-10'
  },
  {
    id: '2',
    name: 'GST 12%',
    computation_method: 'percentage',
    rate: 12,
    applicable_on: 'both',
    created_at: '2025-01-11'
  },
  {
    id: '3',
    name: 'GST 18%',
    computation_method: 'percentage',
    rate: 18,
    applicable_on: 'both',
    created_at: '2025-01-12'
  }
];

export default function TaxMaster() {
  const [taxes, setTaxes] = useState<Tax[]>(mockTaxes);
  const [searchTerm, setSearchTerm] = useState('');
  const [showForm, setShowForm] = useState(false);
  const [editingTax, setEditingTax] = useState<Tax | null>(null);

  const [formData, setFormData] = useState({
    name: '',
    computation_method: 'percentage' as Tax['computation_method'],
    rate: 0,
    applicable_on: 'both' as Tax['applicable_on']
  });

  const filteredTaxes = taxes.filter(tax =>
    tax.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (editingTax) {
      setTaxes(taxes.map(tax =>
        tax.id === editingTax.id
          ? { ...tax, ...formData }
          : tax
      ));
    } else {
      const newTax: Tax = {
        id: Date.now().toString(),
        ...formData,
        created_at: new Date().toISOString()
      };
      setTaxes([...taxes, newTax]);
    }
    
    resetForm();
  };

  const resetForm = () => {
    setFormData({
      name: '',
      computation_method: 'percentage',
      rate: 0,
      applicable_on: 'both'
    });
    setShowForm(false);
    setEditingTax(null);
  };

  const handleEdit = (tax: Tax) => {
    setFormData({
      name: tax.name,
      computation_method: tax.computation_method,
      rate: tax.rate,
      applicable_on: tax.applicable_on
    });
    setEditingTax(tax);
    setShowForm(true);
  };

  const handleDelete = (id: string) => {
    if (confirm('Are you sure you want to delete this tax?')) {
      setTaxes(taxes.filter(tax => tax.id !== id));
    }
  };

  const getApplicableColor = (applicable: Tax['applicable_on']) => {
    switch (applicable) {
      case 'sales':
        return 'bg-green-100 text-green-800';
      case 'purchase':
        return 'bg-blue-100 text-blue-800';
      case 'both':
        return 'bg-purple-100 text-purple-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Tax Master</h1>
          <p className="text-gray-600 mt-1">Manage tax rates and configurations</p>
        </div>
        <button
          onClick={() => setShowForm(true)}
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center space-x-2 transition-colors"
        >
          <Plus className="w-4 h-4" />
          <span>Add Tax</span>
        </button>
      </div>

      {/* Search */}
      <div className="relative">
        <Search className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
        <input
          type="text"
          placeholder="Search taxes..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="pl-10 pr-4 py-2 w-full max-w-md border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
      </div>

      {/* Tax Form Modal */}
      {showForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-md">
            <h2 className="text-lg font-semibold mb-4">
              {editingTax ? 'Edit Tax' : 'Add New Tax'}
            </h2>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Tax Name</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="e.g., GST 18%"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Computation Method</label>
                <select
                  value={formData.computation_method}
                  onChange={(e) => setFormData({ ...formData, computation_method: e.target.value as Tax['computation_method'] })}
                  className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="percentage">Percentage</option>
                  <option value="fixed">Fixed Amount</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Rate {formData.computation_method === 'percentage' ? '(%)' : '(₹)'}
                </label>
                <input
                  type="number"
                  required
                  min="0"
                  step="0.01"
                  value={formData.rate}
                  onChange={(e) => setFormData({ ...formData, rate: parseFloat(e.target.value) || 0 })}
                  className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Applicable On</label>
                <select
                  value={formData.applicable_on}
                  onChange={(e) => setFormData({ ...formData, applicable_on: e.target.value as Tax['applicable_on'] })}
                  className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="sales">Sales Only</option>
                  <option value="purchase">Purchase Only</option>
                  <option value="both">Both Sales & Purchase</option>
                </select>
              </div>
              
              <div className="flex space-x-3 pt-4">
                <button
                  type="submit"
                  className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg transition-colors"
                >
                  {editingTax ? 'Update' : 'Create'}
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

      {/* Taxes List */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200">
        <div className="p-6">
          <div className="grid grid-cols-1 gap-4">
            {filteredTaxes.map((tax) => (
              <div key={tax.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-3">
                      <div className="w-10 h-10 bg-green-50 rounded-full flex items-center justify-center">
                        <Calculator className="w-5 h-5 text-green-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">{tax.name}</h3>
                        <div className="flex items-center space-x-2 mt-1">
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${getApplicableColor(tax.applicable_on)}`}>
                            {tax.applicable_on}
                          </span>
                          <span className="text-sm text-gray-500 capitalize">
                            {tax.computation_method}
                          </span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-4 text-sm text-gray-600">
                      <div className="flex items-center space-x-1">
                        <Percent className="w-4 h-4" />
                        <span>
                          {tax.rate}{tax.computation_method === 'percentage' ? '%' : ' ₹'}
                        </span>
                      </div>
                      <div>
                        <span>Created: {new Date(tax.created_at).toLocaleDateString()}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex space-x-2 ml-4">
                    <button
                      onClick={() => handleEdit(tax)}
                      className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                    >
                      <Edit2 className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => handleDelete(tax.id)}
                      className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {filteredTaxes.length === 0 && (
            <div className="text-center py-8">
              <Calculator className="w-12 h-12 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-500">No taxes found</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}