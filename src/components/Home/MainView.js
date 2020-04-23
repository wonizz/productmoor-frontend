import React from 'react';
import agent from '../../agent';
import { connect } from 'react-redux';
import { CHANGE_TAB } from '../../constants/actionTypes';
import Masonry from 'react-masonry-component';
import { Link } from 'react-router';


const mapStateToProps = state => ({
  ...state.articleList,
  tags: state.home.tags,
  token: state.common.token,
  from: state.articleList.from
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
  const handleImagesLoaded = () => {
    window.onloadLock = true;
  }
  if(props.articles.length !== 0){
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
      updateOnEachImageLoad={true} // default false and works only if disableImagesLoaded is false
      onLayoutComplete={handleImagesLoaded}
    >
      {
        props.articles.map((article, index) => {
          const handleClick = ev => {
            ev.preventDefault();
            props.onClickDetail(Promise.all([agent.Articles.byTitle(article._source.product_title, article._source.vendor), agent.Articles.byTitleOnline(article._source.product_title, article._source.vendor), agent.Articles.byTitleRelated(article._source.category)]));
            window.clickBlock = false;
            window.bodyScrollLock();
          };
          return (
            <Link to={''} className="img-cell" onClick={handleClick} key={index}>
              <figure>
                <img src={article._source.image.replace("https://productmoor.s3.ap-northeast-2.amazonaws.com", "http://d3bcbvlydrh318.cloudfront.net").concat("?w=300&q=80")} alt="" />
                <figcaption></figcaption>
              </figure>
            </Link>
          );
        })
      }

    </Masonry>
    //  </InfiniteScroll>
    );
  }else{
    return false;
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(MainView);
