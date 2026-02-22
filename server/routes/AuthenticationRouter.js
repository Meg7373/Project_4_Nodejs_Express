router.post("/login", async (req,res)=>{

const {email,password} = req.body;

try{

const [rows] = await db.query(
"SELECT * FROM users WHERE email=?",
[email]
);

// 🚨 USER DOES NOT EXIST
if(rows.length === 0){
return res.status(401).json({message:"No account found with this email"});
}

const user = rows[0];

// CHECK PASSWORD
const valid = await bcrypt.compare(password,user.password);

if(!valid){
return res.status(401).json({message:"Incorrect password"});
}

// SUCCESS LOGIN
res.json({
id:user.id,
username:user.username,
email:user.email
});

}catch(err){

console.log(err);
res.status(500).send("Login failed");

}

});
