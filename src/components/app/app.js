import React from "react";
import "./app.css";
import {WithBookstoreService} from "../hoc";

const App = ({bookstoreService}) => {
    console.log(bookstoreService.getBooks());
    return (
        <div className='app'>
            <h2>App</h2>
        </div>
    )
};

export default WithBookstoreService()(App);