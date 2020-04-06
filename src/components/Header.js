import React from 'react';
import { Link } from 'react-router';
import agent from '../agent';

const LoggedOutView = ({props, onSearchLoad}) => {
  if (true) {
    const clickHandler = ev => {
        window.category = undefined;
        onSearchLoad(window.searchKeyword, agent.Articles.bySearchKeword(20, window.searchKeyword));
    }
    const keyHandler = ev => {
      window.searchKeyword = ev.target.value;
      if (ev.key === 'Enter') {
        window.category = undefined;
        onSearchLoad(ev.target.value, agent.Articles.bySearchKeword(20, ev.target.value));
      }
    }
    return (
        <header className="header">
        <div className="inner">
            <h1 className="logo"><a href="#"><img src="../images/common/img_logo.png" alt="Product Moor"/></a>
            </h1>
            <div className="header-util">
                <div className="cell-util search">
                    <div className="box-search active">
                        <input type="search" className="text" id="serchMoor" onKeyDown={keyHandler} onChange={keyHandler}/>
                    </div>
                    <label for="serchMoor" className="btn-util" onClick={clickHandler}>검색</label>
                </div>
            </div>
        </div>
    </header>
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

          <LoggedOutView
          currentUser={this.props.currentUser}
          onSearchLoad={this.props.onSearchLoad}
          />

          {/* <LoggedInView currentUser={this.props.currentUser} /> */}

      </header>
    );
  }
}

export default Header;
