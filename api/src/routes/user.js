const router = require("express").Router();
const handlers = require("../handlers/user");
const jwt = require("../middlewares/jwt");

router.get("/", [jwt.verifyToken, jwt.isAdmin], handlers.getAll);
// router.post("/", handlers.create);
router.get("/:id", [jwt.verifyToken, jwt.isAdmin], handlers.get);
router.post("/:id", [jwt.verifyToken, jwt.isAdmin], handlers.update);
router.patch("/:id", [jwt.verifyToken, jwt.isAdmin], handlers.update);
router.put("/:id", [jwt.verifyToken, jwt.isAdmin], handlers.update);
router.delete("/:id", [jwt.verifyToken, jwt.isAdmin], handlers.delete);

module.exports = router;
