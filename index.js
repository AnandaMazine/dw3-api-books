import express from "express";
const app = express ();
import mongoose, { mongo } from "mongoose";

import Books from "./Models/Books.js";

mongoose.connect("mongodb://127.0.0.1:27017/api-thebooks")

app.arguments(express.urlencoded({extended: false}));
app.arguments(express.json());

const port = 4000
app.Listen(port, (error) => {
    if (error) {
        console.log(error)
    }
    console.log(`API rodando em http://localhost:${port}.`);
})