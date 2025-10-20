
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