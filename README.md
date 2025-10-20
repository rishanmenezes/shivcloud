
🪑 Shiv Furniture Cloud
📊 Complete Accounting & Inventory Platform for Furniture Manufacturers

Shiv Furniture Cloud is a comprehensive, cloud-based accounting and inventory management solution tailored specifically for the furniture manufacturing industry. It streamlines your entire workflow — from sales and purchases to invoicing, inventory tracking, payments, and financial reporting — all within a modern and responsive web interface.

🚀 Features Overview

🔐 Secure Authentication
Robust user sign-up and login powered by Supabase Authentication.

👥 Contacts Management
Maintain detailed records of customers and suppliers with full interaction history.

🛋 Product Catalog with Stock Tracking
Organize products, manage variants, and monitor inventory levels in real time.

📦 Sales Workflow
Seamlessly handle Sales Orders → Invoices → Payments with automated inventory adjustments.

📥 Purchases Workflow
Efficient Purchase Order and Billing system to manage procurement and vendor payments.

📊 Financial & Inventory Reporting
Generate real-time reports including Profit & Loss, Balance Sheets, Stock Valuation, and Partner Ledgers.

📱 Responsive UI
Fully optimized for desktop, tablet, and mobile — perfect for teams on the go.

🛠 Tech Stack
🔹 Frontend

React + TypeScript

Vite for blazing-fast development

Tailwind CSS + Shadcn UI + Radix UI for modern, accessible design

React Router DOM for routing

React Hook Form for intuitive form handling

TanStack Query for efficient data fetching

Recharts for beautiful data visualizations

🔹 Backend & Infrastructure

Supabase for backend services:

PostgreSQL database

Auth & session management

File storage

⚙️ Getting Started
1. Clone the Repository
git clone <repository-url>
cd Shiv-Furniture-Cloud

2. Install Dependencies
npm install
# or
bun install

3. Configure Environment Variables

Create a .env file at the root with the following credentials:

VITE_SUPABASE_URL="YOUR_SUPABASE_URL"
VITE_SUPABASE_ANON_KEY="YOUR_SUPABASE_ANON_KEY"

4. Start the Development Server
npm run dev
# or
bun run dev


Application will be available at: http://localhost:5173

📖 Usage Guide

Sign Up / Login to access the platform.

Add Contacts: Manage customer and supplier profiles.

Manage Products: Add furniture items, configure tax, and track stock.

Handle Sales: Create Sales Orders → Generate Invoices → Record Payments.

Track Purchases: Manage Purchase Orders and Bills.

Analyze Reports: Access financials, inventory levels, and partner balances.

📂 Project Structure
Shiv-Furniture-Cloud/
├── public/               # Static assets
├── src/
│   ├── App.tsx
│   ├── components/       # Reusable UI components
│   ├── hooks/            # Custom React hooks (auth, queries)
│   ├── integrations/     # Supabase & third-party services
│   ├── lib/              # Utilities and helper functions
│   ├── pages/            # Application pages (Auth, Orders, Reports, etc.)
│   └── main.tsx
├── supabase/             # Supabase config & migrations
├── .env                  # Environment configuration
├── package.json          # Dependencies & scripts
├── tailwind.config.ts    # Tailwind configuration
├── vite.config.ts        # Vite build setup
└── README.md             # Project documentation

🖼 Screenshots (Optional)

You can include screenshots here showing the dashboard, sales orders, and reports.


▶️ Watch a full walkthrough:
👉 https://youtu.be/phUE_kJ-SBY?si=O-B66feXB_Y3p4xR


🌍 Deployment

Coming soon: Vercel / Netlify deployment instructions.

🛣 Roadmap

 GST & Regional Tax Integration

 Barcode / QR Code Scanning Support

 Email PDF Invoices to Customers

 Role-Based Access Control (Admin / Staff / Viewer)

 Cloud Print Support for Billing

👥 Contributors

Rishan Menezes

Rakesh G

Nagaraju HL

Prithvi HN


🙌 Get Involved

Found a bug or want to contribute?
Feel free to fork the repo, open an issue, or submit a pull request!








# 🪑 Shiv Furniture Cloud

### 📊 Complete Accounting & Inventory Platform for Furniture Manufacturers

**Shiv Furniture Cloud** is a cloud-based accounting and inventory management platform, purpose-built for furniture manufacturers. It helps streamline operations from sales and procurement to invoicing, stock control, payments, and financial reporting — all in one responsive web application.

---

## 🚀 Features

- 🔐 **Authentication** – Secure login/signup with Supabase
- 👥 **Contact Management** – Manage customers and suppliers
- 🛋 **Product Catalog** – Track stock levels, taxes, and product data
- 📦 **Sales Workflow** – Sales Orders → Invoices → Payments with stock auto-update
- 📥 **Purchase Workflow** – Purchase Orders → Bills → Payments
- 📊 **Reports & Analytics** – Real-time P&L, Balance Sheet, Stock Reports, Partner Ledger
- 📱 **Mobile Responsive** – Fully functional on desktop, tablet, and mobile

---

## 🛠 Tech Stack

### Frontend
- **React** + **TypeScript**
- **Vite** for fast builds
- **Tailwind CSS**, **Shadcn UI**, **Radix UI**
- **React Router**, **React Hook Form**
- **TanStack Query**, **Recharts**

### Backend & Services
- **Supabase**:
  - PostgreSQL (Database)
  - Auth (User sessions)
  - Storage (File uploads)

---

## ⚙️ Getting Started

### 1. Clone the Repository
```bash
git clone https://github.com/Thenameisrakesh/shivcloud.git
cd shivcloud

Install Dependencies

npm install
# or
bun install

Configure Environment Variables

Create a .env file in the root folder with:

VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key

Run the App
npm run dev
# or
bun run dev


Access locally at: http://localhost:5173

📖 How to Use

🔐 Sign up or log in

👥 Add customer and supplier contacts

🛋 Add products and manage stock

📦 Create sales orders → generate invoices → record payments

📥 Record purchases via POs and bills

📊 Analyze real-time reports

📂 Project Structure\

shivcloud/
├── public/               # Static files
├── src/
│   ├── App.tsx
│   ├── components/       # UI components
│   ├── hooks/            # Custom hooks
│   ├── integrations/     # Supabase & APIs
│   ├── lib/              # Utility functions
│   ├── pages/            # Routes & views
│   └── main.tsx
├── supabase/             # Config & migrations
├── .env                  # Environment config
├── package.json          # Dependencies
├── tailwind.config.ts    # Tailwind setup
├── vite.config.ts        # Vite config
└── README.md             # You're here!

🎥 Demo

📺 Watch the live demo on YouTube:
👉 https://youtu.be/phUE_kJ-SBY?si=O-B66feXB_Y3p4xR

🛣 Roadmap

 GST/Regional Tax Support

 QR/Barcode Scanning

 Invoice PDF + Email Support

 Role-Based Access Controls

 Cloud Printing for Invoices

👥 Contributors

Rishan Menezes

Rakesh G

Nagaraju HL

Prithvi HN

📝 License

This project is licensed under the MIT License

🙌 Get Involved

💡 Found a bug? Want to contribute?
Fork the repo, create a branch, and submit a pull request!
