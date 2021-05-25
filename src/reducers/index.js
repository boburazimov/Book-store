const initialState = {
    books: [],
    loading: true,
    error: null
}

const Reducers = (state = initialState, actions) => {

    switch (actions.type) {
        case 'BOOKS_REQUESTED':
            return {
                books: [],
                loading: true,
                error: null
            }
        case 'BOOKS_LOADED':
            return {
                books: actions.payload,
                loading: false,
                error: null
            };
        case 'BOOKS_ERROR':
            return {
                books: [],
                loading: false,
                error: actions.payload
            }

        default:
            return state;
    }
};

export default Reducers;