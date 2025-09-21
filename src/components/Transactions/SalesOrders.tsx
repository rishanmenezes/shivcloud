import React, { useState } from 'react';
import { Plus, Edit2, Trash2, Search, FileText, Eye, Calendar, User, Package } from 'lucide-react';
import { SalesOrder, SalesOrderItem, Contact, Product } from '../../types';

const mockCustomers: Contact[] = [
  {
    id: '2',
    name: 'Nimesh Pathak',
    type: 'customer',
    email: 'nimesh@example.com',
    mobile: '+91 8765432109',
    address: { city: 'Delhi', state: 'Delhi', pincode: '110001' },
    created_at: '2025-01-11'
  },
  {
    id: '3',
    name: 'Priya Sharma',
    type: 'customer',
    email: 'priya@example.com',
    mobile: '+91 7654321098',
    address: { city: 'Bangalore', state: 'Karnataka', pincode: '560001' },
    created_at: '2025-01-12'
  }
];

const mockProducts: Product[] = [
  {
    id: '1',
    name: 'Office Chair',
    type: 'goods',
    sales_price: 8500,
    purchase_price: 6500,
    sale_tax_percentage: 18,
    purchase_tax_percentage: 18,
    hsn_code: '9401',
    category: 'Furniture',
    created_at: '2025-01-10'
  },
  {
    id: '2',
    name: 'Wooden Table',
    type: 'goods',
    sales_price: 12000,
    purchase_price: 9000,
    sale_tax_percentage: 12,
    purchase_tax_percentage: 12,
    hsn_code: '9403',
    category: 'Furniture',
    created_at: '2025-01-11'
  }
];

const mockSalesOrders: SalesOrder[] = [
  {
    id: '1',
    customer_id: '2',
    order_date: '2025-01-15',
    status: 'confirmed',
    total_amount: 20030,
    tax_amount: 3030,
    items: [
      {
        id: '1',
        product_id: '1',
        quantity: 2,
        unit_price: 8500,
        tax_percentage: 18,
        total: 20030
      }
    ],
    created_at: '2025-01-15'
  }
];

