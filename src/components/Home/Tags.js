import React from 'react';
import agent from '../../agent';

const Tags = ({detail}) => {
  if (detail) {
    return (
        <div className="cont-detail">
        <button type="button" className="btn-close-detail"></button>
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
                    <a href="#" className="ov-link">
                        <span>https://muuto.com/furniture/cover</span>
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
                        <dd>COVER SIDE CHAIR / Thomas Bentzen</dd>
                    </dl>
                    <div className="accr-product active">
                        <button type="button" className="btn-accr"></button>
                        <article className="accr-detail">
                            <h3 className="stit-accr">PRODUCT DESCRIPTIONS</h3>
                            <p className="txt-accr">Referencing the values of forward-thinking craftsmanship and Scandinavian materiality, 
                            the Cover Side Chair is an elegant perspective on the timeless wooden chair.</p>
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
    <div classNameName="detail-dealer">
          <h3 classNameName="stit-detail">DEALER</h3>
          <div classNameName="swiper-container">
              <div classNameName="swiper-wrapper">
                  <figure classNameName="swiper-slide slide-detail">
                      <a href="#">
                          <img src="../src/images/chair-1484853_1920.jpg" alt=""/>
                      </a>
                      <figcaption>
                          <dl classNameName="info-deal">
                              <dt>
                                  <img src="../src/images/@img_brand_logo.png" alt=""/>
                              </dt>
                              <dd>FUNDESIGN</dd>
                              <dd>COVER SIDE CHAIR / GRAY</dd>
                              <dd>€599.00 EUR</dd>
                          </dl>
                      </figcaption>
                  </figure>
                  <figure classNameName="swiper-slide slide-detail">
                      <a href="#">
                          <img src="../src/images/chair-1484853_1920.jpg" alt=""/>
                      </a>
                      <figcaption>
                          <dl classNameName="info-deal">
                              <dt>
                                  <img src="../src/images/@img_brand_logo.png" alt=""/>
                              </dt>
                              <dd>FUNDESIGN</dd>
                              <dd>COVER SIDE CHAIR / GRAY</dd>
                              <dd>€599.00 EUR</dd>
                          </dl>
                      </figcaption>
                  </figure>
                  <figure classNameName="swiper-slide slide-detail">
                      <a href="#">
                          <img src="../src/images/chair-1484853_1920.jpg" alt=""/>
                      </a>
                      <figcaption>
                          <dl classNameName="info-deal">
                              <dt>
                                  <img src="../src/images/@img_brand_logo.png" alt=""/>
                              </dt>
                              <dd>FUNDESIGN</dd>
                              <dd>COVER SIDE CHAIR / GRAY</dd>
                              <dd>€599.00 EUR</dd>
                          </dl>
                      </figcaption>
                  </figure>
                  <figure classNameName="swiper-slide slide-detail">
                      <a href="#">
                          <img src="../src/images/chair-1484853_1920.jpg" alt=""/>
                      </a>
                      <figcaption>
                          <dl classNameName="info-deal">
                              <dt>
                                  <img src="../src/images/@img_brand_logo.png" alt=""/>
                              </dt>
                              <dd>FUNDESIGN</dd>
                              <dd>COVER SIDE CHAIR / GRAY</dd>
                              <dd>€599.00 EUR</dd>
                          </dl>
                      </figcaption>
                  </figure>
                  <figure classNameName="swiper-slide slide-detail">
                      <a href="#">
                          <img src="../src/images/chair-1484853_1920.jpg" alt=""/>
                      </a>
                      <figcaption>
                          <dl classNameName="info-deal">
                              <dt>
                                  <img src="../src/images/@img_brand_logo.png" alt=""/>
                              </dt>
                              <dd>FUNDESIGN</dd>
                              <dd>COVER SIDE CHAIR / GRAY</dd>
                              <dd>€599.00 EUR</dd>
                          </dl>
                      </figcaption>
                  </figure>
                  
                  <figure classNameName="swiper-slide slide-detail">
                      <a href="#">
                          <img src="../src/images/chair-1484853_1920.jpg" alt=""/>
                      </a>
                      <figcaption>
                          <dl classNameName="info-deal">
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
      <div classNameName="detail-related">
          <h3 classNameName="stit-detail">RELATED</h3>
          <div classNameName="detail-list">
              <a href="#" classNameName="img-cell">
                  <img src="../src/images/chair-1484853_1920.jpg" alt=""/>
              </a>
              <a href="#" classNameName="img-cell">
                  <img src="../src/images/brick-wall-1834784_1920.jpg" alt=""/>
              </a>
              <a href="#" classNameName="img-cell">
                  <img src="../src/images/eugene-chystiakov-3neSwyntbQ8-unsplash.jpg" alt=""/>
              </a>
              <a href="#" classNameName="img-cell">
                  <img src="../src/images/home-820389_1920.jpg" alt=""/>
              </a>
              <a href="#" classNameName="img-cell">
                  <img src="../src/images/kitchen-4043098_1920.jpg" alt=""/>
              </a>
              <a href="#" classNameName="img-cell">
                  <img src="../src/images/living-room-2155376_1920.jpg" alt=""/>
              </a>
              <a href="#" classNameName="img-cell">
                  <img src="../src/images/living-room-modern-tv-4813589_1920.jpg" alt=""/>
              </a>
              <a href="#" classNameName="img-cell">
                  <img src="../src/images/chair-1484853_1920.jpg" alt=""/>
              </a>
          </div>
          <a href="#" classNameName="btn-detail-more">VIEW MORE</a>
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
