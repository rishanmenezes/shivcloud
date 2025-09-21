import React, { useState } from 'react';
import Sidebar from './components/Layout/Sidebar';
import Header from './components/Layout/Header';
import Dashboard from './components/Dashboard/Dashboard';
import ContactMaster from './components/MasterData/ContactMaster';
import ProductMaster from './components/MasterData/ProductMaster';
import TaxMaster from './components/MasterData/TaxMaster';
import ChartOfAccounts from './components/MasterData/ChartOfAccounts';
import PurchaseOrders from './components/Transactions/PurchaseOrders';
import SalesOrders from './components/Transactions/SalesOrders';
import Payments from './components/Transactions/Payments';
import Reports from './components/Reports/Reports';
import LoginForm from './components/Auth/LoginForm';

type Section = 'dashboard' | 'contacts' | 'products' | 'taxes' | 'accounts' | 'purchase-orders' | 'sales-orders' | 'payments' | 'reports' | 'settings';

interface User {
  name: string;
  email: string;
  role: 'admin' | 'invoicing_user' | 'contact';
}

function App() {
  const [user, setUser] = useState<User | null>(null);
  const [activeSection, setActiveSection] = useState<Section>('dashboard');

  const handleLogin = (email: string, password: string) => {
    // Mock authentication
    if (email === 'admin@shiv.com' && password === 'admin123') {
      setUser({
        name: 'Shiv Kumar',
        email: 'admin@shiv.com',
        role: 'admin'
      });
    } else if (email === 'user@shiv.com' && password === 'user123') {
      setUser({
        name: 'Accountant',
        email: 'user@shiv.com',
        role: 'invoicing_user'
      });
    } else {
      alert('Invalid credentials. Please use demo credentials.');
    }
  };

  const handleLogout = () => {
    setUser(null);
    setActiveSection('dashboard');
  };

  const renderContent = () => {
    switch (activeSection) {
      case 'dashboard':
        return <Dashboard onSectionChange={setActiveSection} />;
      case 'contacts':
        return <ContactMaster />;
      case 'products':
        return <ProductMaster />;
      case 'taxes':
        return <TaxMaster />;
      case 'accounts':
        return <ChartOfAccounts />;
      case 'purchase-orders':
        return <PurchaseOrders />;
      case 'sales-orders':
        return <SalesOrders />;
      case 'payments':
        return <Payments />;
      case 'reports':
        return <Reports />;
      case 'settings':
        return (
          <div className="p-8 text-center">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Settings</h2>
            <p className="text-gray-600">System settings coming soon...</p>
          </div>
        );
      default:
        return <Dashboard onSectionChange={setActiveSection} />;
    }
  };

  if (!user) {
    return <LoginForm onLogin={handleLogin} />;
  }

  return (
    <div className="flex bg-gray-50 min-h-screen">
      <Sidebar 
        activeSection={activeSection} 
        onSectionChange={setActiveSection} 
      />
      
      <div className="flex-1 ml-64">
        <Header user={user} onLogout={handleLogout} />
        
        <main className="pt-20 p-6">
          {renderContent()}
        </main>
      </div>
    </div>
  );
}

export default App;