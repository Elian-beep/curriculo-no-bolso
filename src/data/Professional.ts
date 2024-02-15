import { IProfessional } from "../interfaces/IProfessional";
import { db } from "./SQLiteDatabase";

const initializeDatabase = () => {
    db.transaction(tx => {
        tx.executeSql(
            'CREATE TABLE IF NOT EXISTS professional (id INTEGER PRIMARY KEY AUTOINCREMENT, curriculum_id INTEGER NOT NULL, name TEXT, role TEXT, start TEXT, finish TEXT, description TEXT, FOREIGN KEY (curriculum_id) REFERENCES curriculum(id));',
            [],
            () => console.log('Tabela professional criada em Professional')
        )
    });
}

const createProfessionalSql = (obj: IProfessional, idCurr) => {
    return new Promise((resolve, reject) => {
        db.transaction(tx => {
            tx.executeSql(
                'INSERT INTO professional (curriculum_id, name, role, start, finish, description) VALUES (?, ?, ?, ?, ?, ?);',
                [idCurr, obj.name, obj.role, obj.start, obj.finish, obj.description],
                (_, { rowsAffected, insertId }) => {
                    if (rowsAffected > 0) {
                        resolve(insertId);
                    }
                    else reject(new Error('Erro ao inserir professional ' + JSON.stringify(obj)));
                },
            );
        });
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

export { getProfessionalByCurr, createProfessionalSql }