const initialState = {
    books: [],
    loading: true,
    error: null,
    cardItems: [
        {
            id: 1,
            name: 'Book 1',
            count: 2,
            total: 150
        },
        {
            id: 2,
            name: 'Book 22',
            count: 3,
            total: 1400
        }
    ],
    orderTotal: 1520
}

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
        default:
            return state;
    }
};

export default Reducers;