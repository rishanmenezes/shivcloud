import React from 'react';
import { TrendingUp, TrendingDown, Users, Package, FileText, CreditCard } from 'lucide-react';

interface StatsCardProps {
  title: string;
  value: string;
  change: string;
  isPositive: boolean;
  icon: React.ReactNode;
}

function StatsCard({ title, value, change, isPositive, icon }: StatsCardProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-gray-600">{title}</p>
          <p className="text-2xl font-bold text-gray-900 mt-2">{value}</p>
        </div>
        <div className="p-3 rounded-full bg-blue-50">
          {icon}
        </div>
      </div>
      <div className="flex items-center mt-4">
        {isPositive ? (
          <TrendingUp className="w-4 h-4 text-green-500 mr-1" />
        ) : (
          <TrendingDown className="w-4 h-4 text-red-500 mr-1" />
        )}
        <span className={`text-sm font-medium ${isPositive ? 'text-green-600' : 'text-red-600'}`}>
          {change}
        </span>
        <span className="text-sm text-gray-500 ml-1">from last month</span>
      </div>
    </div>
  );
}

export default function DashboardStats() {
  const stats = [
    {
      title: 'Total Revenue',
      value: '₹2,45,000',
      change: '+12.5%',
      isPositive: true,
      icon: <TrendingUp className="w-6 h-6 text-blue-600" />
    },
    {
      title: 'Active Customers',
      value: '156',
      change: '+8.2%',
      isPositive: true,
      icon: <Users className="w-6 h-6 text-blue-600" />
    },
    {
      title: 'Products Sold',
      value: '1,247',
      change: '+15.3%',
      isPositive: true,
      icon: <Package className="w-6 h-6 text-blue-600" />
    },
    {
      title: 'Pending Invoices',
      value: '23',
      change: '-5.4%',
      isPositive: false,
      icon: <FileText className="w-6 h-6 text-blue-600" />
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      {stats.map((stat, index) => (
        <StatsCard
          key={index}
          title={stat.title}
          value={stat.value}
          change={stat.change}
          isPositive={stat.isPositive}
          icon={stat.icon}
        />
      ))}
    </div>
  );
}