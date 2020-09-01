import React from 'react';
import './App.css';
import InputBox from './InputBox';

class LoginPage extends React.Component
{
    constructor()
    {
        super();
        this.state = {
            username: "",
            password: "",
            missingInput: null,
            wrongPassword: false,
        }

        this.passwordContainer = React.createRef();

        this.updateText = this.updateText.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.getMessage = this.getMessage.bind(this);
    }

    updateText(id, value)
    {
        if(id==="username") this.setState({ username: value });
        else if (id==="password") this.setState({ password: value });
    }

    handleSubmit(event)
    {
        event.preventDefault();
        console.log(this.state.username, this.state.password);

        var hasMissing = false;

        if(this.state.password.length === 0)
        {
            document.getElementById("password-label").className="inactive-field-alert";
            document.getElementById("password").blur();
            this.setState({ missingInput: "password" });
            hasMissing = true;
        }
        if(this.state.username.length === 0)
        {
            document.getElementById("username-label").className="inactive-field-alert";
            document.getElementById("username").blur();
            this.setState({ missingInput: "username" });
            hasMissing = true;
        }

        if(hasMissing) return;

        this.setState({ missingInput: null });

        if(this.state.password === "wrong")
        {
            this.setState({ password: "", wrongPassword: true });

            var passwordBox = document.getElementById("password");
            passwordBox.value = "";

            if(document.activeElement.id !== "password")
            {
                document.getElementById("password-label").className="inactive-field-alert";
                this.passwordContainer.current.setState({ fieldIsActive: false });
            }
        }
    }

    getMessage()
    {
        if(this.state.missingInput) return "Missing " + this.state.missingInput + " field";
        else if(this.state.wrongPassword) return "Wrong username or password";
        else return null;
    }

    render()
    {
        return(
            <div>
                <h1 className="center-align">Log In</h1>
                <form className='form1' autoComplete="off" onSubmit={this.handleSubmit}>
                    <InputBox
                        placeholder="Username"
                        isHidden={false}
                        id="username"
                        onChange={this.updateText} />
                    <br/><br/>
                    <InputBox
                        ref={this.passwordContainer}
                        placeholder="Password"
                        isHidden={true}
                        id="password"
                        onChange={this.updateText} />
                    <br/><br/>
                    <button type="submit" className="submit-button">Log In</button>
                </form>
                <br/>
                <h3 className="center-align">{this.getMessage()}</h3>
            </div>
        );
    }
}

export default LoginPage;