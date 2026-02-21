import {Link,useNavigate} from "react-router-dom";

export default function Navbar(){

const nav=useNavigate();

function logout(){
 localStorage.clear();
 nav("/");
}

return(

<nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow">

<div className="container">

<Link className="navbar-brand fw-bold" to="/dashboard">
☕ BeanTalk
</Link>

<div>

<Link className="btn btn-outline-light me-2" to="/dashboard">
Dashboard
</Link>

<button className="btn btn-warning" onClick={logout}>
Logout
</button>

</div>

</div>

</nav>

);
}
