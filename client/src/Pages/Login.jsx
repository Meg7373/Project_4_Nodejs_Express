import {useState} from "react";
import api from "../api";
import {useNavigate} from "react-router-dom";
import {Link} from "react-router-dom";


export default function Login(){

const [email,setEmail]=useState("");
const [password,setPassword]=useState("");
const [error,setError]=useState("");

const nav=useNavigate();

async function login(e){

e.preventDefault();

try{

const res = await api.post("/auth/login",{
email,
password
});

localStorage.setItem("user",res.data.id);

nav("/dashboard");

}catch{

setError("Invalid email or password");

}

}

return(

<div className="text-center mb-4">

<h1 style={{fontWeight:"700"}}> ☕ BeanTalk </h1>

<p className="text-muted"> Coffee Discussion Community</p>


<h2 className="mb-3">Welcome Back</h2>

{error && (
<div className="alert alert-danger">
{error}
</div>
)}

<form onSubmit={login}>

<input
className="form-control mb-2"
placeholder="Email"
onChange={e=>setEmail(e.target.value)}
required
/>

<input
type="password"
className="form-control mb-3"
placeholder="Password"
onChange={e=>setPassword(e.target.value)}
required
/>

<button className="btn btn-dark w-100">
Login
</button>

<div className="text-center mt-3">

<Link to="/register">
Create Account
</Link>

</div>

</form>

</div>

);
}