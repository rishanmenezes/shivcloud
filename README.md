# 🪑 Shiv Furniture Cloud

### 📊 Complete Accounting & Inventory Platform for Furniture Manufacturers

**Shiv Furniture Cloud** is a comprehensive cloud-based accounting and inventory management platform, purpose-built for furniture manufacturers. It helps streamline operations from sales and procurement to invoicing, stock control, payments, and financial reporting — all in one responsive web application.

---

## 🚀 Features

- 🔐 **Authentication** – Secure login system with role-based access (Admin, Invoicing User, Contact)
- 👥 **Contact Management** – Manage customers and suppliers with detailed contact information
- 🛋 **Product Catalog** – Track stock levels, taxes, HSN codes, and product categories
- 📦 **Sales Workflow** – Sales Orders → Invoices → Payments with automatic stock updates
- 📥 **Purchase Workflow** – Purchase Orders → Bills → Payments
- 📊 **Reports & Analytics** – Real-time P&L, Balance Sheet, Stock Reports, and Partner Ledger
- 📱 **Mobile Responsive** – Fully functional on desktop, tablet, and mobile devices
- 🎨 **Modern UI** – Clean, intuitive interface built with Tailwind CSS

---

## 🛠 Tech Stack

### Frontend Framework
- **React 18.3.1** – UI library
- **TypeScript 5.5.3** – Type-safe JavaScript
- **Vite 5.4.2** – Fast build tool and dev server

### Styling & UI
- **Tailwind CSS 3.4.1** – Utility-first CSS framework
- **Lucide React 0.344.0** – Beautiful icon library
- **PostCSS 8.4.35** – CSS processing
- **Autoprefixer 10.4.18** – CSS vendor prefixing

### Backend & Services
- **Supabase 2.57.4** – Backend-as-a-Service
  - PostgreSQL (Database)
  - Auth (User sessions)
  - Storage (File uploads)

### Development Tools
- **ESLint 9.9.1** – Code linting
- **TypeScript ESLint 8.3.0** – TypeScript linting
- **React Hooks ESLint Plugin** – React hooks linting
- **React Refresh ESLint Plugin** – Fast refresh support

---

## 📁 Project Structure

```
shiv_clouds/
├── src/
│   ├── components/
│   │   ├── Auth/
│   │   │   └── LoginForm.tsx          # Login/authentication component
│   │   ├── Dashboard/
│   │   │   ├── Dashboard.tsx          # Main dashboard container
│   │   │   ├── DashboardStats.tsx     # Statistics cards
│   │   │   ├── QuickActions.tsx       # Quick action buttons
│   │   │   └── RecentTransactions.tsx # Recent transactions list
│   │   ├── Layout/
│   │   │   ├── Header.tsx             # Application header
│   │   │   └── Sidebar.tsx            # Navigation sidebar
│   │   ├── MasterData/
│   │   │   ├── ContactMaster.tsx     # Customer/vendor management
│   │   │   ├── ProductMaster.tsx      # Product/service management
│   │   │   ├── TaxMaster.tsx          # Tax configuration
│   │   │   └── ChartOfAccounts.tsx    # Accounting structure
│   │   ├── Transactions/
│   │   │   ├── PurchaseOrders.tsx     # Purchase order management
│   │   │   ├── SalesOrders.tsx        # Sales order management
│   │   │   └── Payments.tsx           # Payment/receipt recording
│   │   └── Reports/
│   │       └── Reports.tsx            # Financial reports
│   ├── types/
│   │   └── index.ts                   # TypeScript type definitions
│   ├── App.tsx                        # Main application component
│   ├── main.tsx                       # Application entry point
│   ├── index.css                      # Global styles
│   └── vite-env.d.ts                  # Vite type definitions
├── .gitignore                         # Git ignore rules
├── eslint.config.js                   # ESLint configuration
├── index.html                         # HTML entry point
├── package.json                       # Dependencies and scripts
├── postcss.config.js                  # PostCSS configuration
├── tailwind.config.js                 # Tailwind CSS configuration
├── tsconfig.json                      # TypeScript configuration
├── tsconfig.app.json                  # App TypeScript config
├── tsconfig.node.json                 # Node TypeScript config
├── vite.config.ts                     # Vite configuration
└── README.md                          # Project documentation
```

