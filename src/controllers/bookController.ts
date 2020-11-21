import {Request, Response} from 'express';
import Book from './../book';

// Get all books from the db
export let allBooks = (req: Request, res: Response) => {
    let book = Book.find((err: any, books: any) => {
        if(err) {
            res.send(err);
        } else {
            res.send(book);
        }
    });
}

// Get a book by a specific ID
export let getBook = (req: Request, res: Response) => {
    Book.findById(req.params.id, (err: any, book: any) => {
        if(err) {
            res.send(err);
        } else {
            res.send(book);
        }
    })
}

// Put a new book onto the DB
export let addBook = (req: Request, res: Response) => {
    let book = new Book(req.body);

    book.save((err: any) => {
        if(err) {
            res.send(err);
        } else {
            res.send(book);
        }
    });
}

// Delte a book from the DB
export let deleteBook = (req: Request, res: Response) => {
    Book.deleteOne({_id: req.params.id}, (err: any) => {
        if(err) {
            res.send(err);
        } else {
            res.send("The book has been successfully deleted");
        }
    })
}

// Update an existing book
export let updateBook = (req: Request, res: Response) => {
    Book.findByIdAndUpdate(req.params.id, req.body, (err: any, book: any) => {
        if(err) {
            res.send(err);
        } else {
            res.send("Successfully updated book");
        }
    })
}