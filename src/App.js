import React, { Component } from 'react';
import './App.css';
import Modal from './components/Modal';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

var App = React.createClass({
  getInitialState: function(){
    // one boolean 'mounted' in local state
    return { mounted: false };
  },

  // lifecycle hooks to define functionality during different
  // phases of the component
  componentDidMount: function() {
    this.setState({ mounted: true });
  },

  handleSubmit: function(e){
    this.setState({ mounted: false });
    e.preventDefault();
  },

  render: function() {
    var child;

    // show modal only if component has been mounted
    if(this.state.mounted) {
      // child component created if App component has rendered to DOM
      child = (<Modal onSubmit={this.handleSubmit} />)
    }

    return (
      <div className="App">
        <ReactCSSTransitionGroup
          transitionName="example"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={300}>
            {child}
        </ReactCSSTransitionGroup>
      </div>
    );
  }
});

export default App;