import React from 'react'
import s from '../Book/Book.module.css'

const Book =(props) =>{
    return(
        <div className={s.bookWrapper}>
            <img></img>
            <div>{props.title}</div>
            <div>{props.price}</div>
        </div>
    )
}

export default Book