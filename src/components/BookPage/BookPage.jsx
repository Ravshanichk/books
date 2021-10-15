import React from "react";
import s from './BookPage.module.css'
import BookList from "./BooksList/BookList";

const BookPage = () =>{
    return(
        <div className={s.wrapper}>
            <BookList></BookList>
        </div>
    )
}

export default BookPage