import React from "react";
import "./book-list.css";
import BookListItem from "../book-list-item";

const BookList = ({books}) => {

    console.log(books)

    return (
        <ul className="book-list">
            {books.map((book) => {
                return (
                    <li key={book.id}>
                        <BookListItem book={book}/>
                    </li>
                );
            })}
        </ul>
    )
};

export default BookList;