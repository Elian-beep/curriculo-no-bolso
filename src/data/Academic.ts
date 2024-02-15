import { db } from "./SQLiteDatabase";

db.transaction(tx => {
    tx.executeSql(
        'CREATE TABLE IF NOT EXISTS academic (id INTEGER PRIMARY KEY AUTOINCREMENT, curriculum_id INTEGER NOT NULL, name TEXT, type TEXT, curse TEXT, start TEXT, finish TEXT, FOREIGN KEY (curriculum_id) REFERENCES curriculum(id));',
        [],
        () => console.log('Tabela academic criada em Academic')
    )
});

const createAcademicSql = (obj: IAcademic, idCurr: number) => {
    return new Promise((resolve, reject) => {
        db.transaction(tx => {
            tx.executeSql(
                'INSERT INTO academic (curriculum_id, name, type, curse, start, finish) VALUES (?, ?, ?, ?, ?, ?);',
                [idCurr, obj.name, obj.type, obj.curse, obj.start, obj.finish],
                (_, { rowsAffected, insertId }) => {
                    if (rowsAffected > 0) {
                        resolve(insertId);
                    }
                    else reject(new Error('Erro ao inserir academic ' + JSON.stringify(obj)));
                },
            );
        });
    });
}

const getAcademicsByCurr = (idCurr: number) => {
    return new Promise((resolve, reject) => {
        db.transaction(tx => {
            tx.executeSql(
                'SELECT * FROM academic WHERE curriculum_id = ?;',
                [idCurr],
                (_, { rows }) => resolve(rows._array),
            );
        })
    });
}

const getAllAcademics = () => {
    return new Promise((resolve, reject) => {
        db.transaction(tx => {
            tx.executeSql(
                'SELECT * FROM academic;',
                [],
                (_, { rows }) => resolve(rows._array),
            );
        })
    });
}

export { createAcademicSql, getAcademicsByCurr, getAllAcademics }