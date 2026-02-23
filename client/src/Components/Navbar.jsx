import {Link,useNavigate} from "react-router-dom";

export default function Navbar(){

const nav = useNavigate();
const user = localStorage.getItem("user");

// 🚫 DO NOT SHOW NAVBAR IF NOT LOGGED IN
if(!user) return null;

function logout(){
localStorage.removeItem("user");
nav("/");
}

return(

<nav className="navbar navbar-dark bg-dark navbar-expand-lg">

<div className="container">

<Link className="navbar-brand" to="/dashboard">
☕ BeanTalk
</Link>

<div>

<Link className="btn btn-outline-light me-2" to="/dashboard">
Home
</Link>

<Link className="btn btn-success me-2" to="/ask">
Ask Question
</Link>

<button onClick={logout} className="btn btn-danger">
Logout
</button>

</div>

</div>

</nav>

);

}