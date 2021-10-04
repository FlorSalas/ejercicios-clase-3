import MuestraCamas from "../MuestraCamas/MuestraCamas";

const listado= (
  <ul>
    <li>Sauna</li>
    <li>Hidromasaje</li>
  </ul>
  
);

const Habitacion= ()=>{
    return (
      <>
        <p>La habitacion que ha reservado tiene:</p>
        <MuestraCamas camas= {4}/>
        <p>La habitacion que ha reservado NO tiene:</p>
        {listado}
      </>
    )
  };

  export default Habitacion;




 