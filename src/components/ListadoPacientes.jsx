import PropTypes from "prop-types";
import { Pacientes } from "./Pacientes";

export const ListadoPacientes = ({ pacientes, setPaciente, eliminar}) => {

  return (
    <div className="md:w-1/2 lg:w-3/5  max-md:mt-10">
      {pacientes && pacientes.length ? (
        <>
          <h2 className="font-black text-3xl text-center">Listado Paciente</h2>
          <p className="text-xl my-2 text-center mb-5">
            Administra tus {""}
            <span className="text-indigo-600 font-bold">Pacientes y Citas</span>
          </p>
        </>
      ) : (
        <>
          <h2 className="font-black text-3xl text-center">No hay pacientes</h2>
          <p className="text-xl my-2 text-center ">
            Empieze agregando uno {""}
            <span className="text-indigo-600 font-bold">
              y se mostrará aquí
            </span>
          </p>
        </>
      )}
      <div className="md:overflow-y-scroll md:h-screen">
        {pacientes.map((paciente) => (
          <Pacientes key={paciente.id} paciente={paciente} setPaciente={setPaciente} eliminar={eliminar}/>
        ))}
      </div>
    </div>
  );
};

ListadoPacientes.propTypes = {
  pacientes: PropTypes.array.isRequired,
};
