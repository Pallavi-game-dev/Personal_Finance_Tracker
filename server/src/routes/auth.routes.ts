import { Router } from "express";
import { register, login, addTransaction, addCategoris, getCategoris, getTransaction, getDashboard, getfinancereport, getreportcategorywise, deletecategory, addbugets, getbugets } from "../controllers/auth.controller";

const router = Router();

router.post("/register", register);
router.post("/login", login);
router.post("/addtransaction", addTransaction);
router.get("/getTransaction", getTransaction);
router.post("/addcategory", addCategoris);
router.get("/getcategory", getCategoris);
router.get("/getdashboard", getDashboard);
router.get("/getfinancereport", getfinancereport);
router.get("/getreportcategorywise", getreportcategorywise);
router.get("/deletecategory", deletecategory);
router.post("/addbugets", addbugets);
router.get("/getbugets", getbugets);



export default router;