export default function SalesOrders() {
  const [salesOrders, setSalesOrders] = useState<SalesOrder[]>(mockSalesOrders);
  const [searchTerm, setSearchTerm] = useState('');
  const [showForm, setShowForm] = useState(false);
  const [showDetails, setShowDetails] = useState<string | null>(null);
  const [editingOrder, setEditingOrder] = useState<SalesOrder | null>(null);

  const [formData, setFormData] = useState({
    customer_id: '',
    order_date: new Date().toISOString().split('T')[0],
    status: 'draft' as SalesOrder['status'],
    items: [] as SalesOrderItem[]
  });

  const [currentItem, setCurrentItem] = useState({
    product_id: '',
    quantity: 1,
    unit_price: 0,
    tax_percentage: 18
  });

  const filteredOrders = salesOrders.filter(order => {
    const customer = mockCustomers.find(c => c.id === order.customer_id);
    return customer?.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
           order.id.toLowerCase().includes(searchTerm.toLowerCase());
  });

  const calculateItemTotal = (item: Omit<SalesOrderItem, 'id' | 'total'>) => {
    const subtotal = item.quantity * item.unit_price;
    const tax = (subtotal * item.tax_percentage) / 100;
    return subtotal + tax;
  };

  const addItem = () => {
    if (!currentItem.product_id) return;
    
    const total = calculateItemTotal(currentItem);
    const newItem: SalesOrderItem = {
      id: Date.now().toString(),
      ...currentItem,
      total
    };
    
    setFormData({
      ...formData,
      items: [...formData.items, newItem]
    });
    
    setCurrentItem({
      product_id: '',
      quantity: 1,
      unit_price: 0,
      tax_percentage: 18
    });
  };

  const removeItem = (itemId: string) => {
    setFormData({
      ...formData,
      items: formData.items.filter(item => item.id !== itemId)
    });
  };

  const calculateOrderTotals = (items: SalesOrderItem[]) => {
    const totalAmount = items.reduce((sum, item) => sum + item.total, 0);
    const taxAmount = items.reduce((sum, item) => {
      const subtotal = item.quantity * item.unit_price;
      return sum + (subtotal * item.tax_percentage) / 100;
    }, 0);
    
    return { totalAmount, taxAmount };
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (formData.items.length === 0) {
      alert('Please add at least one item');
      return;
    }
    
    const { totalAmount, taxAmount } = calculateOrderTotals(formData.items);
    
    if (editingOrder) {
      setSalesOrders(salesOrders.map(order =>
        order.id === editingOrder.id
          ? { ...order, ...formData, total_amount: totalAmount, tax_amount: taxAmount }
          : order
      ));
    } else {
      const newOrder: SalesOrder = {
        id: `SO-${Date.now()}`,
        ...formData,
        total_amount: totalAmount,
        tax_amount: taxAmount,
        created_at: new Date().toISOString()
      };
      setSalesOrders([...salesOrders, newOrder]);
    }
    
    resetForm();
  };

  const resetForm = () => {
    setFormData({
      customer_id: '',
      order_date: new Date().toISOString().split('T')[0],
      status: 'draft',
      items: []
    });
    setCurrentItem({
      product_id: '',
      quantity: 1,
      unit_price: 0,
      tax_percentage: 18
    });
    setShowForm(false);
    setEditingOrder(null);
  };

  const handleEdit = (order: SalesOrder) => {
    setFormData({
      customer_id: order.customer_id,
      order_date: order.order_date,
      status: order.status,
      items: order.items
    });
    setEditingOrder(order);
    setShowForm(true);
  };

  const handleDelete = (id: string) => {
    if (confirm('Are you sure you want to delete this sales order?')) {
      setSalesOrders(salesOrders.filter(order => order.id !== id));
    }
  };

  const getStatusColor = (status: SalesOrder['status']) => {
    switch (status) {
      case 'draft':
        return 'bg-gray-100 text-gray-800';
      case 'confirmed':
        return 'bg-blue-100 text-blue-800';
      case 'invoiced':
        return 'bg-green-100 text-green-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const handleProductChange = (productId: string) => {
    const product = mockProducts.find(p => p.id === productId);
    if (product) {
      setCurrentItem({
        ...currentItem,
        product_id: productId,
        unit_price: product.sales_price,
        tax_percentage: product.sale_tax_percentage
      });
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Sales Orders</h1>
          <p className="text-gray-600 mt-1">Manage customer sales orders</p>
        </div>
        <button
          onClick={() => setShowForm(true)}
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center space-x-2 transition-colors"
        >
          <Plus className="w-4 h-4" />
          <span>Create Order</span>
        </button>
      </div>

      {/* Search */}
      <div className="relative">
        <Search className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
        <input
          type="text"
          placeholder="Search sales orders..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="pl-10 pr-4 py-2 w-full max-w-md border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
      </div>

      {/* Sales Order Form Modal */}
      {showForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg w-full max-w-4xl max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-gray-200">
              <h2 className="text-lg font-semibold">
                {editingOrder ? 'Edit Sales Order' : 'Create Sales Order'}
              </h2>
            </div>
            
            <form onSubmit={handleSubmit} className="p-6 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Customer</label>
                  <select
                    required
                    value={formData.customer_id}
                    onChange={(e) => setFormData({ ...formData, customer_id: e.target.value })}
                    className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Select Customer</option>
                    {mockCustomers.map(customer => (
                      <option key={customer.id} value={customer.id}>{customer.name}</option>
                    ))}
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Order Date</label>
                  <input
                    type="date"
                    required
                    value={formData.order_date}
                    onChange={(e) => setFormData({ ...formData, order_date: e.target.value })}
                    className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Status</label>
                  <select
                    value={formData.status}
                    onChange={(e) => setFormData({ ...formData, status: e.target.value as SalesOrder['status'] })}
                    className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="draft">Draft</option>
                    <option value="confirmed">Confirmed</option>
                    <option value="invoiced">Invoiced</option>
                  </select>
                </div>
              </div>

              {/* Add Items Section */}
              <div className="border-t pt-6">
                <h3 className="text-lg font-semibold mb-4">Order Items</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Product</label>
                    <select
                      value={currentItem.product_id}
                      onChange={(e) => handleProductChange(e.target.value)}
                      className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="">Select Product</option>
                      {mockProducts.map(product => (
                        <option key={product.id} value={product.id}>{product.name}</option>
                      ))}
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Quantity</label>
                    <input
                      type="number"
                      min="1"
                      value={currentItem.quantity}
                      onChange={(e) => setCurrentItem({ ...currentItem, quantity: parseInt(e.target.value) || 1 })}
                      className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Unit Price</label>
                    <input
                      type="number"
                      min="0"
                      step="0.01"
                      value={currentItem.unit_price}
                      onChange={(e) => setCurrentItem({ ...currentItem, unit_price: parseFloat(e.target.value) || 0 })}
                      className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Tax %</label>
                    <input
                      type="number"
                      min="0"
                      max="100"
                      step="0.01"
                      value={currentItem.tax_percentage}
                      onChange={(e) => setCurrentItem({ ...currentItem, tax_percentage: parseFloat(e.target.value) || 0 })}
                      className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  
                  <div className="flex items-end">
                    <button
                      type="button"
                      onClick={addItem}
                      className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-lg transition-colors"
                    >
                      Add Item
                    </button>
                  </div>
                </div>

                {/* Items List */}
                {formData.items.length > 0 && (
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse border border-gray-200">
                      <thead>
                        <tr className="bg-gray-50">
                          <th className="border border-gray-200 p-2 text-left">Product</th>
                          <th className="border border-gray-200 p-2 text-center">Qty</th>
                          <th className="border border-gray-200 p-2 text-right">Unit Price</th>
                          <th className="border border-gray-200 p-2 text-center">Tax %</th>
                          <th className="border border-gray-200 p-2 text-right">Total</th>
                          <th className="border border-gray-200 p-2 text-center">Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {formData.items.map((item) => {
                          const product = mockProducts.find(p => p.id === item.product_id);
                          return (
                            <tr key={item.id}>
                              <td className="border border-gray-200 p-2">{product?.name}</td>
                              <td className="border border-gray-200 p-2 text-center">{item.quantity}</td>
                              <td className="border border-gray-200 p-2 text-right">₹{item.unit_price}</td>
                              <td className="border border-gray-200 p-2 text-center">{item.tax_percentage}%</td>
                              <td className="border border-gray-200 p-2 text-right">₹{item.total.toFixed(2)}</td>
                              <td className="border border-gray-200 p-2 text-center">
                                <button
                                  type="button"
                                  onClick={() => removeItem(item.id)}
                                  className="text-red-600 hover:text-red-800"
                                >
                                  <Trash2 className="w-4 h-4" />
                                </button>
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                    
                    <div className="mt-4 text-right">
                      <div className="text-lg font-semibold">
                        Total: ₹{calculateOrderTotals(formData.items).totalAmount.toFixed(2)}
                      </div>
                    </div>
                  </div>
                )}
              </div>
              
              <div className="flex space-x-3 pt-4 border-t">
                <button
                  type="submit"
                  className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg transition-colors"
                >
                  {editingOrder ? 'Update Order' : 'Create Order'}
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

      {/* Order Details Modal */}
      {showDetails && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            {(() => {
              const order = salesOrders.find(o => o.id === showDetails);
              const customer = mockCustomers.find(c => c.id === order?.customer_id);
              
              if (!order) return null;
              
              return (
                <>
                  <div className="p-6 border-b border-gray-200">
                    <div className="flex items-center justify-between">
                      <h2 className="text-lg font-semibold">Sales Order Details</h2>
                      <button
                        onClick={() => setShowDetails(null)}
                        className="text-gray-400 hover:text-gray-600"
                      >
                        ×
                      </button>
                    </div>
                  </div>
                  
                  <div className="p-6 space-y-6">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700">Order ID</label>
                        <p className="text-gray-900">{order.id}</p>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700">Customer</label>
                        <p className="text-gray-900">{customer?.name}</p>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700">Order Date</label>
                        <p className="text-gray-900">{new Date(order.order_date).toLocaleDateString()}</p>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700">Status</label>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(order.status)}`}>
                          {order.status}
                        </span>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-semibold mb-4">Order Items</h3>
                      <div className="overflow-x-auto">
                        <table className="w-full border-collapse border border-gray-200">
                          <thead>
                            <tr className="bg-gray-50">
                              <th className="border border-gray-200 p-2 text-left">Product</th>
                              <th className="border border-gray-200 p-2 text-center">Qty</th>
                              <th className="border border-gray-200 p-2 text-right">Unit Price</th>
                              <th className="border border-gray-200 p-2 text-center">Tax %</th>
                              <th className="border border-gray-200 p-2 text-right">Total</th>
                            </tr>
                          </thead>
                          <tbody>
                            {order.items.map((item) => {
                              const product = mockProducts.find(p => p.id === item.product_id);
                              return (
                                <tr key={item.id}>
                                  <td className="border border-gray-200 p-2">{product?.name}</td>
                                  <td className="border border-gray-200 p-2 text-center">{item.quantity}</td>
                                  <td className="border border-gray-200 p-2 text-right">₹{item.unit_price}</td>
                                  <td className="border border-gray-200 p-2 text-center">{item.tax_percentage}%</td>
                                  <td className="border border-gray-200 p-2 text-right">₹{item.total.toFixed(2)}</td>
                                </tr>
                              );
                            })}
                          </tbody>
                        </table>
                      </div>
                      
                      <div className="mt-4 text-right space-y-1">
                        <div>Tax Amount: ₹{order.tax_amount.toFixed(2)}</div>
                        <div className="text-lg font-semibold">Total: ₹{order.total_amount.toFixed(2)}</div>
                      </div>
                    </div>
                  </div>
                </>
              );
            })()}
          </div>
        </div>
      )}

      {/* Sales Orders List */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200">
        <div className="p-6">
          <div className="space-y-4">
            {filteredOrders.map((order) => {
              const customer = mockCustomers.find(c => c.id === order.customer_id);
              
              return (
                <div key={order.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-3">
                        <div className="w-10 h-10 bg-green-50 rounded-full flex items-center justify-center">
                          <FileText className="w-5 h-5 text-green-600" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900">{order.id}</h3>
                          <div className="flex items-center space-x-2 mt-1">
                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(order.status)}`}>
                              {order.status}
                            </span>
                            <span className="text-sm text-gray-500">
                              {order.items.length} item{order.items.length !== 1 ? 's' : ''}
                            </span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-gray-600">
                        <div className="flex items-center space-x-2">
                          <User className="w-4 h-4" />
                          <span>{customer?.name}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Calendar className="w-4 h-4" />
                          <span>{new Date(order.order_date).toLocaleDateString()}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Package className="w-4 h-4" />
                          <span>₹{order.total_amount.toFixed(2)}</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex space-x-2 ml-4">
                      <button
                        onClick={() => setShowDetails(order.id)}
                        className="p-2 text-gray-600 hover:bg-gray-50 rounded-lg transition-colors"
                      >
                        <Eye className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => handleEdit(order)}
                        className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                      >
                        <Edit2 className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => handleDelete(order.id)}
                        className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          
          {filteredOrders.length === 0 && (
            <div className="text-center py-8">
              <FileText className="w-12 h-12 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-500">No sales orders found</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}