import axios from "axios";

const URL = "https://projeto17linkr.herokuapp.com";
//const URL = "http://localhost:5000";

// Sign-Up--------------------------------
function signUp(body) {
  return axios.post(`${URL}/signup`, body);
}
// LogIn
function signIn(body) {
  return axios.post(`${URL}/signin`, body);
}
// createPost
function createPost(getConfig, body) {
  return axios.post(`${URL}/timeline`, body, getConfig);
}
function deletePost(id, getConfig) {
  return axios.delete(`${URL}/timeline/${id}`, getConfig);
}
function EditPost(body, id) {
  return axios.post(`${URL}/timeline/${id}`, body);
}
function getAlertNewPosts(body) {
  return axios.get(`${URL}/timeline/getalertnewposts`, body);
}
// updateLike ---------------------------------

function updateLike(body, getConfig) {
  return axios.put(`${URL}/timeline/likeUpdate`, getConfig, body);
}

function updateDislike(body, getConfig) {
  return axios.put(`${URL}/timeline/dislikeUpdate`, getConfig, body);
}
function userImage(getConfig) {
  return axios.get(`${URL}/userImage`, getConfig);
}

function searchUsers(getConfig, startsWith) {
  return axios.get(`${URL}/users/${startsWith}`, getConfig);
}

function logOut(getConfig, body) {
  return axios.put(`${URL}/signout`, body, getConfig);
}

function getTimeLine(getConfig) {
  return axios.get(`${URL}/timeline`, getConfig);
}

function getUserPosts(getConfig, id) {
  return axios.get(`${URL}/users/${id}`, getConfig);
}

function getHashtagTrending(getConfig) {
  return axios.get(`${URL}/trending`, getConfig);
}

function getHashtagPosts(getConfig, hashtag) {
  return axios.get(`${URL}/hashtag/${hashtag}`, getConfig);
}

function createRepost(getConfig, repostData) {
  return axios.post(`${URL}/share`, repostData, getConfig);
}

export {
  signUp,
  signIn,
  logOut,
  getTimeLine,
  getHashtagTrending,
  getHashtagPosts,
  searchUsers,
  userImage,
  deletePost,
  createPost,
  EditPost,
  createRepost,
  getAlertNewPosts,
  getUserPosts,
  updateLike,
  updateDislike,
};
