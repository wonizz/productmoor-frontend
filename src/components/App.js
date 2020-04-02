import agent from '../agent';
import Header from './Header';
import Footer from './Footer';
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { APP_LOAD, REDIRECT, HOME_PAGE_LOADED } from '../constants/actionTypes';

const mapStateToProps = state => ({
  appLoaded: state.common.appLoaded,
  appName: state.common.appName,
  category: state.common.category,
  currentUser: state.common.currentUser,
  redirectTo: state.common.redirectTo
});

const mapDispatchToProps = dispatch => ({
  onLoad: (payload, token) =>
    dispatch({ type: APP_LOAD, payload, token, skipTracking: true }),
  onSearchLoad: (payload) =>
    dispatch({ type: HOME_PAGE_LOADED, payload }),
  onRedirect: () =>
    dispatch({ type: REDIRECT })
});

class App extends React.Component {
  componentWillReceiveProps(nextProps) {
    if (nextProps.redirectTo) {
      this.context.router.replace(nextProps.redirectTo);
      this.props.onRedirect();
    }
  }

  componentWillMount() {
    const token = window.localStorage.getItem('jwt');
    if (token) {
      agent.setToken(token);
    }

    this.props.onLoad(token ? agent.Auth.current() : null, token);
  }

  render() {
    if (this.props.appLoaded) {
      return (
        <div>
          <div className="preloader">
            <div className="loader">
              <span className="dot"></span>
              <div className="dots">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          </div>
          <div className="wrap">
            <Header
              appName={this.props.appName}
              currentUser={this.props.currentUser}
              onSearchLoad={this.props.onSearchLoad} />
            {this.props.children}
            <Footer />
          </div>
        </div>
      );
    }
    return (
      <div>
      </div>

    );
  }
}

App.contextTypes = {
  router: PropTypes.object.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
