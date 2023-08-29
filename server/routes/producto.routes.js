const ProductoController = require("../controllers/producto.controller")
//doy de alta un producto
module.exports = (app) => {
  app.post("/api/productos", ProductoController.create_product);
  app.get("/api/productos", ProductoController.get_all);
  app.get("/api/productos/:identificador", ProductoController.get_product);
  app.put("/api/productos/:id", ProductoController.update_product); //id igual a id de funcion en controller
  app.delete("/api/productos/:id", ProductoController.delete_product); //id igual a id de funcion en controller
}