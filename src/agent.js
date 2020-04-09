import superagentPromise from 'superagent-promise';
import _superagent from 'superagent';

const superagent = superagentPromise(_superagent, Promise);

const API_ROOT = 'https://bfb63248va.execute-api.ap-northeast-2.amazonaws.com';

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
    superagent.get(`${API_ROOT}${url}`, body).use(tokenPlugin).then(responseBody)
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
//const omitSlug = article => Object.assign({}, article, { slug: undefined })
const Articles = {
  all: page =>
    requests.set(`/searchmain?page=1&size=30&category=&vendor=`),
  byAuthor: (author, page) =>
    requests.get(`/articles?author=${encode(author)}&${limit(5, page)}`),
  byTitle: (id, vendor) =>
    requests.set(`/searchdetail?product_title=${id}&vendor=${vendor}`),
  byTitleOnline: (id, vendor) =>
    requests.set(`/searchdetailshop?product_title=${id}&vendor=${vendor}`),
  byTitleRelated: (id, page) =>
    requests.set(`/searchdetailrelated?category=${id}`),  
  byTitleRelatedMore: (id, from) =>
    requests.set(`http://52.78.116.176:9200/brandshop-*/_search?pretty&size=20&from=${from}&q=category:${id}`),  
  byCategory: (id, page) =>
    requests.set(`/searchmain?page=1&size=30&category=${id}&vendor=`),
  onLoadMore: (size, page) =>
    requests.set(`/searchmain?page=${page}&size=${size}&category=&vendor=`),
  onLoadMoreByCategory: (size, page, id) =>
    requests.set(`/searchmain?page=${page}&size=${size}&category=${id}&vendor=`),
  bySearchKeword: (size, page, keyword) =>
    requests.set(`/searchresult?page=${page}&size=${size}&keyword=${keyword}`),
  onLoadbySearchKeword: (size, page, keyword) =>
    requests.set(`/searchresult?page=${page}&size=${size}&keyword=${keyword}`)
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
