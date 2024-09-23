import React, { useState, useEffect } from "react";
import "./PerfilUsuario.css"; // Asegúrate de tener el archivo CSS adecuado

const MisDirecciones = () => {
  const [direcciones, setDirecciones] = useState(() => {
    const savedDirecciones = localStorage.getItem("direcciones");
    return savedDirecciones ? JSON.parse(savedDirecciones) : [];
  });

  const [nuevaDireccion, setNuevaDireccion] = useState({
    telefono: "",
    documento: "",
    pais: "",
    departamento: "",
    ciudad: "",
    direccionEntrega: ""
  });

  const [mostrarFormulario, setMostrarFormulario] = useState(false);
  const [editandoIndex, setEditandoIndex] = useState(null); // Guardar el índice de la dirección que se está editando

  useEffect(() => {
    localStorage.setItem("direcciones", JSON.stringify(direcciones));
  }, [direcciones]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNuevaDireccion({
      ...nuevaDireccion,
      [name]: value,
    });
  };

  const agregarDireccion = () => {
    if (Object.values(nuevaDireccion).every((value) => value.trim())) {
      if (editandoIndex !== null) {
        // Editar dirección existente
        const direccionesActualizadas = [...direcciones];
        direccionesActualizadas[editandoIndex] = nuevaDireccion;
        setDirecciones(direccionesActualizadas);
        setEditandoIndex(null); // Resetea el índice de edición
      } else {
        // Agregar nueva dirección
        setDirecciones([...direcciones, nuevaDireccion]);
      }

      // Reseteamos el formulario
      setNuevaDireccion({
        telefono: "",
        documento: "",
        pais: "",
        departamento: "",
        ciudad: "",
        direccionEntrega: ""
      });
      setMostrarFormulario(false); // Oculta el formulario
    }
  };

  const iniciarEdicion = (index) => {
    setNuevaDireccion(direcciones[index]); // Carga la dirección para editar
    setEditandoIndex(index); // Guarda el índice de la dirección a editar
    setMostrarFormulario(true); // Muestra el formulario
  };

  const eliminarDireccion = (index) => {
    const direccionesActualizadas = direcciones.filter((_, i) => i !== index);
    setDirecciones(direccionesActualizadas);
  };

  return (
    <div className="direcciones-container">
      <h1>MIS DIRECCIONES</h1>
      <p>Aquí puedes gestionar tus direcciones.</p>

      {direcciones.length > 0 ? (
        <ul>
          {direcciones.map((direccion, index) => (
            <li key={index} className="direccion-item">
              <p><strong>Teléfono:</strong> {direccion.telefono}</p>
              <p><strong>Documento:</strong> {direccion.documento}</p>
              <p><strong>País:</strong> {direccion.pais}</p>
              <p><strong>Departamento:</strong> {direccion.departamento}</p>
              <p><strong>Ciudad:</strong> {direccion.ciudad}</p>
              <p><strong>Dirección de Entrega:</strong> {direccion.direccionEntrega}</p>
              
              {/* Botones de editar y eliminar */}
              <button onClick={() => iniciarEdicion(index)} className="editar-button">Editar</button>
              <button onClick={() => eliminarDireccion(index)} className="eliminar-button">Eliminar</button>
            </li>
          ))}
        </ul>
      ) : (
        <p className="sin-direcciones">No hay direcciones agregadas.</p>
      )}

      {/* Botón para mostrar el formulario de agregar dirección */}
      {!mostrarFormulario && (
        <button
          onClick={() => {
            setMostrarFormulario(true);
            setNuevaDireccion({
              telefono: "",
              documento: "",
              pais: "",
              departamento: "",
              ciudad: "",
              direccionEntrega: ""
            });
            setEditandoIndex(null); // Asegúrate de que no estemos editando
          }}
          className="add-button"
        >
          Agregar Dirección
        </button>
      )}

      {mostrarFormulario && (
        <div className="input-container">
          <input
            type="text"
            name="telefono"
            placeholder="Teléfono celular"
            value={nuevaDireccion.telefono}
            onChange={handleInputChange}
            className="direccion-input"
          />
          <input
            type="text"
            name="documento"
            placeholder="Número de documentación"
            value={nuevaDireccion.documento}
            onChange={handleInputChange}
            className="direccion-input"
          />
          <input
            type="text"
            name="pais"
            placeholder="País"
            value={nuevaDireccion.pais}
            onChange={handleInputChange}
            className="direccion-input"
          />
          <input
            type="text"
            name="departamento"
            placeholder="Departamento"
            value={nuevaDireccion.departamento}
            onChange={handleInputChange}
            className="direccion-input"
          />
          <input
            type="text"
            name="ciudad"
            placeholder="Ciudad"
            value={nuevaDireccion.ciudad}
            onChange={handleInputChange}
            className="direccion-input"
          />
          <input
            type="text"
            name="direccionEntrega"
            placeholder="Dirección de entrega"
            value={nuevaDireccion.direccionEntrega}
            onChange={handleInputChange}
            className="direccion-input"
          />

          <button onClick={agregarDireccion} className="save-button">
            {editandoIndex !== null ? "Guardar Cambios" : "Guardar Dirección"}
          </button>
          <button
            onClick={() => setMostrarFormulario(false)}
            className="cancel-button"
          >
            Cancelar
          </button>
        </div>
      )}
    </div>
  );
};

export default MisDirecciones;
