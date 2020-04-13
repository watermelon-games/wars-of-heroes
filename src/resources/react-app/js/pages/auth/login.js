import React from 'react';
import {Link, Redirect} from 'react-router-dom'
import {connect} from 'react-redux'
import {login} from '../../services/auth-service';

class Login extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            credentials: {
                email: null,
                password: null,
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

        this.props.dispatch(login(credentials))
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
        const {from} = this.props.location.state || {from: {pathname: '/admin/dashboard'}};
        const {isAuthenticated} = this.props;

        if (isAuthenticated) {
            return (
                <Redirect to={from}/>
            )
        }

        return (
            <div>
                <div className="sidenav">
                    <div className="login-main-text">
                        <h2>Application<br/> Login Page</h2>
                        <p>Login or register from here to access.</p>
                    </div>
                </div>
                <div className="main">
                    <div className="col-md-6 col-sm-12">
                        <div className="login-form">
                            <form onSubmit={this.handleSubmit} method="POST">
                                <div className="form-group">
                                    <label>User Name</label>
                                    <input
                                        className="form-control py-4"
                                        id="email"
                                        type="text"
                                        name="email"
                                        onChange={this.handleChange}
                                        placeholder="Введите Email адрес"/>
                                </div>
                                <div className="form-group">
                                    <label>Пароль</label>
                                    <input
                                        className="form-control py-4"
                                        id="password"
                                        type="password"
                                        name="password"
                                        onChange={this.handleChange}
                                        placeholder="Введите Email адрес"/>
                                </div>
                                <button type="submit" className="btn btn-black">Login</button>
                                <Link to="/register" className="btn btn-secondary">Register</Link>
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

export default connect(mapStateToProps)(Login)
