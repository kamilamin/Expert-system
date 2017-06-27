import React, { Component } from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import { List, ListItem } from 'material-ui/List';
import RaisedButton from 'material-ui/RaisedButton'
import { firebaseApp } from '../firebase';
import { connect } from 'react-redux';

injectTapEventPlugin();

const buttonStyle = {
    marginTop: '20px'
}

class App extends Component {
    constructor() {
        super();
        this.state = {
            drawerOpened: false
        }
    }

    _toggleDrawer() {
        this.setState({
            drawerOpened: !this.state.drawerOpened
        })
    }

    signOut(){
            firebaseApp.auth().signOut();
    }
    render() {
        return(
            <MuiThemeProvider>
                <div>
                    <AppBar title="Expert System For Dermatologist" onLeftIconButtonTouchTap={() => this._toggleDrawer()} />
                    <Drawer open={this.state.drawerOpened} docked={false} onRequestChange={() => this._toggleDrawer()}>
                        <List>
                            <ListItem>Item 1</ListItem>
                            <ListItem>Item 2</ListItem>
                            <ListItem>Item 3</ListItem>
                            <ListItem>Item 4</ListItem>
                            <ListItem>Item 5</ListItem>
                        </List>
                    </Drawer>
                </div>
                <RaisedButton type='submit' fullWidth={true} primary={true} label='Log in' style={buttonStyle} onTouchTap={() => this.signOut()} />
            </MuiThemeProvider>
        )
    }
}

function mapStateToProps(state) {
    console.log('state', state);
    return {}
}

export default connect(mapStateToProps, null) (App);