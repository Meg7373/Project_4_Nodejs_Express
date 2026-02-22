import express from "express";
import db from "../dataDBConnections.js";

const router = express.Router();

// GET ALL CATEGORIES FROM MYSQL
router.get("/", async (req,res)=>{

try{

const [rows] = await db.query("SELECT * FROM categories");

res.json(rows);

}
catch(err){

console.log(err);
res.status(500).json({error:"db error"});

}

});

export default router;
