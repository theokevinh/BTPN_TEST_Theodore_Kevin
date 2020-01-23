
var mysql = require("mysql");

var conn = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "anakbebek",
    database: "todo"
  });

  module.exports = conn;