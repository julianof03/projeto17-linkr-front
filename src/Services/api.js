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

function logOut(getConfig) {
    return axios.delete(`${URL}/logOut`, getConfig);

};

function getTimeLine(getConfig){
    return /* axios.get(`${URL}/timeLine`, getConfig) */

}

function getHashtagTrending(){
    return axios.get(`${URL}/trending`);

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
    getHashtagTrending
}
