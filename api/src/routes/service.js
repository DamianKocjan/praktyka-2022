const router = require("express").Router();
const handlers = require("../handlers/service");
const jwt = require("../middlewares/jwt");

router.get("/", [jwt.verifyToken], handlers.getAll);
router.post("/", [jwt.verifyToken], handlers.create);
router.get("/:id", [jwt.verifyToken], handlers.get);
router.post("/:id", [jwt.verifyToken], handlers.update);
router.patch("/:id", [jwt.verifyToken], handlers.update);
router.put("/:id", [jwt.verifyToken], handlers.update);

module.exports = router;
