import express from "express";
import db from "../dataDBConnections.js";
import bcrypt from "bcrypt";

const router = express.Router();


// ================= REGISTER =================
router.post("/register", async (req,res)=>{

const {username,email,password} = req.body;

try{

const [existing] = await db.query(
"SELECT id FROM users WHERE email=?",
[email]
);

if(existing.length>0){
return res.status(400).json({message:"Email already registered"});
}

const hash = await bcrypt.hash(password,10);

await db.query(
"INSERT INTO users(username,email,password) VALUES(?,?,?)",
[username,email,hash]
);

res.send("Registered successfully");

}catch(err){

console.log(err);
res.status(500).send("Register failed");

}

});


// ================= LOGIN =================
router.post("/login", async (req,res)=>{

const {email,password} = req.body;

try{

const [rows] = await db.query(
"SELECT * FROM users WHERE email=?",
[email]
);

if(rows.length===0){
return res.status(400).json({message:"User not found"});
}

const user = rows[0];

const match = await bcrypt.compare(password,user.password);

if(!match){
return res.status(400).json({message:"Wrong password"});
}

res.json({
id:user.id,
username:user.username
});

}catch(err){

console.log(err);
res.status(500).send("Login failed");

}

});

export default router;