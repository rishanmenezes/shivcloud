// Core Types for Shiv Accounts Cloud
export interface User {
  id: string;
  email: string;
  name: string;
  role: 'admin' | 'invoicing_user' | 'contact';
  created_at: string;
}

export interface Contact {
  id: string;
  name: string;
  type: 'customer' | 'vendor' | 'both';
  email: string;
  mobile: string;
  address: {
    city: string;
    state: string;
    pincode: string;
  };
  profile_image?: string;
  created_at: string;
  user_id?: string;
}

export interface Product {
  id: string;
  name: string;
  type: 'goods' | 'service';
  sales_price: number;
  purchase_price: number;
  sale_tax_percentage: number;
  purchase_tax_percentage: number;
  hsn_code: string;
  category: string;
  created_at: string;
}

export interface Tax {
  id: string;
  name: string;
  computation_method: 'percentage' | 'fixed';
  rate: number;
  applicable_on: 'sales' | 'purchase' | 'both';
  created_at: string;
}

export interface ChartOfAccount {
  id: string;
  name: string;
  type: 'asset' | 'liability' | 'expense' | 'income' | 'equity';
  parent_id?: string;
  created_at: string;
}

export interface PurchaseOrder {
  id: string;
  vendor_id: string;
  order_date: string;
  status: 'draft' | 'confirmed' | 'billed';
  total_amount: number;
  tax_amount: number;
  items: PurchaseOrderItem[];
  created_at: string;
}

export interface PurchaseOrderItem {
  id: string;
  product_id: string;
  quantity: number;
  unit_price: number;
  tax_percentage: number;
  total: number;
}

export interface VendorBill {
  id: string;
  purchase_order_id: string;
  vendor_id: string;
  bill_date: string;
  due_date: string;
  status: 'unpaid' | 'partial' | 'paid';
  total_amount: number;
  paid_amount: number;
  created_at: string;
}

export interface SalesOrder {
  id: string;
  customer_id: string;
  order_date: string;
  status: 'draft' | 'confirmed' | 'invoiced';
  total_amount: number;
  tax_amount: number;
  items: SalesOrderItem[];
  created_at: string;
}

export interface SalesOrderItem {
  id: string;
  product_id: string;
  quantity: number;
  unit_price: number;
  tax_percentage: number;
  total: number;
}

export interface CustomerInvoice {
  id: string;
  sales_order_id: string;
  customer_id: string;
  invoice_date: string;
  due_date: string;
  status: 'unpaid' | 'partial' | 'paid';
  total_amount: number;
  paid_amount: number;
  created_at: string;
}

export interface Payment {
  id: string;
  type: 'receipt' | 'payment';
  reference_id: string; // invoice_id or bill_id
  amount: number;
  method: 'cash' | 'bank';
  account_id: string;
  payment_date: string;
  notes?: string;
  created_at: string;
}

export interface FinancialReport {
  balance_sheet: {
    assets: { [key: string]: number };
    liabilities: { [key: string]: number };
    equity: { [key: string]: number };
  };
  profit_loss: {
    income: { [key: string]: number };
    expenses: { [key: string]: number };
    net_profit: number;
  };
  stock_report: StockItem[];
}

export interface StockItem {
  product_id: string;
  product_name: string;
  purchased_qty: number;
  sold_qty: number;
  available_qty: number;
  valuation: number;
}