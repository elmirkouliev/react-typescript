import * as React from "react";
import { Route, Redirect } from "react-router-dom";
import connect from "app/connect";
import { RouteComponentProps } from "react-router";

type Props = {
    user: any; // TODO: add this type when user reducer uses typescript
} & RouteComponentProps<{}>;

type StateProps = {
    redirectLocation: string | null;
};

/**
 * Determines what to show on the index page ("/"). If the user is not logged
 * in, will show the onboarding. If the redirect reducer has a location set and
 * the user is logged in, the user will be redirected to that location.
 * Otherwise will redirect the user to one of the locations specified in
 * `redirectLocation()`.
 */
class Index extends React.PureComponent<Props> {
    
    render() {
        return (
            <Route exact path={this.props.match.url} component={() => {
                return (
                    <div>asdsads</div>
                )
            }} />
        );
    }
}

export default connect()(Index);