const router=require("express").Router();
const db=require("../config/db");

router.post("/",(req,res)=>{
 const {title,content,user_id,category_id}=req.body;

 db.query(
 "INSERT INTO questions(title,content,user_id,category_id) VALUES(?,?,?,?)",
 [title,content,user_id,category_id],
 ()=>res.send("Question added")
 );
});

router.get("/:cat",(req,res)=>{
 db.query(
 "SELECT * FROM questions WHERE category_id=?",
 [req.params.cat],
 (err,data)=>res.json(data)
 );
});

module.exports=router;
