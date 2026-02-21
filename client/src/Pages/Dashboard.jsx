import {useEffect,useState} from "react";
import api from "../api";
import {Link,useNavigate} from "react-router-dom";

export default function Dashboard(){

const [cats,setCats]=useState([]);
const nav=useNavigate();

useEffect(()=>{

api.get("/categories")
.then(r=>{
console.log("CATEGORIES RESPONSE:",r.data);

setCats(Array.isArray(r.data)? r.data : r.data.rows || []);

});

},[]);

api.get("/categories").then(r=>setCats(r.data));

},[nav]);

return(

<div className="container mt-4">

<h2>Dashboard</h2>

<div className="row">

{cats.map(c=>

<div className="col-md-4" key={c.id}>
<div className="card p-3 mb-3">

<h5>{c.name}</h5>

<Link className="btn btn-dark btn-sm"
to={"/category/"+c.id}>
Open
</Link>

</div>
</div>

)}

</div>

</div>

);
}
