//Reserved
import React from "react";

import { BrowserRouter, Route, Switch, withRouter } from "react-router-dom";

// Routes
import Index from "./routes/index";
import Logout from "./routes/logout";

// Cmps.
// import Signup from "./pages/signup";
// import Login from "./pages/login";

export const INDEX = "/";
export const LOGIN = "/login";
export const LOGOUT = "/logout";

export const PUBLIC = [
    LOGIN
]

/**
 * Router component for site that manages our react-router
 */
class Router extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <ScrollWithRouter>
                    <Switch>
                        <Route path={INDEX} exact component={Index} />
                        <Route path={LOGOUT} exact component={Logout} />
                    </Switch>
                </ScrollWithRouter>
            </BrowserRouter>
        );
    }
}

class ScrollToTop extends React.Component {
    componentDidUpdate(prevProps) {
        if (this.props.location !== prevProps.location) {
            window.scrollTo(0, 0);
        }
    }

    render() {
        return this.props.children;
    }
}

const ScrollWithRouter = withRouter(ScrollToTop);

export default Router;
