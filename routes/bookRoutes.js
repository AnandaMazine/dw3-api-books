import express from "express";
const bookRoutes = express.Router();

import bookController from "../controllers/bookController.js";

bookRoutes.get("/books", bookController.getAllBook);

bookRoutes.post("/books", bookController.createBook);

bookRoutes.delete("/books/:id", bookController.deleteBook);

bookRoutes.put("/books/:id", bookController.updateBook);

bookRoutes.get("/books/:id", bookController.getOneBook);

export default bookRoutes;