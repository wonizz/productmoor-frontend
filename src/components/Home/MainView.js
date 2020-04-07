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
  if (props.articles.length === 0) {
    return (
      <div className="container result-nodata">
        <div className="inner">
          <p className="txt-nodata">죄송합니다.
          “{props.searchKeyword}”에 대한 검색 결과를 찾지 못했습니다.
  아래 내용 중 하나를 선택해 보시겠어요?</p>
          <div className="search-recomm">
            <ul>
              {
                props.category.category.map(category => {
                  const handleClick = ev => {
                    ev.preventDefault();
                    props.onClickCategory('', '', agent.Articles.byCategory(category));
                    props.onDetailUnLoad();
                    window.category = category;
                    window.number = 1;
                  };
                  return (
                    <li>
                      <button type="button" className="btn-search" onClick={handleClick}>{category}</button>
                    </li>
                  )
                })
              }
            </ul>
          </div>
        </div>
      </div>
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
            <Link to={''} className="img-cell" onClick={handleClick} key={index}>
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
