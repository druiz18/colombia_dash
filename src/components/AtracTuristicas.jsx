import Consulta2 from './Consulta2'


function AtracTuristicas() {
    return(
        Consulta2('https://api-colombia.com/api/v1/TouristicAttraction')
    );
}

export default AtracTuristicas;