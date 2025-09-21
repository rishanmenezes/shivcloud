# 🪑 Shiv Furniture Cloud

## 📊 Complete Accounting & Inventory Solution for Furniture Manufacturing

**Shiv Furniture Cloud** is a full-stack accounting platform tailored for furniture manufacturers. It streamlines sales, purchases, invoices, inventory, payments, and financial reports — all in one place.

---

## 🚀 Key Features
- 🔐 **User Authentication** – Secure sign-up/login with Supabase
- 👥 **Contacts Management** – Store and manage customer & supplier details
- 🛋 **Product Catalog** – Add, update, and organize furniture items with stock tracking
- 📦 **Sales Workflow** – Sales Orders → Invoices → Payments (auto inventory updates)
- 📥 **Purchase Workflow** – Purchase Orders → Bills → Payments
- 📊 **Reports & Analytics** – Real-time insights (P&L, Balance Sheet, Stock Reports, Partner Ledger)
- 📱 **Mobile Responsive** – Works on desktop, tablet, and mobile seamlessly

---

## 🛠 Tech Stack

### 🔹 Frontend
- React ⚛️
- TypeScript
- Vite ⚡
- Tailwind CSS 🎨
- Shadcn UI + Radix UI
- React Router DOM
- React Hook Form
- TanStack Query
- Recharts 📊

### 🔹 Backend & Database
- Supabase (PostgreSQL, Authentication, Storage)

---

## ⚙️ Installation

### Clone the Repository
```bash
git clone <repository-url>
cd Shiv-Furniture-Cloud
```

### Install Dependencies
```bash
npm install
# or
bun install
```

### Configure Environment Variables
Create a `.env` file in the root directory and add Supabase credentials:
```env
VITE_SUPABASE_URL="YOUR_SUPABASE_URL"
VITE_SUPABASE_ANON_KEY="YOUR_SUPABASE_ANON_KEY"
```

### Run Development Server
```bash
npm run dev
# or
bun run dev
```

👉 Accessible at [http://localhost:5173](http://localhost:5173)

---

## 📖 Usage Guide
- 🔑 **Sign Up / Login** to your account
- 👥 **Manage Contacts** (customers & suppliers)
- 🛋 **Add Furniture Products** with stock levels & tax settings
- 📦 **Create Sales Orders** → Convert to Invoices → Track Payments
- 📥 **Record Purchases** via Purchase Orders & Bills
- 📊 **Generate Reports** for finance, inventory, and business health

---

## 📂 Project Structure
```
Shiv-Furniture-Cloud/
├── public/               # Static assets
├── src/
│   ├── App.tsx
│   ├── components/       # UI components
│   ├── hooks/            # Custom hooks (e.g., auth, queries)
│   ├── integrations/     # Supabase & external services
│   ├── lib/              # Utility functions
│   ├── pages/            # Pages (Auth, Products, Orders, Reports, etc.)
│   └── main.tsx
├── supabase/             # Config & migrations
├── .env                  # Environment variables
├── package.json          # Dependencies & scripts
├── tailwind.config.ts    # Tailwind setup
├── vite.config.ts        # Vite build config
└── README.md             # Documentation
```

---

## 🎥 Demo
📺 Watch the demo video here:
👉 https://youtu.be/phUE_kJ-SBY?si=O-B66feXB_Y3p4xR

---

## 👥 Contributors
- Rishan Menezes
- Rakesh G
- Nagaraju HL
- Prithvi HN