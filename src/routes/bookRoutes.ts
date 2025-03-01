import { Router, Request, Response } from "express";

const router = Router();

interface Book {
    id: number,
    title: string,
    author: string
}

const books: Book[] = [
    {id: 1, title: "1984", author: "George Orwell"},
    {id: 2, title: "Brave New World", author: "Aldous Huxley"},
];

router.get("/books", (req: Request, res: Response) => {
    res.json(books);
});

router.get("/book/:id", (req: Request, res: Response) => {
    const bookId = parseInt(req.params.id);
    const book = books.find(b => b.id === bookId);
    if(book){
        res.json(book);
    } else {
        res.status(400).json({ message: "Book not found" });
    }
});

router.post("/add/book", (req: Request, res: Response) => {
    const newBook: Book = {
        id: books.length + 1,
        title: req.body.title,
        author: req.body.author,
    };

    books.push(newBook);
    res.status(201).json(newBook);
});



export default router;
