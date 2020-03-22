import React from 'react';
import agent from '../../agent';

const Tags = props => {
  const tags = props.tags;
  if (tags) {
    return (
      <div className="tag-list">
        {
          tags.map(tag => {
            const handleClick = ev => {
              ev.preventDefault();
              props.onClickTag(tag, page => agent.Articles.byTag(tag, page), agent.Articles.byTag(tag));
            };

            return (
              <div class="cont-detail">
                  <button type="button" class="btn-close-detail"></button>
                  <div class="detail-overview">
                      <div class="overview-image">
                          <button type="button" class="ov-nav prev"></button>
                          <a href="#" class="ov-link-img">
                              <img src="../src/images/chair-1484853_1920.jpg" alt=""/>
                          </a>
                          <button type="button" class="ov-nav next"></button>
                      </div>
                      <div class="overview-info">
                          <div class="ov-info-head">
                              <a href="#" class="ov-link">
                                  <span>https://muuto.com/furniture/cover</span>
                              </a>
                              <button type="button" class="btn-ov like"></button>
                              <button type="button" class="btn-ov share"></button>
                          </div>
                          <div class="ov-info-body">
                              <dl class="info-product">
                                  <dt>
                                      <a href="#">
                                          <img src="../src/images/muuto-logo-png-2.png" alt=""/>
                                      </a>
                                  </dt>
                                  <dd>COVER SIDE CHAIR / Thomas Bentzen</dd>
                              </dl>
                              <div class="accr-product active">
                                  <button type="button" class="btn-accr"></button>
                                  <article class="accr-detail">
                                      <h3 class="stit-accr">PRODUCT DESCRIPTIONS</h3>
                                      <p class="txt-accr">Referencing the values of forward-thinking craftsmanship and Scandinavian materiality, 
                                      the Cover Side Chair is an elegant perspective on the timeless wooden chair.</p>
                                      <ul class="spec-accr">
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
          })
        }
      </div>
    );
  } else {
    return (
      <div></div>
    );
  }
};

export default Tags;
