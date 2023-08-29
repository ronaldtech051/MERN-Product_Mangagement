import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ActualizarProducto from './componentes/ActualizarProducto';
import NuevoProducto from './componentes/NuevoProducto';
import Producto from './componentes/Producto';
import TodosProductos from './componentes/TodosProductos';

const App = () => {
  return (
    <div className="Container">
      <BrowserRouter>
        <Switch>
          <Route path="/" exact render={ () => <TodosProductos/>}/>
          <Route path="/nuevo" render={ () => <NuevoProducto/>}/>
          {/* <Route path="/producto/:id" render={ (routeProps) => <Producto {...routeProps}/>}/> // tbn se puede de esta forma*/}
          <Route path="/producto/:id" exact render={ () => <Producto />}/>
          <Route path="/producto/editar/:id" render={ () => <ActualizarProducto />}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
