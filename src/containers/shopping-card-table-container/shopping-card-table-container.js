import React from 'react';
import {connect} from "react-redux";
import {allBooksRemovedFromCard, bookAddedToCard, bookRemovedFromCard} from '../../actions';
import ShoppingCartTable from "../../components/shopping-cart-table";

const ShoppingCartTableContainer = ({items, total, onDecrease, onIncrease, onDelete}) => {

    return (
        <ShoppingCartTable
            items={items}
            total={total}
            onDecrease={onDecrease}
            onIncrease={onIncrease}
            onDelete={onDelete}
        />
    );
};

const mapStateToProps = ({shoppingCard: {cardItems, orderTotal}}) => {
    return {
        items: cardItems,
        total: orderTotal
    }
}

const mapDispatchToProps = {
    onIncrease: bookAddedToCard,
    onDecrease: bookRemovedFromCard,
    onDelete: allBooksRemovedFromCard
}
export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCartTableContainer);
