import React from "react";
import BookListContainer from "../../containers/book-list-container/book-list-container";
import ShoppingCartTableContainer from "../../containers/shopping-card-table-container/shopping-card-table-container";

const HomePage = () => {

    return (
        <div>
            <BookListContainer/>
            <ShoppingCartTableContainer/>
        </div>
    )
};

export default HomePage;