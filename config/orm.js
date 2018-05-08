var connection = require("./connection.js")


//selectAll()
//insertOne()
//updateOne()

var connection = require("./connection.js");




var orm = {
    selectAll: function(table) {
    var queryString = "SELECT * FROM ??";
    connection.query(queryString, [table], function(err, result) {
      if (err) throw err;
      console.log(result);
    });
  },

    insertOne: function(table, columnOne, columnTwo, valueOne, valueTwo) {
    var queryString = "INSERT INTO ?? (??,??) VALUES (??,??)";
    console.log(queryString);
    connection.query(queryString, [table, columnOne, valueOne, valueTwo], function(err, result) {
      if (err) throw err;
      console.log(result);
    });
  },

};

module.exports = orm;
