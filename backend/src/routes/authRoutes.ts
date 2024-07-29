import { Router } from "express";
import { PrismaClient } from "@prisma/client";
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import zod from 'zod'

const router = Router()
const prisma = new PrismaClient()

//input validation
const signUpValidationn = zod.object({
    email: zod.string().email(),
    password: zod.string().min(6).max(16)
})
//Signup






//login