const express = require("express");
const { products } = require("./data");
const app = express();

app.get("/", (request, response) => {
  response.html("<h1>Home Page</h1><a href='/api/products'>Products</a>");
});
//String Queries
app.get("/api/v1/query", (req, res) => {
  console.log(req.query);
  //Busco en el request los parametros search y limit
  const { search, limit } = req.query;
  let sortedProducts = [...products];

  if (search) {
    sortedProducts = sortedProducts.filter((product) => {
      return product.name.startsWith(search);
    });
  }
  if (limit) {
    //corta el array en el numero de elmentos introducidos
    sortedProducts = sortedProducts.slice(0, Number(limit));
  }
  //Si la búsqueda introducida no devuelve resultados
  if (sortedProducts.length < 1) {
    /* res.status(200).send("No products matched your search."); */
    return res.status(200).json({ sucess: true, data: [] });
  }
  return res.status(200).json(sortedProducts);
});

app.listen(5000, () => {
  console.log("Server is listening on port 5000");
});
