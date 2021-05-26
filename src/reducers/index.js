import updateShoppingCard from "./shopping-card-rdc";
import updateBookList from "./book-list-rdc";

const Reducers = (state, actions) => {
    return {
        bookList: updateBookList(state, actions),
        shoppingCard: updateShoppingCard(state, actions),
    }
};

export default Reducers;