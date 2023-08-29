import React, { useState, useEffect} from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

const Producto = () => {
  
  const {id} = useParams();
  const [producto, setProducto] = useState({});

  useEffect( () => {
    axios.get('http://localhost:8000/api/productos/'+id)
      .then( res => {
        console.log(res.data);
        setProducto(res.data);
      })
      .catch( err => {
        console.log(err);
      });
  }, [])

  return (
    <div>
      <h1>Nombre: { producto.name }</h1>
      <h3>Precio: $ {producto.precio } </h3>
      <p>Descripción: {producto.descripcion } </p>
      <Link className="btn btn-success" to="/">Regresar</Link>
    </div>
  )
}

export default Producto;