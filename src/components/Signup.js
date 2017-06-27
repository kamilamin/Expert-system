import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import { firebaseApp } from '../firebase'

const contentStyle = {
    padding: '20px',
    border: '1px solid #000',
    width: '50%',
    margin: '5px auto 5px auto'
};

const textFieldStyle = {
    display: 'block',
    width: '100%'
};

const head = {
    textAlign: 'center',
    fontSize: '30px'
};

const nextLink ={
    textAlign: 'center',
    paddingTop: '20px'
};

const buttonStyle = {
    marginTop: '20px'
};

class Signup extends Component {
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

    signUp(){
        console.log('this.state', this.state);
        const { email, password } = this.state; 
        firebaseApp.auth().createUserWithEmailAndPassword(email, password)
            .catch(error => {
                console.log('error', error)
                this.setState({error})
            })
    }

    render() {
        return(
            <MuiThemeProvider>
                <div style={contentStyle}>
                    <h2 style={head}>Sign Up</h2>
                        <form>
                            <TextField id='email' floatingLabelText="Email" type='email' style={textFieldStyle} onChange={event => this.setState({email: event.target.value})} />
                            <TextField id='password' floatingLabelText="Password" type='password' style={textFieldStyle} onChange={event => this.setState({password: event.target.value})} />
                            <RaisedButton type='submit' fullWidth={true} primary={true} label='Sign up' style={buttonStyle} onTouchTap={() => this.signUp()} />
                        </form>
                    <div style={nextLink}>
                        <Link to='/Login'>Already Have Account? Login instead</Link>
                    </div>
                    <div>{this.state.error.message}</div>
                </div>
            </MuiThemeProvider>
        )
    }
}

export default Signup;
