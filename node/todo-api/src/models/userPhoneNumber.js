import connection from "../db";
import snakeize from "snakeize";
import camelize from "camelize";

const table = "user_phone_numbers";


    export async function add(params) {
        const insertData = snakeize(params);
        console.log(insertData);
        const [result] = await connection.batchInsert(table, insertData);

        return camelize(result)
    }