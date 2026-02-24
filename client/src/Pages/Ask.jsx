import {useNavigate,useSearchParams} from "react-router-dom";
import {useState} from "react";
import api from "../api";

export default function Ask(){

const nav=useNavigate();
const [params]=useSearchParams();

const category_id=params.get("cat");

const [title,setTitle]=useState("");
const [content,setContent]=useState("");

async function send(e){
e.preventDefault();

await api.post("/questions",{
title,
content,
category_id
});

nav("/dashboard");
}

return(

<div className="container mt-4" style={{maxWidth:600}}>

<h2>Ask Question</h2>

<form onSubmit={send}>

<input
className="form-control mb-2"
placeholder="Title"
value={title}
onChange={e=>setTitle(e.target.value)}
/>

<textarea
className="form-control mb-3"
placeholder="Question"
value={content}
onChange={e=>setContent(e.target.value)}
/>

<button className="btn btn-dark w-100">
Post Question
</button>

</form>

</div>

);
}