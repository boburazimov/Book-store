const initialState = {
    books: []
}

const Reducers = (state = initialState, actions) => {

    switch (actions.type) {
        case 'BOOK_LOADED':
            return {
                ...state,
                books: actions.payload
            };

        default:
            return state;
    }
};

export default Reducers;