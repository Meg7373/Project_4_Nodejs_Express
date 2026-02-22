import {BrowserRouter,Routes,Route} from "react-router-dom";

import Navbar from "./Components/Navbar";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Dashboard from "./Pages/Dashboard";
import Ask from "./Pages/Ask";
import Category from "./Pages/Category";

function App(){

return(

<BrowserRouter>

<Navbar/>

<Routes>

<Route path="/" element={<Login/>}/>
<Route path="/register" element={<Register/>}/>
<Route path="/dashboard" element={<Dashboard/>}/>
<Route path="/ask" element={<Ask/>}/>
<Route path="/category/:id" element={<Category/>}/>

</Routes>

</BrowserRouter>

);

}

export default App;
