import {useNavigate} from "react-router-dom";

export default function Login(){

const nav=useNavigate();

function login(e){
e.preventDefault();
localStorage.setItem("user","1");
nav("/dashboard");
}

return(

<div className="container mt-5" style={{maxWidth:400}}>

<h2>Login</h2>

<form onSubmit={login}>

<input className="form-control mb-2" placeholder="Username"/>
<input className="form-control mb-2" placeholder="Password"/>

<button className="btn btn-dark w-100">
Login
</button>

</form>

</div>

);
}
