import React from 'react';
import {Link, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import {register} from '../../services/auth-service';
import {localization} from '../../helpers/i18n';

class Register extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            credentials: {
                name: null,
                email: null,
                password: null,
                password_confirmation: null,
            },
            error: null
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const name = event.target.name;
        const value = event.target.value;
        const {credentials} = this.state;
        credentials[name] = value;
    }

    handleSubmit(event) {
        event.preventDefault();
        const {credentials} = this.state;

        this.props.dispatch(register(credentials))
            .catch(({error, statusCode}) => {
                const responseError = {
                    isError: true,
                    code: statusCode,
                    text: error
                };
                this.setState({responseError});
                this.setState({
                    isLoading: false
                });
            })
    }

    render() {
        const {isAuthenticated} = this.props;

        if (isAuthenticated) {
            return (
                <Redirect to={'/login'}/>
            )
        }

        return (
            <div>
                <div className="sidenav">
                    <div className="login-main-text">
                        <h2>{localization('wars of heroes')}</h2>
                        <p>{localization('register page')}</p>
                    </div>
                </div>
                <div className="main">
                    <div className="col-md-6 col-sm-12">
                        <div className="login-form">
                            <form onSubmit={this.handleSubmit} method="POST">
                                <div className="form-group">
                                    <label>{localization('name')}</label>
                                    <input
                                        className="form-control py-4"
                                        id="name"
                                        type="text"
                                        name="name"
                                        onChange={this.handleChange}
                                        placeholder={localization('enter name')}/>
                                </div>
                                <div className="form-group">
                                    <label>{localization('email')}</label>
                                    <input
                                        className="form-control py-4"
                                        id="email"
                                        type="text"
                                        name="email"
                                        onChange={this.handleChange}
                                        placeholder={localization('enter email')}/>
                                </div>
                                <div className="form-group">
                                    <label>{localization('password')}</label>
                                    <input
                                        className="form-control py-4"
                                        id="password"
                                        type="password"
                                        name="password"
                                        onChange={this.handleChange}
                                        placeholder={localization('enter password')}/>
                                </div>
                                <div className="form-group">
                                    <label>{localization('repeat password')}</label>
                                    <input
                                        className="form-control py-4"
                                        id="password_confirmation"
                                        type="password"
                                        name="password_confirmation"
                                        onChange={this.handleChange}
                                        placeholder={localization('repeat password')}/>
                                </div>
                                <button type="submit" className="btn btn-black">{localization('register')}</button>
                                <span>&nbsp;</span>
                                <Link to="/login">{localization('login')}</Link>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        isAuthenticated: state.Auth.isAuthenticated,
    }
};

export default connect(mapStateToProps)(Register)
