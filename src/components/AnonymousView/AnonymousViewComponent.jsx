
import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

import './AnonymousViewComponent.css';

class AnonymousViewComponent extends React.Component
{
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        };
    }

    onUsernameChanged = (ev, value) => {
        this.setState({
            username: value
        });
    }

    onPasswordChanged = (ev, value) => {
        this.setState({
            password: value
        });
    }

    onLoginPress = () => {
        const { performLogin } = this.props;
        performLogin(
            this.state.username,
            this.state.password
        );
    }
    
    render() {
        return (
            <div className="anonymous-view-container">
                <div className="messageContainer">
                    <h3>You are not logged in - Please login</h3>
                    <div>
                        <TextField hintText="Username" onChange={this.onUsernameChanged} />
                    </div>
                    <div>
                        <TextField type="password" hintText="Password" onChange={this.onPasswordChanged} />
                    </div>
                    <div className="button-row">
                        <div className="button-container">
                            <RaisedButton label="Login" primary={true} onClick={this.onLoginPress} />
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default AnonymousViewComponent;