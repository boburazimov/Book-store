const initialState = {
    books: []
}

const Reducers = (state = initialState, actions) => {

    switch (actions.type) {
        case 'BOOKS_LOADED':
            return {
                ...state,
                books: actions.payload
            };

        default:
            return state;
    }
};

export default Reducers;