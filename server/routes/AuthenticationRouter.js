router.post("/register", async (req,res)=>{

const {username,email,password} = req.body;

try{

// 🚨 CHECK DUPLICATE EMAIL
const [existing] = await db.query(
"SELECT id FROM users WHERE email=?",
[email]
);

if(existing.length > 0){
return res.status(400).json({message:"Email already registered"});
}

// HASH PASSWORD
const hash = await bcrypt.hash(password,10);

// INSERT USER
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
