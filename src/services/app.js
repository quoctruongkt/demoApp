import SQLite from 'react-native-sqlite-storage';

export const db = SQLite.openDatabase(
  {name: 'demoAppDatabase.db', location: 'default'},
  () => {},
  error => console.log(error),
);
