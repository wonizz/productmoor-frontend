import React from 'react';
import { Link } from 'react-router';

const LoggedOutView = props => {
  if (!props.currentUser) {
    return (
        <header className="header">
        <div className="inner">
            <h1 className="logo"><a href="#"><img src="../images/common/img_logo.png" alt="Product Moor"/></a>
            </h1>
            <div className="header-util">
                <div className="cell-util search">
                    <div className="box-search">
                        <input type="search" className="text" id="serchMoor"/>
                        <div className="search-keyword">
                            <div className="cell-keyword">
                                <span className="item-key">Arper</span>
                                <span className="item-key">Nanimarquina</span>
                                <span className="item-key">Desalto</span>
                            </div>
                            <div className="cell-keyword">
                                <span className="item-key">Lighting</span>
                                <span className="item-key">Kitchen &amp; Dining</span>
                                <span className="item-key">Textiles</span>
                            </div>
                        </div>
                    </div>
                    <label for="serchMoor" className="btn-util">검색</label>
                </div>
                <div className="cell-util menu">
                    <button className="btn-util" type="button">메뉴</button>
                    <nav className="box-menu">
                        <a href="#" className="btn-menu">SHOPPING LIST</a>
                        <a href="#" className="btn-menu">WISH LIST</a>
                        <a href="#" className="btn-menu">MY ACCOUNT</a>
                    </nav>
                </div>
                <div className="cell-util myaccount">
                    <button className="btn-util" type="button">내 계정</button>
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

          <LoggedOutView currentUser={this.props.currentUser} />

          {/* <LoggedInView currentUser={this.props.currentUser} /> */}

      </header>
    );
  }
}

export default Header;
