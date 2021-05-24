import React from 'react';
import './shopping-cart-table.css';

const ShoppingCartTable = () => {
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
                <tr>
                    <td>1</td>
                    <td>Site Reliability Engineering</td>
                    <td>2</td>
                    <td>$40</td>
                    <td className="text-center">
                        <button className="btn btn-outline-danger btn-sm">
                            <i className="fa fa-trash-o"/>
                        </button>
                        <button className="btn btn-outline-success btn-sm">
                            <i className="fa fa-plus-circle"/>
                        </button>
                        <button className="btn btn-outline-warning btn-sm">
                            <i className="fa fa-minus-circle"/>
                        </button>
                    </td>
                </tr>
                </tbody>
            </table>

            <div className="total">
                Total: $201
            </div>
        </div>
    );
};

export default ShoppingCartTable;
