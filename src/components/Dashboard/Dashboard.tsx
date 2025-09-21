import React from 'react';
import DashboardStats from './DashboardStats';
import RecentTransactions from './RecentTransactions';
import QuickActions from './QuickActions';

interface DashboardProps {
  onSectionChange: (section: string) => void;
}

export default function Dashboard({ onSectionChange }: DashboardProps) {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Dashboard</h1>
        <p className="text-gray-600">Overview of your business performance</p>
      </div>
      
      <DashboardStats />
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <RecentTransactions />
        <QuickActions onSectionChange={onSectionChange} />
      </div>
    </div>
  );
}