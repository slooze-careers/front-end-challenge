# Demo Login Credentials

The Commodities Management System uses a mock authentication layer for this challenge. Roles are dynamically assigned based on the email provided.

## 🛠️ Manager Role
The Manager has full system access, including the exclusive overview Dashboard and product management capabilities.

- **Email:** `manager@slooze.xyz`
- **Password:** `password123`

## 📦 Store Keeper Role
The Store Keeper has access to view, add, and edit products, but is restricted from accessing the Manager Dashboard.

- **Email:** `store@slooze.xyz`
- **Password:** `password123`

---
*Note: Any email containing the word "manager" or "store" combined with the password `password123` will successfully authenticate into the respective role.*

---

## 🚀 Running the App Locally

To run this project on your local machine, follow these steps:

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start the development server:**
   ```bash
   npm run dev
   ```

3. **Open the application:**
   Navigate to [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🌐 Live Demo

This application is deployed and accessible online via Vercel:

🔗 **[View Live Site](https://front-end-challenge-ebon.vercel.app/)** 
