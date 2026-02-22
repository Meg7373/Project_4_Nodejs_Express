import {BrowserRouter,Routes,Route} from "react-router-dom";

import Navbar from "./Components/Navbar";
import PrivateRoute from "./Components/PrivateRoute";

import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Dashboard from "./Pages/Dashboard";
import Category from "./Pages/Category";
import Question from "./Pages/Question";
import Ask from "./Pages/Ask";

export default function App(){

return(

<BrowserRouter>

<Navbar/>

<Routes>

<Route path="/" element={<Login/>}/>
<Route path="/register" element={<Register/>}/>

<Route path="/dashboard" element={
<PrivateRoute><Dashboard/></PrivateRoute>
}/>

<Route path="/category/:id" element={
<PrivateRoute><Category/></PrivateRoute>
}/>

<Route path="/question/:id" element={
<PrivateRoute><Question/></PrivateRoute>
}/>

<Route path="/ask" element={
<PrivateRoute><Ask/></PrivateRoute>
}/>

</Routes>

</BrowserRouter>

);

}
