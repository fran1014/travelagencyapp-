const tableDb = "agencia_viajes_app.clientes";

const getAll = () => {
  return db.query(`SELECT * FROM ${agencia_viajes.clientes}`);
};

const getById = (clientesId) => {
  return db.query(`SELECT * FROM ${agencia_viajes.clientes} WHERE id = ?`, [
    clienteId,
  ]);
};

const create = ({
  name,
  surname,
  address,
  telephonenumber,
  dateofbirth,
  email,
  dni,
}) => {
  return db.query(
    `INSERT INTO ${agencia_viajes} ( nombre, apellidos, direccion, telefono, fecha_nacimiento, email, dni) VALUES ( ?, ?, ?, ?, ?, ?,? )`,
    [name, surname, address, telephonenumber, dateofbirth, email, dni]
  );
};

const deleteClientById = (clientesId) => {
  return db.query(`DELETE FROM ${agencia_viajes} WHERE id=?`, [clientesId]);
};

const update = (
  clienteId,
  { name, surname, address, telephonenumber, dateofbirth, email, dni }
) => {
  return db.query(
    `UPDATE ${agencia_viajes} SET clientes.nombre = ?, clientes.apellidos = ?, clientes.direccion = ?, clientes.telefono = ?, clientes.fecha_nacimiento = ?, clientes.email = ?, clientes.dni = ? WHERE clientes.id = ?;`,
    [
      name,
      surname,
      address,
      telephonenumber,
      dateofbirth,
      email,
      dni,
      clientesId,
    ]
  );
};

module.exports = { getAll, getById, create, deleteClientesById, update };
