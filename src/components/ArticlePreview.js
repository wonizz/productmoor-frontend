import React from 'react';
import { Link } from 'react-router';
import agent from '../agent';
import { connect } from 'react-redux';
import { ARTICLE_FAVORITED, ARTICLE_UNFAVORITED } from '../constants/actionTypes';

const FAVORITED_CLASS = 'btn btn-sm btn-primary';
const NOT_FAVORITED_CLASS = 'btn btn-sm btn-outline-primary';

const mapDispatchToProps = dispatch => ({
  favorite: slug => dispatch({
    type: ARTICLE_FAVORITED,
    payload: agent.Articles.favorite(slug)
  }),
  unfavorite: slug => dispatch({
    type: ARTICLE_UNFAVORITED,
    payload: agent.Articles.unfavorite(slug)
  })
});

const ArticlePreview = props => {
  const article = props.article;
  const favoriteButtonClass = article.favorited ?
    FAVORITED_CLASS :
    NOT_FAVORITED_CLASS;

  const handleClick = ev => {
    ev.preventDefault();
    if (article.favorited) {
      props.unfavorite(article.slug);
    } else {
      props.favorite(article.slug);
    }
  };

  return (
        <div class="col-lg-4 col-sm-6 mb-5">
            <article class="text-center">
            <img class="img-fluid mb-4" src={article.img} alt="post-thumb"></img>
            <p class="text-uppercase mb-2">{article.title}</p>
            <h4 class="title-border">
              <a class="text-dark" href="blog-single.html">Charming Evening Field</a>
            </h4>
            <p>{article.description}</p>

            <Link to={`article/${article.url}`} className="btn btn-transparent">read more</Link>

            </article>
        </div>
  );
}

export default connect(() => ({}), mapDispatchToProps)(ArticlePreview);
