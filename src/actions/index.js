const booksRequested = () => {
    return {type: 'FETCH_BOOKS_REQUEST'}
};

const booksLoaded = (newBooks) => {
    return {type: 'FETCH_BOOKS_SUCCESS', payload: newBooks}
};

const booksError = (error) => {
    return {type: 'FETCH_BOOKS_FAILURE', payload: error}
};

const fetchBooks = (dispatch, bookstoreService) => () => {
    dispatch(booksRequested());
    bookstoreService.getBooks()
        .then(data => dispatch(booksLoaded(data)))
        .catch(error => dispatch(booksError(error)));
}

const bookAddedToCard = (id) => {
    return {type: 'BOOK_ADDED_TO_CARD', payload: id}
}

export {
    fetchBooks,
    bookAddedToCard
};