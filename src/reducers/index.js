const initialState = {
    books: [],
    loading: true,
    error: null,
    cardItems: [],
    orderTotal: null
}

const updateCardItems = (cardItems, item, itemIndex) => {
    if (itemIndex === -1) {
        return [
            ...cardItems,
            item
        ]
    }
    return [
        ...cardItems.slice(0, itemIndex),
        item,
        ...cardItems.slice(itemIndex + 1)
    ]
}

const updateCardItem = (book, item = {}) => {

    const {
        id = book.id,
        title = book.title,
        count = 0,
        total = 0
    } = item;

    return {
        id, title, count: count + 1, total: total + book.price
    };
};

const Reducers = (state = initialState, actions) => {

    switch (actions.type) {
        case 'FETCH_BOOKS_REQUEST':
            return {
                ...state,
                books: [],
                loading: true,
                error: null
            }
        case 'FETCH_BOOKS_SUCCESS':
            return {
                ...state,
                books: actions.payload,
                loading: false,
                error: null
            };
        case 'FETCH_BOOKS_FAILURE':
            return {
                ...state,
                books: [],
                loading: false,
                error: actions.payload
            }
        case 'BOOK_ADDED_TO_CARD':
            const bookId = actions.payload;
            const book = state.books.find(book => book.id === bookId);
            const itemIndex = state.cardItems.findIndex(({id}) => id === bookId);
            const item = state.cardItems[itemIndex];

            const newItem = updateCardItem(book, item);
            return {
                ...state,
                cardItems: updateCardItems(state.cardItems, newItem, itemIndex),
                orderTotal: state.orderTotal + book.price
            }

        default:
            return state;
    }
};

export default Reducers;