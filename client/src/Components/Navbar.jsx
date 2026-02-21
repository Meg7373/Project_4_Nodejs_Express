import {Link,useNavigate} from "react-router-dom";

export default function Navbar(){

const nav=useNavigate();

function logout(){
 localStorage.clear();
 nav("/");
}

return(

<nav className="navbar navbar-dark bg-dark px-3">

<Link className="navbar-brand" to="/dashboard">
☕ BeanTalk
</Link>

<button className="btn btn-outline-light btn-sm"
onClick={logout}>
Logout
</button>

</nav>

);
}
