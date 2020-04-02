import superagentPromise from 'superagent-promise';
import _superagent from 'superagent';

const superagent = superagentPromise(_superagent, Promise);

const API_ROOT = 'https://conduit.productionready.io/api';

const encode = encodeURIComponent;
const responseBody = res => res.body;

let token = null;
const tokenPlugin = req => {
  if (token) {
    req.set('authorization', `Token ${token}`);
  }
}

const requests = {
  del: url =>
    superagent.del(`${API_ROOT}${url}`).use(tokenPlugin).then(responseBody),
  get: url =>
    superagent.get(`${API_ROOT}${url}`).use(tokenPlugin).then(responseBody),
  put: (url, body) =>
    superagent.put(`${API_ROOT}${url}`, body).use(tokenPlugin).then(responseBody),
  post: (url, body) =>
    superagent.post(`${API_ROOT}${url}`, body).use(tokenPlugin).then(responseBody),
  set: (url, body) =>
    superagent.get(`${url}`, body).use(tokenPlugin).then(responseBody)
};

const Auth = {
  current: () =>
    requests.get('/user'),
  login: (email, password) =>
    requests.post('/users/login', { user: { email, password } }),
  register: (username, email, password) =>
    requests.post('/users', { user: { username, email, password } }),
  save: user =>
    requests.put('/user', { user })
};

const Tags = {
  getAll: () => requests.get('/tags')
};

const limit = (count, p) => `limit=${count}&offset=${p ? p * count : 0}`;
const omitSlug = article => Object.assign({}, article, { slug: undefined })
const Articles = {
  all: page =>
    requests.set(`http://52.78.116.176:9200/brandshop-*/_search?pretty&size=30`),
  byAuthor: (author, page) =>
    requests.get(`/articles?author=${encode(author)}&${limit(5, page)}`),
  byTitle: (id, vendor) =>
    requests.set(`http://52.78.116.176:9200/brandshop-*/_search?pretty&size=1&q=product_title:${id} and vendor:${vendor}`),
  byTitleOnline: (id, vendor) =>
    requests.set(`http://52.78.116.176:9200/onlineshop-*/_search?pretty&size=10&q=product_title:${id} and vendor:${vendor}`),
  byTitleRelated: (id, page) =>
    requests.set(`http://52.78.116.176:9200/brandshop-*/_search?pretty&size=10&q=category:${id}`),
  byTitleRelatedMore: (id, from) =>
    requests.set(`http://52.78.116.176:9200/brandshop-*/_search?pretty&size=30&from=${from}&q=category:${id}`),
  byCategory: (id, page) =>
    requests.set(`http://52.78.116.176:9200/brandshop-*/_search?pretty&size=30&q=category_addtional:${id}`),
  onLoadMore: (size, from) =>
    requests.set(`http://52.78.116.176:9200/brandshop-*/_search?pretty&size=${size}&from=${from}`),
  onLoadMoreByCategory: (size, from, id) =>
    requests.set(`http://52.78.116.176:9200/brandshop-*/_search?pretty&size=${size}&from=${from}&q=category_addtional:${id}`),
  bySearchKeword: (size, keyword) =>
    requests.set(`http://52.78.116.176:9200/brandshop-*/_search?pretty&size=${size}&keyword=${keyword}`),
  del: slug =>
    requests.del(`/articles/${slug}`),
  favorite: slug =>
    requests.post(`/articles/${slug}/favorite`),
  favoritedBy: (author, page) =>
    requests.get(`/articles?favorited=${encode(author)}&${limit(5, page)}`),
  feed: () =>
    requests.get('/articles/feed?limit=10&offset=0'),
  get: slug =>
    requests.get(`/articles/${slug}`),
  unfavorite: slug =>
    requests.del(`/articles/${slug}/favorite`),
  update: article =>
    requests.put(`/articles/${article.slug}`, { article: omitSlug(article) }),
  create: article =>
    requests.post('/articles', { article })
};

const Comments = {
  create: (slug, comment) =>
    requests.post(`/articles/${slug}/comments`, { comment }),
  delete: (slug, commentId) =>
    requests.del(`/articles/${slug}/comments/${commentId}`),
  forArticle: slug =>
    requests.get(`/articles/${slug}/comments`)
};

const Profile = {
  follow: username =>
    requests.post(`/profiles/${username}/follow`),
  get: username =>
    requests.get(`/profiles/${username}`),
  unfollow: username =>
    requests.del(`/profiles/${username}/follow`)
};

export default {
  Articles,
  Auth,
  Comments,
  Profile,
  Tags,
  setToken: _token => { token = _token; }
};
