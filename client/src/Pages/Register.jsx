import {useState} from "react";
import api from "../api";
import {useNavigate} from "react-router-dom";

export default function Register(){

const [username,setUsername]=useState("");
const [email,setEmail]=useState("");
const [password,setPassword]=useState("");

const nav=useNavigate();

async function submit(e){

e.preventDefault();

await api.post("/auth/register",{username,email,password});

alert("Registered!");

nav("/");

}

return(

<div className="container mt-5" style={{maxWidth:400}}>

<h2>Create account</h2>

<form onSubmit={submit}>

<input className="form-control mb-2" placeholder="Username"
onChange={e=>setUsername(e.target.value)}/>

<input className="form-control mb-2" placeholder="Email"
onChange={e=>setEmail(e.target.value)}/>

<input className="form-control mb-2" type="password"
placeholder="Password"
onChange={e=>setPassword(e.target.value)}/>

<button className="btn btn-success w-100">Register</button>

</form>

</div>

);

}
