const mysql = require("mysql2");

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Molly9677...",
  database: "coffee"
});

db.connect(err => {
  if (err) console.log("❌ DB connection failed");
  else console.log("✅ DB connected");
});

module.exports = db;
