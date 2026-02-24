import {useParams,Link} from "react-router-dom";
import {useEffect,useState} from "react";
import api from "../api";

export default function Category(){

const {id}=useParams();
const [qs,setQs]=useState([]);

useEffect(()=>{
api.get("/questions/category/"+id)
.then(r=>setQs(Array.isArray(r.data)?r.data:[]))
.catch(()=>setQs([]));
},[id]);

return(

<div className="container mt-4">

<h2 className="mb-3">Questions</h2>

<Link
className="btn btn-dark mb-4"
to={"/ask?cat="+id}
>
Ask a Question
</Link>

{qs.map(q=>

<div key={q.id} className="card shadow-sm p-3 mb-3">

<h5>{q.title}</h5>
<div className="text-muted">{q.content}</div>

</div>

)}

</div>

);
}