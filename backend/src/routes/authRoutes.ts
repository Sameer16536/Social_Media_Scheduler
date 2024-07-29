import {  Router } from "express";
import { PrismaClient } from "@prisma/client";
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import zod from 'zod'
import { JWT_SECRET } from "../config";


const router = Router()
const prisma = new PrismaClient()

//input validation
const signUpValidationn = zod.object({
    email: zod.string().email(),
    name: zod.string(),
    password: zod.string().min(6).max(16)
})

const loginValidation = zod.object({
    email: zod.string().email(),
    password: zod.string().min(6).max(16)
})

//Signup
router.post('/signup', async (req, res) => {
    const validateBody = signUpValidationn.safeParse(req.body)
    if (!validateBody) {
        return res.status(400).json({ message: "Invalid Inputs" })
    }
    try {
        const { email, name, password } = req.body
        //find if user already exists::
        const user = await prisma.user.findUnique({ where: { email } })
        if (user) {
            return res.status(400).json({ message: "User already exists" })
        }
        // Hash the password + salting 
        const hasedPassword = await bcrypt.hash(password, 10)
        //create the user:
        const newUser = await prisma.user.create({
            data: {
                email: email,
                name: name,
                password: hasedPassword
            }
        })
    }
    catch (error) {
        res.status(500).json({ error: error })
    }
})





//login
router.post('/login', async (req, res) => {
    const validateBody = loginValidation.safeParse(req.body)
    if (!validateBody) {
        return res.status(400).json({ message: "Invalid Inputs" })
    }
    try {
        const { email, password } = req.body
        const user = await prisma.user.findUnique({ where: { email } })
        if (!user) {
            return res.status(400).json({ message: "User not found" })
        }
        //password validation::
        const isValidPassword = await bcrypt.compare(password, user.password)
        if (!isValidPassword) {
            return res.status(400).json({ message: "Invalid Password" })
        }

        //Token verification::
        const token = jwt.sign({userId:user.id},JWT_SECRET,{expiresIn:'1h'})
        res.cookie('token',token,{httpOnly:true})
        res.json({ id: user.id, email: user.email, token })
    }
    catch (error) {
        res.status(500).json({ error: error })
    }
})
