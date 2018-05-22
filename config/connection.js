// Set up MySQL connection.
var mysql = require("mysql");
var connection = mysql.createConnection(process.env.JAWSDB_URL);



// var connection = mysql.createConnection({
//   host: "localhost",
//   port: 3306,
//   user: "root",
//   password: "",
//   database: "burger_db"
// });

// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

connection.query('CREATE TABLE burgers', function(err, rows, fields) {
  if (err) throw err;

  console.log('The solution is: ', rows[0]);
});

// Export connection for our ORM to use.
module.exports = connection;
