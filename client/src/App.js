import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Ask from "./pages/Ask";
import Category from "./pages/Category";

import ProtectedRoute from "./components/ProtectedRoute";

function App(){

const user = localStorage.getItem("user");

return(

<BrowserRouter>

<Routes>

<Route 
path="/" 
element={user ? <Navigate to="/dashboard"/> : <Login/>}
/>

<Route 
path="/dashboard" 
element={
<ProtectedRoute>
<Dashboard/>
</ProtectedRoute>
}
/>

<Route 
path="/ask" 
element={
<ProtectedRoute>
<Ask/>
</ProtectedRoute>
}
/>

<Route 
path="/category/:id" 
element={
<ProtectedRoute>
<Category/>
</ProtectedRoute>
}
/>

</Routes>

</BrowserRouter>

);

}

export default App;