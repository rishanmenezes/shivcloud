import React from 'react';
import { Calendar, User, IndianRupee } from 'lucide-react';

interface Transaction {
  id: string;
  type: 'sale' | 'purchase' | 'payment';
  description: string;
  amount: number;
  contact: string;
  date: string;
  status: 'completed' | 'pending' | 'overdue';
}

const recentTransactions: Transaction[] = [
  {
    id: '1',
    type: 'sale',
    description: 'Invoice #INV-001 - Office Chairs',
    amount: 25000,
    contact: 'Nimesh Pathak',
    date: '2025-01-15',
    status: 'completed'
  },
  {
    id: '2',
    type: 'purchase',
    description: 'Bill #BILL-001 - Raw Materials',
    amount: 15000,
    contact: 'Azure Furniture',
    date: '2025-01-14',
    status: 'pending'
  },
  {
    id: '3',
    type: 'payment',
    description: 'Payment received for Invoice #INV-002',
    amount: 18000,
    contact: 'Modern Interiors',
    date: '2025-01-13',
    status: 'completed'
  },
  {
    id: '4',
    type: 'sale',
    description: 'Invoice #INV-003 - Dining Table Set',
    amount: 45000,
    contact: 'Priya Sharma',
    date: '2025-01-12',
    status: 'overdue'
  }
];

const getStatusColor = (status: string) => {
  switch (status) {
    case 'completed':
      return 'text-green-600 bg-green-100';
    case 'pending':
      return 'text-yellow-600 bg-yellow-100';
    case 'overdue':
      return 'text-red-600 bg-red-100';
    default:
      return 'text-gray-600 bg-gray-100';
  }
};

const getTypeColor = (type: string) => {
  switch (type) {
    case 'sale':
      return 'text-green-600';
    case 'purchase':
      return 'text-blue-600';
    case 'payment':
      return 'text-purple-600';
    default:
      return 'text-gray-600';
  }
};

export default function RecentTransactions() {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200">
      <div className="px-6 py-4 border-b border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900">Recent Transactions</h3>
        <p className="text-sm text-gray-600">Latest business activities</p>
      </div>
      
      <div className="p-6">
        <div className="space-y-4">
          {recentTransactions.map((transaction) => (
            <div key={transaction.id} className="flex items-center justify-between p-4 border border-gray-100 rounded-lg hover:bg-gray-50 transition-colors">
              <div className="flex items-center space-x-4">
                <div className={`p-2 rounded-full ${getTypeColor(transaction.type)} bg-opacity-10`}>
                  <IndianRupee className={`w-4 h-4 ${getTypeColor(transaction.type)}`} />
                </div>
                <div>
                  <p className="font-medium text-gray-900">{transaction.description}</p>
                  <div className="flex items-center space-x-4 mt-1">
                    <div className="flex items-center text-sm text-gray-500">
                      <User className="w-3 h-3 mr-1" />
                      {transaction.contact}
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <Calendar className="w-3 h-3 mr-1" />
                      {new Date(transaction.date).toLocaleDateString()}
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="text-right">
                <p className={`font-semibold ${getTypeColor(transaction.type)}`}>
                  {transaction.type === 'purchase' ? '-' : '+'}₹{transaction.amount.toLocaleString()}
                </p>
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(transaction.status)}`}>
                  {transaction.status}
                </span>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-6 text-center">
          <button className="text-blue-600 hover:text-blue-800 font-medium text-sm">
            View all transactions →
          </button>
        </div>
      </div>
    </div>
  );
}