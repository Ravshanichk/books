import React from "react";
import Book from "../Book/Book";



const BookList = () =>{
    let books = [
        {id: 1,title: "Ах если бы", price: 5000},
        {id: 2,title: "Ах если бы", price: 300},
        {id: 3,title: "Ах если бы", price: 2355}
    ]
    
    return(
        <div>
            {books.map(book=>{
                return <Book title={book.title} price={book.price}></Book>
            })}
        </div>
    )
}

export default BookList