const authorize = (req, res, next) => {
  const { user } = req.query;
  if (user == "john") {
    req.user = { name: "john", id: 3 };
    next();
  } else {
    res.status(404).send("Unauthorized");
  }
};
module.exports = authorize;
