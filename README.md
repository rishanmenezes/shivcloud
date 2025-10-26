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

--

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
