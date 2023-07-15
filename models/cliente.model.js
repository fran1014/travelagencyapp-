const tableDb = "agencia_viajes_app.clientes";

const getAll = () => {
  return db.query(`SELECT * FROM ${agencia_viajes.clientes}`);
};

const getById = (clienteId) => {
  return db.query(`SELECT * FROM ${agencia_viajes.clientes} WHERE id = ?`, [
    clienteId,
  ]);
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
    `INSERT INTO ${agencia_viajes} ( nombre, apellidos, direccion, telefono, fecha_nacimiento, email, dni) VALUES ( ?, ?, ?, ?, ?, ?,? )`,
    [nombre, apellidos, direccion, telefono, fecha_nacimiento, email, dni]
  );
};

const deleteClientById = (clienteId) => {
  return db.query(`DELETE FROM ${agencia_viajes} WHERE id=?`, [clienteId]);
};

const update = (
  clienteId,
  { nombre, apellidos, direccion, telefono, fecha_nacimiento, email, dni }
) => {
  return db.query(
    `UPDATE ${agencia_viajes} SET clientes.nombre = ?, clientes.apellidos = ?, clientes.direccion = ?, clientes.telefono = ?, clientes.fecha_nacimiento = ?, clientes.email = ?, clientes.dni = ? WHERE clientes.id = ?;`,
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
