import {
  ARTICLE_PAGE_LOADED,
  ARTICLE_PAGE_UNLOADED,
  ARTICLE_PAGE_LOADED_MORE,
  ADD_COMMENT,
  DELETE_COMMENT
} from '../constants/actionTypes';

export default (state = {}, action) => {
  switch (action.type) {
    case ARTICLE_PAGE_LOADED:
      return {
        ...state,
        detail: action.payload[0].hits.hits.length !== 0 ? action.payload[0].hits.hits[0]._source : "",
        online: action.payload[1].hits.hits.length !== 0 ? action.payload[1].hits.hits : "",
        related: action.payload[2].hits.hits.length !== 0 ? action.payload[2].hits.hits : "",
        size: 10,
        from: 10
        //comments: action.payload[1].comments
      };
    case ARTICLE_PAGE_LOADED_MORE:
      return {
        ...state,
        related: state.related.concat(action.payload.hits.hits),
        size: 10,
        from: state.from + 10
      }
    case ARTICLE_PAGE_UNLOADED:
      return {};
    case ADD_COMMENT:
      return {
        ...state,
        commentErrors: action.error ? action.payload.errors : null,
        comments: action.error ?
          null :
          (state.comments || []).concat([action.payload.comment]),
        detail: ''
      };
    case DELETE_COMMENT:
      const commentId = action.commentId
      return {
        ...state,
        comments: state.comments.filter(comment => comment.id !== commentId)
      };
    default:
      return state;
  }
};
