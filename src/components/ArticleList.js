import ArticlePreview from './ArticlePreview';
import ListPagination from './ListPagination';
import React from 'react';

const ArticleList = props => {
  if (!props.articles) {
    return (
      <div className="article-preview">Loading...</div>
    );
  }

  if (props.articles.length === 0) {
    return (
      <div className="article-preview">
        No articles are here... yet.
      </div>
    );
  }

  return (
    <div>
      {
        props.articles.map(article => {
          return (
            <section class="section">
              <div class="container">
                <div class="row masonry-container">
                <ArticlePreview article={article} key={article.slug} />
                </div>
                <div class="row">
                  <div class="col-12">
                    <nav>
                      <ul class="pagination justify-content-center align-items-center">
                        <li class="page-item">
                          <span class="page-link">&laquo; Previous</span>
                        </li>
                        <li class="page-item"><a class="page-link" href="#">01</a></li>
                        <li class="page-item active">
                          <span class="page-link">02</span>
                        </li>
                        <li class="page-item"><a class="page-link" href="#">03</a></li>
                        <li class="page-item"><a class="page-link" href="#">04</a></li>
                        <li class="page-item"><a class="page-link" href="#">05</a></li>
                        <li class="page-item"><a class="page-link" href="#">06</a></li>
                        <li class="page-item">
                          <a class="page-link" href="#">Next &raquo;</a>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>
              </div>
            </section>
          );
        })
      }

      {/* <ListPagination
        pager={props.pager}
        articlesCount={props.articlesCount}
        currentPage={props.currentPage} /> */}
    </div>
  );
};

export default ArticleList;
