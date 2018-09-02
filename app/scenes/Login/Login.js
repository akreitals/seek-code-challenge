import React, { Component } from 'react';
import { connect } from 'react-redux';
import { sessionOperations } from '../../state/session';
import LoginForm from './components/LoginForm';
import PrivateRoute from "../../containers/Routes/PrivateRoute";

class LoginContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: '',
            submitted: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    }

    handleSubmit(event) {
        event.preventDefault();

        this.setState({ submitted: true });
        const { username, password } = this.state;

        if (username && password) {
            this.props.login(username, password);
        }
    }

    render() {
        const { loggingIn, error } = this.props;
        const { username, password, submitted } = this.state;

        return (
            <LoginForm
                error={error}
                loggingIn={loggingIn}
                username={username}
                password={password}
                submitted={submitted}
                handleChange={this.handleChange}
                handleSubmit={this.handleSubmit}
            />
        );
    }
}

const mapStateToProps = state => {
    const { loggingIn, error } = state.session;
    return {
        loggingIn,
        error
    };
};

const mapDispatchToProps = {
    login: sessionOperations.login
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(LoginContainer);
