import React from 'react';

const Banner = ({ appName, token }) => {
  if (token) {
    return null;
  }
  return (
    <section>
      <div className="container-fluid p-sm-0">
        <div className="row featured-post-slider">
          <div className="col-lg-3 col-sm-6 mb-2 mb-lg-0 px-1">
            <article className="card bg-dark text-center text-white border-0 rounded-0">
              <img className="card-img rounded-0 img-fluid w-100" src="https://image.ohou.se/image/central_crop/bucketplace-v2-development/uploads-productions-1550049165017_eRupO.jpg/720/720" alt="post-thumb"></img>
              <div className="card-img-overlay">
                <div className="card-content">
                  <p className="text-uppercase">LifeStyle</p>
                  <h4 className="card-title mb-4"><a className="text-white" href="blog-single.html">Organize Your Life With 10
                      Simple rule</a></h4>
                  <a className="btn btn-outline-light" href="blog-single.html">read more</a>
                </div>
              </div>
            </article>
          </div>
          <div className="col-lg-3 col-sm-6 mb-2 mb-lg-0 px-1">
            <article className="card bg-dark text-center text-white border-0 rounded-0">
              <img className="card-img rounded-0 img-fluid w-100" src="https://image.ohou.se/image/central_crop/bucketplace-v2-development/uploads-productions-1549968093777_CLm.jpg/720/720" alt="post-thumb"></img>
              <div className="card-img-overlay">
                <div className="card-content">
                  <p className="text-uppercase">LifeStyle</p>
                  <h4 className="card-title mb-4"><a className="text-white" href="blog-single.html">Organize Your Life With 10
                      Simple rule</a></h4>
                  <a className="btn btn-outline-light" href="blog-single.html">read more</a>
                </div>
              </div>
            </article>
          </div>
          <div className="col-lg-3 col-sm-6 mb-2 mb-lg-0 px-1">
            <article className="card bg-dark text-center text-white border-0 rounded-0">
              <img className="card-img rounded-0 img-fluid w-100" src="https://image.ohou.se/image/central_crop/bucketplace-v2-development/uploads-productions-1550455583397_nXjBEZG3O.jpg/720/720" alt="post-thumb"></img>
              <div className="card-img-overlay">
                <div className="card-content">
                  <p className="text-uppercase">LifeStyle</p>
                  <h4 className="card-title mb-4"><a className="text-white" href="blog-single.html">Organize Your Life With 10
                      Simple rule</a></h4>
                  <a className="btn btn-outline-light" href="blog-single.html">read more</a>
                </div>
              </div>
            </article>
          </div>
          <div className="col-lg-3 col-sm-6 mb-2 mb-lg-0 px-1">
            <article className="card bg-dark text-center text-white border-0 rounded-0">
              <img className="card-img rounded-0 img-fluid w-100" src="https://image.ohou.se/image/central_crop/bucketplace-v2-development/uploads-productions-1560691031842_7Kv3.jpg/720/720" alt="post-thumb"></img>
              <div className="card-img-overlay">
                <div className="card-content">
                  <p className="text-uppercase">LifeStyle</p>
                  <h4 className="card-title mb-4"><a className="text-white" href="blog-single.html">Organize Your Life With 10
                      Simple rule</a></h4>
                  <a className="btn btn-outline-light" href="blog-single.html">read more</a>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
