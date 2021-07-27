const express = require('express');
const app = express();
const connection = require("./config/connection");
const inquirer = require('inquirer');
const mysql = require('mysql2');
const cTable = require('console.table');

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const port = process.env.PORT || 3001;
app.listen(port,()=>{
    console.log("listening on port: ", port)
});