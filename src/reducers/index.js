const initialState = {
    books: [],
    loading: true
}

const Reducers = (state = initialState, actions) => {

    switch (actions.type) {
        case 'BOOKS_LOADED':
            return {
                ...state,
                books: actions.payload,
                loading: false
            };

        default:
            return state;
    }
};

export default Reducers;