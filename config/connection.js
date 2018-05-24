// Set up MySQL connection.
var mysql = require("mysql");
var connection = mysql.createConnection(process.env.JAWSDB_URL);


// the below is to test locally in my computer's development environment
// var connection = mysql.createConnection({
//   host: "localhost",
//   port: 3306,
//   user: "root",
//   password: "",
//   database: "burger_db"
// });

// Make connection. checking the connect to see if it works...
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});
// creating a burgers table for the db
connection.query('CREATE TABLE burgers (id int NOT NULL AUTO_INCREMENT,name varchar(255) NOT NULL,devoured BOOLEAN DEFAULT false,PRIMARY KEY (id));', function(err, rows, fields) {
  if (err) throw err;

  console.log('Table created ');
});

// Export connection for our ORM to use.
module.exports = connection;
