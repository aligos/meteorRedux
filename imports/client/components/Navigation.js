import { Meteor } from 'meteor/meteor';
import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';

export default class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userAction: false
    }
  }

  toggleUser() {
    this.setState({
      userAction: !this.state.userAction
    })
  }

  logoutButton() {
    Meteor.logout((err) => {
      if (err) {
        console.log(err);
      } else {
        console.log('successful logged out!');
      }
    });
  }
  render() {
    return (
        <div>
          <nav className="navbar-nav nav">
            <ul>
              <li><a href="#" className="btn btn-primary" onClick={this.toggleUser.bind(this)}><img src={`https://graph.facebook.com/${Meteor.user().services.facebook.id}/picture?width=32&height=32`} className="img-profile"></img><span>{Meteor.user().services.facebook.name}</span></a></li>
              {this.state.userAction ? <li><a href="#" className="ig-login" onClick={this.logoutButton}>Log out</a></li>: ''}
            </ul>
          </nav>
        </div>
    );
  }
}

Navigation.propTypes = {
  currentUser: PropTypes.object,
};

export default createContainer(() => {
  return {
    currentUser: Meteor.user(),
  };
}, Navigation);