import Gnb from './Gnb';
import MainView from './MainView';
import Detail from './Detail';
import Privacy from './Privacy';
import NoResult from './NoResult';
import React from 'react';
import agent from '../../agent';
import { connect } from 'react-redux';


import {
  HOME_PAGE_LOADED,
  HOME_PAGE_UNLOADED,
  ARTICLE_PAGE_LOADED,
  ARTICLE_PAGE_UNLOADED,
  ARTICLE_PAGE_LOADED_MORE,
  HOME_PAGE_LOADED_MORE
} from '../../constants/actionTypes';


const mapStateToProps = state => ({
  ...state.article,
  articleList: state.articleList,
  appName: state.common.appName,
  token: state.common.token,
  category: state.common.category,
  from: state.articleList.from,
  searchKeyword: state.articleList.searchKeyword
});



const mapDispatchToProps = dispatch => ({
  onDetailLoad: (payload) =>
    dispatch({ type: ARTICLE_PAGE_LOADED, payload }),
  onRelatedLoadMore: (payload) =>
    dispatch({ type: ARTICLE_PAGE_LOADED_MORE, payload }),
  onPrivacyTermsLoad: (pageName, payload) =>
    dispatch({ type: HOME_PAGE_LOADED, pageName, payload }),
  onDetailUnLoad: () =>
    dispatch({ type: ARTICLE_PAGE_UNLOADED }),
  onLoadMore: (payload, searchKeyword) =>
    dispatch({ type: HOME_PAGE_LOADED_MORE, payload, searchKeyword }),
  onLoad: (tab, pager, payload) =>
    dispatch({ type: HOME_PAGE_LOADED, tab, pager, payload }),
  onUnload: () =>
    dispatch({ type: HOME_PAGE_UNLOADED })
});

class Home extends React.Component {
  componentWillMount() {
    const tab = this.props.token ? 'feed' : 'all';
    const articlesPromise = this.props.token ?
      agent.Articles.feed :
      agent.Articles.all;
    window.number = 1;
    const handleScroll = () => {
      const { innerHeight } = window;
      const { scrollHeight } = document.body;

      /*
        1. Privacy & temrs 컴포넌트에서는 scroll 사용 안함.
        2. no search result page 에서는 scroll 사용 안함.
      */
      if ("terms".indexOf(this.props.articleList.pageName) !== -1 || this.props.articleList.articles.length === 0) {
        return false;
      }
      
      // IE에서는 document.documentElement 를 사용.
      const scrollTop =
        (document.documentElement && document.documentElement.scrollTop) ||
        document.body.scrollTop;
      // 스크롤링 했을때, 브라우저의 가장 밑에서 100정도 높이가 남았을때에 실행하기위함.
      if (scrollHeight - innerHeight - scrollTop < 100 && window.onloadLock) {
        window.clickBlock = true;
        window.onloadLock = false;
        window.number += 1;
        //window.category == undefined ? this.props.onLoadMore(agent.Articles.onLoadMore(30, (window.number-1)*30)) : this.props.onLoadMore(agent.Articles.onLoadMoreByCategory(30, (window.number-1)*30, window.category))
        /*1. category 정보가 없는 경우
          1-1. searchKeyword 정보가 없으면, 일반 loadmore
          1-2. searchKeyword 정보가 있으면, bysearchKeyword loadmore
        */
        if (window.category === undefined) {
          if (this.props.searchKeyword === undefined) {
            this.props.onLoadMore(agent.Articles.onLoadMore(30, window.number))
          } else {
            this.props.onLoadMore(agent.Articles.onLoadbySearchKeword(30, window.number, this.props.searchKeyword), this.props.searchKeyword)
          }
        } else {
          this.props.onLoadMore(agent.Articles.onLoadMoreByCategory(30, window.number, window.category))
        }
      }
    };
    //console.log(articlesPromise())
    this.props.onLoad(tab, articlesPromise, articlesPromise());
    window.addEventListener('scroll', handleScroll, true);
  }

  componentWillUnmount() {
    this.props.onUnload();
  }

  componentDidMount() {
    //this.$el = $(this.el);
    //window.masonry();
    console.log('didmount')
  }

  componentDidUpdate() {
    //this.$el = $(this.el)
    //setTimeout(function() { window.masonry(); }, 300);
    window.searchAction();
    window.activeMenu();
    window.goTop();
    window.slickFilter();
    window.slickDetail();
    console.log('didupdate')
  }

  render() {
    const clickHandler = ev => {
      ev.preventDefault();
      this.props.onLoadMore(agent.Articles.onLoadMore(30, window.number))
    };
    if (!this.props.articleList.articles) {
      return (
        <div></div>
      );
    }
    return (
      <div className="container">
        <div className="inner">
          {
            this.props.articleList.articles.length !== 0 ?
              (<div className="head-cont">
                <Gnb
                  onDetailUnLoad={this.props.onDetailUnLoad}
                  onClickCategory={this.props.onLoad}
                  category={this.props.category}
                  appName={this.props.appName} />
              </div>
              )
              : ("")
          }
          {
            this.props.searchKeyword !== undefined && this.props.articleList.articles.length !== 0 ?
              (<div className="box-addons">
                <span className="addon related addon-keyword">
                  <span className="txt-addon">
                    <em>{this.props.searchKeyword}</em>
                    <button type="button" className="btn-del" onClick={clickHandler}></button>
                  </span>
                </span>
              </div>)
              : ("")
          }

          <div className={"body-cont " + (this.props.detail ? 'show-detail' : '')}>

            <MainView
              onClickDetail={this.props.onDetailLoad}
              onLoadMore={this.props.onLoadMore}
              category={this.props.category}
              onDetailUnLoad={this.props.onDetailUnLoad}
              onClickCategory={this.props.onLoad}
            />
            <Detail
              onClickDetail={this.props.onDetailLoad}
              onDetailUnLoad={this.props.onDetailUnLoad}
              onRelatedLoadMore={this.props.onRelatedLoadMore}
              detail={this.props.detail}
              online={this.props.online}
              related={this.props.related}
              relatedFrom={this.props.from}
            />
            <Privacy
              pageName={this.props.articleList.pageName}
              onPrivacyTermsLoad={this.props.onPrivacyTermsLoad}
            />
            <NoResult
              pageName={this.props.articleList.pageName}  
              category={this.props.category}
              onDetailUnLoad={this.props.onDetailUnLoad}
              onClickCategory={this.props.onLoad}
              articleLength={this.props.articleList.articles.length}
              searchKeyword={this.props.searchKeyword}
            />
            

          </div>
        </div>
      </div>
    );
  }

}



export default connect(mapStateToProps, mapDispatchToProps)(Home);
