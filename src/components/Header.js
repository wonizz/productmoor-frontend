import React from 'react';
import { Link } from 'react-router';

const LoggedOutView = props => {
  if (!props.currentUser) {
    return (
        <nav className="navbar navbar-expand-lg navbar-light">
            <a className="navbar-brand" href="index.html"><img className="img-fluid" src="logo.png" alt="parsa"></img></a>
            <button className="navbar-toggler border-0" type="button" data-toggle="collapse" data-target="#navogation"
              aria-controls="navogation" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse text-center" id="navogation">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item dropdown">
                  <a className="nav-link text-uppercase text-dark dropdown-toggle" href="#" id="navbarDropdown"
                    role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Home
                  </a>
                  <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <a className="dropdown-item" href="index.html">Homepage 1</a>
                    <a className="dropdown-item" href="homepage-2.html">Homepage 2</a>
                  </div>
                </li>
              </ul>
              <form className="form-inline position-relative ml-lg-4">
                <input className="form-control px-0 w-100" type="search" placeholder="Search"></input>
                <button className="search-icon" type="submit"><i className="ti-search text-dark"></i></button>
              </form>
            </div>
        </nav>
    );
  }
  return null;
};

const LoggedInView = props => {
  if (props.currentUser) {
    return (
      <ul className="nav navbar-nav pull-xs-right">

        <li className="nav-item">
          <Link to="/" className="nav-link">
            Home
          </Link>
        </li>

        <li className="nav-item">
          <Link to="editor" className="nav-link">
            <i className="ion-compose"></i>&nbsp;New Post
          </Link>
        </li>

        <li className="nav-item">
          <Link to="settings" className="nav-link">
            <i className="ion-gear-a"></i>&nbsp;Settings
          </Link>
        </li>

        <li className="nav-item">
          <Link
            to={`@${props.currentUser.username}`}
            className="nav-link">
            <img src={props.currentUser.image} className="user-pic" alt={props.currentUser.username} />
            {props.currentUser.username}
          </Link>
        </li>

      </ul>
    );
  }

  return null;
};

class Header extends React.Component {
  render() {
    return (
      <header className="navigation">


          {/* <Link to="/" className="navbar-brand">
            {this.props.appName.toLowerCase()}
          </Link> */}

          <LoggedOutView currentUser={this.props.currentUser} />

          {/* <LoggedInView currentUser={this.props.currentUser} /> */}

      </header>
    );
  }
}

export default Header;
