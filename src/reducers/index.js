import updateShoppingCard from "./shopping-card-rdc";
import updateBookList from "./book-list-rdc";

const Reducers = (state, action) => {
    return {
        bookList: updateBookList(state, action),
        shoppingCard: updateShoppingCard(state, action),
    }
};

export default Reducers;