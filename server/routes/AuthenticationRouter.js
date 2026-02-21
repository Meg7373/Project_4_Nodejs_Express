import express from "express";
import db from "../dataDBConnections.js";
import bcrypt from "bcrypt";

const router = express.Router();

router.post("/register", async (req,res)=>{
 const {username,email,password} = req.body;
 const hash = await bcrypt.hash(password,10);

 await db.execute(
   "INSERT INTO users(username,email,password) VALUES(?,?,?)",
   [username,email,hash]
 );

 res.send("Registered");
});

router.post("/login", async (req,res)=>{
 const {email,password} = req.body;

 const [rows] = await db.execute(
   "SELECT * FROM users WHERE email=?",
   [email]
 );

 if(!rows.length) return res.status(400).send("User not found");

 const valid = await bcrypt.compare(password,rows[0].password);

 if(!valid) return res.status(400).send("Wrong password");

 res.json(rows[0]);
});

export default router;
