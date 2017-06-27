import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import { firebaseApp } from '../firebase';

const contentStyle = {
    padding: '20px',
    border: '1px solid #000',
    width: '50%',
    margin: '5px auto 5px auto'
}

const textFieldStyle = {
    display: 'block',
    width: '100%'
}

const head = {
    textAlign: 'center',
    fontSize: '30px'
}

const nextLink ={
    textAlign: 'center',
    paddingTop: '20px'
}

const buttonStyle = {
    marginTop: '20px'
}

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            error: {
                message: ''
            }
        }
    }

logIn() {
    console.log('this.state', this.state);
    const { email, password } = this.state;
    firebaseApp.auth().signInWithEmailAndPassword(email, password)
        .catch(error => {
            this.setState({error})
        })
}
    render() {
        return(
            <MuiThemeProvider>
                <div style={contentStyle}>
                    <h2 style={head}>Log In</h2>
                        <form>
                            <TextField id='email' floatingLabelText="Email" type='email' style={textFieldStyle} onChange={event => this.setState({email: event.target.value})} />
                            <TextField id='password' floatingLabelText="Password" type='password' style={textFieldStyle} onChange={event => this.setState({password: event.target.value})} />
                            <RaisedButton type='submit' fullWidth={true} primary={true} label='Log in' style={buttonStyle} onTouchTap={() =>this.logIn()} />
                        </form>
                    <div style={nextLink}>
                        <Link to='/Signup'>Not Registered? Signup instead</Link>
                    </div>
                </div>
            </MuiThemeProvider>
        )
    }
}

export default Login;
