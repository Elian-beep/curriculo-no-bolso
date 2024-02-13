import { IAward } from "../interfaces/IAward";
import { db } from "./SQLiteDatabase";

const createAwardSql = (obj: IAward) => {
    return new Promise((resolve, reject) => {
        db.transaction(tx => {
            tx.executeSql(
                'INSERT INTO award (curriculum_id, name, year, description) VALUES (?, ?, ?, ?)',
                [obj.curriculum_id, obj.name, obj.year, obj.description],
                (_, { rowsAffected, insertId }) => {
                    if (rowsAffected > 0) resolve(insertId);
                    else reject(new Error('Erro ao inserir award ' + JSON.stringify(obj)));
                },
            );
        });
    });
}

const getAwardsByCurr = (idCurr: number) => {
    return new Promise((resolve, reject) => {
        db.transaction(tx => {
            tx.executeSql(
                'SELECT * FROM award WHERE cucciculum_id = ?',
                [idCurr],
                (_, { rowsAffected, insertId }) => {
                    if (rowsAffected > 0) resolve(insertId);
                    else reject(new Error('Erro ao buscar award para ' + JSON.stringify(idCurr)));
                },
            );
        })
    });
}

export { createAwardSql, getAwardsByCurr }