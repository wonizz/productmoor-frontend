import ArticleList from '../ArticleList';
import React from 'react';
import agent from '../../agent';
import { connect } from 'react-redux';
import { CHANGE_TAB } from '../../constants/actionTypes';
import Masonry from 'react-masonry-component';
import { Link } from 'react-router';

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
    if (!props.articles) {
        return (
            <div className="cont-list">Loading...</div>
        );
      }
  return (
    
    <Masonry
                className={'cont-list'} // default ''
                elementType={'div'} // default 'div'
                disableImagesLoaded={false} // default false
                updateOnEachImageLoad={false} // default false and works only if disableImagesLoaded is false
            >
                        {
                        props.articles.map((article, index) =>{
                            const handleClick = ev => {
                              ev.preventDefault();
                              props.onClickDetail(agent.Articles.byTitle(article._source.product_title));
                            };  
                            return (
                                <Link to={'#'} className="img-cell" onClick={handleClick}>
                                <figure>
                                    <img src={article._source.image_crawling} alt=""/>
                                    <figcaption></figcaption>
                                </figure>
                                </Link>
                            );
                        })
                        }
            </Masonry>
      
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(MainView);
