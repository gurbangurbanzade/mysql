const express = require("express");
const mysql = require("mysql2");
const bodyParser = require("body-parser");
const app = express();
app.use(express.json());
app.use(bodyParser.json());
// app.get("/student", function (req, res) {
//   res.send("salam");
// });

let connection = mysql.createConnection({
  host: "bodetuxf0l8rtbxz1aqs-mysql.services.clever-cloud.com",
  user: "uazjsfzluuhhhnbi",
  password: "ehvCode5MBl4q14QJwdu",
  database: "bodetuxf0l8rtbxz1aqs",
});

// // api get method

app.get("/student", function (req, res) {
  connection.query("select * from Persons", function (err, result, fields) {
    //   console.log(err);
    //   console.log(result);
    //   console.log(fields);
    res.send(result);
  });
});

// app.get("/student", (req, res) => {
//   res.send(db);
// });

// id get
app.get("/student/:id", (req, res) => {
  const elem = req.params;
  // sql id get method
  connection.query("select * from student", function (err, result, fields) {
    // console.log(result);
    for (let i = 0; i < result.length; i++) {
      if (elem.id == result[i].ID) {
        res.send(result[i]);
      }
    }
  });
});
// delete method
app.delete("/student/:id", (req, res) => {
  const elem = req.params.id;
  const silininenElementArray = db.filter(
    (element) => element.actor_id != elem
  );
  connection.query(
    `DELETE FROM student WHERE ID=${elem}`,
    function (err, result, fields) {
      console.log(result);
    }
  );
});

// post method
app.post("/student/", (req, res) => {
  let obj = req.body;
  connection.query(
    `INSERT INTO student (ID, ad, soyad, unvanid)
    VALUES ("${obj.ID}", "${obj.ad}", "${obj.soyad}", "${obj.unvanId}")`,
    function (err, result, fields) {
      //   console.log(result);
      //   app.get("/student", function (req, res) {
      //     res.send(result);
      //   });
    }
  );
  connection.query("select * from student", function (err, result, fields) {
    //   console.log(err);
    console.log(result);
    res.send(result);
  });
});

app.listen(process.env.PORT || 3000);
