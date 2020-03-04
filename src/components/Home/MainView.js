import ArticleList from '../ArticleList';
import React from 'react';
import agent from '../../agent';
import { connect } from 'react-redux';
import { CHANGE_TAB } from '../../constants/actionTypes';

const YourFeedTab = props => {
  if (props.token) {
    const clickHandler = ev => {
      ev.preventDefault();
      props.onTabClick('feed', agent.Articles.feed, agent.Articles.feed());
    }

    return (
      <li classNameName="nav-item">
        <a  href="#"
            classNameName={ props.tab === 'feed' ? 'nav-link active' : 'nav-link' }
            onClick={clickHandler}>
          Your Feed
        </a>
      </li>
    );
  }
  return null;
};

const GlobalFeedTab = props => {
  const clickHandler = ev => {
    ev.preventDefault();
    props.onTabClick('all', agent.Articles.all, agent.Articles.all());
  };
  return (
    <li classNameName="nav-item">
      <a
        href=""
        classNameName={ props.tab === 'all' ? 'nav-link active' : 'nav-link' }
        onClick={clickHandler}>
        Global Feed
      </a>
    </li>
  );
};

const TagFilterTab = props => {
  if (!props.tag) {
    return null;
  }

  return (
    <li classNameName="nav-item">
      <a href="" classNameName="nav-link active">
        <i classNameName="ion-pound"></i> {props.tag}
      </a>
    </li>
  );
};

const mapStateToProps = state => ({
  ...state.articleList,
  tags: state.home.tags,
  token: state.common.token
});

const mapDispatchToProps = dispatch => ({
  onTabClick: (tab, pager, payload) => dispatch({ type: CHANGE_TAB, tab, pager, payload })
});

