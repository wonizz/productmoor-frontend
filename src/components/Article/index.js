import ArticleMeta from './ArticleMeta';
import CommentContainer from './CommentContainer';
import React from 'react';
import agent from '../../agent';
import { connect } from 'react-redux';
import marked from 'marked';
import { ARTICLE_PAGE_LOADED, ARTICLE_PAGE_UNLOADED } from '../../constants/actionTypes';

const mapStateToProps = state => ({
  ...state.article,
  currentUser: state.common.currentUser
});

const mapDispatchToProps = dispatch => ({
  onLoad: payload =>
    dispatch({ type: ARTICLE_PAGE_LOADED, payload }),
  onUnload: () =>
    dispatch({ type: ARTICLE_PAGE_UNLOADED })
});

class Article extends React.Component {
  componentWillMount() {
    // this.props.onLoad(Promise.all([
    //   agent.Articles.get(this.props.params.id),
    //   agent.Comments.forArticle(this.props.params.id)
    // ]));

     this.props.onLoad(Promise.all([
      {article : {content1 : `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
      dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
      ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
      nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
      anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
      laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae
      dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
      consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem
      ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut
      labore et dolore magnam aliquam quaerat voluptatem.</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
      dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
      ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
      nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
      anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
      laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae
      dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
      consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem
      ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut
      labore et dolore magnam aliquam quaerat voluptatem.`, content2 : `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
      dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
      ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
      nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
      anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
      laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae
      dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
      consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem
      ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut
      labore et dolore magnam aliquam quaerat voluptatem.`, img1 : "https://image.ohou.se/image/central_crop/bucketplace-v2-development/uploads-productions-images-157526343951777345.jpg/640/640", img2 : "https://image.ohou.se/image/central_crop/bucketplace-v2-development/uploads-productions-images-157526344158315961.jpg/640/640"}}
    //   agent.Comments.forArticle(this.props.params.id)
     ]));
  }

  componentWillUnmount() {
    this.props.onUnload();
  }

  render() {
    if (!this.props.article) {
      return null;
    }

    //const markup = { __html: marked(this.props.article.body, { sanitize: true }) };
    //const canModify = this.props.currentUser && this.props.currentUser.username === this.props.article.author.username;
    return (
      <div className="article-page">
        <section className="section bg-secondary">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <h4>As a Designer, I Refuse to Call People ‘Users’</h4>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="container">
            <div className="row">
              <div className="col-lg-8">
                <ul className="list-inline d-flex justify-content-between py-3">
                  <li className="list-inline-item"><i className="ti-user mr-2"></i>Post by Jhon Abraham</li>
                  <li className="list-inline-item"><i className="ti-calendar mr-2"></i>June 2, 2018</li>
                </ul>
                <img src={this.props.article.img1} alt="post-thumb" className="w-100 img-fluid mb-4"></img>
                <div className="content">
                  <p>{this.props.article.content1}</p>
                <img src={this.props.article.img2} alt="image" className="img-fluid"></img>
                  <p>{this.props.article.content2}</p>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="widget">
                  <h6 className="mb-4">TAG</h6>
                  <ul className="list-inline tag-list">
                    <li className="list-inline-item m-1"><a href="blog-single.html">ui ux</a></li>
                    <li className="list-inline-item m-1"><a href="blog-single.html">developmetns</a></li>
                    <li className="list-inline-item m-1"><a href="blog-single.html">travel</a></li>
                    <li className="list-inline-item m-1"><a href="blog-single.html">article</a></li>
                    <li className="list-inline-item m-1"><a href="blog-single.html">travel</a></li>
                    <li className="list-inline-item m-1"><a href="blog-single.html">ui ux</a></li>
                    <li className="list-inline-item m-1"><a href="blog-single.html">article</a></li>
                    <li className="list-inline-item m-1"><a href="blog-single.html">developmetns</a></li>
                  </ul>
                </div>
                <div className="widget">
                  <h6 className="mb-4">CATEGORIES</h6>
                  <ul className="list-inline tag-list">
                    <li className="list-inline-item m-1"><a href="blog-single.html">ui ux</a></li>
                    <li className="list-inline-item m-1"><a href="blog-single.html">developmetns</a></li>
                    <li className="list-inline-item m-1"><a href="blog-single.html">travel</a></li>
                    <li className="list-inline-item m-1"><a href="blog-single.html">article</a></li>
                    <li className="list-inline-item m-1"><a href="blog-single.html">travel</a></li>
                    <li className="list-inline-item m-1"><a href="blog-single.html">ui ux</a></li>
                    <li className="list-inline-item m-1"><a href="blog-single.html">article</a></li>
                    <li className="list-inline-item m-1"><a href="blog-single.html">developmetns</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Article);
