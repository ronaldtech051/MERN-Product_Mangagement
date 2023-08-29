import React, {useState} from 'react';
import axios from "axios";
import { useHistory } from 'react-router-dom';

const NuevoProducto = () => {

  const [nombre, setNombre] = useState("");
  const [precio, setPrecio] = useState("");
  const [ descripcion, setDescripcion] = useState("");
  const [errors, setErrors] = useState({})
  //usamos history
  const history = useHistory();

  //Funcion para guardar con conexion a backend
  const guardarProducto = e => {
    e.preventDefault();
    // axios.post('http://localhost:8000/api/productos', {name: nombre, price: precio, description: descripcion}) //en caso que en modelo esten declarados con otro nombre
    axios.post('http://localhost:8000/api/productos', {nombre, precio, descripcion})
      .then( res => {
        console.log(res);
        history.push("/");
      })
      .catch( err => {
        console.log(err);
        setErrors (err.response.data.errors);
      })
  }

  return (
    <div>
      <h1>Nuevo Producto</h1>
      <form onSubmit={guardarProducto}>
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

export default NuevoProducto;