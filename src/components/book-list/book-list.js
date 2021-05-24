import React, {useEffect} from "react";
import "./book-list.css";
import BookListItem from "../book-list-item";
import {connect} from "react-redux";
import {withBookstoreService} from "../hoc";
import {booksLoaded} from "../../actions";
import compose from "../../utils";

const BookList = ({books, booksLoaded, bookstoreService}) => {

    useEffect(() => {
        const data = bookstoreService.getBooks();
        console.log(data);
        booksLoaded(data);
    },[]);

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

const mapDispatchToProps = {booksLoaded};

export default compose(
    withBookstoreService(),
    connect(mapStateToProps, mapDispatchToProps)
)(BookList);