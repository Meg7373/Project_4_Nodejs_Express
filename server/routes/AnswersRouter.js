const router=require("express").Router();
const db=require("../dataDBConnections.js");

router.post("/",(req,res)=>{
 const {content,user_id,question_id}=req.body;

 db.query(
 "INSERT INTO answers(content,user_id,question_id) VALUES(?,?,?)",
 [content,user_id,question_id],
 ()=>res.send("Answer added")
 );
});

router.get("/:qid",(req,res)=>{
 db.query(
 "SELECT * FROM answers WHERE question_id=?",
 [req.params.qid],
 (err,data)=>res.json(data)
 );
});

module.exports=router;
