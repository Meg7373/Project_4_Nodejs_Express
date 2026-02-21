import {useEffect,useState} from "react";
import api from "../api";
import {Link,useNavigate} from "react-router-dom";
import Navbar from "../Components/Navbar.jsx";

export default function Dashboard(){

const [cats,setCats]=useState([]);
const nav=useNavigate();

useEffect(()=>{
 api.get("/categories").then(r=>setCats(r.data));
},[]);

function logout(){
 localStorage.clear();
 nav("/");
}

<Navbar />

return(

    <div className="container mt-4">

    <div className="d-flex justify-content-between">
    <h2>☕ BeanTalk Dashboard</h2>
    <button className="btn btn-danger" onClick={logout}>Logout</button>
    </div>

    <hr/>

    <h4>Coffee Topics</h4>

    {cats.map(c=>

    <div key={c.id}>
    <Link to={"/category/"+c.id}>{c.name}</Link>
    </div>

    )}

    </div>
);
}
