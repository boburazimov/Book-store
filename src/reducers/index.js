const initialState = {
    books: [],
    loading: true,
    error: null,
    cardItems: [],
    orderTotal: 0
}

const updateCardItems = (cardItems, item, itemIndex) => {

    if (item.count === 0){
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
        id, title, count: count + quantity, total: total + quantity*book.price
    };
};

const updateOrder = (state, bookId, quantity) => {
    const {books, cardItems, orderTotal} = state;
    const book = books.find(({id}) => id === bookId);
    const itemIndex = cardItems.findIndex(({id}) => id === bookId);
    const item = cardItems[itemIndex];

    const newItem = updateCardItem(book, item, quantity);
    return {
        ...state,
        cardItems: updateCardItems(cardItems, newItem, itemIndex),
        orderTotal: orderTotal + quantity*book.price
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
            };
        case 'BOOK_ADDED_TO_CARD':
            return updateOrder(state, actions.payload, 1);
        case 'BOOK_REMOVED_FROM_CARD':
            return updateOrder(state, actions.payload, -1);
        case 'ALL_BOOKS_REMOVED_FROM_CARD':
            const item = state.cardItems.find(({id}) => id === actions.payload);
            return updateOrder(state, actions.payload, -item.count);

        default:
            return state;
    }
};

export default Reducers;