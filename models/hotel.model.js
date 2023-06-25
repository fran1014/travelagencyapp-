const tableDb = "agencia_viajes_app.hoteles";

const getAll = () => {
  return db.query(`SELECT * FROM ${tableDb}`);
};

const getById = (hotelId) => {
  return db.query(`SELECT * FROM ${tableDb} WHERE id = ?`, [hotelId]);
};

const create = ({
  nombre,
  direccion,
  ciudad,
  numero_estrellas,
  descripcion,
  tarifa,
}) => {
  return db.query(
    `INSERT INTO ${tableDb} ( nombre, direccion, ciudad, numero_estrellas, descripcion, tarifa) VALUES ( ?, ?, ?, ?, ?, ? )`,
    [nombre, direccion, ciudad, numero_estrellas, descripcion, tarifa]
  );
};

const deleteHotelById = (hotelId) => {
  return db.query(`DELETE FROM ${tableDb} WHERE id=?`, [hotelId]);
};

const update = (
  hotelId,
  { nombre, direccion, ciudad, numero_estrellas, descripcion, tarifa }
) => {
  return db.query(
    `UPDATE ${tableDb} SET hoteles.nombre = ?, hoteles.direccion = ?, hoteles.ciudad = ?, hoteles.numero_estrellas = ?, hoteles.descripcion = ?, hoteles.tarifa = ? WHERE hoteles.id = ?;`,
    [nombre, direccion, ciudad, numero_estrellas, descripcion, tarifa, hotelId]
  );
};

module.exports = { getAll, getById, create, deleteHotelById, update };
