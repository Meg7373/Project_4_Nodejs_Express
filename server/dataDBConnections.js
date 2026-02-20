import mysql from 'mysql2/promise'
let db

try {
  db =  await mysql.createConnection ( {
  host: 'localhost',
  user: 'root',
  password: 'Molly9677...',
  database: 'schooldb'
  })
  console.log("2 ✅ Connected to DB");
}
catch (error) {
  console.log("1 ❌ Error connecting to DB");
}

export default db;