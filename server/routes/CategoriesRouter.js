const router=require("express").Router();
const db=require("../dataDBConnections.js");

router.get("/",(req,res)=>{
 db.query("SELECT * FROM categories",(err,data)=>{
   if(err) return res.send(err);
   res.json(data);
 });
});

module.exports = router;
