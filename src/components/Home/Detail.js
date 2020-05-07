import React from 'react';
import agent from '../../agent';
import Masonry from 'react-masonry-component';
import { Link } from 'react-router-dom';

const Detail = ({ relatedFrom, detail, online, related, onDetailUnLoad, onClickDetail, onRelatedLoadMore }) => {
    if (detail) {
        let logo = "https://productmoor.s3.ap-northeast-2.amazonaws.com/image/logo/logo_brand_" + detail.vendor + ".png";
        window.category = undefined;
        window.clickBlock = false;
        const clickHandler = ev => {
            //ev.preventDefault();
            if (ev.target !== ev.currentTarget) return;
            onDetailUnLoad();
            window.clickBlock = false;
            window.bodyScrollUnlock();
        };
        /*const handleClickRelatedMore = ev => {
            ev.preventDefault();
            onRelatedLoadMore(agent.Articles.byTitleRelatedMore(category, relatedFrom));
            window.clickBlock = true;
        };*/
        return (
            <div className="cont-detail" onClick={clickHandler}>
                <div className="detail-inner">
                    <button type="button" className="btn-close-detail" onClick={clickHandler}></button>
                    <div className="detail-overview">
                        <div className="overview-image">
                            <button type="button" className="ov-nav prev"></button>
                            <Link to="/#" className="ov-link-img">
                                <img src={`${"https://www.productmoor.com/image/brandshop/" + detail.image + "?w=500&q=80"}`} alt={`${detail.product_title}`} />
                            </Link>
                            <button type="button" className="ov-nav next"></button>
                        </div>
                        <div className="overview-info">
                            <div className="ov-info-head">
                                <Link to={`${detail.url}`} className="ov-link" target="_blank" rel="noopener noreferrer">
                                    <span>{detail.url}</span>
                                </Link>
                                <button type="button" className="btn-ov like"></button>
                                <button type="button" className="btn-ov share"></button>
                            </div>
                            <div className="ov-info-body">
                                <dl className="info-product">
                                    <dt>
                                        <a href="/#">
                                            <img src={logo} alt="" />
                                        </a>
                                    </dt>
                                    <dd>{detail.product_title}</dd>
                                </dl>
                                <div className="accr-product active">
                                    {/*<button type="button" className="btn-accr"></button>*/}
                                    <article className="accr-detail">
                                        <h3 className="stit-accr">PRODUCT DESCRIPTIONS</h3>
                                        <p className="txt-accr">{detail.description}</p>

                                        <ul className="spec-accr">
                                            {
                                                `${detail.material}` !== ""
                                                    ? (
                                                        <li>
                                                            <strong>Material</strong>
                                                            <span>{detail.material}</span>
                                                        </li>
                                                    )
                                                    : ('')
                                            }
                                            {
                                                `${detail.dimensions}` !== "" && `${detail.dimensions_crawling}` === ""
                                                    ? (
                                                        <li>
                                                            <strong>Dimension</strong>
                                                            <span>{detail.dimensions}</span>
                                                        </li>
                                                    )
                                                    : ('')
                                            }
                                            {
                                                `${detail.dimensions}` !== "" && `${detail.dimensions_crawling}` !== ""
                                                    ? (
                                                        <li>
                                                            <strong>Dimension</strong>
                                                            <img src={`${"https://www.productmoor.com/image/brandshop/" + detail.dimensions}`} alt={`${detail.product_title}`} />
                                                        </li>
                                                    )
                                                    : ('')
                                            }
                                        </ul>

                                    </article>
                                </div>
                            </div>
                        </div>
                    </div>
                    {
                        `${online}` !== ""
                            ? (

                                <div className="detail-dealer">
                                    <h3 className="stit-detail">Online Shop</h3>
                                    <div className="swiper-container">
                                        <div className="swiper-wrapper">
                                            {
                                                online.map((online_detail, index) => {
                                                    let online_detail_info = online_detail._source;
                                                    let shop_logo = "https://productmoor.s3.ap-northeast-2.amazonaws.com/image/logo/logo_shop_" + online_detail_info.shop + ".png"
                                                    return (
                                                        <figure className="swiper-slide slide-detail" key={index}>
                                                            <Link to={`/forwarding.html?redirect=${online_detail_info.url}`} target="_blank" rel="noopener noreferrer">
                                                            <img src={"https://www.productmoor.com/image/onlineshop/" + online_detail_info.image} alt={`${online_detail_info.title}`} />
                                                            </Link>
                                                            <figcaption>
                                                                <dl className="info-deal">
                                                                    <dt>
                                                                        <img src={shop_logo} alt={`${online_detail_info.shop}`} />
                                                                    </dt>
                                                                    <dd>{online_detail_info.brand}</dd>
                                                                    <dd>{online_detail_info.title}</dd>
                                                                    <dd>{online_detail_info.price} {online_detail_info.currencyunit}</dd>
                                                                </dl>
                                                            </figcaption>
                                                        </figure>
                                                    )
                                                })
                                            }

                                        </div>
                                        <div className="progress" role="progressbar" aria-valuemin="0" aria-valuemax="100">
                                            <span className="slider__label sr-only" />
                                        </div>
                                    </div>
                                </div>
                            )
                            : (
                                <div className="detail-dealer"></div>
                            )
                    }
                    <div className="detail-related">
                        <h3 className="stit-detail">Related</h3>
                        <Masonry
                            className={'detail-list'} // default ''
                            elementType={'div'} // default 'div'
                            disableImagesLoaded={false} // default false
                            updateOnEachImageLoad={true} // default false and works only if disableImagesLoaded is false
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
                                        <Link to="/#" className="img-cell" onClick={handleClick} key={index}>
                                        <img src={"https://www.productmoor.com/image/brandshop/" + related_detail_info.image + "?w=300&q=80"} alt="" />
                                        </Link>
                                    )
                                })
                            }
                        </Masonry>
                        {/*<a href="#" className="btn-detail-more" onClick={handleClickRelatedMore}>View More</a>*/}
                    </div>
                </div>
            </div>
        );
    } else {
        return (
            <div></div>
        );
    }
};

export default Detail;
