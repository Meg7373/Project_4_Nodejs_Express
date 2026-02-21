import {useParams} from "react-router-dom";
import {useEffect,useState} from "react";
import api from "../api";

export default function Question(){

const {id}=useParams();

const [q,setQ]=useState(null);
const [answers,setAnswers]=useState([]);

useEffect(()=>{

api.get("/questions/single/"+id).then(r=>setQ(r.data));
api.get("/answers/"+id).then(r=>setAnswers(r.data));

},[id]);

if(!q) return <div className="p-4">Loading...</div>;

return(
<div className="container mt-4">

<h2>{q.title}</h2>
<p>{q.body}</p>

<hr/>

<h4>Answers</h4>

{answers.map(a=>
<div key={a.id} className="border p-2 mb-2">
{a.body}
</div>
)}

</div>
);
}

