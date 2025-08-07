require('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require('path');
const connectDB = require('./config/db')
const authRoutes = require('./routes/authRoutes')
const incomeRoutes = require('./routes/incomeRoutes')
const expenseRoutes = require('./routes/expenseRoutes')
const dashboardRoutes = require('./routes/dashboardRoutes')
const app = express();
 
const allowedOrigins = [
  'http://localhost:5173',
  "https://budgetwise-rushabhpal.netlify.app"
];
app.use((req, res, next) => {
  console.log('Origin:', req.headers.origin);
  next();
});
app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error('Not allowed by CORS'));
      }
    },
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true
  })
);


app.use(express.json());
connectDB();

app.use('/api/v1/auth',authRoutes);
app.use('/api/v1/income',incomeRoutes);
app.use('/api/v1/expense',expenseRoutes);
app.use('/api/v1/dashboard',dashboardRoutes);


const PORT = process.env.PORT || 5000;
app.listen(PORT,()=>console.log(`Server runing on port ${PORT}`))
