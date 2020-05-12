import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {localization} from '../helpers/i18n';

class Navigation extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            authUser: null,
            dropdownMenu: false
        };

        this.handleDropdown = this.handleDropdown.bind(this);
    }

    componentDidUpdate(prevProps) {
        if (prevProps.authUser !== this.props.authUser) {
            this.setState({authUser: this.props.authUser})
        }
    }


    handleDropdown(event) {
        event.preventDefault();

        this.setState({dropdownMenu: !this.state.dropdownMenu})
    }

    render() {
        return (
            <div
                className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom shadow-sm">
                <h5 className="my-0 mr-md-auto font-weight-normal">War of Heroes</h5>
                <nav className="my-2 my-md-0 mr-md-3">
                    <Link className="p-2 text-dark" to="/character">{localization('character')}</Link>
                    <Link className="p-2 text-dark" to="/inventory">{localization('inventory')}</Link>
                    <a className="p-2 text-dark" href="#">{localization('location')}</a>
                    <a className="p-2 text-dark" href="#">{localization('settings')}</a>
                </nav>
                <Link className="btn btn-outline-primary" to="/logout">{localization('exit')}</Link>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        authUser: state.Auth.user
    }
};

export default connect(mapStateToProps)(Navigation);
