const router = require("express").Router();

router.use("/clientes", require("./api/clientes"));
router.use("/viajes", require("./api/viajes"));
router.use("/hoteles", require("./api/hoteles"));

module.exports = router;
