const express = require("express");
const router = express.Router();
let { people } = require("../../data");

//Routers
router.get("/", (req, res) => {
  res.status(200).json({ success: true, data: people });
});
//POST
router.post("/", (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res
      .status(400)
      .json({ success: false, msg: "Please provide a name" });
  }
  res.status(201).json({ success: true, person: name });
});

//----------------------------------POSTMAN

//PUT - Actualiza los datos
router.put("/:id", (req, res) => {
  const { id } = req.params;

  const { name } = req.body;
  console.log(req.body);
  const person = people.find((person) => person.id === Number(id));

  if (!person) {
    return res
      .status(404)
      .json({ success: false, msg: `no person with id ${id}` });
  }
  const newPeople = people.map((person) => {
    if (person.id === Number(id)) {
      person.name = name;
    }
    return person;
  });
  console.log(newPeople);
  res.status(200).json({ success: true, data: newPeople });
});
//DELETE
router.delete("/api/people/:id", (req, res) => {
  const person = people.find((person) => person.id === Number(req.params.id));
  if (!person) {
    return res
      .status(404)
      .json({ success: false, msg: `no person with id ${req.params.id}` });
  }
  const newPeople = people.filter(
    (person) => person.id !== Number(req.params.id)
  );
  return res.status(200).json({ success: true, data: newPeople });
});

module.exports = router;
