import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import "./PerfilUsuario.css";

const DatosPersonales = ({ formData, handleInputChange, handleSubmit, showPassword, togglePasswordVisibility }) => (
  <div className="form-container">
    <h1>SUS DATOS PERSONALES</h1>
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label>Nombre</label>
        <input
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleInputChange}
          required
        />
      </div>
      <div className="form-group">
        <label>Apellido</label>
        <input
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleInputChange}
          required
        />
      </div>
      <div className="form-group">
        <label>Correo electrónico</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          required
        />
      </div>
      <div className="form-group">
        <label>Fecha de Nacimiento</label>
        <input
          type="date"
          name="birthDate"
          value={formData.birthDate}
          onChange={handleInputChange}
          required
        />
      </div>
      {["currentPassword", "newPassword", "confirmPassword"].map((field) => (
        <div className="form-group password-group" key={field}>
          <label>
            {field === "currentPassword" ? "Contraseña Actual" : field === "newPassword" ? "Nueva Contraseña" : "Confirmación"}
          </label>
          <div className="password-container">
            <input
              type={showPassword[field] ? "text" : "password"}
              name={field}
              value={formData[field]}
              onChange={handleInputChange}
              required={field === "currentPassword"}
            />
            <FontAwesomeIcon
              icon={showPassword[field] ? faEyeSlash : faEye}
              onClick={() => togglePasswordVisibility(field)}
              className="password-icon"
            />
          </div>
        </div>
      ))}
      <button type="submit" className="save-button">
        Guardar
      </button>
    </form>
  </div>
);

export default DatosPersonales;
