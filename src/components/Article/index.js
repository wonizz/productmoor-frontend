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
     this.props.onLoad(Promise.all([
       agent.Articles.byTitle(this.props.params.id),
       //agent.Comments.forArticle(this.props.params.id)
     ]));

    //  this.props.onLoad(Promise.all([
    //   {article : {content1 : `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
    //   dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
    //   ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
    //   nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
    //   anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
    //   laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae
    //   dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
    //   consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem
    //   ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut
    //   labore et dolore magnam aliquam quaerat voluptatem.</p>
    // <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
    //   dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
    //   ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
    //   nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
    //   anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
    //   laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae
    //   dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
    //   consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem
    //   ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut
    //   labore et dolore magnam aliquam quaerat voluptatem.`, content2 : `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
    //   dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
    //   ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
    //   nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
    //   anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
    //   laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae
    //   dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
    //   consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem
    //   ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut
    //   labore et dolore magnam aliquam quaerat voluptatem.`, img1 : "https://image.ohou.se/image/central_crop/bucketplace-v2-development/uploads-productions-images-157526343951777345.jpg/640/640", img2 : "https://image.ohou.se/image/central_crop/bucketplace-v2-development/uploads-productions-images-157526344158315961.jpg/640/640"}}
    //   agent.Comments.forArticle(this.props.params.id)
    //]));
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
      <div className="cont-detail">
          <button type="button" className="btn-close-detail"></button>
          <div className="detail-overview">
              <div className="overview-image">
                  <button type="button" className="ov-nav prev"></button>
                  <a href="#" className="ov-link-img">
                      <img src={this.props.article.image_crawling} alt=""/>
                  </a>
                  <button type="button" className="ov-nav next"></button>
              </div>
              <div className="overview-info">
                  <div className="ov-info-head">
                      <a href="{this.props.article.url}" className="ov-link">
                          <span>{this.props.article.url}</span>
                      </a>
                      <button type="button" className="btn-ov like"></button>
                      <button type="button" className="btn-ov share"></button>
                  </div>
                  <div className="ov-info-body">
                      <dl className="info-product">
                          <dt>
                              <a href="#">
                                  <img src="../src/images/muuto-logo-png-2.png" alt=""/>
                              </a>
                          </dt>
                          <dd>{this.props.article.category} / Thomas Bentzen</dd>
                      </dl>
                      <div className="accr-product active">
                          <button type="button" className="btn-accr"></button>
                          <article className="accr-detail">
                              <h3 className="stit-accr">PRODUCT DESCRIPTIONS</h3>
                              <p className="txt-accr">{this.props.article.description}</p>
                              <ul className="spec-accr">
                                  <li>
                                      <strong>COLOR : </strong>
                                      <span>BLACK/OAK/GREY/GREEN</span>
                                  </li>
                                  <li>
                                      <strong>SIZE/VARIANT :</strong>
                                      <span>WOODEN SEAT/TEXTILE SEAT/LEATHER SEAT</span>
                                  </li>
                              </ul>
                          </article>
                      </div>
                  </div>
              </div>
          </div>
      <div className="detail-dealer">
            <h3 className="stit-detail">DEALER</h3>
            <div className="swiper-container">
                <div className="swiper-wrapper">
                    <figure className="swiper-slide slide-detail">
                        <a href="#">
                            <img src="../src/images/chair-1484853_1920.jpg" alt=""/>
                        </a>
                        <figcaption>
                            <dl className="info-deal">
                                <dt>
                                    <img src="../src/images/@img_brand_logo.png" alt=""/>
                                </dt>
                                <dd>FUNDESIGN</dd>
                                <dd>COVER SIDE CHAIR / GRAY</dd>
                                <dd>€599.00 EUR</dd>
                            </dl>
                        </figcaption>
                    </figure>
                    <figure className="swiper-slide slide-detail">
                        <a href="#">
                            <img src="../src/images/chair-1484853_1920.jpg" alt=""/>
                        </a>
                        <figcaption>
                            <dl className="info-deal">
                                <dt>
                                    <img src="../src/images/@img_brand_logo.png" alt=""/>
                                </dt>
                                <dd>FUNDESIGN</dd>
                                <dd>COVER SIDE CHAIR / GRAY</dd>
                                <dd>€599.00 EUR</dd>
                            </dl>
                        </figcaption>
                    </figure>
                    <figure className="swiper-slide slide-detail">
                        <a href="#">
                            <img src="../src/images/chair-1484853_1920.jpg" alt=""/>
                        </a>
                        <figcaption>
                            <dl className="info-deal">
                                <dt>
                                    <img src="../src/images/@img_brand_logo.png" alt=""/>
                                </dt>
                                <dd>FUNDESIGN</dd>
                                <dd>COVER SIDE CHAIR / GRAY</dd>
                                <dd>€599.00 EUR</dd>
                            </dl>
                        </figcaption>
                    </figure>
                    <figure className="swiper-slide slide-detail">
                        <a href="#">
                            <img src="../src/images/chair-1484853_1920.jpg" alt=""/>
                        </a>
                        <figcaption>
                            <dl className="info-deal">
                                <dt>
                                    <img src="../src/images/@img_brand_logo.png" alt=""/>
                                </dt>
                                <dd>FUNDESIGN</dd>
                                <dd>COVER SIDE CHAIR / GRAY</dd>
                                <dd>€599.00 EUR</dd>
                            </dl>
                        </figcaption>
                    </figure>
                    <figure className="swiper-slide slide-detail">
                        <a href="#">
                            <img src="../src/images/chair-1484853_1920.jpg" alt=""/>
                        </a>
                        <figcaption>
                            <dl className="info-deal">
                                <dt>
                                    <img src="../src/images/@img_brand_logo.png" alt=""/>
                                </dt>
                                <dd>FUNDESIGN</dd>
                                <dd>COVER SIDE CHAIR / GRAY</dd>
                                <dd>€599.00 EUR</dd>
                            </dl>
                        </figcaption>
                    </figure>
                    
                    <figure className="swiper-slide slide-detail">
                        <a href="#">
                            <img src="../src/images/chair-1484853_1920.jpg" alt=""/>
                        </a>
                        <figcaption>
                            <dl className="info-deal">
                                <dt>
                                    <img src="../src/images/@img_brand_logo.png" alt=""/>
                                </dt>
                                <dd>FUNDESIGN</dd>
                                <dd>COVER SIDE CHAIR / GRAY</dd>
                                <dd>€599.00 EUR</dd>
                            </dl>
                        </figcaption>
                    </figure>
                </div>
            </div>
        </div>
        <div className="detail-related">
            <h3 className="stit-detail">RELATED</h3>
            <div className="detail-list">
                <a href="#" className="img-cell">
                    <img src="../src/images/chair-1484853_1920.jpg" alt=""/>
                </a>
                <a href="#" className="img-cell">
                    <img src="../src/images/brick-wall-1834784_1920.jpg" alt=""/>
                </a>
                <a href="#" className="img-cell">
                    <img src="../src/images/eugene-chystiakov-3neSwyntbQ8-unsplash.jpg" alt=""/>
                </a>
                <a href="#" className="img-cell">
                    <img src="../src/images/home-820389_1920.jpg" alt=""/>
                </a>
                <a href="#" className="img-cell">
                    <img src="../src/images/kitchen-4043098_1920.jpg" alt=""/>
                </a>
                <a href="#" className="img-cell">
                    <img src="../src/images/living-room-2155376_1920.jpg" alt=""/>
                </a>
                <a href="#" className="img-cell">
                    <img src="../src/images/living-room-modern-tv-4813589_1920.jpg" alt=""/>
                </a>
                <a href="#" className="img-cell">
                    <img src="../src/images/chair-1484853_1920.jpg" alt=""/>
                </a>
            </div>
            <a href="#" className="btn-detail-more">VIEW MORE</a>
        </div>
        </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Article);
