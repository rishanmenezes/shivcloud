import React from 'react';
import { Plus, FileText, ShoppingCart, CreditCard, BarChart3 } from 'lucide-react';

interface QuickActionProps {
  onSectionChange: (section: string) => void;
}

interface ActionCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  onClick: () => void;
  color: string;
}

function ActionCard({ title, description, icon, onClick, color }: ActionCardProps) {
  return (
    <button
      onClick={onClick}
      className={`p-6 rounded-lg border border-gray-200 hover:shadow-md transition-all duration-200 text-left w-full ${color}`}
    >
      <div className="flex items-center space-x-3 mb-3">
        {icon}
        <h3 className="font-semibold text-gray-900">{title}</h3>
      </div>
      <p className="text-sm text-gray-600">{description}</p>
    </button>
  );
}

export default function QuickActions({ onSectionChange }: QuickActionProps) {
  const actions = [
    {
      title: 'Create Sale Order',
      description: 'Generate new customer orders and invoices',
      icon: <FileText className="w-6 h-6 text-green-600" />,
      onClick: () => onSectionChange('sales-orders'),
      color: 'hover:bg-green-50 hover:border-green-200'
    },
    {
      title: 'Purchase Order',
      description: 'Create vendor purchase orders',
      icon: <ShoppingCart className="w-6 h-6 text-blue-600" />,
      onClick: () => onSectionChange('purchase-orders'),
      color: 'hover:bg-blue-50 hover:border-blue-200'
    },
    {
      title: 'Record Payment',
      description: 'Log customer payments and vendor bills',
      icon: <CreditCard className="w-6 h-6 text-purple-600" />,
      onClick: () => onSectionChange('payments'),
      color: 'hover:bg-purple-50 hover:border-purple-200'
    },
    {
      title: 'View Reports',
      description: 'Access financial and stock reports',
      icon: <BarChart3 className="w-6 h-6 text-orange-600" />,
      onClick: () => onSectionChange('reports'),
      color: 'hover:bg-orange-50 hover:border-orange-200'
    }
  ];

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
      <div className="flex items-center space-x-2 mb-6">
        <Plus className="w-5 h-5 text-blue-600" />
        <h3 className="text-lg font-semibold text-gray-900">Quick Actions</h3>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {actions.map((action, index) => (
          <ActionCard
            key={index}
            title={action.title}
            description={action.description}
            icon={action.icon}
            onClick={action.onClick}
            color={action.color}
          />
        ))}
      </div>
    </div>
  );
}