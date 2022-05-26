const jwt = require("jsonwebtoken");
const { db } = require("../db");
const { authenticateUser, hashPassword } = require("../services/auth");

async function getRoles(userId) {
  const roles = [];

  const query = await db.query(
    "SELECT * FROM UserRole WHERE userId = ? LEFT JOIN Role ON UserRole.roleId = Role.id",
    [userId]
  )
  query.forEach((role) => roles.push("ROLE_" + role.name.toUpperCase()));

  return roles;
}

module.exports.login = async (req, res, next) => {
  try {
    const user = await authenticateUser(req.body.email, req.body.password);
    console.log({user});
    const roles = await getRoles(user.id);

    const token = jwt.sign({ id: user.id }, process.env.SECRET, {
      expiresIn: 86400, // 24 hours
    });

    res.json({
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

    const { insertId } = await db.query(
      "INSERT INTO user (`email`, `passwordHashed`, `phoneNumber`, `firstName`, `lastName`, `dateOfBirth`) VALUES (?,?,?,?,?,?)",
      data
    );
    const [user] = await db.query("SELECT * FROM user WHERE id = ?", [
      insertId,
    ]);
    delete user.passwordHashed;

    res.json({
      data: user,
    });
  } catch (error) {
    console.error(error);
    next(error);
  }
};

module.exports.me = async (req, res, next) => {
  try {
    const { userId } = req.user;

    const [user] = await db.query("SELECT * FROM user WHERE id = ?", [userId]);
    const roles = getRoles(user.id);

    if (!user) {
      throw new Error("User not found");
    }

    res.json({
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
