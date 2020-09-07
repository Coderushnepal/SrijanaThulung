import connection from "../db";
import snakeize from "snakeize";
import camelize from "camelize";

const table = "users";

export async function getAll() {
  const result = await connection.select("*").from(table);

  return camelize(result);
}

export async function getUserById(id) {
  const [result] = await connection.select("*").from(table).where({ id });
  return result ? camelize(result) : null;
}

export async function createUser(params) {
  const [data] = await connection
    .insert(snakeize(params))
    .into(table)
    .returning("*");

  return camelize(data);
}
