import React from 'react';
import agent from '../../agent';

const Tags = ({detail, online, related, onDetailUnLoad, onClickDetail}) => {
  if (detail) {
    let logo = "https://productmoor.s3.ap-northeast-2.amazonaws.com/image/logo/logo_brand_" + detail.vendor + ".png"
    const clickHandler = ev => {
        ev.preventDefault();
        onDetailUnLoad();
    };
    return (
        <div className="cont-detail">
        <button type="button" className="btn-close-detail" onClick={clickHandler}></button>
        <div className="detail-overview">
            <div className="overview-image">
                <button type="button" className="ov-nav prev"></button>
                <a href="#" className="ov-link-img">
                    <img src={detail.image_crawling} alt=""/>
                </a>
                <button type="button" className="ov-nav next"></button>
            </div>
            <div className="overview-info">
                <div className="ov-info-head">
                    <a href={detail.url} className="ov-link">
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
                        <dd>COVER SIDE CHAIR / Thomas Bentzen</dd>
                    </dl>
                    <div className="accr-product active">
                        <button type="button" className="btn-accr"></button>
                        <article className="accr-detail">
                            <h3 className="stit-accr">PRODUCT DESCRIPTIONS</h3>
                            <p className="txt-accr">{detail.description}</p>
                            
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
                    {
                        online.map((online_detail, index) => {
                        let online_detail_info = online_detail._source;
                        let shop_logo = "https://productmoor.s3.ap-northeast-2.amazonaws.com/image/logo/logo_shop_" + online_detail_info.shop + ".png"
                        return (
                            <figure className="swiper-slide slide-detail">
                            <a href="#">
                                <img src={online_detail_info.image_crawling} alt=""/>
                            </a>
                                <figcaption>
                                    <dl className="info-deal">
                                        <dt>
                                            <img src={shop_logo} alt=""/>
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
          <h3 className="stit-detail">RELATED</h3>
          <div className="detail-list">
                    {
                        related.map((related_detail, index) => {
                        let related_detail_info = related_detail._source;
                        const handleClick = ev => {
                            ev.preventDefault();
                            onClickDetail(Promise.all([agent.Articles.byTitle(related_detail_info.product_title), agent.Articles.byTitleOnline(related_detail_info.product_title), agent.Articles.byTitleRelated(related_detail_info.category)]));
                        };
                            return (
                                <a href="#" className="img-cell" onClick={handleClick}>
                                    <img src={related_detail_info.image_crawling} alt=""/>
                                </a>
                            )
                        })
                    }
                
          </div>
          <a href="#" className="btn-detail-more">VIEW MORE</a>
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