---

## 📦 Core Components

### Authentication System
- **LoginForm.tsx** – Secure login interface with demo credentials
- Role-based access control (Admin, Invoicing User, Contact)
- Password visibility toggle
- Remember me functionality

### Dashboard
- **DashboardStats.tsx** – Key performance indicators (Revenue, Customers, Products, Pending Invoices)
- **QuickActions.tsx** – Fast access to common operations
- **RecentTransactions.tsx** – Latest business activities with status tracking

### Master Data Management
- **ContactMaster.tsx** – Customer and vendor management with:
  - Contact type classification (Customer, Vendor, Both)
  - Address management (City, State, Pincode)
  - Search and filter functionality
  - CRUD operations

- **ProductMaster.tsx** – Product and service catalog with:
  - Sales and purchase pricing
  - Tax percentage configuration
  - HSN code support
  - Category management
  - Stock tracking capabilities

- **TaxMaster.tsx** – Tax configuration with:
  - Percentage and fixed amount computation
  - Sales/purchase applicability
  - Multiple tax rate support

- **ChartOfAccounts.tsx** – Accounting structure with:
  - Asset, Liability, Income, Expense, Equity types
  - Hierarchical account organization
  - Type-based filtering

### Transaction Management
- **SalesOrders.tsx** – Sales order processing with:
  - Customer selection
  - Product line items with automatic pricing
  - Tax calculation
  - Order status tracking (Draft, Confirmed, Invoiced)

- **PurchaseOrders.tsx** – Purchase order management with:
  - Vendor selection
  - Product line items
  - Tax calculation
  - Order status tracking (Draft, Confirmed, Billed)

- **Payments.tsx** – Payment processing with:
  - Receipt and payment recording
  - Multiple payment methods (Cash, Bank)
  - Reference tracking (Invoice/Bill IDs)
  - Cash flow analysis

### Reports & Analytics
- **Reports.tsx** – Comprehensive financial reporting with:
  - Balance Sheet (Assets, Liabilities, Equity)
  - Profit & Loss Statement (Income, Expenses, Net Profit)
  - Stock Report (Inventory levels, Valuation)
  - Date range filtering
  - Export functionality

---

## 🔧 Configuration Files

### TypeScript Configuration
- **tsconfig.json** – Root TypeScript configuration with project references
- **tsconfig.app.json** – Application-specific TypeScript settings
- **tsconfig.node.json** – Node.js TypeScript configuration

### Build Tools
- **vite.config.ts** – Vite configuration with React plugin and Lucide optimization
- **tailwind.config.js** – Tailwind CSS content configuration
- **postcss.config.js** – PostCSS plugins (Tailwind, Autoprefixer)

### Code Quality
- **eslint.config.js** – ESLint configuration with React and TypeScript support
- **.gitignore** – Git ignore rules (node_modules)

---

## 🎯 TypeScript Type System

The project uses a comprehensive type system defined in `src/types/index.ts`:

### Core Types
- **User** – User authentication and role information
- **Contact** – Customer and vendor contact details
- **Product** – Product and service information
- **Tax** – Tax configuration and rates
- **ChartOfAccount** – Account structure for financial reporting

### Transaction Types
- **PurchaseOrder** – Purchase order with line items
- **PurchaseOrderItem** – Individual purchase order items
- **VendorBill** – Vendor billing information
- **SalesOrder** – Sales order with line items
- **SalesOrderItem** – Individual sales order items
- **CustomerInvoice** – Customer invoice details
- **Payment** – Payment and receipt records

### Reporting Types
- **FinancialReport** – Complete financial report structure
- **StockItem** – Inventory stock information

---

## ⚙️ Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or bun package manager
- Git

### 1. Clone the Repository
```bash
git clone https://github.com/rishanmenezes/shivcloud.git
cd shiv_clouds
```

### 2. Install Dependencies
```bash
npm install
# or
bun install
```

