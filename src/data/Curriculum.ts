import { ISimpleCurriculum } from "../interfaces/ICurriculum";
import { db } from "./SQLiteDatabase"; 

const createCurrSql = (obj: ISimpleCurriculum) => {
    return new Promise((resolve, reject) => {
        db.transaction(tx => {
            tx.executeSql(
                'INSERT INTO curriculum (title, completeName, email, phone, linkedin) VALUES (?, ?, ?, ?, ?);',
                [obj.title, obj.completeName, obj.email, obj.phone, obj.linkedin],
                (_, { rowsAffected, insertId }) => {
                    if (rowsAffected > 0) {
                        resolve(insertId);
                    }
                    else reject(new Error('Erro ao inserir curriculum ' + JSON.stringify(obj)));
                },
            );
        })
    });
}

const getAllCurrSql = () => {
    return new Promise((resolve, reject) => {
        db.transaction(tx => {
            tx.executeSql(
                'SELECT * FROM curriculum;',
                [],
                (_, { rows }) => resolve(rows._array),
            );
        })
    });
}

const removeCurrSql = (id: number) => {
    return new Promise((resolve, reject) => {
        db.transaction(tx => {
            tx.executeSql(
                'DELETE FROM curriculum WHERE id=?;',
                [id],
                (_, rowsAffected) => {
                    resolve(rowsAffected);
                },
            );
        })
    });
}

export { createCurrSql, getAllCurrSql, removeCurrSql }