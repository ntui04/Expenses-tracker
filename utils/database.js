import * as SQLite from "expo-sqlite";

const db = SQLite.openDatabase("expenses.db");

export function createTables() {
  db.transaction((tx) => {
    tx.executeSql(
      "CREATE TABLE IF NOT EXISTS expenses (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, amount REAL, date TEXT);"
    );
  });
}

export function addExpense(name, amount, date) {
  db.transaction((tx) => {
    tx.executeSql("INSERT INTO expenses (name, amount, date) VALUES (?, ?, ?);", [name, amount, date]);
  });
}

export function getExpenses(callback) {
  db.transaction((tx) => {
    tx.executeSql("SELECT * FROM expenses;", [], (_, { rows }) => {
      callback(rows._array);
    });
  });
}

export default db;
