import axios from "axios";
// import dotenv from 'dotenv';
// dotenv.config()


const URL = "http://localhost:5000";
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

// doLike ---------------------------------

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
    return axios.put(`${URL}/signout`, getConfig, body);

};

function getTimeLine(getConfig) {
    return axios.get(`${URL}/timeLine`, getConfig)

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
}
