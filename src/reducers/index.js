const initialState = {
    books: [
        {
            id: 1,
            title: 'Production-Ready Microservices',
            author: 'Susan J. Fowler'
        },
        {
            id: 2,
            title: 'Realise It!',
            author: 'Michael T. Nygard'
        }
    ]
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