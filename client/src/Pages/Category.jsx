import {useEffect,useState} from "react";
import {useParams,Link} from "react-router-dom";
import api from "../api";
import Navbar from "../components/Navbar";

export default function Category(){

const {id}=useParams();
const [questions,setQuestions]=useState([]);

useEffect(()=>{

api.get("/questions/category/"+id)
.then(r=>setQuestions(Array.isArray(r.data)?r.data:[]))
.catch(()=>setQuestions([]));

},[id]);

return(

<>
<Navbar/>

<div className="container mt-4">

<h2 className="mb-3">Questions</h2>

<Link className="btn btn-dark mb-3" to="/ask">
Ask Question
</Link>

{questions.length===0 &&
<div className="alert alert-secondary">
No questions yet
</div>
}

{questions.map(q=>

<div key={q.id} className="card p-3 mb-3 shadow-sm">

<h5>{q.title}</h5>
<p>{q.content}</p>

</div>

)}

</div>
</>
);
}
