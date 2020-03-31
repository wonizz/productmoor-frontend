import React from 'react';
import agent from '../../agent';
import Masonry from 'react-masonry-component';

const Tags = ({relatedFrom, detail, online, related, onDetailUnLoad, onClickDetail, onRelatedLoadMore}) => {
  if (detail) {
    let logo = "https://productmoor.s3.ap-northeast-2.amazonaws.com/image/logo/logo_brand_" + detail.vendor + ".png";
    let category = detail.category;
    var clickBlock = false;
    const clickHandler = ev => {
        ev.preventDefault();
        onDetailUnLoad();
        window.clickBlock = false;
    };
    const handleClickRelatedMore = ev => {
        ev.preventDefault();
        onRelatedLoadMore(agent.Articles.byTitleRelatedMore(category, relatedFrom));
        window.clickBlock = true;
    };
    return (
        <div className="cont-detail">
        <button type="button" className="btn-close-detail" onClick={clickHandler}></button>
        <div className="detail-overview">
            <div className="overview-image">
                <button type="button" className="ov-nav prev"></button>
                <a href="#" className="ov-link-img">
                    <img src={`${detail.image}`} alt={`${detail.product_title}`}/>
                </a>
                <button type="button" className="ov-nav next"></button>
            </div>
            <div className="overview-info">
                <div className="ov-info-head">
                    <a href={`${detail.url}`} className="ov-link" target="_blank">
                        <span>{detail.url}</span>
                    </a>
                    <button type="button" className="btn-ov like"></button>
                    <button type="button" className="btn-ov share"></button>
                </div>
                <div className="ov-info-body">
                    <dl className="info-product">
                        <dt>
                            <a href="#">
                                <img src={logo} alt=""/>
                            </a>
                        </dt>
                        <dd>{detail.product_title}</dd>
                    </dl>
                    <div className="accr-product active">
                        <button type="button" className="btn-accr"></button>
                        <article className="accr-detail">
                            <h3 className="stit-accr">PRODUCT DESCRIPTIONS</h3>
                            <p className="txt-accr">{detail.description}</p>
                            
                            <ul className="spec-accr">
                                {
                                    `${detail.material}` != ""
                                    ?(
                                        <li>
                                            <strong>Material</strong>
                                            <span>{detail.material}</span>
                                        </li>    
                                    )
                                    :('')                                     
                                }
                                {
                                    `${detail.dimensions}` != ""
                                    ?(
                                        <li>
                                            <strong>Dimension</strong>
                                            <span>{detail.dimensions}</span>
                                        </li>   
                                    )
                                    :('')
                                } 
                            </ul>
                            
                        </article>
                    </div>
                </div>
            </div>
        </div>
    <div className="detail-dealer">
          <h3 className="stit-detail">Online Shop</h3>
          <div className="swiper-container">
              <div className="swiper-wrapper">
                    {
                        online.map((online_detail, index) => {
                        let online_detail_info = online_detail._source;
                        let shop_logo = "https://productmoor.s3.ap-northeast-2.amazonaws.com/image/logo/logo_shop_" + online_detail_info.shop + ".png"
                        return (
                            <figure className="swiper-slide slide-detail">
                            <a href={`/forwarding.html?redirect=${online_detail_info.url}`} target="_blank">
                                <img src={online_detail_info.image} alt={`${online_detail_info.title}`}/>
                            </a>
                                <figcaption>
                                    <dl className="info-deal">
                                        <dt>
                                            <img src={shop_logo} alt={`${online_detail_info.shop}`}/>
                                        </dt>
                                        <dd>{online_detail_info.shop}</dd>
                                        <dd>{online_detail_info.title}</dd>
                                        <dd>{online_detail_info.price} {online_detail_info.currencyunit}</dd>
                                    </dl>
                                </figcaption>
                            </figure>
                            )
                        })
                    }
                    
              </div>
          </div>
      </div>
      <div className="detail-related">
          <h3 className="stit-detail">Related</h3>
          <Masonry
            className={'detail-list'} // default ''
            elementType={'div'} // default 'div'
            disableImagesLoaded={false} // default false
            updateOnEachImageLoad={false} // default false and works only if disableImagesLoaded is false
           >
                    {
                        related.map((related_detail, index) => {
                        let related_detail_info = related_detail._source;
                        const handleClick = ev => {
                            ev.preventDefault();
                            onClickDetail(Promise.all([agent.Articles.byTitle(related_detail_info.product_title, related_detail_info.vendor), agent.Articles.byTitleOnline(related_detail_info.product_title, related_detail_info.vendor), agent.Articles.byTitleRelated(related_detail_info.category)]));
                            window.clickBlock = false;
                        };
                            return (
                                <a href="#" className="img-cell" onClick={handleClick}>
                                    <img src={related_detail_info.image} alt=""/>
                                </a>
                            )
                        })
                    }
          </Masonry>
          <a href="#" className="btn-detail-more" onClick={handleClickRelatedMore}>View More</a>
      </div>
      </div>
    );
  } else {
    return (
      <div></div>
    );
  }
};

export default Tags;
