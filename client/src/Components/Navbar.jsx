import {Link,useNavigate} from "react-router-dom";

export default function Navbar(){

const nav = useNavigate();

function logout(){

localStorage.clear();
nav("/");

}

return(

<nav className="navbar navbar-dark bg-dark navbar-expand">

<div className="container">

<Link className="navbar-brand" to="/dashboard">
☕ BeanTalk
</Link>

<div>

<Link className="btn btn-outline-light me-2" to="/dashboard">
Dashboard
</Link>

<Link className="btn btn-outline-light me-2" to="/ask">
Ask Question
</Link>

<Link className="btn btn-warning" to="/register">
Register
</Link>

<button className="btn btn-danger ms-2" onClick={logout}>
Logout
</button>

</div>

</div>

</nav>

);

}
