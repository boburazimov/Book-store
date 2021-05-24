import React from "react";
import "./app.css";
import {Route, Switch} from "react-router-dom";
import {CardPage, HomePage} from "../pages";
import ShopHeader from "../shop-header";

const App = () => {
    return (
        <main role="main" className="container">
            <ShopHeader numItems={5} total={210}/>
            <Switch>
                <Route path='/' component={HomePage} exact/>
                <Route path='/card' component={CardPage}/>
            </Switch>
        </main>
    )
};

export default App;