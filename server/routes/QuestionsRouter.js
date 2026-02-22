import express from "express";
import db from "../dataDBConnections.js";

const router = express.Router();

// GET QUESTIONS
router.get("/", async(req,res)=>{

try{

const [rows] = await db.query("SELECT * FROM questions");

res.json(rows);

}
catch(err){
res.status(500).json(err);
}

});

// ADD QUESTION
router.post("/", async(req,res)=>{

const {title,body} = req.body;

try{

await db.query(
"INSERT INTO questions(title,body) VALUES (?,?)",
[title,body]
);

res.json({success:true});

}
catch(err){

console.log(err);
res.status(500).json(err);

}

});

export default router;
