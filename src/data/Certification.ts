import { ICertification } from "../interfaces/ICertification";
import { db } from "./SQLiteDatabase";

const createcertificationSql = (obj: ICertification, idCurr: number) => {
    return new Promise((resolve, reject) => {
        db.transaction(tx => {
            tx.executeSql(
                'INSERT INTO certification (curriculum_id, curse, institution, finish, description) VALUES (?, ?, ?, ?, ?);',
                [idCurr, obj.curse, obj.institution, obj.finish, obj.description],
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

const getCertificationsByCurr = (idCurr: number) => {
    return new Promise((resolve, reject) => {
        db.transaction(tx => {
            tx.executeSql(
                'SELECT * FROM certification WHERE curriculum_id = ?;',
                [idCurr],
                (_, { rows }) => resolve(rows._array),
            );
        })
    });
}

export { createcertificationSql, getCertificationsByCurr }