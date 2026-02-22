import {useEffect,useState} from "react";
import api from "../api";
import {Link} from "react-router-dom";

export default function Dashboard(){

const [cats,setCats]=useState([]);

useEffect(()=>{

api.get("/categories")
.then(r=>{
setCats(Array.isArray(r.data)?r.data:[]);
})
.catch(()=>setCats([]));

},[]);


return(

<div className="container mt-4">

<h2 className="mb-4">☕ Coffee Topics</h2>

<div className="row">

{cats.map(c=>

<div className="col-md-4" key={c.id}>
<div className="card shadow-lg border-0 p-3 mb-4">

<h4>{c.name}</h4>

<Link className="btn btn-dark mt-2"
to={"/category/"+c.id}>
Enter
</Link>

</div>
</div>

)}

</div>
</div>

);
}
