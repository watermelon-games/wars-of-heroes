import React from 'react';
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";
import * as action from "../store/actions/auth-action";

class Logout extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.dispatch(action.authLogout());
    }

    render() {
        const {isAuthenticated} = this.props;

        if (!isAuthenticated) {
            return (
                <Redirect to={'/login'}/>
            )
        }

        return null;
    }
}


const mapStateToProps = (state) => {
    return {
        isAuthenticated: state.Auth.isAuthenticated,
    }
};

export default connect(mapStateToProps)(Logout)
