import React, {useEffect} from "react";
import "./book-list.css";
import BookListItem from "../book-list-item";
import {connect} from "react-redux";
import {withBookstoreService} from "../hoc";
import {booksLoaded, booksRequested} from "../../actions";
import compose from "../../utils";
import Spinner from "../spinner";

const BookList = ({books, loading, booksLoaded, bookstoreService, booksRequested}) => {

    useEffect(() => {
        console.log('USE-EFFECT');
        booksRequested();
        bookstoreService.getBooks()
            .then(data => booksLoaded(data));
    }, [booksLoaded, bookstoreService, booksRequested]);

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

const mapDispatchToProps = {booksLoaded, booksRequested};

export default compose(
    withBookstoreService(),
    connect(mapStateToProps, mapDispatchToProps)
)(BookList);