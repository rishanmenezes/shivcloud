import React, { useState } from 'react';
import { BarChart3, TrendingUp, Package, FileText, Calendar, Download } from 'lucide-react';

type ReportType = 'balance_sheet' | 'profit_loss' | 'stock_report';

const mockFinancialData = {
  balance_sheet: {
    assets: {
      'Cash & Bank': 125000,
      'Accounts Receivable': 85000,
      'Inventory': 250000,
      'Fixed Assets': 500000
    },
    liabilities: {
      'Accounts Payable': 65000,
      'Short Term Loans': 150000,
      'Long Term Loans': 300000
    },
    equity: {
      'Owner Equity': 445000
    }
  },
  profit_loss: {
    income: {
      'Sales Revenue': 850000,
      'Other Income': 25000
    },
    expenses: {
      'Cost of Goods Sold': 520000,
      'Operating Expenses': 180000,
      'Interest Expense': 45000
    },
    net_profit: 130000
  },
  stock_report: [
    {
      product_id: '1',
      product_name: 'Office Chair',
      purchased_qty: 150,
      sold_qty: 125,
      available_qty: 25,
      valuation: 162500
    },
    {
      product_id: '2',
      product_name: 'Wooden Table',
      purchased_qty: 80,
      sold_qty: 65,
      available_qty: 15,
      valuation: 135000
    },
    {
      product_id: '3',
      product_name: 'Dining Set',
      purchased_qty: 45,
      sold_qty: 35,
      available_qty: 10,
      valuation: 180000
    }
  ]
};

