import React from 'react';
import agent from '../agent';

const LoggedOutView = ({ props, onSearchLoad, onDetailUnLoad }) => {
  if (true) {
    const clickHandler = ev => {
      window.category = undefined;
      onSearchLoad(window.searchKeyword, agent.Articles.bySearchKeword(20, window.searchKeyword));
      onDetailUnLoad();
    }
    const keyHandler = ev => {
      window.searchKeyword = ev.target.value;
      if (ev.key === 'Enter') {
        window.category = undefined;
        onSearchLoad(ev.target.value, agent.Articles.bySearchKeword(20, ev.target.value));
        onDetailUnLoad();
      }
    }
    const reloadHandler = ev => {
      ev.preventDefault();
      window.location.reload();
    }
    return (
      <header className="header">
        <div className="inner">
          <h1 className="logo"><a href="/#" onClick={reloadHandler}><img src="../images/common/img_logo.png" alt="Product Moor" /></a>
          </h1>
          <div className="header-util">
            <div className="cell-util search">
              <div className="box-search active">
                <input type="search" className="text" id="serchMoor" onKeyDown={keyHandler} onChange={keyHandler} />
              </div>
              <label htmlFor="serchMoor" className="btn-util" onClick={clickHandler}>검색</label>
            </div>
          </div>
        </div>
      </header>
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
          onDetailUnLoad={this.props.onDetailUnLoad}
        />

        {/* <LoggedInView currentUser={this.props.currentUser} /> */}

      </header>
    );
  }
}

export default Header;
