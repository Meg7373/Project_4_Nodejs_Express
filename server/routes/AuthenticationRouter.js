const router=require("express").Router();
const db=require("dataDBConnections.js");
const bcrypt=require("bcrypt");

router.post("/register",async(req,res)=>{
 const {username,email,password}=req.body;
 const hash=await bcrypt.hash(password,10);

 db.query(
 "INSERT INTO users(username,email,password) VALUES(?,?,?)",
 [username,email,hash],
 (err)=> {
   if(err) return res.status(500).send(err);
   res.send("Registered");
 });
});

router.post("/login",(req,res)=>{
 const {email,password}=req.body;

 db.query(
 "SELECT * FROM users WHERE email=?",
 [email],
 async(err,result)=>{
   if(!result.length) return res.status(400).send("User not found");

   const valid=await bcrypt.compare(password,result[0].password);
   if(!valid) return res.status(400).send("Wrong password");

   res.json(result[0]);
 });
});

module.exports=router;
