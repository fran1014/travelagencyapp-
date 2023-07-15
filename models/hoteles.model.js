const tableDb = "agencia_viajes_app.hoteles";

const getAll = () => {
  return db.query(`SELECT * FROM ${tableDb}`);
};

const getById = (hotelesId) => {
  return db.query(`SELECT * FROM ${tableDb} WHERE id = ?`, [hotelesId]);
};

const create = ({
  name,
  address,
  city,
  stars_number,
  description,
  price,
}) => {
  return db.query(
    `INSERT INTO ${tableDb} ( nombre, direccion, ciudad, numero_estrellas, descripcion, tarifa) VALUES ( ?, ?, ?, ?, ?, ? )`,
    [name, address, city, stars_number, description, price]
  );
};

const deleteHotelesById = (hotelesId) => {
  return db.query(`DELETE FROM ${tableDb} WHERE id=?`, [hotelesId]);
};

const update = (
  hotelId,
  { name, address, city, stars_number, description, price }
) => {
  return db.query(
    `UPDATE ${tableDb} SET hoteles.nombre = ?, hoteles.direccion = ?, hoteles.ciudad = ?, hoteles.numero_estrellas = ?, hoteles.descripcion = ?, hoteles.tarifa = ? WHERE hoteles.id = ?;`,
    [name, address, city, stars_number, description, price, hotelesId]
  );
};

module.exports = { getAll, getById, create, deleteHotelesById, update };
