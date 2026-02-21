import {useState} from "react";
import api from "../api";
import {useNavigate} from "react-router-dom";

export default function Ask(){

const [title,setTitle]=useState("");
const [body,setBody]=useState("");

const nav=useNavigate();

async function submit(e){
e.preventDefault();

await api.post("/questions",{title,body});

alert("Question posted!");

nav("/dashboard");
}

return(

<div className="container mt-4">

<h2>Ask Coffee Question</h2>

<form onSubmit={submit}>

<input className="form-control mb-2"
placeholder="Question title"
onChange={e=>setTitle(e.target.value)}/>

<textarea className="form-control mb-2"
placeholder="Describe your question"
onChange={e=>setBody(e.target.value)}/>

<button className="btn btn-dark">Post</button>

</form>

</div>

);
}
