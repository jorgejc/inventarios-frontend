import React, { useState, useEffect } from 'react'
import { getEstadosEquipos, crearEstadoEquipo } from '../../services/estadoService';
import Swal from 'sweetalert2';
const moment = require('moment');

export const EstadoView = () => {

  const [valoresForm, setValoresForm] = useState({});
  const [estados, setEstados] = useState([]);
  const { nombre = '', estado = '' } = valoresForm;


  const listarEstados = async () => {
    try {
      Swal.fire({
        allowOutsideClick: false,
        text: 'Cargando...'
    });
    Swal.showLoading();
      const resp = await getEstadosEquipos();
      setEstados(resp.data);
      Swal.close();
    } catch (error) {
      console.log(error);
      Swal.close();
    }
  }

  useEffect(() => {
    listarEstados();
  }, []);

  const handleOnChange = (e) => {
    setValoresForm({ ...valoresForm, [e.target.name]: e.target.value });
  }

  const handleCrearEstado = async (e) => {
    e.preventDefault();
    console.log(valoresForm);
    try {
      Swal.fire({
        allowOutsideClick: false,
        text: 'Cargando...'
      });
      Swal.showLoading();
      const resp = await crearEstadoEquipo(valoresForm);
      Swal.close();
      setValoresForm({ nombre: '', estado: '' });
    } catch (error) {
      console.log(error);
      Swal.close();
    }
  }

  return (
    <div className="container-fluid">
      <form onSubmit={(e) => handleCrearEstado(e)}>
        <div className='row'>
          <div className='col-lg-8'>
            <div className="mb-3">
              <label className="form-label">Nombre</label>
              <input required name='nombre' value={nombre} type="text" className="form-control"
                onChange={(e) => handleOnChange(e)} />
            </div>
          </div>
          <div className='col-lg-4'>
            <div className="mb-3">
              <label className="form-label">Estado</label>
              <select required name='estado' value={estado} className="form-select"
                onChange={(e) => handleOnChange(e)}>
                <option selected>--SELECCIONE --</option>
                <option value="Activo">Activo</option>
                <option value="Inactivo">Inactivo</option>
              </select>
            </div>
          </div>
        </div>
        <button className="btn btn-primary">Guardar</button>
      </form>

      <table class="table">
        <thead>
          <tr>
            <th scope='row'>#</th>
            <th scope="col">Nombre</th>
            <th scope="col">Estado</th>
            <th scope='col'>Fecha Creación</th>
            <th scope='col'>Fecha Actualización</th>
          </tr>
        </thead>
        <tbody>

          {
            estados.length > 0 && estados.map((estado, index) => {
              return <tr>
                <th scope='row'>{index + 1}</th>
                <td>{estado.nombre}</td>
                <td>{estado.estado}</td>
                <td>{moment(estado.fechaCreacion).format('DD-MM-YYYY HH:mm')}</td>
                <td>{moment(estado.fechaActualizacion).format('DD-MM-YYYY HH:mm')}</td>
              </tr>
            })
          }
        </tbody>
      </table>
    </div>
  )
}
