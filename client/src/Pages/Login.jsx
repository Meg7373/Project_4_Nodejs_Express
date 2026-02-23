import {useState} from "react";
import api from "../api";
import {useNavigate} from "react-router-dom";

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

<div className="container mt-5" style={{maxWidth:400}}>

<h2 className="mb-3">Login</h2>

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

</form>

</div>

);
}