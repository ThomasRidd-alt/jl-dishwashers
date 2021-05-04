import React, {Component} from 'react';
import ProductGridPage from "../pages/ProductGridPage";
import ProductPage from "../pages/ProductPage";
import NotFoundPage from "../pages/NotFoundPage";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import DocumentTitle from "react-document-title"

class App extends Component {
    render() {
        return (
            <DocumentTitle title='Dishwashers'>
                <Router>
                    <div>
                        <Switch>
                            <Route exact path={"/"} component={ProductGridPage}/>
                            <Route exact path={"/product/:id"} component={ProductPage}/>
                            <Route component={NotFoundPage}/>
                        </Switch>
                    </div>
                </Router>
            </DocumentTitle>
        )
    }
}

export default App;