import {useParams,Link} from "react-router-dom";
import {useEffect,useState} from "react";
import api from "../api";

export default function Category(){

const {id}=useParams();

const [questions,setQuestions]=useState([]);
const [catName,setCatName]=useState("");

useEffect(()=>{

api.get("/questions/category/"+id)
.then(r=>{
setQuestions(Array.isArray(r.data)?r.data:[]);
})
.catch(()=>setQuestions([]));

api.get("/categories")
.then(r=>{
const found=r.data.find(c=>String(c.id)===String(id));
if(found) setCatName(found.name);
});

},[id]);

return(

<div className="container mt-4">

<h2 className="mb-3">
☕ {catName || "Coffee Topics"}
</h2>

<Link to={"/ask?cat="+id} className="btn btn-dark">
Ask Question
</Link>


{questions.length===0 && (

<div className="alert alert-light border">
No questions yet. Be the first to ask!
</div>

)}

{questions.map(q=>

<div key={q.id} className="card shadow-sm border-0 mb-3">

<div className="card-body">

<h5 className="fw-bold">{q.title}</h5>

<p className="text-muted mb-1">
{q.content}
</p>

<small className="text-secondary">
Posted {new Date(q.created_at).toLocaleDateString()}
</small>

</div>

</div>

)}

</div>

);

}
