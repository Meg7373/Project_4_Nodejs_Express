import {useState} from "react";
import api from "../api";
import {useNavigate} from "react-router-dom";

export default function Login(){

const nav=useNavigate();
const [email,setEmail]=useState("");
const [password,setPassword]=useState("");

async function login(e){
 e.preventDefault();

 try{
   const res=await api.post("/auth/login",{email,password});
   localStorage.setItem("user",JSON.stringify(res.data));
   nav("/dashboard");
 }
 catch{
   alert("Login failed");
 }
}

return(

<div className="d-flex justify-content-center align-items-center vh-100">

<div className="card p-4 shadow" style={{width:350}}>

<h3 className="mb-3 text-center">☕ BeanTalk</h3>

<form onSubmit={login}>
<input className="form-control mb-2" placeholder="Email"
onChange={e=>setEmail(e.target.value)}/>

<input type="password" className="form-control mb-2"
placeholder="Password"
onChange={e=>setPassword(e.target.value)}/>

<button className="btn btn-dark w-100">Login</button>
</form>

</div>
</div>
)};
