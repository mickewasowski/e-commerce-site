import React from "react";

import FormInput from "../form-input/form-input.component";

import './sign-in.styles.scss';

class SignIn extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            email: '',
            password: ''
        };
    }

    handleSumbit = event => {
        event.preventDefault();

        this.setState({email: '', password: ''});
    }

    handleChange = event => {
        const {name, value} = event.target;

        this.setState({ [name]: value });
    }


    render() {
        return(
            <div className="sign-in">
                <h2>I already have account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSumbit}>
                    <FormInput 
                        name='email' 
                        type='email' 
                        value={this.state.email}
                        label='Email'
                        handleChange={this.handleChange}
                        required
                        />
                    <FormInput 
                        name='password' 
                        type='password' 
                        value={this.state.password} 
                        label='Password'
                        handleChange={this.handleChange}
                        required
                        />

                    <input type='submit' value='submit'/>
                </form>
            </div>
        )
    }
}

export default SignIn;