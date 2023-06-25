const tableDb = "agencia_viajes_app.clientes";

const getAll = () => {
  return db.query(`SELECT * FROM ${tableDb}`);
};

const getById = (clienteId) => {
  return db.query(`SELECT * FROM ${tableDb} WHERE id = ?`, [clienteId]);
};

const create = ({
  nombre,
  apellidos,
  direccion,
  telefono,
  fecha_nacimiento,
  email,
  dni,
}) => {
  return db.query(
    `INSERT INTO ${tableDb} ( nombre, apellidos, direccion, telefono, fecha_nacimiento, email, dni) VALUES ( ?, ?, ?, ?, ?, ?,? )`,
    [nombre, apellidos, direccion, telefono, fecha_nacimiento, email, dni]
  );
};

const deleteClientById = (clienteId) => {
  return db.query(`DELETE FROM ${tableDb} WHERE id=?`, [clienteId]);
};

const update = (
  clienteId,
  { nombre, apellidos, direccion, telefono, fecha_nacimiento, email, dni }
) => {
  return db.query(
    `UPDATE ${tableDb} SET clientes.nombre = ?, clientes.apellidos = ?, clientes.direccion = ?, clientes.telefono = ?, clientes.fecha_nacimiento = ?, clientes.email = ?, clientes.dni = ? WHERE clientes.id = ?;`,
    [
      nombre,
      apellidos,
      direccion,
      telefono,
      fecha_nacimiento,
      email,
      dni,
      clienteId,
    ]
  );
};

module.exports = { getAll, getById, create, deleteClientById, update };
