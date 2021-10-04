import React from 'react';
import ReactDOM from 'react-dom';
import propTypes from 'prop-types';
import Habitacion from './Habitacion/Habitacion';


/*ejercicio 3*/

Habitacion.propTypes={
  camas: propTypes.number,
  tieneTV: propTypes.bool,
  tipoPlacard: propTypes.string,
  reservadoPor: propTypes.string
};


/*ejercicio 4*/

/*tengo que agregar props a MuestraCamas */


// const reservas= {
//   id: 1,
//   name: "Fabricio"
// };






ReactDOM.render(<Habitacion />, document.getElementById("root"));