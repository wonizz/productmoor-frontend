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
  APPLY_TAG_FILTER
} from '../../constants/actionTypes';
import Footer from '../Footer';

const mapStateToProps = state => ({
  ...state.home,
  appName: state.common.appName,
  token: state.common.token
});



const mapDispatchToProps = dispatch => ({
  onClickDetail: (tag, pager, payload) =>
    dispatch({ type: APPLY_TAG_FILTER, tag, pager, payload }),
  onLoad: (tab, pager, payload) =>
    dispatch({ type: HOME_PAGE_LOADED, tab, pager, payload }),
  onUnload: () =>
    dispatch({  type: HOME_PAGE_UNLOADED })
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
    this.props.onLoad(tab, articlesPromise, Promise.all([agent.Tags.getAll(), articlesPromise()]));    
  }

  componentWillUnmount() {
    this.props.onUnload();
  }

  componentDidMount() {
    //this.$el = $(this.el);
    console.log('didmount')
  }

  componentDidUpdate() {
    //this.$el = $(this.el);
    console.log('didupdate')
  }

  render() {
    return (
      <div className="container">
            <div className="inner">
              <div className="head-cont">
                <Banner token={this.props.token} appName={this.props.appName} />
              </div>
            
              <div className="body-cont">
                  
                  <MainView
                  onClickDetail={this.props.onClickDetail}
                  />
                  <Tags />
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
