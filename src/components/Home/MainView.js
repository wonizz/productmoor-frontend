import ArticleList from '../ArticleList';
import React from 'react';
import agent from '../../agent';
import { connect } from 'react-redux';
import { CHANGE_TAB } from '../../constants/actionTypes';
import Masonry from 'react-masonry-component';
import InfiniteScroll from "react-infinite-scroll-component";
import MasonryInfiniteScroller from 'react-masonry-infinite';
import { Link } from 'react-router';

const YourFeedTab = props => {
  if (props.token) {
    const clickHandler = ev => {
      ev.preventDefault();
      props.onTabClick('feed', agent.Articles.feed, agent.Articles.feed());
    }

    return (
      <li classNameName="nav-item">
        <a href="#"
          classNameName={props.tab === 'feed' ? 'nav-link active' : 'nav-link'}
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
        classNameName={props.tab === 'all' ? 'nav-link active' : 'nav-link'}
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
  token: state.common.token,
  from: state.articleList.from
});

const mapDispatchToProps = dispatch => ({
  onTabClick: (tab, pager, payload) => dispatch({ type: CHANGE_TAB, tab, pager, payload })
});

window.localStorage.setItem('size', 10);
window.localStorage.setItem('from', 10);
const sizes = [
  { columns: 2, gutter: 10 },
  { mq: '768px', columns: 3, gutter: 25 },
  { mq: '1024px', columns: 4, gutter: 50 }
]

const MainView = props => {
  if (!props.articles) {
    return (
      <div className="cont-list">Loading...</div>
    );
  }


  return (
    // <InfiniteScroll
    // dataLength={props.articles.length}
    // hasMore={false}
    // //next={props.onLoadMore(agent.Articles.onLoadMore(2, props.from))}
    // loader={<h4>Infinite !</h4>}
    // scrollThreshold={0.8}
    // >
    <Masonry
      className={'cont-list'} // default ''
      elementType={'div'} // default 'div'
      disableImagesLoaded={false} // default false
      updateOnEachImageLoad={false} // default false and works only if disableImagesLoaded is false
    >




      {
        props.articles.map((article, index) => {
          const handleClick = ev => {
            ev.preventDefault();
            props.onClickDetail(Promise.all([agent.Articles.byTitle(article._source.product_title, article._source.vendor), agent.Articles.byTitleOnline(article._source.product_title, article._source.vendor), agent.Articles.byTitleRelated(article._source.category)]));
            window.clickBlock = false;
          };
          return (
            <Link to={''} className="img-cell" onClick={handleClick}>
              <figure>
                <img src={article._source.image} alt="" />
                <figcaption></figcaption>
              </figure>
            </Link>
          );
        })
      }

    </Masonry>
    //  </InfiniteScroll>


  );
};

export default connect(mapStateToProps, mapDispatchToProps)(MainView);
