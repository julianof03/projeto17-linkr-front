import axios from "axios";

const URL = "http://localhost:5000";

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
    console.log('getConfig',getConfig, 'body', body)

    return axios.post(`${URL}/timeline`, body, getConfig );
};

function EditPost(body, id) {
    console.log('body', body)

    return axios.post(`${URL}/timeline/${id}`, body);
};

// Headers ---------------------------------

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
    EditPost,
}
