import { Router } from "express";
import { register, login, addTransaction, addCategoris, getCategoris, getTransaction, getDashboard, getfinancereport } from "../controllers/auth.controller";

const router = Router();

router.post("/register", register);
router.post("/login", login);
router.post("/addtransaction", addTransaction);
router.get("/getTransaction", getTransaction);
router.post("/addcategory", addCategoris);
router.get("/getcategory", getCategoris);
router.get("/getdashboard", getDashboard);
router.get("/getfinancereport", getfinancereport);



export default router;