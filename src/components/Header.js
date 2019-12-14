import React from 'react';
import { Link } from 'react-router';

const LoggedOutView = props => {
  if (!props.currentUser) {
    return (
        <nav class="navbar navbar-expand-lg navbar-light">
            <a class="navbar-brand" href="index.html"><img class="img-fluid" src="http://demo.themefisher.com/parsa/images/logo.png" alt="parsa"></img></a>
            <button class="navbar-toggler border-0" type="button" data-toggle="collapse" data-target="#navogation"
              aria-controls="navogation" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse text-center" id="navogation">
              <ul class="navbar-nav ml-auto">
                <li class="nav-item dropdown">
                  <a class="nav-link text-uppercase text-dark dropdown-toggle" href="#" id="navbarDropdown"
                    role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Home
                  </a>
                  <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <a class="dropdown-item" href="index.html">Homepage 1</a>
                    <a class="dropdown-item" href="homepage-2.html">Homepage 2</a>
                  </div>
                </li>
              </ul>
              <form class="form-inline position-relative ml-lg-4">
                <input class="form-control px-0 w-100" type="search" placeholder="Search"></input>
                <button class="search-icon" type="submit"><i class="ti-search text-dark"></i></button>
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
      <header class="navigation">


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
