import React, {useEffect} from "react";
import {connect} from "react-redux";
import {withBookstoreService} from "../../components/hoc";
import {fetchBooks} from "../../actions";
import compose from "../../utils";
import Spinner from "../../components/spinner";
import ErrorIndicator from "../../components/error-indicator";
import BookList from "../../components/book-list";

const BookListContainer = ({books, loading, error, fetchBooks}) => {

    useEffect(() => {
        console.log('USE-EFFECT');
        fetchBooks();
    }, [fetchBooks]);

    if (loading) {
        return <Spinner/>
    }

    if (error) {
        return <ErrorIndicator error={error}/>
    }

    return (
        <BookList books={books}/>
    )
};

const mapStateToProps = ({books, loading, error}) => {
    return {books, loading, error};
};

const mapDispatchToProps = (dispatch, {bookstoreService}) => {
    return {fetchBooks: fetchBooks(dispatch, bookstoreService)}
};

export default compose(
    withBookstoreService(),
    connect(mapStateToProps, mapDispatchToProps)
)(BookListContainer);