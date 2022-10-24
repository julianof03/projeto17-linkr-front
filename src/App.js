import { BrowserRouter, Routes, Route } from 'react-router-dom';
import GlobalStyle from './Styles/globalStyle';
import { useState } from 'react';
import GlobalContext from './contexts/globalContext';
import React from 'react';
import Header from './Components/Head/TopMenu.js';

import SignIn from './Components/SignIn/SignIn';
import SingUp from './Components/SignUp/SignUp';
import TimeLine from './Pages/TimeLine.js';
import Hashtag from './Pages/hashtagPage';
import UserPage from './Pages/UserPage';

export default function App() {

    const [reRender, setReRender] = useState(true);
    const [post, setPost] = useState({
        img: '',
        name: '',
        likesQtd: '',
        liked: ''
    });
    const [token, setToken] = useState('');
    const [user, setUser] = useState('');
    const [config, setConfig] = useState({});
    const [header, setHeader] = useState(false);
    const [userId, setUserId] = useState('')
    const [deleteScreen, setDeleteScreen] = useState( { status:false, postId:'' } )
    const [editPost, SetEditPost] = useState( { status:false, postId:'' } )
    const [postId_global, setPostId_global] = useState('')
    return (
        <div>
            <GlobalStyle />
            <GlobalContext.Provider value={
                {
                    reRender, setReRender,
                    post, setPost,
                    token, setToken,
                    user, setUser,
                    config, setConfig,
                    header, setHeader,
                    userId, setUserId,
                    deleteScreen, setDeleteScreen,
                    editPost, SetEditPost,
                    postId_global, setPostId_global
                }
            }>
                <BrowserRouter>
                    <Routes>
                        <Route path="/signin" element={<SignIn />} />
                        <Route path="/signup" element={<SingUp />} />
                        <Route path="/timeLine" element={<TimeLine />} />
                        <Route path="/user/:id" element={<UserPage />} />
                        <Route path="/hashtag/:hashtag" element={<Hashtag />} />
                    </Routes>
                    <Header />
                </BrowserRouter>
            </GlobalContext.Provider>
        </div>
    );
}