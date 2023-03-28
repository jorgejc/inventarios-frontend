import { axiosInstance } from '../helpers/axios-config';


const getTiposEquipos = () => {
    return axiosInstance.get('tipo-equipo', {

        headers: {
            'Content-type': 'application/json'
        }
    });
}

const crearTipoEquipo = (data) => {
    return axiosInstance.post('tipo-equipo', data, {
        headers:{
            'content-type': 'application/json'
        }
    });
}

const editTipoEquipo = (tipoEquipoId, data) => {
    return axiosInstance.put(`tipo-equipo/${tipoEquipoId}`, data, {
        headers:{
            'content-type': 'application-json'
        }
    });
}

const getTipoEquipoId = (tipoEquipoId) => {

    return axiosInstance.get(`tipo-equipo/${tipoEquipoId}`, { //se llama la ruta deseada    
        headers: {
            'Content-type': 'application/json'   // se dice como se quiere recibir la respuesta en este caso JSON
        }
    });
}


export {
    getTiposEquipos, crearTipoEquipo, editTipoEquipo, getTipoEquipoId
}