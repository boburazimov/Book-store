const booksRequested = () => {
    return {type: 'FETCH_BOOKS_REQUEST'}
};

const booksLoaded = (newBooks) => {
    return {type: 'FETCH_BOOKS_SUCCESS', payload: newBooks}
};

const booksError = (error) => {
    return {type: 'FETCH_BOOKS_FAILURE', payload: error}
};

// const fetchBooksold = (dispatch, bookstoreService) => () => {
//     dispatch(booksRequested());
//     bookstoreService.getBooks()
//         .then(data => dispatch(booksLoaded(data)))
//         .catch(error => dispatch(booksError(error)));
// };

const fetchBooks = (bookstoreService) => () => (dispatch) =>{
    dispatch(booksRequested());
    bookstoreService.getBooks()
        .then(data => dispatch(booksLoaded(data)))
        .catch(error => dispatch(booksError(error)));
};

const bookAddedToCard = (id) => {
    return {type: 'BOOK_ADDED_TO_CARD', payload: id}
};

const bookRemovedFromCard = (id) => {
    return {type: 'BOOK_REMOVED_FROM_CARD', payload: id}
};

const allBooksRemovedFromCard = (id) => {
    return {type: 'ALL_BOOKS_REMOVED_FROM_CARD', payload: id}
};

export {
    fetchBooks,
    bookAddedToCard,
    bookRemovedFromCard,
    allBooksRemovedFromCard
};