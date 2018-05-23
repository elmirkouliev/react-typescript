import { connect } from "react-redux";
import { bindActionCreators } from "redux";

// Actions
import * as ui from "actions/ui";
import * as user from "actions/user";

const mapStateToProps = state => {
    return {
        ui: state.ui,
        user: state.user
    };
};

const mapDispatchToProps = dispatch =>
    bindActionCreators({ ...ui, ...user }, dispatch);

export const customConnect = () => connect(mapStateToProps, mapDispatchToProps);

export default customConnect;
