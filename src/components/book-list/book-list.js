import React, {useEffect} from "react";
import "./book-list.css";
import BookListItem from "../book-list-item";
import {connect} from "react-redux";
import {withBookstoreService} from "../hoc";
import {booksLoaded} from "../../actions";
import compose from "../../utils";
import Spinner from "../spinner";

const BookList = ({books, loading, booksLoaded, bookstoreService}) => {

    useEffect(() => {
        console.log('USE-EFFECT');
        bookstoreService.getBooks()
            .then(data => booksLoaded(data));
    }, [books, booksLoaded, bookstoreService]);

    if (loading) {
        return <Spinner/>
    }
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

const mapStateToProps = ({books, loading}) => {
    return {books, loading};
};

const mapDispatchToProps = {booksLoaded};

export default compose(
    withBookstoreService(),
    connect(mapStateToProps, mapDispatchToProps)
)(BookList);