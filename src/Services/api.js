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
// createRegister
function createRegister(body, getConfig) {
    return axios.post(`${URL}/createRegister`, body, getConfig);
};
// Home--------------------------------
function getBalance(getConfig) {
    return axios.get(`${URL}/home`, getConfig);
};
// Update-------------------------------
function updateRegister(type, body, id, getConfig) {
    return axios.put(`${URL}/updateRegister/${type}/${id}`, body, getConfig);
};
// Delete --------------------------------
function deleteRegister(id, getConfig) {
    return axios.delete(`${URL}/deleteRegister/${id}`, getConfig);
};
function deletePost(id, getConfig) {
    return axios.delete(`${URL}/timeline/${id}`, getConfig)
};


// Headers ---------------------------------

function userImage(getConfig) {
    return axios.get(`${URL}/userImage`, getConfig);
};

function searchUsers(getConfig, startsWith) {
    return axios.get(`${URL}/userImage/${startsWith}`, getConfig);
};

function logOut(getConfig,body) {
    return axios.put(`${URL}/signout`, getConfig, body);

};

function getTimeLine(getConfig){
    return axios.get(`${URL}/timeLine`, getConfig)

}

function getHashtagTrending(){
    return axios.get(`${URL}/trending`);
}

function getHashtagPosts(hashtag){
    return axios.get(`${URL}/hashtag/${hashtag}`);
}

export {
    signUp,
    signIn,
    createRegister,
    getBalance,
    deleteRegister,
    updateRegister,
    logOut,
    getTimeLine,
    getHashtagTrending,
    getHashtagPosts,
    searchUsers,
    userImage,
    deletePost
}
