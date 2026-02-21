import {Link,useNavigate} from "react-router-dom";

export default function Navbar(){

const nav=useNavigate();
const logged=localStorage.getItem("user");

function logout(){
 localStorage.clear();
 nav("/login");
}

return(

<nav className="navbar navbar-dark bg-dark navbar-expand-lg">
<div className="container">

<Link className="navbar-brand fw-bold" to="/">☕ BeanTalk</Link>

<div>

<Link className="btn btn-outline-light me-2" to="/">Home</Link>

{!logged && (
<>
<Link className="btn btn-outline-light me-2" to="/login">Login</Link>
<Link className="btn btn-warning" to="/register">Register</Link>
</>
)}

{logged && (
<>
<Link className="btn btn-outline-light me-2" to="/dashboard">Dashboard</Link>
<Link className="btn btn-success me-2" to="/ask">Ask Question</Link>
<button className="btn btn-danger" onClick={logout}>Logout</button>
</>
)}

</div>
</div>
</nav>

);
}
