import {useState} from "react";
import api from "../api";
import {useNavigate,Link} from "react-router-dom";

export default function Login(){

const [email,setEmail]=useState("");
const [password,setPassword]=useState("");

const nav=useNavigate();

async function login(e){
e.preventDefault();

try{
const r=await api.post("/auth/login",{email,password});

localStorage.setItem("user",JSON.stringify(r.data));

nav("/dashboard");

}catch{
alert("Login failed");
}

}

return(

<div className="d-flex justify-content-center align-items-center vh-100">

<div className="card shadow p-4" style={{width:380}}>

<h3 className="mb-3 text-center">☕ BeanTalk</h3>

<form onSubmit={login}>

<input className="form-control mb-3"
placeholder="Email"
onChange={e=>setEmail(e.target.value)}
/>

<input type="password"
className="form-control mb-3"
placeholder="Password"
onChange={e=>setPassword(e.target.value)}
/>

<button className="btn btn-dark w-100">
Login
</button>

</form>

<div className="text-center mt-3">
<Link to="/register">Create account</Link>
</div>

</div>

</div>

);

}
