import React, { PropTypes, Component }from 'react';
import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';
import AddTodo from '../../../imports/client/components/AddTodo';
import TodoList from '../../../imports/client/components/TodoList';
import Footer from '../../../imports/client/components/Footer';
import DevTools from '../../../imports/client/components/DevTools';
import Login from '../../../imports/client/components/Login';
import Navigation from '../../../imports/client/components/Navigation';

class TodoApp extends Component {
  render() {
    return (
        <div className='todo-container'>
          {this.props.currentUser ? 
          <div>
            <DevTools />
            <Navigation/>
            <AddTodo/>
            <TodoList/>
            <Footer/>
          </div>:
          <Login/>}
        </div>
    );
  }
}

TodoApp.propTypes = {
  currentUser: PropTypes.object,
};

export default createContainer(() => {
  return {
    currentUser: Meteor.user(),
  };
}, TodoApp);