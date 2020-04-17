import React from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';

class Home extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {isAuthenticated} = this.props;

        if (isAuthenticated) {
            return (
                <Redirect to="/character"/>
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

export default connect(mapStateToProps)(Home)
