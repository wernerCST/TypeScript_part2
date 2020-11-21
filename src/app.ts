import express, { Request, Response } from "express";
import * as bodyParser from "body-parser";
import * as bookController from "./controllers/bookController"

const app = express();

app.set("port", process.env.PORT || 4242);

app.use(bodyParser.json())

app.get("/books", bookController.allBooks);
app.get("/book/:id", bookController.getBook);
app.post("/book", bookController.addBook);
app.put("/book/:id", bookController.updateBook);
app.delete("/book/:id", bookController.deleteBook);

app.listen(app.get("port"), () => {
    console.log("App is running on http://localhost:%d", app.get("port"))
});