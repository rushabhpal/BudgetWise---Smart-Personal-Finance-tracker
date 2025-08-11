# BudgetWise – Expense Tracker (MERN Stack)

BudgetWise is a full-stack expense tracking application designed to help individuals and small business owners manage their income, expenses, and profits with ease.  
It provides real-time financial insights through interactive charts and secure cloud-based data storage.

---

## 🚀 Features

- **User Authentication** – Secure sign-up and login with JWT-based authentication.
- **Transaction Management** – Add, edit, and delete income/expense entries with category tags.
- **Data Visualization** – Interactive Pie, Bar, and Line charts for easy financial insights.
- **Profit & Loss Tracking** – Calculate net profit or loss for any date range.
- **Cloud Storage** – All data stored in MongoDB Atlas for consistent access from anywhere.
- **Responsive Design** – Works seamlessly on desktop and mobile.
- **Deployed Online** – Accessible via [Live Demo](https://budgetwise-rushabhpal.netlify.app/).

---

## 🛠 Tech Stack

- **Frontend:** React.js, HTML5, CSS3, Bootstrap, Chart.js
- **Backend:** Node.js, Express.js
- **Database:** MongoDB Atlas, Mongoose
- **Authentication:** JWT (JSON Web Token)
- **Deployment:** Netlify (Frontend), Render (Backend)

---

## 📸 Screenshots
<img width="1888" height="941" alt="Screenshot 2025-08-11 210604" src="https://github.com/user-attachments/assets/eace9559-7fd8-448d-89f7-2f24fbfec318" />
<img width="1910" height="931" alt="Screenshot 2025-08-11 210729" src="https://github.com/user-attachments/assets/44f12187-1e55-47dc-9576-5cefc9fd7ee2" />
<img width="1905" height="932" alt="Screenshot 2025-08-11 210741" src="https://github.com/user-attachments/assets/205ec079-0b13-410d-b4ef-69ba8480c6b0" />



---

## 📂 Folder Structure
BudgetWise/
│
├── backend/ # Express.js server, API routes, DB config
├── frontend/ # React.js app
├── README.md # Project documentation
└── package.json

Install dependencies for backend
cd backend
npm install

Install dependencies for frontend
cd ../frontend
npm install

Setup environment variables
Create a .env file in /backend with:
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret

Run the backend

bash
Copy
Edit

cd backend
npm run dev

Run the frontend
cd ../frontend
npm start
