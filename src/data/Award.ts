import { IAward } from "../interfaces/IAward";
import { db } from "./SQLiteDatabase";

const createAwardSql = (obj: IAward, idCurr: number) => {
    return new Promise((resolve, reject) => {
        db.transaction(tx => {
            tx.executeSql(
                'INSERT INTO award (curriculum_id, name, year, description) VALUES (?, ?, ?, ?)',
                [idCurr, obj.name, obj.year, obj.description],
                (_, { rowsAffected, insertId }) => {
                    if (rowsAffected > 0) {
                        resolve(insertId);
                    }
                    else reject(new Error('Erro ao inserir certification ' + JSON.stringify(obj)));
                },
            );
        });
    });
}

const getAwardsByCurr = (idCurr: number) => {
    return new Promise((resolve, reject) => {
        db.transaction(tx => {
            tx.executeSql(
                'SELECT * FROM award WHERE curriculum_id = ?',
                [idCurr],
                (_, { rows }) => resolve(rows._array),
            );
        })
    });
}

export { createAwardSql, getAwardsByCurr }