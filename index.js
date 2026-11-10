const express = require('express')
const app = express()
const port = 3000

app.use(express.json())

let books = [
  { id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald' },
  { id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee' }
];

let nextId = 3

// all books
app.get('/books',(req,res)=>{
    res.status(200).json(books)
})
// get one book
app.get('/books/:id',(req,res)=>{
    const bookId = parseInt(req.params.id, 10);
    const book = books.find(b => b.id === bookId)
    if(!book){
        return res.status(404).json({message: "book not found"})
    }
    res.status(200).json(book)
})
// post book
app.post('/books', (req,res)=>{
    const {title, author} = req.body
    if(!title || !author){
        return res.status(404).json({message: "title and author are reqiured"})
    }
    const newBook = {
        id: nextId++,
        title,
        author
    }
    books.push(newBook)
    res.status(201).json(newBook)
})
// put a book / update by id
app.put('/books/:id', (req,res)=>{
    const bookId = parseInt( req.params.id, 10)
    const {title,author} = req.body
    const bookIndex = books.findIndex(b => b.id === bookId)
    if(bookIndex === -1){
        return res.status(404).json({message: "book not found"})
    }
    if(!title || !author) {
        return res.status(404).json({message:"title and author are required"})
    }
    books[bookIndex] = {id: bookId, title, author}
    res.status(200).json(books[bookIndex])
})
// delete
app.delete('/books/:id', (req, res) => {
  const bookId = parseInt(req.params.id, 10);
  const bookIndex = books.findIndex(b => b.id === bookId);

  if (bookIndex === -1) {
    return res.status(404).json({ message: 'Book not found' });
  }

  const deletedBook = books.splice(bookIndex, 1)[0];
  res.status(200).json({ message: 'Book deleted successfully', book: deletedBook });
});
app.listen(port,()=>{
    console.log(`Server running on http://localhost:${port}`)
})