import { ICertification } from "../interfaces/ICertification";
import { db } from "./SQLiteDatabase";

const createCertificationSql = (obj: ICertification) => {
    return new Promise((resolve, reject) => {
        db.transaction(tx => {
            tx.executeSql(
                'INSERT INTO certification (curriculum_id, curse, institution, finish, description) VALUES (?, ?, ?, ?, ?)',
                [obj.curriculum_id, obj.curse, obj.institution, obj.finish, obj.description],
                (_, { rowsAffected, insertId }) => {
                    if (rowsAffected > 0) resolve(insertId);
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
                'SELECT * FROM certification WHERE cucciculum_id = ?',
                [idCurr],
                (_, { rowsAffected, insertId }) => {
                    if (rowsAffected > 0) resolve(insertId);
                    else reject(new Error('Erro ao buscar certifications para ' + JSON.stringify(idCurr)));
                },
            );
        })
    });
}

export { createCertificationSql, getCertificationsByCurr }