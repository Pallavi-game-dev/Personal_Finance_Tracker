"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addbugets = exports.deletecategory = exports.getreportcategorywise = exports.getfinancereport = exports.getDashboard = exports.getCategoris = exports.addCategoris = exports.getTransaction = exports.addTransaction = exports.login = exports.register = exports.prisma = void 0;
const client_1 = require("../generated/prisma/client");
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
exports.prisma = new client_1.PrismaClient();
const register = async (req, res) => {
    try {
        console.log("register Called");
        const { name, email, password } = req.body;
        const userExist = await exports.prisma.user.findUnique({
            where: {
                email
            }
        });
        if (userExist) {
            return res.status(401).json({ message: 'User Already Exists,Plese Login In' });
        }
        const hashedpassword = await bcrypt_1.default.hash(password, 10);
        const user = await exports.prisma.user.create({
            data: { name, email, password: hashedpassword }
        });
        res.status(200).json({ message: "User Added succesfully", user });
    }
    catch (error) {
        console.error("error", error);
        res.status(500).json({ message: "Server Error" });
    }
};
exports.register = register;
const login = async (req, res) => {
    try {
        console.log("login Called");
        const { email, password } = req.body;
        const userExsist = await exports.prisma.user.findUnique({ where: { email } });
        if (!userExsist) {
            return res.status(400).json({ message: "Invalid credentials" });
        }
        const checkpassword = await bcrypt_1.default.compare(password, userExsist.password);
        if (!checkpassword) {
            return res.status(400).json({ message: "Invalid credentials" });
        }
        const token = jsonwebtoken_1.default.sign({ id: userExsist.id, email: userExsist.email }, process.env.JWT_SECRET, { expiresIn: '1d' });
        // 🔹 Save token in the database
        await exports.prisma.user.update({
            where: { id: userExsist.id },
            data: { token },
        });
        res.status(200).json({
            message: "Login successful",
            token,
            user: { id: userExsist.id, name: userExsist.name, email: userExsist.email },
        });
    }
    catch (error) {
        console.error("error", error);
        res.status(500).json({ message: "Server Error" });
    }
};
exports.login = login;
const addTransaction = async (req, res) => {
    try {
        const { title, amount, tranaction_type, category, user_id } = req.body;
        const trancation = await exports.prisma.transaction.create({
            data: {
                amount: amount,
                title: title,
                category_id: category,
                userId: user_id,
                transaction_type: tranaction_type
            }
        });
        return res.status(200).json({ message: "Transaction added succesfully", data: trancation });
    }
    catch (error) {
        console.error("error", error);
        return res.status(500).json({ message: "Server Error" });
    }
};
exports.addTransaction = addTransaction;
const getTransaction = async (req, res) => {
    try {
        const userId = Number(req.query.id);
        if (!userId) {
            return res.status(400).json({ message: "User ID is required" });
        }
        const data = await exports.prisma.transaction.findMany({
            where: { userId },
            include: {
                category: {
                    select: { category: true }
                }
            }
        });
        res.status(200).json({
            message: 'Transaction fetch successfully',
            data
        });
    }
    catch (error) {
        return res.status(500).json({ message: "Server Error" });
    }
};
exports.getTransaction = getTransaction;
const addCategoris = async (req, res) => {
    try {
        const { id, category } = req.body;
        const userExist = await exports.prisma.user.findFirst({ where: { id: id } });
        if (!userExist) {
            return res.status(401).json({ message: "User Not Exist" });
        }
        const checkExist = await exports.prisma.category.findFirst({ where: { category: category, userId: id } });
        if (checkExist) {
            return res.status(401).json({ message: "Category Already Exists" });
        }
        const newcategory = await exports.prisma.category.create({
            data: { userId: id, category: category }
        });
        res.status(200).json({ message: "Category added Successfully", data: newcategory });
    }
    catch (error) {
        console.error("error", error);
        res.status(500).json({ message: "Server Error" });
    }
};
exports.addCategoris = addCategoris;
const getCategoris = async (req, res) => {
    try {
        const { id } = req.body;
        const userExist = await exports.prisma.user.findFirst({ where: { id: id } });
        if (!userExist) {
            return res.status(401).json({ message: "User Not Exist" });
        }
        const data = await exports.prisma.category.findMany({
            where: {
                userId: id
            }
        });
        res.status(200).json({ message: "Category added Successfully", data: data });
    }
    catch (error) {
        console.error("error", error);
        res.status(500).json({ message: "Server Error" });
    }
};
exports.getCategoris = getCategoris;
const getDashboard = async (req, res) => {
    try {
        const userId = req.body.id;
        if (!userId) {
            return res.status(400).json({ message: "User ID is required" });
        }
        const userExist = await exports.prisma.user.findFirst({ where: { id: userId } });
        if (!userExist) {
            return res.status(401).json({ message: "User Not Exist" });
        }
        // Query all transactions once
        const transactions = await exports.prisma.transaction.findMany({
            where: { userId },
            select: { amount: true, transaction_type: true }
        });
        let totalIncome = 0;
        let totalExpense = 0;
        transactions.forEach(t => {
            if (t.transaction_type === "CR")
                totalIncome += t.amount;
            if (t.transaction_type === "DR")
                totalExpense += t.amount;
        });
        const totalBalance = totalIncome - totalExpense;
        return res.status(200).json({
            message: "Data fetched successfully",
            data: { totalIncome, totalExpense, totalBalance }
        });
    }
    catch (error) {
        console.error("error", error);
        return res.status(500).json({ message: "Server Error" });
    }
};
exports.getDashboard = getDashboard;
const getfinancereport = async (req, res) => {
    try {
        const userId = req.body.id;
        const year = req.body.year;
        const userExist = await exports.prisma.user.findFirst({ where: { id: userId } });
        if (!userExist) {
            return res.status(401).json({ message: "User Not Exist" });
        }
        let startDate = new Date(year, 0, 1);
        let endDate = new Date(year, 11, 31, 23, 59, 59, 999);
        const getExpenceMonthWise = await exports.prisma.transaction.findMany({
            where: {
                userId: userId,
                transaction_type: client_1.TransactionType.CR,
                date: {
                    gte: startDate,
                    lte: endDate
                }
            },
            orderBy: {
                date: 'asc'
            }
        });
        const getIncomeMonthWise = await exports.prisma.transaction.findMany({
            where: {
                userId: userId,
                transaction_type: client_1.TransactionType.DR,
                date: {
                    gte: startDate,
                    lte: endDate
                }
            },
            orderBy: {
                date: 'asc'
            }
        });
        res.status(200).json({
            message: 'Data fetch succesfully',
            data: { getExpenceMonthWise, getIncomeMonthWise }
        });
    }
    catch (error) {
        console.error("error", error);
        res.status(500).json({ message: "Server Error" });
    }
};
exports.getfinancereport = getfinancereport;
const getreportcategorywise = async (req, res) => {
    try {
        const { userId, month, year } = req.body;
        const userExist = await exports.prisma.user.findFirst({ where: { id: userId } });
        if (!userExist) {
            return res.status(401).json({ message: "User Not Exist" });
        }
        // Month-year range
        const startDate = new Date(year, month - 1, 1);
        const endDate = new Date(year, month, 0, 23, 59, 59, 999);
        // Fetch DR (expense) transactions
        const transactions = await exports.prisma.transaction.findMany({
            where: {
                userId,
                transaction_type: client_1.TransactionType.DR,
                date: {
                    gte: startDate,
                    lte: endDate
                }
            },
            select: {
                amount: true,
                category: { select: { id: true, category: true } }
            }
        });
        // Group by category
        const categoryMap = {};
        transactions.forEach(tx => {
            const cat = tx.category.category;
            if (!categoryMap[cat]) {
                categoryMap[cat] = 0;
            }
            categoryMap[cat] += tx.amount;
        });
        // Convert to array format (chart friendly)
        const result = Object.keys(categoryMap).map(cat => ({
            category: cat,
            total: categoryMap[cat]
        }));
        res.status(200).json({
            message: 'Data fetch succesfully',
            data: result
        });
    }
    catch (error) {
        console.error("error", error);
        res.status(500).json({ message: "Server Error" });
    }
};
exports.getreportcategorywise = getreportcategorywise;
const deletecategory = async (req, res) => {
    try {
        const { userId, category_id } = req.body;
        const userExist = await exports.prisma.user.findFirst({ where: { id: userId } });
        if (!userExist) {
            return res.status(401).json({ message: "User Not Exist" });
        }
    }
    catch (error) {
    }
};
exports.deletecategory = deletecategory;
const addbugets = async (req, res) => {
    try {
        const { userId, category_id, limit } = req.body;
        const userExist = await exports.prisma.user.findFirst({ where: { id: userId } });
        if (!userExist) {
            return res.status(401).json({ message: "User Not Exist" });
        }
        const categoryExist = await exports.prisma.category.findFirst({ where: {
                id: category_id,
                userId: userId
            }
        });
        if (!categoryExist) {
            return res.status(401).json({ message: "User Not Exist" });
        }
        const data = await exports.prisma.budget.create({
            data: { userId: userId, category_id: category_id, limit: limit }
        });
        return res.status(200).json({ message: "Budget added" });
    }
    catch (error) {
        console.error("error", error);
        res.status(500).json({ message: "Server Error" });
    }
};
exports.addbugets = addbugets;
