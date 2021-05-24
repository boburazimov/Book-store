const initialState = {
    books: [],
    loading: true
}

const Reducers = (state = initialState, actions) => {

    switch (actions.type) {
        case 'BOOKS_REQUESTED':
            return {
                books: [],
                loading: true
            }
        case 'BOOKS_LOADED':
            return {
                books: actions.payload,
                loading: false
            };

        default:
            return state;
    }
};

export default Reducers;