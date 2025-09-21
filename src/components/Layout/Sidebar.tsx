import React from 'react';
import { 
  Home, 
  Users, 
  Package, 
  Calculator, 
  BookOpen, 
  ShoppingCart, 
  FileText, 
  BarChart3,
  CreditCard,
  Settings
} from 'lucide-react';

interface SidebarProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

const menuItems = [
  { id: 'dashboard', icon: Home, label: 'Dashboard' },
  { id: 'contacts', icon: Users, label: 'Contacts' },
  { id: 'products', icon: Package, label: 'Products' },
  { id: 'taxes', icon: Calculator, label: 'Tax Master' },
  { id: 'accounts', icon: BookOpen, label: 'Chart of Accounts' },
  { id: 'purchase-orders', icon: ShoppingCart, label: 'Purchase Orders' },
  { id: 'sales-orders', icon: FileText, label: 'Sales Orders' },
  { id: 'payments', icon: CreditCard, label: 'Payments' },
  { id: 'reports', icon: BarChart3, label: 'Reports' },
  { id: 'settings', icon: Settings, label: 'Settings' },
];

export default function Sidebar({ activeSection, onSectionChange }: SidebarProps) {
  return (
    <div className="w-64 bg-white shadow-lg h-screen fixed left-0 top-0 overflow-y-auto">
      <div className="p-6 border-b border-gray-200">
        <h1 className="text-xl font-bold text-gray-800">Shiv Accounts</h1>
        <p className="text-sm text-gray-600 mt-1">Cloud Accounting</p>
      </div>
      
      <nav className="mt-6">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeSection === item.id;
          
          return (
            <button
              key={item.id}
              onClick={() => onSectionChange(item.id)}
              className={`w-full flex items-center px-6 py-3 text-left transition-colors duration-200 ${
                isActive
                  ? 'bg-blue-50 text-blue-600 border-r-2 border-blue-600'
                  : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
              }`}
            >
              <Icon className="w-5 h-5 mr-3" />
              {item.label}
            </button>
          );
        })}
      </nav>
    </div>
  );
}