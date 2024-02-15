import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase("curr.db");

const initializeDatabase = () => {
    db.transaction(tx => {
        tx.executeSql(
            'CREATE TABLE IF NOT EXISTS curriculum (id INTEGER PRIMARY KEY AUTOINCREMENT, title TEXT NOT NULL, completeName TEXT NOT NULL, email TEXT NOT NULL, phone TEXT NOT NULL, linkedin TEXT);',
            [],
            () => console.log('Tabela curriculum criada em SQLiteDatabase')
        );

        tx.executeSql(
            'CREATE TABLE IF NOT EXISTS academic (id INTEGER PRIMARY KEY AUTOINCREMENT, curriculum_id INTEGER NOT NULL, name TEXT, type TEXT, curse TEXT, start TEXT, finish TEXT, FOREIGN KEY (curriculum_id) REFERENCES curriculum(id));',
            [],
            () => console.log('Tabela academic criada em SQLiteDatabase')
        )

        tx.executeSql(
            'CREATE TABLE IF NOT EXISTS professional (id INTEGER PRIMARY KEY AUTOINCREMENT, curriculum_id INTEGER NOT NULL, name TEXT, role TEXT, start TEXT, finish TEXT, description TEXT, FOREIGN KEY (curriculum_id) REFERENCES curriculum(id));',
            [],
            () => console.log('Tabela professional criada em SQLiteDatabase')
        )

        tx.executeSql(
            'CREATE TABLE IF NOT EXISTS certification (id INTEGER PRIMARY KEY AUTOINCREMENT, curriculum_id INTEGER NOT NULL, curse TEXT, institution TEXT, finish TEXT, description TEXT, FOREIGN KEY (curriculum_id) REFERENCES curriculum(id));',
            [],
            () => console.log('Tabela certification criada em SQLiteDatabase')
        )

        tx.executeSql(
            'CREATE TABLE IF NOT EXISTS award (id INTEGER PRIMARY KEY AUTOINCREMENT, curriculum_id INTEGER NOT NULL, name TEXT, year TEXT, description TEXT, FOREIGN KEY (curriculum_id) REFERENCES curriculum(id));',
            [],
            () => console.log('Tabela award criada em SQLiteDatabase')
        )
    });
}

export { db, initializeDatabase };