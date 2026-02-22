import {useState} from "react";
import {useNavigate,Link} from "react-router-dom";
import api from "../api";

export default function Login(){

const nav=useNavigate();

const [email,setEmail]=useState("");
const [password,setPassword]=useState("");
const [error,setError]=useState("");

async function login(e){
e.preventDefault();

try{

const res = await api.post("/auth/login",{email,password});

localStorage.setItem("user",JSON.stringify(res.data));

nav("/dashboard");

}catch(err){

setError(err.response?.data?.message || "Login failed");

}

}

return(

<div className="container mt-5" style={{maxWidth:400}}>

<h2>Login</h2>

{error && <div className="alert alert-danger">{error}</div>}

<form onSubmit={login}>

<input
className="form-control mb-2"
placeholder="Email"
onChange={e=>setEmail(e.target.value)}
required
/>

<input
type="password"
className="form-control mb-2"
placeholder="Password"
onChange={e=>setPassword(e.target.value)}
required
/>

<button className="btn btn-dark w-100">
Login
</button>

</form>

<div className="mt-3 text-center">
<Link to="/register">Create account</Link>
</div>

</div>

);
}
