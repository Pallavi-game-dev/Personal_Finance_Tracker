import { Router } from "express";
import { register, login, addTransaction, addCategoris, getCategoris, getTransaction } from "../controllers/auth.controller";

const router = Router();

router.post("/register", register);
router.post("/login", login);
router.post("/addtransaction", addTransaction);
router.get("/getTransaction", getTransaction);
router.post("/addcategory", addCategoris);
router.get("/getcategory", getCategoris);



export default router;