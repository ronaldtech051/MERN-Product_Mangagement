import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import axios from 'axios';

const ActualizarProducto = () => {
  
  const {id} = useParams();
  const [nombre, setNombre] = useState('');
  const [precio, setPrecio] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [errors, setErrors] = useState({});

  const history = useHistory();

  useEffect( () => {
    axios.get('http://localhost:8000/api/productos/'+id)
      .then( res => {
        console.log(res.data);
        setNombre(res.data.nombre);
        setPrecio(res.data.precio);
        setDescripcion(res.data.descripcion);
      })
      .catch( err => {
        console.log(err);
      });
  }, [])

  const actualizarProducto = (e) => {
    e.preventDefault();
    axios.put("http://localhost:8000/api/productos/"+ id,{
    nombre, 
    precio, 
    descripcion
    })
    .then( res => history.push("/"))
    .catch( err => {
      console.log(err);
      setErrors(err.response.data.errors)
    });
  }

  return (
    <div>
      <h1>Editar Formulario</h1>
      <form onSubmit={actualizarProducto}>
        <div className='form-group'>
          <label htmlFor='nombre'>Nombre:</label>
          <input id='nombre' name='nombre' type="text" className='form-control' value={nombre} onChange={(e) => setNombre(e.target.value)}/>
          { errors.nombre ? <span className='text-danger' >{ errors.nombre.message }</span>: null}
        </div>
        <div className='form-group'>
          <label htmlFor='precio'>Precio:</label>
          <input id='precio' name='precio' type="text" className='form-control' value={precio} onChange={(e) => setPrecio(e.target.value)}/>
        </div>
        <div className='form-group'>
          <label htmlFor='descripcion'>Descripción:</label>
          <input id='descripcion' name='descripcion' type="text" className='form-control' value={descripcion} onChange={(e) => setDescripcion(e.target.value)}/>
          { errors.descripcion ? <span className='text-danger' >{ errors.descripcion.message }</span>: null}
        </div>
        <input type="submit" className="btn btn-success" value="Crear"/>
      </form>
    </div>
  )
}

export default ActualizarProducto;