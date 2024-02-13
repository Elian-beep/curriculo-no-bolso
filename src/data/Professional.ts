import { IProfessional } from "../interfaces/IProfessional";
import { db } from "./SQLiteDatabase";

const createProfessionalSql = (obj: IProfessional, idCurr: number) => {
    return new Promise((resolve, reject) => {
        db.transaction(tx => {
            tx.executeSql(
                'INSERT INTO professional (curriculum_id, name, role, start, finish, description) VALUES (?, ?, ?, ?, ?, ?);',
                [idCurr, obj.name, obj.role, obj.start, obj.finish, obj.description],
                (_, { rowsAffected, insertId }) => {
                    if (rowsAffected > 0) resolve(insertId);
                    else reject(new Error('Erro ao inserir professional ' + JSON.stringify(obj)));
                },
            );
        })
    });
}

const getProfessionalByCurr = (idCurr: number) => {
    return new Promise((resolve, reject) => {
        db.transaction(tx => {
            tx.executeSql(
                'SELECT * FROM professional WHERE curriculum_id = ?;',
                [idCurr],
                (_, { rows }) => resolve(rows._array),
            );
        })
    });
}

export { createProfessionalSql, getProfessionalByCurr }