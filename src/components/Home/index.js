import Banner from './Banner';
import MainView from './MainView';
import React from 'react';
import Tags from './Tags';
import agent from '../../agent';
import { connect } from 'react-redux';
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
  onClickTag: (tag, pager, payload) =>
    dispatch({ type: APPLY_TAG_FILTER, tag, pager, payload }),
  onLoad: (tab, pager, payload) =>
    dispatch({ type: HOME_PAGE_LOADED, tab, pager, payload }),
  onUnload: () =>
    dispatch({  type: HOME_PAGE_UNLOADED })
});

class Home extends React.Component {
  componentWillMount() {
    const tab = this.props.token ? 'feed' : 'all';
    const articlesPromise = this.props.token ?
      agent.Articles.feed :
      agent.Articles.all;

    //this.props.onLoad(tab, articlesPromise, Promise.all([agent.Tags.getAll(), articlesPromise()]));
    this.props.onLoad(tab, articlesPromise, Promise.all([agent.Tags.getAll(), {articles : [{img : "https://image.ohou.se/image/central_crop/bucketplace-v2-development/uploads-productions-156392658587651995.jpg/640/640", title : "title_title", description : "test1", url : "charming", slug : 1}, {img : "https://image.ohou.se/image/central_crop/bucketplace-v2-development/uploads-productions-157526343486057882.jpg/640/640", title : "title_title", description : "test1", url : "charming", slug : 2}, {img : "https://image.ohou.se/image/central_crop/bucketplace-v2-development/uploads-productions-156810630190991171.jpg/640/640", title : "title_title", description : "test1", url : "charming", slug : 3}, {img : "https://image.ohou.se/image/central_crop/bucketplace-v2-development/uploads-productions-157310884493604208.jpg/640/640", title : "title_title", description : "test1", url : "charming", slug : 4}, {img : "https://image.ohou.se/image/central_crop/bucketplace-v2-development/uploads-productions-157362217158948417.jpg/640/640", title : "title_title", description : "test1", url : "charming", slug : 5}]}]));
  }

  componentWillUnmount() {
    this.props.onUnload();
  }

  render() {
    return (
      <div className="container">
            <div className="inner"></div>
              <div className="head-cont">
                <Banner token={this.props.token} appName={this.props.appName} />
              </div>
            
              <div className="body-cont">
                
                  <MainView />

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
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
