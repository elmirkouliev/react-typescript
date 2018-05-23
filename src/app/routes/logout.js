import React from "react";
import { INDEX } from "app/router";
import connect from "app/connect";

/**
 */
class Logout extends React.Component {
    componentWillMount() {
        const { logout, history } = this.props;
        logout();
        history.push(INDEX);
    }

    render() {
        return null;
    }
}

export default connect()(Logout);
