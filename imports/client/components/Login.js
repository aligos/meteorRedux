import { Meteor } from 'meteor/meteor';
import React, { Component } from 'react';

export default class Login extends Component {
  loginButton() {
    Meteor.loginWithFacebook({
      requestPermissions: ['user_friends', 'public_profile', 'email']
    }, (err) => {
      if (err) {
        console.log(err);
      } else {
        console.log('successful login!');
      }
    });
  }
  render() {
    return (
        <div>
          <button className="btn ig-login" onClick={this.loginButton}>Login Facebook</button>
        </div>
    );
  }
}