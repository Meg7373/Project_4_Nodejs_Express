import {useEffect,useState} from "react";
import api from "../api";
import {Link,useNavigate} from "react-router-dom";
import Navbar from "../components/Navbar";

export default function Dashboard(){

const [cats,setCats]=useState([]);
const nav = useNavigate();

useEffect(()=>{

api.get("/categories")
.then(r=>{
setCats(Array.isArray(r.data)?r.data:[]);
})
.catch(()=>setCats([]));

},[]);


// ✅ LOGOUT FUNCTION
function logout(){
localStorage.removeItem("user");
nav("/");
}


return(
<>
<Navbar/>

<div className="container mt-4">

{/* ✅ LOGOUT BUTTON */}
<div className="d-flex justify-content-between mb-3">
<h2>☕ Coffee Topics</h2>
</div>

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
</>
);

}