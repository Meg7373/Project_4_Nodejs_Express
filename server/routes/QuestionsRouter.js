import express from "express";
import db from "../dataDBConnections.js";

const router = express.Router();


router.get("/", async (req,res)=>{

try{

const [rows] = await db.query(`
SELECT q.*, u.username, c.name as category
FROM questions q
LEFT JOIN users u ON q.user_id = u.id
LEFT JOIN categories c ON q.category_id = c.id
ORDER BY q.created_at DESC
`);

res.json(rows);

}catch(err){

console.log(err);
res.status(500).send("DB error");

}

});


router.get("/category/:id", async(req,res)=>{

try{

const [rows] = await db.query(
`SELECT id,title,content,created_at 
 FROM questions 
 WHERE category_id=? 
 ORDER BY created_at DESC`,
[req.params.id]
);

res.json(rows);

}catch(err){

console.log(err);
res.status(500).send("Failed");

}

});



router.post("/", async (req,res)=>{

const {title,content,category_id,user_id} = req.body;

if(!title || !content){
return res.status(400).json({message:"Missing title or content"});
}

try{

await db.query(
"INSERT INTO questions(title,content,category_id,user_id) VALUES(?,?,?,?)",
[
title,
content,
category_id || 1,
user_id || 1
]
);

res.json({message:"Question posted"});

}catch(err){

console.log("QUESTION INSERT ERROR:",err);
res.status(500).json({message:"Insert failed"});

}

});


export default router;