const MainView = props => {
  return (
    <div className="cont-list">
                        <a href="#" className="img-cell">
                            <figure>
                                <img src="../images/sofa-1078931_1920.jpg" alt=""/>
                                <figcaption></figcaption>
                            </figure>
                        </a>
                        <a href="#" className="img-cell">
                            <figure>
                                <img src="../images/living-room-modern-tv-4813589_1920.jpg" alt=""/>
                                <figcaption></figcaption>
                            </figure>
                        </a>
                        
                        
                        <div className="img-cell tag-cell">
                            <a href="#" className="cell-tag">Accessories</a>
                            <a href="#" className="cell-tag">Accessories</a>
                            <a href="#" className="cell-tag">Accessories</a>
                        </div>
                        
                        
                        <a href="#" className="img-cell">
                            <figure>
                                <img src="../images/living-room-2155376_1920.jpg" alt=""/>
                                <figcaption></figcaption>
                            </figure>
                        </a>
                        
                        
                        <a href="#" className="img-cell">
                            <figure>
                                <img src="../images/home-820389_1920.jpg" alt=""/>
                                <figcaption></figcaption>
                            </figure>
                        </a>
                        
                        
                        <a href="#" className="img-cell">
                            <figure>
                                <img src="../images/kitchen-4043098_1920.jpg" alt=""/>
                                <figcaption></figcaption>
                            </figure>
                        </a>
                        
                        
                        <a href="#" className="img-cell">
                            <figure>
                                <img src="../images/kitchen-4043098_1920.jpg" alt=""/>
                                <figcaption></figcaption>
                            </figure>
                        </a>
                        
                        
                        <a href="#" className="img-cell">
                            <figure>
                                <img src="../images/brick-wall-1834784_1920.jpg" alt=""/>
                                <figcaption></figcaption>
                            </figure>
                        </a>
                        
                        
                        <a href="#" className="img-cell">
                            <figure>
                                <img src="../images/sofa-1078931_1920.jpg" alt=""/>
                                <figcaption></figcaption>
                            </figure>
                        </a>
                        
                        
                        <a href="#" className="img-cell">
                            <figure>
                                <img src="../images/living-room-modern-tv-4813589_1920.jpg" alt=""/>
                                <figcaption></figcaption>
                            </figure>
                        </a>
                        
                        
                        <a href="#" className="img-cell">
                            <figure>
                                <img src="../images/living-room-2155376_1920.jpg" alt=""/>
                                <figcaption></figcaption>
                            </figure>
                        </a>
                        
                        
                        <a href="#" className="img-cell">
                            <figure>
                                <img src="../images/home-820389_1920.jpg" alt=""/>
                                <figcaption></figcaption>
                            </figure>
                        </a>
                        
                        
                        <a href="#" className="img-cell">
                            <figure>
                                <img src="../images/chair-1484853_1920.jpg" alt=""/>
                                <figcaption></figcaption>
                            </figure>
                        </a>
                        
                        
                        <a href="#" className="img-cell">
                            <figure>
                                <img src="../images/kitchen-4043098_1920.jpg" alt=""/>
                                <figcaption></figcaption>
                            </figure>
                        </a>
                        
                        
                        <a href="#" className="img-cell">
                            <figure>
                                <img src="../images/kitchen-4043098_1920.jpg" alt=""/>
                                <figcaption></figcaption>
                            </figure>
                        </a>
                        
                        
                        <a href="#" className="img-cell">
                            <figure>
                                <img src="../images/brick-wall-1834784_1920.jpg" alt=""/>
                                <figcaption></figcaption>
                            </figure>
                        </a>
                        
                        
                        <a href="#" className="img-cell">
                            <figure>
                                <img src="../images/sofa-1078931_1920.jpg" alt=""/>
                                <figcaption></figcaption>
                            </figure>
                        </a>
                        
                        
                        <a href="#" className="img-cell">
                            <figure>
                                <img src="../images/living-room-modern-tv-4813589_1920.jpg" alt=""/>
                                <figcaption></figcaption>
                            </figure>
                        </a>
                        
                        
                        <a href="#" className="img-cell">
                            <figure>
                                <img src="../images/living-room-2155376_1920.jpg" alt=""/>
                                <figcaption></figcaption>
                            </figure>
                        </a>
                        
                        
                        <a href="#" className="img-cell">
                            <figure>
                                <img src="../images/home-820389_1920.jpg" alt=""/>
                                <figcaption></figcaption>
                            </figure>
                        </a>
                        
                        
                        <a href="#" className="img-cell">
                            <figure>
                                <img src="../images/chair-1484853_1920.jpg" alt=""/>
                                <figcaption></figcaption>
                            </figure>
                        </a>
                        
                        
                        <a href="#" className="img-cell">
                            <figure>
                                <img src="../images/kitchen-4043098_1920.jpg" alt=""/>
                                <figcaption></figcaption>
                            </figure>
                        </a>
                        
                        
                        <a href="#" className="img-cell">
                            <figure>
                                <img src="../images/kitchen-4043098_1920.jpg" alt=""/>
                                <figcaption></figcaption>
                            </figure>
                        </a>
                        
                        
                        <a href="#" className="img-cell">
                            <figure>
                                <img src="../images/brick-wall-1834784_1920.jpg" alt=""/>
                                <figcaption></figcaption>
                            </figure>
                        </a>
                        
                        
                        <a href="#" className="img-cell">
                            <figure>
                                <img src="../images/sofa-1078931_1920.jpg" alt=""/>
                                <figcaption></figcaption>
                            </figure>
                        </a>
                        
                        
                        <a href="#" className="img-cell">
                            <figure>
                                <img src="../images/living-room-modern-tv-4813589_1920.jpg" alt=""/>
                                <figcaption></figcaption>
                            </figure>
                        </a>
                        
                        
                        <a href="#" className="img-cell">
                            <figure>
                                <img src="../images/living-room-2155376_1920.jpg" alt=""/>
                                <figcaption></figcaption>
                            </figure>
                        </a>
                        
                        
                        <a href="#" className="img-cell">
                            <figure>
                                <img src="../images/home-820389_1920.jpg" alt=""/>
                                <figcaption></figcaption>
                            </figure>
                        </a>
                        
                        
                        <a href="#" className="img-cell">
                            <figure>
                                <img src="../images/chair-1484853_1920.jpg" alt=""/>
                                <figcaption></figcaption>
                            </figure>
                        </a>
                        
                        
                        <a href="#" className="img-cell">
                            <figure>
                                <img src="../images/kitchen-4043098_1920.jpg" alt=""/>
                                <figcaption></figcaption>
                            </figure>
                        </a>
                        
                        
                        <a href="#" className="img-cell">
                            <figure>
                                <img src="../images/kitchen-4043098_1920.jpg" alt=""/>
                                <figcaption></figcaption>
                            </figure>
                        </a>
                        
                        
                        <a href="#" className="img-cell">
                            <figure>
                                <img src="../images/brick-wall-1834784_1920.jpg" alt=""/>
                                <figcaption></figcaption>
                            </figure>
                        </a>
                        
                        
                        <a href="#" className="img-cell">
                            <figure>
                                <img src="../images/sofa-1078931_1920.jpg" alt=""/>
                                <figcaption></figcaption>
                            </figure>
                        </a>
                        
                        
                        <a href="#" className="img-cell">
                            <figure>
                                <img src="../images/living-room-modern-tv-4813589_1920.jpg" alt=""/>
                                <figcaption></figcaption>
                            </figure>
                        </a>
                        
                        
                        <a href="#" className="img-cell">
                            <figure>
                                <img src="../images/living-room-2155376_1920.jpg" alt=""/>
                                <figcaption></figcaption>
                            </figure>
                        </a>
                        
                        
                        <a href="#" className="img-cell">
                            <figure>
                                <img src="../images/home-820389_1920.jpg" alt=""/>
                                <figcaption></figcaption>
                            </figure>
                        </a>
                        
                        
                        <a href="#" className="img-cell">
                            <figure>
                                <img src="../images/chair-1484853_1920.jpg" alt=""/>
                                <figcaption></figcaption>
                            </figure>
                        </a>
                        
                        
                        <a href="#" className="img-cell">
                            <figure>
                                <img src="../images/kitchen-4043098_1920.jpg" alt=""/>
                                <figcaption></figcaption>
                            </figure>
                        </a>
                        
                        
                        <a href="#" className="img-cell">
                            <figure>
                                <img src="../images/kitchen-4043098_1920.jpg" alt=""/>
                                <figcaption></figcaption>
                            </figure>
                        </a>
                        
                        
                        <a href="#" className="img-cell">
                            <figure>
                                <img src="../images/brick-wall-1834784_1920.jpg" alt=""/>
                                <figcaption></figcaption>
                            </figure>
                        </a>
      </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(MainView);
