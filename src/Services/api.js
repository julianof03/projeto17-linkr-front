import axios from "axios";
// import dotenv from 'dotenv';
// dotenv.config()


// const URL = "https://localhost:5000";
const URL = "https://projeto17linkr.herokuapp.com";
// const URL = process.env.REACT_APP_API_BASE_URL;

// Sign-Up--------------------------------
function signUp(body) {
    return axios.post(`${URL}/signup`, body);
};
// LogIn
function signIn(body) {
    return axios.post(`${URL}/signin`, body)
}
// createPost
function createPost(getConfig, body) {
    return axios.post(`${URL}/timeline`, body, getConfig );
};

function EditPost(body, id) {
    console.log('body', body)

    return axios.post(`${URL}/timeline/${id}`, body);
};

// Headers ---------------------------------
// updateLike ---------------------------------

function updateLike(body, getConfig){
    return axios.post(`${URL}/likeUpdate`, body, getConfig );
}

function userImage(getConfig) {
    return axios.get(`${URL}/userImage`, getConfig);
};

function searchUsers(getConfig, startsWith) {
    return axios.get(`${URL}/users/${startsWith}`, getConfig);
};

function logOut(getConfig, body) {
    return axios.put(`${URL}/signout`, body, getConfig);
};

function getTimeLine(getConfig) {
    console.log('gettimeline')
    return axios.get(`${URL}/timeline`, getConfig)
}

function getHashtagTrending() {
    return axios.get(`${URL}/trending`);
}

function getHashtagPosts(hashtag) {
    return axios.get(`${URL}/hashtag/${hashtag}`);
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
    createPost,
    EditPost,
}
