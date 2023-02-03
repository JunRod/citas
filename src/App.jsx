import { useEffect, useState } from "react";
import { Formulario, ListadoPacientes, Header } from "./components";

function App() {
  const [pacientes, setPacientes] = useState(() => JSON.parse(localStorage.getItem("pacientes")) ?? [])
  const [paciente, setPaciente] = useState({})
  
  useEffect(() => {
    localStorage.setItem("pacientes", JSON.stringify(pacientes))
  }, [pacientes])

  const eliminar = (id) => {
    const arrayActualizado = pacientes.filter( paciente => paciente.id !== id)
    setPacientes(arrayActualizado)
  }

  return (
    <div className="container mx-auto mt-20 ">
      <Header />

      <div className="mt-12 md:flex">
        <Formulario pacientes={pacientes} paciente={paciente} setPacientes={setPacientes} setPaciente={setPaciente}/>
        <ListadoPacientes pacientes={pacientes} setPaciente={setPaciente} eliminar={eliminar}/>
      </div>
    </div>
  );
}

export default App;