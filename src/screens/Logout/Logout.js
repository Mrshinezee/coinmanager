import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View } from 'react-native';
import logout, { logOutPending } from './actions'

class Logout extends Component {

    componentDidMount() {
        this.logOutUser();
        if (this.props.isLoggedOut) {
          this.props.navigation.navigate('Login');
        }
      }
      
      componentWillReceiveProps(nextProps) {
        this.logOutUser();
        if (nextProps.isLoggedOut) {
          this.props.navigation.navigate('Login');
        }
      }

    logOutUser = () => {
        this.props.logOutPending();
        this.props.navigation.navigate('DrawerClose');
        this.props.logout();
      }

    render() {
        return (
            <View/>
        );
    }
}
    
const mapStateToProps = (state) => ({
    isLoggedOut: state.login.isLoggedOut,
  });
  
  const mapDispatchToProps = {
    logout,
    logOutPending,
  };
  
  export default connect(mapStateToProps, mapDispatchToProps)(Logout);
