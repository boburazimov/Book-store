import React, {useEffect} from "react";
import "./book-list.css";
import BookListItem from "../book-list-item";
import {connect} from "react-redux";
import {withBookstoreService} from "../hoc";
import {booksError, booksLoaded, booksRequested} from "../../actions";
import compose from "../../utils";
import Spinner from "../spinner";
import ErrorIndicator from "../error-indicator";

const BookList = ({books, loading, error, booksLoaded, bookstoreService, booksRequested, booksError}) => {

    useEffect(() => {
        console.log('USE-EFFECT');
        booksRequested();
        bookstoreService.getBooks()
            .then(data => booksLoaded(data))
            .catch(error => booksError(error));
    }, [booksLoaded, bookstoreService, booksRequested, booksError]);

    if (loading) {
        return <Spinner/>
    }

    if (error) {
        return <ErrorIndicator error={error}/>
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

const mapStateToProps = ({books, loading, error}) => {
    return {books, loading, error};
};

const mapDispatchToProps = {booksLoaded, booksRequested, booksError};

export default compose(
    withBookstoreService(),
    connect(mapStateToProps, mapDispatchToProps)
)(BookList);