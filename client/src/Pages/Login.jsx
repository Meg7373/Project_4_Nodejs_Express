fetch("http://localhost:4000/auth/login",{
 method:"POST",
 headers:{ "Content-Type":"application/json"},
 body:JSON.stringify({email,password})
})

localStorage.setItem("user",JSON.stringify(data))
