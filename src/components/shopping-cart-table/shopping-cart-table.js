import React from 'react';
import './shopping-cart-table.css';
import {connect} from "react-redux";
import {bookAddedToCard, bookRemovedFromCard, allBooksRemovedFromCard} from '../../actions';

const ShoppingCartTable = ({items, total, onDecrease, onIncrease, onDelete}) => {

    return (
        <div className="shopping-cart-table">
            <h2>Your Order</h2>
            <table className="table table-bordered table-hover table-responsive-sm">
                <thead className="thead-light">
                <tr>
                    <th>#</th>
                    <th>Item</th>
                    <th>Count</th>
                    <th>Price</th>
                    <th className="text-center">Action</th>
                </tr>
                </thead>
                <tbody>
                {
                    items.map((item, idx) => {
                        const {id, title, count, total} = item;
                        return (
                            <tr key={id}>
                                <td>{idx + 1}</td>
                                <td>{title}</td>
                                <td>{count}</td>
                                <td>${total}</td>
                                <td className="text-center">
                                    <button
                                        onClick={() => onDecrease(id)}
                                        className="btn btn-outline-warning btn-sm">
                                        <i className="fa fa-minus-circle"/>
                                    </button>
                                    <button
                                        onClick={() => onIncrease(id)}
                                        className="btn btn-outline-success btn-sm">
                                        <i className="fa fa-plus-circle"/>
                                    </button>
                                    <button
                                        onClick={() => onDelete(id)}
                                        className="btn btn-outline-danger btn-sm">
                                        <i className="fa fa-trash-o"/>
                                    </button>
                                </td>
                            </tr>
                        )
                    })
                }
                </tbody>
            </table>

            <div className="total">
                Total: $ {total}
            </div>
        </div>
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
export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCartTable);
