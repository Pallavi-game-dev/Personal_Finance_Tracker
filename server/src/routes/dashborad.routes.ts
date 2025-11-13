import { addTransaction } from "controllers/dashboard.controller";
import { Router } from "express";
const router = Router();


router.post('/add_transaction',addTransaction)