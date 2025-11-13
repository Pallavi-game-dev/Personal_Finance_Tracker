"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.login = exports.register = exports.prisma = void 0;
const client_1 = require("../generated/prisma/client");
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
exports.prisma = new client_1.PrismaClient();
const register = async (req, res) => {
    try {
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
