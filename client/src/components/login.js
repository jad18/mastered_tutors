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
        }

        this.updateText = this.updateText.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    updateText(id, value)
    {
        if(id==="username") this.setState({ username: value });
        else if (id==="password") this.setState({ password: value });
    }

    handleSubmit(event)
    {
        console.log(this.state.username, this.state.password);

        if(this.state.username.length === 0)
        {
            document.getElementById("username-label").className="inactive-field-alert";
            document.getElementById("username").blur();
        }
        if(this.state.password.length === 0)
        {
            document.getElementById("password-label").className="inactive-field-alert";
            document.getElementById("password").blur({ submitting: true });
        }
        else if(this.state.password === "wrong")
        {
            this.setState({ password: "" });

            var passwordBox = document.getElementById("password");
            passwordBox.value = "";
            if(document.activeElement.id !== "password")
            {
                document.getElementById("password-label").className="inactive-field-alert";
                passwordBox.blur();
            }
            alert("Password was wrong!");
        }
        event.preventDefault();
    }

    render()
    {
        return(
            <div>
                <h1 className="center-align">Log In</h1>
                <form className='form1' autoComplete="off" onSubmit={this.handleSubmit}>
                    <InputBox placeholder="Username" isHidden={false} id="username" onChange={this.updateText} />
                    <br/><br/>
                    <InputBox placeholder="Password" isHidden={true} id="password" onChange={this.updateText} />
                    <br/><br/>
                    <button type="submit" className="submit-button">Log In</button>
                </form>
            </div>
        );
    }
}

export default LoginPage;