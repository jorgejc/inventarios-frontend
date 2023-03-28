import { axiosInstance } from '../helpers/axios-config';

const getEstadosEquipos = () => {
    return axiosInstance.get('estado-equipo', {

        headers: {
            'Content-type': 'application/json'
        }
    });
}

const crearEstadoEquipo = (data) => {
    return axiosInstance.post('estado-equipo', data, {
        headers:{
            'content-type': 'application/json'
        }
    });
}

const editEstadoEquipo = (estadoEquipoId, data) => {
    return axiosInstance.put(`estado-equipo/${estadoEquipoId}`, data, {
        headers:{
            'content-type': 'application-json'
        }
    });
}

export {
    getEstadosEquipos, crearEstadoEquipo, editEstadoEquipo
}