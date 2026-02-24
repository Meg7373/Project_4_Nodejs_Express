import {useNavigate,Link} from "react-router-dom";
import {useState} from "react";
import api from "../api";

export default function Login(){

const nav=useNavigate();

const [email,setEmail]=useState("");
const [password,setPassword]=useState("");
const [err,setErr]=useState("");

async function login(e){
e.preventDefault();

try{

const r=await api.post("/auth/login",{email,password});

localStorage.setItem("user",r.data.id);
nav("/dashboard");

}catch{
setErr("Invalid login");
}

}

return(

<div className="container mt-5" style={{maxWidth:420}}>

<h1 className="text-center mb-4 fw-bold">☕ BeanTalk</h1>

<h3 className="mb-3">Login</h3>

<form onSubmit={login}>

<input
className="form-control mb-2"
placeholder="Email"
onChange={e=>setEmail(e.target.value)}
/>

<input
type="password"
className="form-control mb-2"
placeholder="Password"
onChange={e=>setPassword(e.target.value)}
/>

<button className="btn btn-dark w-100 mb-2">
Login
</button>

{err && <div className="text-danger">{err}</div>}

<Link to="/register">Create account</Link>

</form>

</div>

);
}