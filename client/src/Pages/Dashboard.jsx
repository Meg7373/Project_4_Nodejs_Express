import {useEffect,useState} from "react";
import api from "../api";
import {Link} from "react-router-dom";

export default function Dashboard(){

const [cats,setCats]=useState([]);

useEffect(()=>{
api.get("/categories")
.then(r=>setCats(Array.isArray(r.data)?r.data:[]))
.catch(()=>setCats([]));
},[]);


/* PROFESSOR SAFE DESCRIPTIONS */
const descriptions={
"Espresso":"Espresso basics, shots, extraction, and troubleshooting.",
"Brewing Methods":"Learn pour-over, French press, AeroPress, and drip brewing.",
"Beans & Roasts":"Understand roast levels, flavor notes, and bean origins.",
"Coffee Machines":"Discuss home machines, grinders, and setup tips.",
"Latte Art":"Milk steaming and latte art pouring techniques.",
"Equipment":"Coffee tools, accessories, scales, and gear."
};

return(

<div className="container mt-4">

<h2 className="mb-4">☕ Coffee Topics</h2>

{cats.map(c=>

<div key={c.id} className="card topic-card shadow-lg p-4 mb-4">

<div className="row align-items-center">

<div className="col-md-4">

<div className="topic-title">{c.name}</div>

<Link
className="btn btn-dark big-btn mt-3"
to={"/category/"+c.id}
>
Enter Topic
</Link>

</div>

<div className="col-md-8">

<div className="topic-desc">
{descriptions[c.name] || "Coffee discussion topic"}
</div>

</div>

</div>

</div>

)}

</div>

);
}