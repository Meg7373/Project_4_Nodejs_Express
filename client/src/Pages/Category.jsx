import {useParams,Link} from "react-router-dom";
import {useEffect,useState} from "react";
import api from "../api";

export default function Category(){

const {id}=useParams();
const [qs,setQs]=useState([]);

useEffect(()=>{
 api.get("/questions/"+id).then(r=>setQs(r.data));
},[id]);

return(
<div className="container mt-4">

<h3>Questions</h3>

{qs.map(q=>

<div key={q.id} className="card p-2 mb-2">
<Link to={"/question/"+q.id}>{q.title}</Link>
</div>

)}

</div>
);
}
