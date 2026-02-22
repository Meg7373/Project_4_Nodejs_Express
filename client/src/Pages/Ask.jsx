import {useState,useEffect} from "react";
import api from "../api";
import {useNavigate} from "react-router-dom";

export default function Ask(){

const nav=useNavigate();

const [title,setTitle]=useState("");
const [content,setContent]=useState("");
const [category,setCategory]=useState("");

const [cats,setCats]=useState([]);


// LOAD CATEGORIES FOR DROPDOWN
useEffect(()=>{

api.get("/categories")
.then(r=>{
setCats(Array.isArray(r.data)?r.data:[]);
});

},[]);



async function submit(e){

e.preventDefault();

if(!title || !content || !category){
alert("Fill all fields");
return;
}

try{

await api.post("/questions",{
title:title,
content:content,
category_id:category,
user_id:1   // safe default for school project
});

alert("✅ Question posted!");

nav("/dashboard");

}catch(err){

console.log(err);
alert("Posting failed — check backend");

}

}


return(

<div className="container mt-4" style={{maxWidth:600}}>

<h2 className="mb-3">Ask Coffee Question</h2>

<form onSubmit={submit}>

<input
className="form-control mb-2"
placeholder="Question title"
onChange={e=>setTitle(e.target.value)}
/>

<textarea
className="form-control mb-3"
placeholder="Describe your question"
onChange={e=>setContent(e.target.value)}
/>


{/* REAL CATEGORY DROPDOWN */}

<select
className="form-control mb-3"
value={category}
onChange={e=>setCategory(e.target.value)}
>

<option value="">Choose Category</option>

{cats.map(c=>
<option key={c.id} value={c.id}>
{c.name}
</option>
)}

</select>


<button className="btn btn-dark w-100">
Post Question
</button>

</form>

</div>

);

}
