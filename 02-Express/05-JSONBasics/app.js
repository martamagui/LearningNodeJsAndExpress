const express = require("express");
const { products } = require("./data");
const app = express();

app.get("/", (request, response) => {
  response.html("<h1>Home Page</h1><a href='/api/products'>Products</a>");
});

app.get("/api/products", (req, res) => {
  const newProducts = products.map((product) => {
    //Tomo únicamente los datos necesarios
    const { id, name, image } = product;
    return { id, name, image };
  });
  res.json(newProducts);
});

app.get("/api/products/:productID", (req, res) => {
  /* console.log(req); */
  const { productID } = req.params;
  const singleProduct = products.find(
    (product) => product.id === Number(productID)
  );
  //En caso de que el producto no sea encontrado
  if (!singleProduct) {
    return res.status(404).send("Product Not Found");
  }
  res.json(singleProduct);
});

//----------------------------------POSTMAN
//Edita los datos
app.post("api/postman/people", (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res.status(400).json({ success: true, data: newPeople });
  }
  res.status(201).json({ success: true, data: [...people, name] });
});

//PUT - Actualiza los datos
app.put("api/people/:id", (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  console.log(`${id} ${name}`);
  res.send("hello world");
});

app.listen(5000, () => {
  console.log("Server is listening on port 5000");
});
