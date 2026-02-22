import express from "express";
import db from "../dataDBConnections.js";

const router = express.Router();


// ======================
// GET ALL QUESTIONS
// ======================
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


// ======================
// GET QUESTIONS BY CATEGORY
// ======================
router.get("/category/:id", async (req,res)=>{

try{

const [rows] = await db.query(
"SELECT * FROM questions WHERE category_id=? ORDER BY created_at DESC",
[req.params.id]
);

res.json(rows);

}catch(err){

console.log(err);
res.status(500).send("DB error");

}

});


// ======================
// CREATE QUESTION
// ======================
router.post("/", async (req,res)=>{

const {title,content,category_id,user_id} = req.body;

try{

await db.query(
"INSERT INTO questions(title,content,category_id,user_id) VALUES(?,?,?,?)",
[title,content,category_id || 1,user_id || 1]
);

res.send("Question posted");

}catch(err){

console.log(err);
res.status(500).send("Insert failed");

}

});

export default router;
