const jwt = require("jsonwebtoken");
const { query } = require("../db");

module.exports.verifyToken = (req, res, next) => {
  let token = req.headers["x-access-token"];

  if (!token) {
    return res.status(403).send({
      message: "No token provided!",
    });
  }

  jwt.verify(token, process.env.SECRET, (err, decoded) => {
    if (err) {
      return res.status(401).send({
        message: "Unauthorized!",
      });
    }
    req.userId = decoded.id;
    next();
  });
};

module.exports.isAdmin = async (req, res, next) => {
  const roles = await query(
    "SELECT * FROM UserRole ur LEFT JOIN Role r ON ur.roleId = r.id WHERE ur.userId = ?",
    [req.userId]
  );

  for (let i = 0; i < roles.length; i++) {
    if (roles[i].name === "admin") {
      next();
      return;
    }
  }

  res.status(403).send({
    message: "Require Admin Role!",
  });
  return;
};
