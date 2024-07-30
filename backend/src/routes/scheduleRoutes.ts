import { Router } from "express";

import { PrismaClient } from "@prisma/client";
const router =  Router()
const prisma = new PrismaClient()

//Schedule the posts
router.post('/',async(req,res)=>{
    const {content,platforms,ScheduleDateTime,userId} = req.body
    try{
        const schedule = await prisma.scehdulePost.create({ 
            data:{
            content:content,
            platforms:platforms,
            ScheduleDateTime: new Date(ScheduleDateTime),
            userId:userId
        }
    })
    res.status(201).json(schedule)
          
        
    }
    catch(error){
        console.log(error)
    }
})



//get posts:::
router.get('/',async(req,res)=>{
    try {
        const posts = await prisma.scehdulePost.findMany()
        res.json(posts)
    } catch (error) {
        console.error(error)
        res.json({error:"Failed to fetch all the posts::"})
    }
})

export default router