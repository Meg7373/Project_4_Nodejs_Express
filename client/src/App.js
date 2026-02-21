import {BrowserRouter,Routes,Route} from "react-router-dom";

import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Dashboard from "./Pages/Dashboard";
import Category from "./Pages/Category";
import Question from "./Pages/Question";

function App(){
 return(
  <BrowserRouter>
   <Routes>
    <Route path="/" element={<Login/>}/>
    <Route path="/register" element={<Register/>}/>
    <Route path="/dashboard" element={<Dashboard/>}/>
    <Route path="/category/:id" element={<Category/>}/>
    <Route path="/question/:id" element={<Question/>}/>
   </Routes>
  </BrowserRouter>
 );
}

export default App;
