![Logo](./public/FFFFFF-1.png)
# Slooze take home challenge-front-end!!

## Commodities Management Feature Flow

We are introducing a **Commodities Management System** to **diversify product variety** and meet customer expectations. This feature includes a structured **role-based access system**, UI enhancements, and authentication mechanisms.

---

## Feature Breakdown & Points Allocation
### **1️⃣ Authentication & Access**
- **Login (5 Points)** → Users authenticate via email & password.  
- **Role-Based Access** → Only **Managers** can access the **dashboard**.  

### **2️⃣ Core UI Features**
- **Dashboard (30 Points)** → Available **only for Managers** to oversee operations.  
- **View All Products (10 Points)** → Accessible to both **Managers & Store Keepers**.  
- **Add/Edit Products (15 Points) [Optional]** → Modify product inventory.  

### **3️⃣ UI Enhancements**
- **Light/Dark Mode (15 Points)** → Implement theme switching.  
- **Front-End Role-Based Menu Restrictions (Bonus: 25 Points)** → Restrict UI options dynamically.

### Tech Stack:
- **Backend**: NestJS · GraphQL · Prisma
- **Frontend**: Next.js · TypeScript · Tailwind CSS · Apollo Client
- **Auth**: Role-based access control (RBAC) · Bonus: Re-BAC
---

## 🔒 Role-Based Access Rules
| **Feature**           | **Manager** | **Store Keeper** |
|----------------------|------------|----------------|
| **Login**            | ✅          | ✅              |
| **Dashboard**        | ✅          | ❌              |
| **View Products**    | ✅          | ✅              |
| **Add/Edit Products**| ✅          | ✅              |
| **Role-Based UI**    | ✅          | ✅              |

---

## 🛠️ Implementation Steps
### **A) Login Flow**
1. Create a **login page** with validation.  
2. Send API request → `POST /auth/login`.  
3. Store **session details securely**.  

### **B) Dashboard Flow**
1. Show **statistics & insights** for commodities.  
2. Restrict access using **role-based gating**.  

### **C) Product Management**
1. Fetch product data → `GET /products`.  
2. Allow **adding/editing** via forms (`POST/PUT /products`).  

### **D) UI Enhancements**
1. Implement **Light/Dark Mode toggle** with localStorage.  
2. **Role-based UI restrictions** for platform features.  

---

## 🔥 Bonus Challenge: Role-Based Menu Restriction
✅ Show/hide **menu items based on roles** (`Manager`, `Store Keeper`).  
✅ Implement **router guards** to prevent unauthorized access.  
✅ Ensure restricted buttons/options remain **disabled dynamically**.  

---

## Reference:

- Refer to the [Figma](https://www.figma.com/design/uD9IW2pEx2JRB8xZJD11dx/Slooze-Take-Home-Challenge---Commodity?node-id=1-108&t=KAwt0LRM6NLVV3Qm-1) for more details on the problem statement
- assume / affix sample data, components and other requirments you may have and state them out during your submission

## 📤 Submission
- Upload your code to GitHub or share as a CodeSandbox/StackBlitz link
- Include instructions to run the app locally (e.g., npm install && npm run dev)
- (Optional) Deploy and share a live link using Vercel, Netlify, etc.

## Connect with Us:

Reach out to **[careers@slooze.xyz](mailto:careers@slooze.xyz)** to submit your solutions or if you may have any questions related to the challenege

## © Copyright Notice

**© Slooze. All Rights Reserved.**

Please do not share or distribute this material outside the intended evaluation process.  
For queries, contact us !!
