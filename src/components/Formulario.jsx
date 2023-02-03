import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import { ErrorForm } from "./ErrorForm";

export const Formulario = ({ pacientes, setPacientes, paciente, setPaciente }) => {
  const [nombre, setNombre] = useState("");
  const [propietario, setPropietario] = useState("");
  const [email, setEmail] = useState("");
  const [fecha, setFecha] = useState("");
  const [sintomas, setSintomas] = useState("");

  const [error, setError] = useState(false);

  useEffect(() => {
    const { nombre, propietario, email, fecha, sintomas } = paciente;
    setNombre(nombre);
    setPropietario(propietario);
    setEmail(email);
    setFecha(fecha);
    setSintomas(sintomas);
  }, [paciente]);

  const generarKey = () => {
    const ramdom = Math.random().toString(36).substring(2);
    return ramdom;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    //Validación del Formulario
    if ([nombre, propietario, email, fecha, sintomas].includes("")) {
      setError(true);
      return;
    }

    setError(false);

    const objetoPaciente = {
      nombre,
      propietario,
      email,
      fecha,
      sintomas,
    };

    if (paciente.id) {
      //Editar
      objetoPaciente.id = paciente.id
      const pacientesActualizados = pacientes.map( pacienteState => pacienteState.id === paciente.id ? objetoPaciente : pacienteState )
      setPacientes(pacientesActualizados)
      setPaciente({})
    } else {
      //Añadir
      objetoPaciente.id = generarKey();
      setPacientes([...pacientes, objetoPaciente]);
    }

    setNombre("");
    setEmail("");
    setPropietario("");
    setFecha("");
    setNombre("");
    setSintomas("");
  };

  return (
    <div className="md:w-1/2 lg:w-2/5">
      <h2 className="font-black text-3xl text-center">
        Seguimientos Pacientes
      </h2>
      <p className="text-lg my-2 text-center">
        Añade Pacientes y{" "}
        <span className="text-indigo-600 font-bold">Administralos</span>
      </p>

      <form>
        {error && (
          <ErrorForm>
            <p>Todos los campos son obligatorios"</p>
          </ErrorForm>
        )}

        <div className="bg-white shadow-md rounded-lg py-5 px-5 ">
          <label
            htmlFor="mascota"
            className="block text-gray-700 uppercase font-bold"
          >
            Nombre Mascota
          </label>
          <input
            type="text"
            id="mascota"
            placeholder="Nombre de la Mascota"
            className="border-2 w-full p-2 mt-2 placeholder-gray-40 rounded-md mb-5"
            value={nombre || ""}
            onChange={(e) => {
              setNombre(e.target.value);
            }}
          />

          <label
            htmlFor="propietario"
            className="block text-gray-700 uppercase font-bold"
          >
            Nombre Propietario
          </label>
          <input
            type="text"
            id="propietario"
            placeholder="Nombre del Propietario"
            className="border-2 w-full p-2 mt-2 placeholder-gray-40 rounded-md mb-5"
            value={propietario || ""}
            onChange={(e) => {
              setPropietario(e.target.value);
            }}
          />

          <label
            htmlFor="email"
            className="block text-gray-700 uppercase font-bold"
          >
            Email
          </label>
          <input
            type="text"
            id="email"
            placeholder="Email Contacto Propietario"
            className="border-2 w-full p-2 mt-2 placeholder-gray-40 rounded-md mb-5"
            value={email || ""}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />

          <label
            htmlFor="alta"
            className="block text-gray-700 uppercase font-bold"
          >
            Email
          </label>
          <input
            type="date"
            id="alta"
            className="border-2 w-full p-2 mt-2 placeholder-gray-40 rounded-md mb-5 font-bold"
            value={fecha || ""}
            onChange={(e) => {
              setFecha(e.target.value);
            }}
          />

          <label
            htmlFor="sintomas"
            className="block text-gray-700 uppercase font-bold"
          >
            Sintomas
          </label>
          <textarea
            id="sintomas"
            className="border-2 w-full p-2 mt-2 placeholder-gray-40 mb-5"
            placeholder="Describe los Sínntomas"
            value={sintomas|| ""}
            onChange={(e) => {
              setSintomas(e.target.value);
            }}
          ></textarea>

          <input
            type="submit"
            onClick={handleSubmit}
            className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-all"
            value={paciente.id ? "Guardar Cambios" : "Agregar Paciente"}
          />
        </div>
      </form>
    </div>
  );
};

Formulario.propTypes = {
  setPacientes: PropTypes.func.isRequired,
};
