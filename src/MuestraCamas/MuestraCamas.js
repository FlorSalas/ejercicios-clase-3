const MuestraCamas= (props)=> {
    
    let estilo;

    if (props.camas<5){ estilo={color: "yellow"} }

    else{ estilo= {color:"green"} };

    const NoCamas= <p style= {{color: "red"}}>No tiene camas disponibles</p>;

    const continuar= <p style={estilo}>Un total de {props.camas} camas</p>;

        return props.camas== 0 ? NoCamas : continuar 

 };


export default MuestraCamas;

/*ejercicio 5.g */
/*Si no  entendi mal import hace que accedamos a toda la pagina de estilos e import estilos hace que podamos acceder a  un componente o un objeto o una constante llamada estilo*/