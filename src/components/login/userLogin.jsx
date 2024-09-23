import { useState } from "react"
import { Link } from "react-router-dom";
import "./UserLogin.css";

export default function Login(){

  const [formData, setFormData] = useState({
    username: "",
    password: ""
  });

  const handleSubmit = e => {
    e.preventDefault()
    const { username, password } = formData;
    
    fetch("http://localhost:8080/auth/login", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({username, password})
    })
    .then(res => res.json())
    .then(json => console.log(json))
  }

  return (
    <div className="container">

      <div className="first-column"> 
      <h2 className="title-login">Iniciar Sesión</h2>

      <form onSubmit={handleSubmit} className="form">

        <label>
          <input placeholder="Correo Electronico" onChange={e => setFormData({...formData, username:e.target.value})} type="text" name="username" value={formData.username} />
        </label>

        <label>
          <input placeholder="Contraseña" onChange={e => setFormData({...formData, password:e.target.value})} type="password" name="password" value={formData.password} />
        </label>

        <p>¿Olvidaste tu contraseña?</p>
        <input type="submit" value="Iniciar Sesion"/>
      </form>
      </div>

      <div className="second-column">
        <h2>Bienvenida</h2>

       <span className="no-acount">¿No tienes una cuenta?  </span>
        <Link className="btn-register register-link" to={"register"}>Registrate</Link>
      </div>
    </div>
  )
}