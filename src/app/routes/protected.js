import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "app/connect";
import ProtectedCmp from "app/pages/protected";
import { compose } from "redux";

function mapDispatchToProps(dispatch) {
    return {
        storeRedirectLocation: pathname => {
            dispatch({
                type: "REDIRECT_SET",
                payload: {
                    location: pathname,
                },
            });
        },
    };
}

/**
 * Custom react-router route that ensures there's a user
 * before rendering the route
 */
const Protected = ({ component, user, ...rest }) => {
    return (
        <Route
            {...rest}
            render={props =>
                user.loggedIn ? (
                    <ProtectedCmp
                        {...rest}
                        {...props}
                        user={user}
                        Component={component}
                    />
                ) : (
                    <Redirect
                        to={{
                            pathname: "/login",
                            state: { from: props.location },
                        }}
                    />
                )
            }
        />
    );
};

export default connect()(Protected)