import React from "react";
import "./book-list.css";
import BookListItem from "../book-list-item";
import {connect} from "react-redux";

const BookList = ({books}) => {
    return (
        <ul>
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

const mapStateToProps = ({books}) => {
    return {books};
};

export default connect(mapStateToProps)(BookList);