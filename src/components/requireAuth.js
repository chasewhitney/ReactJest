import React, { Component } from 'react';
import {connect} from 'react-redux';

export default ChildComponent => {
  class ComposedComponent extends Component {

      componentDidMount(){
        this.shouldNavigateAway();
      }

      componentDidUpdate(){
        this.shouldNavigateAway();
      }

      shouldNavigateAway(){
        if(!this.props.auth){
          console.log('User not signed in, back you go');
          this.props.history.push('/');
        }
      }

    render() {
      return (
        <ChildComponent />
      )
    }
  };
  function mapStateToProps({auth}){
    return {auth};
  };

  return connect(mapStateToProps)(ComposedComponent);
};
