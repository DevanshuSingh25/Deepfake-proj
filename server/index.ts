import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import { register, login, logout, me, authMiddleware } from './auth.js';
import { PORT } from './env.js';
import './db.js'; // Initialize database

const app = express();

// Middleware
app.use(
  cors({
    origin: 'http://localhost:8080',
    credentials: true,
  })
);
app.use(express.json());
app.use(cookieParser());

// Routes
app.post('/api/auth/register', register);
app.post('/api/auth/login', login);
app.post('/api/auth/logout', logout);
app.get('/api/auth/me', authMiddleware, me);

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
