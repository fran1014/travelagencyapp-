const tableDb = "agencia_viajes_app.viajes";

const getAll = () => {
  return db.query(`SELECT * FROM ${tableDb}`);
};

const getById = (viajeId) => {
  return db.query(`SELECT * FROM ${tableDb} WHERE id = ?`, [viajeId]);
};

const create = ({
  fecha_salida,
  fecha_vuelta,
  id_vuelo_ida,
  id_vuelo_vuelta,
  hotel,
  clientes_id,
  hotel_id,
}) => {
  return db.query(
    `INSERT INTO ${tableDb} ( fecha_salida, fecha_vuelta, id_vuelo_ida, id_vuelo_vuelta, hotel, clientes_id, hotel_id) VALUES ( ?, ?, ?, ?, ?, ?, ? )`,
    [
      fecha_salida,
      fecha_vuelta,
      id_vuelo_ida,
      id_vuelo_vuelta,
      hotel,
      clientes_id,
      hotel_id,
    ]
  );
};

const deleteTravelById = (viajeId) => {
  return db.query(`DELETE FROM ${tableDb} WHERE id=?`, [viajeId]);
};

const update = (
  viajeId,
  {
    fecha_salida,
    fecha_vuelta,
    id_vuelo_ida,
    id_vuelo_vuelta,
    hotel,
    clientes_id,
    hotel_id,
  }
) => {
  return db.query(
    `UPDATE ${tableDb} SET viajes.fecha_salida = ?, viajes.fecha_vuelta = ?, viajes.id_vuelo_ida = ?, viajes.id_vuelo_vuelta = ?, viajes.hotel = ?, viajes.clientes_id = ?, viajes.hotel_id = ? WHERE viajes.id = ?;`,
    [
      fecha_salida,
      fecha_vuelta,
      id_vuelo_ida,
      id_vuelo_vuelta,
      hotel,
      clientes_id,
      hotel_id,
      viajeId,
    ]
  );
};

const updateById = (viajeId, clienteId) => {
  return db.query(
    `UPDATE ${tableDb} SET viajes.clientes_id = ? WHERE viajes.id = ?`,
    [clienteId, viajeId]
  );
};

module.exports = {
  getAll,
  getById,
  create,
  deleteTravelById,
  update,
  updateById,
};
