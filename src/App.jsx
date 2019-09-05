import React, { Component } from 'react';
import { BrowserRouter, Link } from 'react-router-dom';
import Grid from './components/Grid';
import Routes from './Routes';



class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
    this.state = {isLoggedIn: false};
  }

    handleLoginClick() {
      this.setState({isLoggedIn: true});
    }

    handleLogoutClick() {
      this.setState({isLoggedIn: false});
    }

  render(){
    const isLoggedIn = this.state.isLoggedIn;
    let button;

    if (isLoggedIn) {
      button = <LoginButton onClick={this.handleClick} />;
    } else {
      button = <LogoutButton onClick={this.unhandleClick} />;
    }

    return (
      <BrowserRouter>
        <main className="container">
        <Greeting isLoggedIn={isLoggedIn} />
        {button}
        <Grid/>

        <Routes />
        </main>
      </BrowserRouter>
    );
  }
}

function UserGreeting(props) {
  return <h1>Welcome back!</h1>;
}

function GuestGreeting(props) {
  return <h1>Please sign up.</h1>;
}

function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return <UserGreeting />;
  }
  return <GuestGreeting />;
}

function LoginButton(props) {
  return (
    <button onClick={props.onClick}>
      Login
    </button>
  );
}

function LogoutButton(props) {
  return (
    <button onClick={props.onClick}>
      Logout
    </button>
  );
}

export default App;
