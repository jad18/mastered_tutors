import React from 'react';
import './App.css';

class InputBox extends React.Component
{
    constructor(props)
    {
        super(props);
        this.placeholder = props.placeholder;
        this.isHidden = props.isHidden;
        this.id = props.id;
        this.onChange = props.onChange;

        this.state = {
            fieldIsActive: false,
        }

        this.activateField = this.activateField.bind(this);
        this.deactivateField = this.deactivateField.bind(this);
        this.updateText = this.updateText.bind(this);
        this.determineClassName = this.determineClassName.bind(this);
    }

    activateField(event)
    {
        this.setState( { fieldIsActive: true } );
        document.getElementById(this.id).focus();
        event.preventDefault();
    }

    deactivateField(event)
    {
        if(event.target.value.length === 0)
            this.setState( { fieldIsActive: false } );
    }

    updateText(event)
    {
        this.onChange(this.id, event.target.value);
    }

    determineClassName()
    {
        console.log("determining " + this.id);
        if(this.state.fieldIsActive) return "active-field";

        var label = document.getElementById(this.id+"-label");
        if(label && label.className === "inactive-field-alert")
            return "inactive-field-alert";

        return "inactive-field";
    }

    render()
    {
        return(
            <div className='float-container'>
                <label
                    className={this.determineClassName()}
                    id={ this.id + "-label"}
                    onClick={this.activateField}>
                    {this.placeholder}
                </label>
                <input
                    type={this.isHidden ? "password" : "text" }
                    id={this.id}
                    className="floating-label-box1"
                    onChange={this.updateText}
                    onFocus={this.activateField}
                    onBlur={this.deactivateField} />
            </div>
        );
    }
}

export default InputBox;