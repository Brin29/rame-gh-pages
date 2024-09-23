import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import DatosPersonales from "./DatosPersonales";
import MisDirecciones from "./MisDirecciones";
import MisPedidos from "./MisPedidos";
import avatar1 from "../../assets/avatares/avatar1.png";
import avatar2 from "../../assets/avatares/avatar2.png";
import avatar3 from "../../assets/avatares/avatar3.png";
import avatar4 from "../../assets/avatares/avatar4.png";
import "./PerfilUsuario.css";

const avatars = [avatar1, avatar2, avatar3, avatar4];

const PerfilUsuario = () => {
  const navigate = useNavigate();

  // Estado inicial para los datos del formulario (recuperado del localStorage si existe)
  const getInitialFormData = () => {
    return JSON.parse(localStorage.getItem("formData")) || {
      firstName: "",
      lastName: "",
      email: "",
      birthDate: "",
      currentPassword: "",
      newPassword: "",
      confirmPassword: "",
      avatar: "",
    };
  };

  const [formData, setFormData] = useState(getInitialFormData());
  const [avatarSelection, setAvatarSelection] = useState(false);
  const [showPassword, setShowPassword] = useState({
    currentPassword: false,
    newPassword: false,
    confirmPassword: false,
  });

  // Estado inicial para la sección activa (por defecto 'datos-personales')
  const getInitialActiveSection = () => {
    return localStorage.getItem("activeSection") || "datos-personales";
  };

  const [activeSection, setActiveSection] = useState(getInitialActiveSection());

  // Guardar los datos del formulario en localStorage cuando cambian
  useEffect(() => {
    const savedFormData = localStorage.getItem("formData");
    if (savedFormData) setFormData(JSON.parse(savedFormData));
  }, []);

  // Guardar la sección activa en localStorage cuando cambie
  useEffect(() => {
    localStorage.setItem("activeSection", activeSection);
  }, [activeSection]);

  // Manejar los cambios de los campos del formulario
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    const updatedFormData = { ...formData, [name]: value };
    setFormData(updatedFormData);
    localStorage.setItem("formData", JSON.stringify(updatedFormData));
  };

  // Manejar el cambio de avatar
  const handleAvatarChange = (selectedAvatar) => {
    const updatedFormData = { ...formData, avatar: selectedAvatar };
    setFormData(updatedFormData);
    setAvatarSelection(false);
    localStorage.setItem("formData", JSON.stringify(updatedFormData));
  };

  // Mostrar u ocultar las contraseñas
  const togglePasswordVisibility = (field) => {
    setShowPassword({ ...showPassword, [field]: !showPassword[field] });
  };

  // Manejar el envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  // Renderizar la sección activa
  const renderActiveSection = () => {
    switch (activeSection) {
      case "mis-direcciones":
        return <MisDirecciones />;
      case "mis-pedidos":
        return <MisPedidos />;
      case "datos-personales":
      default:
        return (
          <DatosPersonales
            formData={formData}
            handleInputChange={handleInputChange}
            handleSubmit={handleSubmit}
            showPassword={showPassword}
            togglePasswordVisibility={togglePasswordVisibility}
          />
        );
    }
  };

  return (
    <div className="profile-container">
      <div className="sidebar">
        <h1>Mi cuenta</h1>

        <button onClick={() => setActiveSection("datos-personales")}>Mis Datos Personales</button>
        <button onClick={() => setActiveSection("mis-pedidos")}>Mis pedidos</button>
        <button onClick={() => setActiveSection("mis-direcciones")}>Mis direcciones</button>
        <button onClick={() => navigate("/favorito")}>Mis favoritos</button>
        <button onClick={() => navigate("/ley-proteccion-datos")}>
          Ley de protección de datos
        </button>
        <button onClick={() => navigate("/cerrar-sesion")}>Cerrar sesión</button>

        <div className="avatar-container">
          <div className="avatar-section">
            <img
              src={formData.avatar || "/default-avatar.png"}
              alt="Avatar"
              className="avatar"
              onClick={() => setAvatarSelection(!avatarSelection)}
            />
            <span className="username">
              {formData.firstName} {formData.lastName}
            </span>
          </div>
          <div className="greeting">¡Hola {formData.firstName || "Usuario"}!</div>

          {avatarSelection && (
            <div className="avatar-gallery">
              {avatars.map((avatar, index) => (
                <img
                  key={index}
                  src={avatar}
                  alt={`Avatar ${index + 1}`}
                  onClick={() => handleAvatarChange(avatar)}
                  className="avatar-thumbnail"
                />
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="content">
        {renderActiveSection()}
        <a href="#" onClick={() => navigate("/")} className="back-link">
          ← Volver a la página principal
        </a>
      </div>
    </div>
  );
};

export default PerfilUsuario;
