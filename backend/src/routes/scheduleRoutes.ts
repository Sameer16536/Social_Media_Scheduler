import { Router } from "express";
import zod from 'zod';
const router =  Router()
router.post('/schedulepost',async(req,res)=>{
    res.json({msg:"meow"})
})