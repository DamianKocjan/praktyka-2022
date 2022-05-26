const router = require("express").Router();
const handlers = require("../handlers/auth");
const jwt = require("../middlewares/jwt");

router.get("/me", [jwt.verifyToken], handlers.me);
router.post("/login", handlers.login);
router.post("/register", handlers.register);

module.exports = router;