export default function Reports() {
  const [activeReport, setActiveReport] = useState<ReportType>('balance_sheet');
  const [dateRange, setDateRange] = useState({
    from: '2025-01-01',
    to: '2025-01-31'
  });

  const reports = [
    {
      id: 'balance_sheet' as ReportType,
      title: 'Balance Sheet',
      description: 'Assets, Liabilities & Equity',
      icon: <BarChart3 className="w-5 h-5" />,
      color: 'bg-blue-50 text-blue-600'
    },
    {
      id: 'profit_loss' as ReportType,
      title: 'Profit & Loss',
      description: 'Income & Expenses',
      icon: <TrendingUp className="w-5 h-5" />,
      color: 'bg-green-50 text-green-600'
    },
    {
      id: 'stock_report' as ReportType,
      title: 'Stock Report',
      description: 'Inventory & Valuation',
      icon: <Package className="w-5 h-5" />,
      color: 'bg-purple-50 text-purple-600'
    }
  ];

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      minimumFractionDigits: 0
    }).format(amount);
  };

  const renderBalanceSheet = () => {
    const { assets, liabilities, equity } = mockFinancialData.balance_sheet;
    const totalAssets = Object.values(assets).reduce((sum, val) => sum + val, 0);
    const totalLiabilities = Object.values(liabilities).reduce((sum, val) => sum + val, 0);
    const totalEquity = Object.values(equity).reduce((sum, val) => sum + val, 0);

    return (
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Assets */}
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Assets</h3>
            <div className="space-y-3">
              {Object.entries(assets).map(([key, value]) => (
                <div key={key} className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                  <span className="text-gray-700">{key}</span>
                  <span className="font-semibold text-gray-900">{formatCurrency(value)}</span>
                </div>
              ))}
              <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg border-2 border-blue-200">
                <span className="font-semibold text-blue-900">Total Assets</span>
                <span className="font-bold text-blue-900">{formatCurrency(totalAssets)}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Liabilities & Equity */}
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Liabilities</h3>
            <div className="space-y-3">
              {Object.entries(liabilities).map(([key, value]) => (
                <div key={key} className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                  <span className="text-gray-700">{key}</span>
                  <span className="font-semibold text-gray-900">{formatCurrency(value)}</span>
                </div>
              ))}
              <div className="flex justify-between items-center p-3 bg-red-50 rounded-lg border border-red-200">
                <span className="font-semibold text-red-900">Total Liabilities</span>
                <span className="font-bold text-red-900">{formatCurrency(totalLiabilities)}</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Equity</h3>
            <div className="space-y-3">
              {Object.entries(equity).map(([key, value]) => (
                <div key={key} className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                  <span className="text-gray-700">{key}</span>
                  <span className="font-semibold text-gray-900">{formatCurrency(value)}</span>
                </div>
              ))}
              <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg border border-green-200">
                <span className="font-semibold text-green-900">Total Equity</span>
                <span className="font-bold text-green-900">{formatCurrency(totalEquity)}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const renderProfitLoss = () => {
    const { income, expenses } = mockFinancialData.profit_loss;
    const totalIncome = Object.values(income).reduce((sum, val) => sum + val, 0);
    const totalExpenses = Object.values(expenses).reduce((sum, val) => sum + val, 0);
    const netProfit = totalIncome - totalExpenses;

    return (
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Income */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Income</h3>
          <div className="space-y-3">
            {Object.entries(income).map(([key, value]) => (
              <div key={key} className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                <span className="text-gray-700">{key}</span>
                <span className="font-semibold text-green-600">{formatCurrency(value)}</span>
              </div>
            ))}
            <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg border-2 border-green-200">
              <span className="font-semibold text-green-900">Total Income</span>
              <span className="font-bold text-green-900">{formatCurrency(totalIncome)}</span>
            </div>
          </div>
        </div>

        {/* Expenses */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Expenses</h3>
          <div className="space-y-3">
            {Object.entries(expenses).map(([key, value]) => (
              <div key={key} className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                <span className="text-gray-700">{key}</span>
                <span className="font-semibold text-red-600">{formatCurrency(value)}</span>
              </div>
            ))}
            <div className="flex justify-between items-center p-3 bg-red-50 rounded-lg border-2 border-red-200">
              <span className="font-semibold text-red-900">Total Expenses</span>
              <span className="font-bold text-red-900">{formatCurrency(totalExpenses)}</span>
            </div>
          </div>
        </div>

        {/* Net Profit */}
        <div className="lg:col-span-2">
          <div className={`flex justify-between items-center p-4 rounded-lg border-2 ${
            netProfit >= 0 
              ? 'bg-green-50 border-green-300' 
              : 'bg-red-50 border-red-300'
          }`}>
            <span className={`text-lg font-bold ${
              netProfit >= 0 ? 'text-green-900' : 'text-red-900'
            }`}>
              Net {netProfit >= 0 ? 'Profit' : 'Loss'}
            </span>
            <span className={`text-xl font-bold ${
              netProfit >= 0 ? 'text-green-900' : 'text-red-900'
            }`}>
              {formatCurrency(Math.abs(netProfit))}
            </span>
          </div>
        </div>
      </div>
    );
  };

  const renderStockReport = () => {
    const stockData = mockFinancialData.stock_report;
    const totalValuation = stockData.reduce((sum, item) => sum + item.valuation, 0);

    return (
      <div className="space-y-6">
        {/* Summary */}
        <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
          <h3 className="font-semibold text-blue-900 mb-2">Total Stock Valuation</h3>
          <p className="text-2xl font-bold text-blue-900">{formatCurrency(totalValuation)}</p>
        </div>

        {/* Stock Items */}
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-gray-200">
            <thead>
              <tr className="bg-gray-50">
                <th className="border border-gray-200 p-3 text-left">Product Name</th>
                <th className="border border-gray-200 p-3 text-center">Purchased Qty</th>
                <th className="border border-gray-200 p-3 text-center">Sold Qty</th>
                <th className="border border-gray-200 p-3 text-center">Available Qty</th>
                <th className="border border-gray-200 p-3 text-right">Valuation</th>
              </tr>
            </thead>
            <tbody>
              {stockData.map((item) => (
                <tr key={item.product_id} className="hover:bg-gray-50">
                  <td className="border border-gray-200 p-3 font-medium">{item.product_name}</td>
                  <td className="border border-gray-200 p-3 text-center text-blue-600 font-semibold">
                    +{item.purchased_qty}
                  </td>
                  <td className="border border-gray-200 p-3 text-center text-red-600 font-semibold">
                    -{item.sold_qty}
                  </td>
                  <td className="border border-gray-200 p-3 text-center font-semibold">
                    {item.available_qty}
                  </td>
                  <td className="border border-gray-200 p-3 text-right font-semibold">
                    {formatCurrency(item.valuation)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  };

  const renderReportContent = () => {
    switch (activeReport) {
      case 'balance_sheet':
        return renderBalanceSheet();
      case 'profit_loss':
        return renderProfitLoss();
      case 'stock_report':
        return renderStockReport();
      default:
        return null;
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Financial Reports</h1>
          <p className="text-gray-600 mt-1">Real-time business insights and analytics</p>
        </div>
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center space-x-2 transition-colors">
          <Download className="w-4 h-4" />
          <span>Export</span>
        </button>
      </div>

      {/* Report Selection */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {reports.map((report) => (
          <button
            key={report.id}
            onClick={() => setActiveReport(report.id)}
            className={`p-4 rounded-lg border-2 text-left transition-all ${
              activeReport === report.id
                ? 'border-blue-500 bg-blue-50'
                : 'border-gray-200 hover:border-gray-300'
            }`}
          >
            <div className={`inline-flex p-2 rounded-lg ${report.color} mb-3`}>
              {report.icon}
            </div>
            <h3 className="font-semibold text-gray-900">{report.title}</h3>
            <p className="text-sm text-gray-600 mt-1">{report.description}</p>
          </button>
        ))}
      </div>

      {/* Date Range Selector */}
      <div className="bg-white p-4 rounded-lg border border-gray-200">
        <div className="flex items-center space-x-4">
          <Calendar className="w-5 h-5 text-gray-400" />
          <div className="flex items-center space-x-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">From Date</label>
              <input
                type="date"
                value={dateRange.from}
                onChange={(e) => setDateRange({ ...dateRange, from: e.target.value })}
                className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">To Date</label>
              <input
                type="date"
                value={dateRange.to}
                onChange={(e) => setDateRange({ ...dateRange, to: e.target.value })}
                className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Report Content */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <div className="flex items-center space-x-3 mb-6">
          <FileText className="w-6 h-6 text-gray-600" />
          <h2 className="text-xl font-semibold text-gray-900">
            {reports.find(r => r.id === activeReport)?.title}
          </h2>
          <span className="text-sm text-gray-500">
            {new Date(dateRange.from).toLocaleDateString()} - {new Date(dateRange.to).toLocaleDateString()}
          </span>
        </div>
        
        {renderReportContent()}
      </div>
    </div>
  );
}