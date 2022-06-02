const jwt = require("jsonwebtoken");
const { query, getOneOr404 } = require("../db");
const { authenticateUser, hashPassword } = require("../utils/auth");

async function getRoles(userId) {
  const roles = [];

  const results = await query(
    "SELECT * FROM UserRole ur LEFT JOIN Role r ON ur.roleId = r.id WHERE userId = ?",
    [userId]
  );
  results.forEach((result) => roles.push("ROLE_" + result.name.toUpperCase()));

  return roles;
}

// @TODO: you can login without creating account
module.exports.login = async (req, res, next) => {
  try {
    await getOneOr404("SELECT * FROM user WHERE email = ?", [req.body.email]);

    const user = await authenticateUser(req.body.email, req.body.password);
    const roles = await getRoles(user.id);

    const token = jwt.sign({ id: user.id }, process.env.SECRET, {
      expiresIn: 86400, // 24 hours
    });

    res.status(201).json({
      data: { user, roles, token },
    });
  } catch (error) {
    console.error(error);
    next(error);
  }
};

module.exports.register = async (req, res, next) => {
  try {
    const { email, password, phoneNumber, firstName, lastName, dateOfBirth } =
      req.body;

    const data = [
      email,
      await hashPassword(password),
      phoneNumber,
      firstName,
      lastName,
      dateOfBirth,
    ];

    const { insertId } = await query(
      "INSERT INTO user (`email`, `passwordHashed`, `phoneNumber`, `firstName`, `lastName`, `dateOfBirth`) VALUES (?,?,?,?,?,?)",
      data
    );
    const [user] = await query("SELECT id, email, phoneNumber, firstName, lastName, dateOfBirth, street, city, zip, state, country, createdAt, updatedAt FROM user WHERE id = ?", [insertId]);

    res.status(201).json({
      data: user,
    });
  } catch (error) {
    console.error(error);
    next(error);
  }
};

module.exports.me = async (req, res, next) => {
  try {
    const { userId } = req;

    const user = await getOneOr404("SELECT id, email, phoneNumber, firstName, lastName, dateOfBirth, street, city, zip, state, country, createdAt, updatedAt FROM user WHERE id = ?", [userId]);
    const roles = await getRoles(user.id);

    res.status(200).json({
      data: {
        user,
        roles,
      },
    });
  } catch (error) {
    console.error(error);
    next(error);
  }
};
