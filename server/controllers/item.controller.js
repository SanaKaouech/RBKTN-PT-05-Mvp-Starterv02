//const uplode = require("../modules/multer")
//const cloudinary = require("../modules/cloudinary") 
//const cloudinary = require("../modules/cloudinary");

// UNCOMMENT THE DATABASE YOU'D LIKE TO USE

const db = require("../database-mysql");

// UNCOMMENT IF USING MYSQL WITH CALLBACKS
// Récupérer la liste de tous les animaux (READ - GET)
const selectAll = function (req, res) {
  db.query("SELECT * FROM animal", (err, items, fields) => {
   if (err) {
    res.status(500).send(err);
   } else {
     res.status(200).send(items);
    }
  });
 };

 const addAnimal = (req, res) => {
   const query = "INSERT INTO  animal  set ?" 
   console.log("body:", req.body )
   db.query(query,req.body,(err,result)=>{
     err ? res.status(500).send(err) : res.status(200).send(result)
  })
   };


  
  

   const updateAnimal = (req, res) => {
    const query = `UPDATE animal set ? where idanimal = ${req.params.id}`
    db.query(query,req.body,(err,result)=>{
     err ? res.status(500).send(err) : res.status(200).send(result)
   })
   };
   
   const removeAnimal =  (req, res) => {
    const query = "delete from animal where idanimal = ?"
    db.query(query,req.params.id,(err,result)=>{
     err ? res.status(500).send(err) : res.status(200).send(result)
   })
   };

   // Récupérer un animal spécifique par son nom (READ - GET)

   const getOneAnimal = (req, res) => {
    const query = `SELECT * FROM animal where name = "${req.params.name}"`
    db.query(query,(err,result)=>{
     err ? res.status(500).send(err) : res.status(200).send(result)
   })
   };

module.exports = { selectAll, addAnimal, updateAnimal, removeAnimal, getOneAnimal };