### 3. Configure Environment Variables
Create a `.env` file in the root folder with:
```env
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

### 4. Run the Application
```bash
npm run dev
# or
bun run dev
```

Access the application at: http://localhost:5173

### 5. Build for Production
```bash
npm run build
# or
bun run build
```

### 6. Preview Production Build
```bash
npm run preview
# or
bun run preview
```

---

## 🔐 Demo Credentials

The application includes demo authentication:

**Admin User:**
- Email: admin@shiv.com
- Password: admin123
- Role: admin

**Standard User:**
- Email: user@shiv.com
- Password: user123
- Role: invoicing_user

---

## 📖 Usage Guide

### 1. Authentication
- Sign in using demo credentials or configure Supabase authentication
- Role-based access determines available features

### 2. Master Data Setup
- **Contacts**: Add customers and suppliers with detailed information
- **Products**: Create product catalog with pricing and tax information
- **Taxes**: Configure tax rates and computation methods
- **Chart of Accounts**: Set up your accounting structure

### 3. Transaction Processing
- **Sales Orders**: Create customer orders with automatic stock updates
- **Purchase Orders**: Generate vendor purchase orders
- **Payments**: Record customer receipts and vendor payments

### 4. Reporting & Analytics
- **Balance Sheet**: View assets, liabilities, and equity
- **Profit & Loss**: Analyze income and expenses
- **Stock Reports**: Monitor inventory levels and valuation

---

## 🎨 Design System

### Color Palette
- **Primary**: Blue (action buttons, links, active states)
- **Success**: Green (positive indicators, receipts)
- **Warning**: Yellow/Orange (pending states)
- **Error**: Red (negative indicators, payments)
- **Neutral**: Gray (text, borders, backgrounds)

### UI Components
- Cards with hover effects
- Modal dialogs for forms
- Status badges with color coding
- Responsive tables and grids
- Icon-based navigation

---

## 🚀 Deployment

### Production Build
```bash
npm run build
```

The build output will be in the `dist/` directory.

### Environment Variables
Ensure the following environment variables are set in production:
- `VITE_SUPABASE_URL` – Your Supabase project URL
- `VITE_SUPABASE_ANON_KEY` – Your Supabase anonymous key

### Hosting Options
- **Vercel** – Recommended for React applications
- **Netlify** – Simple deployment with Git integration
- **AWS S3** – Static site hosting
- **GitHub Pages** – Free hosting for public repositories

---

## 🛣 Roadmap

### Planned Features
- [ ] GST/Regional Tax Support
- [ ] QR/Barcode Scanning
- [ ] Invoice PDF Generation
- [ ] Email Integration for Invoices
- [ ] Role-Based Access Controls Enhancement
- [ ] Cloud Printing for Invoices
- [ ] Multi-currency Support
- [ ] Advanced Analytics Dashboard
- [ ] Mobile App (React Native)
- [ ] API Documentation

---

## 🧪 Testing

Currently, the project uses mock data for demonstration. Future versions will include:
- Unit tests with Jest
- Integration tests with React Testing Library
- E2E tests with Playwright

---

## 📝 Scripts

### Available NPM Scripts
- `npm run dev` – Start development server
- `npm run build` – Build for production
- `npm run lint` – Run ESLint
- `npm run preview` – Preview production build

---

## 👥 Contributors

- **Rishan Menezes** – Project Lead
- **Rakesh G** – Development
- **Nagaraju HL** – Development
- **Prithvi HN** – Development

---

## 📄 License

This project is licensed under the MIT License.

---

## 🙌 Contributing

We welcome contributions! To contribute:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Contribution Guidelines
- Follow the existing code style
- Add comments for complex logic
- Update the README as needed
- Test your changes thoroughly

---

## 📞 Support

For support, questions, or suggestions:
- Open an issue on GitHub
- Contact the development team
- Check existing documentation

---

## 🎥 Demo

Watch the live demo on YouTube:
👉 https://youtu.be/phUE_kJ-SBY?si=O-B66feXB_Y3p4xR

---

## 🌟 Acknowledgments

- Built with React and TypeScript
- Styled with Tailwind CSS
- Icons by Lucide React
- Backend powered by Supabase
- Inspired by modern accounting software

---

**Shiv Furniture Cloud** – Simplifying accounting and inventory management for furniture manufacturers.
