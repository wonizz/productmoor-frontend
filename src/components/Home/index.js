import Banner from './Banner';
import MainView from './MainView';
import React from 'react';
import Tags from './Tags';
import agent from '../../agent';
import { connect } from 'react-redux';
import Masonry from 'react-masonry-component';

import {
  HOME_PAGE_LOADED,
  HOME_PAGE_UNLOADED,
  APPLY_TAG_FILTER,
  ARTICLE_PAGE_LOADED,
  ARTICLE_PAGE_UNLOADED,
  HOME_PAGE_LOADED_MORE
} from '../../constants/actionTypes';
import Footer from '../Footer';

const mapStateToProps = state => ({
  ...state.article,
  appName: state.common.appName,
  token: state.common.token,
  category: state.common.category
});



const mapDispatchToProps = dispatch => ({
  onDetailLoad: (payload) =>
    dispatch({ type: ARTICLE_PAGE_LOADED, payload }),
  onDetailUnLoad: () =>
    dispatch({ type: ARTICLE_PAGE_UNLOADED }),
  onLoadMore: (payload) =>
    dispatch({ type: HOME_PAGE_LOADED_MORE, payload }),
  onLoad: (tab, pager, payload) =>
    dispatch({ type: HOME_PAGE_LOADED, tab, pager, payload }),
  onUnload: () =>
    dispatch({ type: HOME_PAGE_UNLOADED })
});
const masonryOptions = {
  transitionDuration: 0
};
const imagesLoadedOptions = { background: '.my-bg-image-el' }
class Home extends React.Component {
  componentWillMount() {
    const tab = this.props.token ? 'feed' : 'all';
    const articlesPromise = this.props.token ?
      agent.Articles.feed :
      agent.Articles.all;
    this.props.onLoad(tab, articlesPromise, Promise.all([articlesPromise()]));
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
    window.goTop();
    window.slickDetail();
    console.log('didupdate')
  }

  render() {
    return (
      <div className="container">
        <div className="inner">
          <div className="head-cont">
            <Banner onDetailUnLoad={this.props.onDetailUnLoad} onClickCategory={this.props.onLoad} category={this.props.category} appName={this.props.appName} />
          </div>

          <div className={"body-cont " + (this.props.detail ? 'show-detail' : '')}>

            <MainView
              onClickDetail={this.props.onDetailLoad}
              onLoadMore={this.props.onLoadMore}
            />
            <Tags 
              onClickDetail={this.props.onDetailLoad}
              onDetailUnLoad={this.props.onDetailUnLoad} 
              detail={this.props.detail} 
              online={this.props.online} 
              related={this.props.related} 
            />
            {/* <div classNameName="col-md-3">
                      <div classNameName="sidebar">

                        <p>Popular Tags</p>

                        <Tags
                          tags={this.props.tags}
                          onClickTag={this.props.onClickTag} />

                      </div>
                    </div> */}

          </div>
        </div>
      </div>
    );
  }

}



export default connect(mapStateToProps, mapDispatchToProps)(Home);
