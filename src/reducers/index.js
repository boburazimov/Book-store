const initialState = {
    bookList: {
        books: [],
        loading: true,
        error: null
    },
    shoppingCard: {
        cardItems: [],
        orderTotal: 0
    }
}

const updateCardItems = (cardItems, item, itemIndex) => {

    if (item.count === 0) {
        return [
            ...cardItems.slice(0, itemIndex),
            ...cardItems.slice(itemIndex + 1)
        ]
    }

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

const updateCardItem = (book, item = {}, quantity) => {

    const {
        id = book.id,
        title = book.title,
        count = 0,
        total = 0
    } = item;

    return {
        id, title, count: count + quantity, total: total + quantity * book.price
    };
};

const updateOrder = (state, bookId, quantity) => {
    const {bookList: {books}, shoppingCard: {cardItems, orderTotal}} = state;
    const book = books.find(({id}) => id === bookId);
    const itemIndex = cardItems.findIndex(({id}) => id === bookId);
    const item = cardItems[itemIndex];

    const newItem = updateCardItem(book, item, quantity);
    return {
        cardItems: updateCardItems(cardItems, newItem, itemIndex),
        orderTotal: orderTotal + quantity * book.price
    };
};

const updateBookList = (state, actions) => {
    switch (actions.type) {
        case 'FETCH_BOOKS_REQUEST':
            return {
                books: [],
                loading: true,
                error: null
            }
        case 'FETCH_BOOKS_SUCCESS':
            return {
                books: actions.payload,
                loading: false,
                error: null
            };
        case 'FETCH_BOOKS_FAILURE':
            return {
                books: [],
                loading: false,
                error: actions.payload
            };
        default:
            return state.bookList;
    }
};

const updateShoppingCard = (state, actions) => {
    switch (actions.type) {
        case 'BOOK_ADDED_TO_CARD':
            return updateOrder(state, actions.payload, 1);
        case 'BOOK_REMOVED_FROM_CARD':
            return updateOrder(state, actions.payload, -1);
        case 'ALL_BOOKS_REMOVED_FROM_CARD':
            const item = state.shoppingCard.cardItems.find(({id}) => id === actions.payload);
            return updateOrder(state, actions.payload, -item.count);
        default:
            return state.shoppingCard;
    }
};

const Reducers = (state = initialState, actions) => {

    return {
        bookList: updateBookList(state, actions),
        shoppingCard: updateShoppingCard(state, actions),
    }
};

export default Reducers;