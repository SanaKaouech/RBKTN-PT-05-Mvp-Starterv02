const mysql = require('mysql2');

const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'sanakaouech22.',
  database : 'animals'
});


connection.connect((err)=>{
  err ? console.log(err) :
  console.log("Done !");
})

module.exports = connection;