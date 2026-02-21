import {BrowserRouter,Routes,Route} from "react-router-dom";

import Navbar from "./Components/Navbar";

import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Dashboard from "./Pages/Dashboard";
import Category from "./Pages/Category";
import Ask from "./Pages/Ask";

export default function App(){

return(

<BrowserRouter>

<Navbar/>

<Routes>

<Route path="/" element={<Home/>}/>
<Route path="/login" element={<Login/>}/>
<Route path="/register" element={<Register/>}/>
<Route path="/dashboard" element={<Dashboard/>}/>
<Route path="/category/:id" element={<Category/>}/>
<Route path="/ask" element={<Ask/>}/>

</Routes>

</BrowserRouter>

);
}
