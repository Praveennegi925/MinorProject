import path from "path";
import express from "express";
import chalk from "chalk";
import connection from "./connection.js";
const app = express();
const Path = path.dirname(
  "/home/privatedeal/Desktop/Praveen/web dev/MinorProject/index.html"
);
app.use(express.static(Path));
app.use(express.urlencoded());

app.post("/signup.html", (req, res) => {
  var firstname = req.body.firstname;
  var lastname = req.body.lastname;
  var Email = req.body.Email;
  var Gender = req.body.Gender;
  var zipcode = req.body.zipcode;
  var Address = req.body.Address;
  var City = req.body.City;
  var state = req.body.state;
  var password = req.body.password;

  connection.connect((error)=>{
    if(error) throw error;
       console.log(chalk.red.inverse("database is connected"));
       var sql = "INSERT INTO members (firstname,lastname,Email,Gender,zipcode,Address,City,state,password) VALUES ('"+firstname+"', '"+lastname+"','"+Email+"','"+Gender+"','"+zipcode+"','"+Address+"','"+City+"','"+state+"','"+password+"')";

       connection.query(sql,  (err, result)=> {
                  if (err) throw err;
                  console.log(chalk.green.inverse("data has inserted in database"));
               });
   });
  res.redirect("/login.html");
});

app.post("/login.html", (req, res) => {

  var sql = "SELECT Email,Password,firstname,lastname,Gender,zipcode,City,state ,Address FROM members ";

  connection.query(sql, async (error, result) => {
         if (error) throw error;

    for (let i = 0; i < result.length; i++)
     {
      
      if (result[i].Email == req.body.Email && result[i].Password == req.body.Password)
     
      {
        var firstname = result[i].firstname;
        var lastname = result[i].lastname;
        var Email = result[i].Email;
        var Gender = result[i].Gender;
        var zipcode = result[i].zipcode;
        var Address = result[i].Address;
        var City = result[i].City;
        var state = result[i].state;

        await res.send(`<!DOCTYPE html>
               <html lang="en">
                 <head>
                   <meta charset="UTF-8" >
                   <meta http-equiv="X-UA-Compatible" content="IE=edge" >
                   <meta name="viewport" content="width=device-width, initial-scale=1.0" >
                   <title>Profile</title>
                   <style>
                      h2  {
                               color :purple ;
                          }
                   </style>
                 </head>
                 <body style = "background-color: rgb(178, 237, 237);" id="Profile" >
                   <h1 style="text-align: center">MEMBER DETAILS</h1>
                   <div style="background-color: rgb(175, 174, 170); ">
                     <ul style="margin-top: 50px;">
                       <div style="padding-top: 5px; color: rgb(10, 1, 20);" id="memberData">
                           <li><h2>FIRST NAME :-</h2><h3>${firstname}</h3></li>
                           <li><h2>LAST NAME :-</h2><h3>${lastname}</h3></li>
                           <li><h2>GENDER :-</h2><h3>${Gender}</h3></li>
                           <li><h2>EMAIL :-</h2><h3>${Email}</h3> </li>
                           <li><h2>ADDRESS :-</h2><h3>${Address}</h3></li>
                           <li><h2>CITY :-</h2><h3>${City}</h3></li>
                           <li><h2>STATE :-</h2><h3>${state}</h3></li>
                           <li><h2>ZIP CODE :-</h2><h3>${zipcode}</h3></li>
                       </div>
                     </ul>
                   </div>
                   <script src="https://unpkg.com/vue@3"></script>
                   <script src="./index.js"></script>
                 </body>
               </html>`);
      }
    }

    res.redirect("/login.html");
  });
});

app.listen(3000, () => {
  console.log(chalk.blue.inverse("this is port no. 3000 "));
});
