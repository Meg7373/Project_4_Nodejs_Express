import express from "express";
import db from "../dataDBConnections.js";
import bcrypt from "bcrypt";

const router = express.Router();

router.post("/register", async (req,res)=>{

const {email,password} = req.body;

    try{

        const [existing] = await db.query(
            "SELECT id FROM users WHERE email=?",
            [email]
        );

        if(existing.length>0){
            return res.status(400).json({message:"Email exists"});
        }

        const hash = await bcrypt.hash(password,10);

        const [result] = await db.query(
            "INSERT INTO users(email,password) VALUES(?,?)",
            [email,hash]
        );

        res.json({
            id: result.insertId
        });

    }catch(err){

        console.log(err);
        res.status(500).send("Register failed");

    }
    });

router.post("/login", async (req,res)=>{

    const {email,password} = req.body;

    try{

        const [rows]=await db.query(
            "SELECT * FROM users WHERE email=?",
            [email]
        );

        if(rows.length===0){
            return res.status(401).json({message:"User not found"});
        }

        const user=rows[0];

        const valid=await bcrypt.compare(password,user.password);

        if(!valid){
            return res.status(401).json({message:"Wrong password"});
        }

        res.json({id:user.id});

    }catch(err){

        console.log(err);
        res.status(500).send("Login failed");
    }

});

export default router;