const router = require("express").Router();
const {
  getAll,
  getById,
  create,
  deleteTravelById,
  update,
  updateById,
} = require("../../models/viaje.model");

// Peticiones GET

router.get("/", async (req, res) => {
  try {
    const [result] = await getAll();
    res.json(result);
  } catch (error) {
    res.json({ fatal: error.message });
  }
});

router.get("/:id", async (req, res) => {
  try {
    let id = Number(req.params.id);
    const [result] = await getById(id);
    res.json(result);
  } catch (error) {
    res.json({ fatal: error.message });
  }
});

// Peticiones POST

router.post("/", async (req, res) => {
  try {
    const [result] = await create(req.body);
  } catch (error) {
    res.json({ fatal: error.message });
  }
});

// Peticiones DELETE

router.delete("/:id", async (req, res) => {
  try {
    const [result] = await deleteTravelById(Number(req.params.id));
    res.json(result);
  } catch (error) {
    res.json({ fatal: error.message });
  }
});

// Peticiones Update (PUT)

router.put("/update/:id", async (req, res) => {
  try {
    const [result] = await update(Number(req.params.id), req.body);
    const [result_final] = await getById(Number(req.params.id));
    res.json(result_final);
  } catch (error) {
    res.json({ fatal: error.message });
  }
});

router.put("/:viajeId/cliente/:clienteId", async (req, res) => {
  try {
    const { viajeId, clienteId } = req.params;
    const [result] = await updateById(Number(viajeId), Number(clienteId));
    res.json(result);
  } catch (error) {
    res.json({ fatal: error.message });
  }
});

module.exports = router;
