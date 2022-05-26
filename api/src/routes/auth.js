const router = require("express").Router();
const handlers = require("../handlers/auth");

router.get("/me", handlers.me);
router.post("/login", handlers.login);
router.post("/register", handlers.register);

module.exports = router;
