import { useState } from "react"
import { Link } from "react-router-dom"
import "./UserRegister.css"

export default function Register(){

  const [formData, setFormData] = useState({
    username: "",
    password: "",
    firstName: "",
    lastName: ""
  })

  const handleSubmit = e => {
    e.preventDefault()
    const {username, password, firstName, lastName} = formData;

    fetch("http://localhost:8080/auth/register", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({username, password, firstName, lastName})
    })

  }


  return (
    <div className="container">
      <div className="first-column">

      <h2 className="title-login">Registrarse</h2>
      
      <form onSubmit={handleSubmit} className="form">

        <label>
          <input placeholder="Correo Electronico" onChange={e => setFormData({...formData, username: e.target.value})} type="text" name="username" value={formData.username}/>
        </label> 

        <label>
          <input placeholder="Contraseña" onChange={e => setFormData({...formData, password: e.target.value})} type="password" name="password"  value={formData.password}/>
        </label>

        <label>
          <input placeholder="Nombre" onChange={e => setFormData({...formData, firstName: e.target.value})} type="text" name="firstName" value={formData.firstName}/>
        </label>

        <label>
          <input placeholder="Apellido" onChange={e => setFormData({...formData, lastName: e.target.value})} type="text" name="lastName" value={formData.lastName} />
        </label>
        <input type="submit" value="Registrarse"/>
        
      </form> 
      </div>
        <div className="second-column">
          <h2>Bienvenida</h2>
          <span className="already-acount">¿Ya tienes una cuenta?</span>
          <Link className="btn-register register-link" to={"/"}>Iniciar Sesion</Link>
        </div>
      </div>
  )
}