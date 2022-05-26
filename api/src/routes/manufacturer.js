const router = require("express").Router();
const handlers = require("../handlers/manufacturer");
const jwt = require("../middlewares/jwt");

router.get("/", handlers.getAll);
router.post("/", [jwt.verifyToken, jwt.isAdmin], handlers.create);
router.get("/:id", handlers.get);
router.post("/:id", [jwt.verifyToken, jwt.isAdmin], handlers.update);
router.patch("/:id", [jwt.verifyToken, jwt.isAdmin], handlers.update);
router.put("/:id", [jwt.verifyToken, jwt.isAdmin], handlers.update);
router.delete("/:id", [jwt.verifyToken, jwt.isAdmin], handlers.delete);

module.exports = router;
