const tableDb = "agencia_viajes_app.viajes";

const getAll = () => {
  return db.query(`SELECT * FROM ${tableDb}`);
};

const getById = (viajesId) => {
  return db.query(`SELECT * FROM ${tableDb} WHERE id = ?`, [viajesId]);
};

const create = ({
  departure_date,
  arrival_date,
  id_flight_departure,
  id_flight_return,
  hotel,
  clientes_id,
  hotel_id,
}) => {
  return db.query(
    `INSERT INTO ${tableDb} ( departure_date, arrival_date, id_flight_departure, id_flight_return, hotel, clientes_id, hotel_id) VALUES ( ?, ?, ?, ?, ?, ?, ? )`,
    [
      departure_date,
      arrival_date,
      id_flight_departure,
      id_flight_return,
      hotel,
      clientes_id,
      hotel_id,
    ]
  );
};

const deleteTravelById = (viajesId) => {
  return db.query(`DELETE FROM ${tableDb} WHERE id=?`, [viajesId]);
};

const update = (
  viajesId,
  {
    departure_date,
    arrival_date,
    id_flight_departure,
    id_flight_return,
    hotel,
    clientes_id,
    hotel_id,
  }
) => {
  return db.query(
    `UPDATE ${tableDb} SET viajes.departure_date = ?, viajes.fecha_vuelta = ?, viajes.id_flight_departure = ?, viajes.id_flight_return = ?, viajes.hotel = ?, viajes.clientes_id = ?, viajes.hotel_id = ? WHERE viajes.id = ?;`,
    [
      departure_date,
      arrival_date,
      id_flight_departure,
      id_flight_return,
      hotel,
      clientes_id,
      hotel_id,
      viajesId,
    ]
  );
};

const updateById = (viajesId, clientesId) => {
  return db.query(
    `UPDATE ${tableDb} SET viajes.clientes_id = ? WHERE viajes.id = ?`,
    [clientesId, viajesId]
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
