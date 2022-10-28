import { BrowserRouter, Routes, Route } from 'react-router-dom';
import GlobalStyle from './Styles/globalStyle';
import { useState } from 'react';
import GlobalContext from './contexts/globalContext';
import React from 'react';
import Header from './Components/Head/TopMenu.js';
import SignIn from './Components/SignIn/SignIn';
import SingUp from './Components/SignUp/SignUp';
import TimeLine from './Pages/TimeLine/TimeLine';
import Hashtag from './Pages/hashtagPage';
import UserPage from './Pages/UserPage';

export default function App() {

    const [reRender, setReRender] = useState(true);
    const [post, setPost] = useState({
        img: '',
        name: '',
        likesQtd: '',
        liked: ''
    })
    const [token, setToken] = useState('');
    const [user, setUser] = useState('');
    const [header, setHeader] = useState(false)
    const [editPost, SetEditPost] = useState({ status: false, postId: '' })
    const [hashposts, setHashposts] = useState({ array: [], size: 0 });
    const [posts, setPosts] = useState({ array: [], size: 0 })
    const [clicked, setClicked] = useState(false);
    const [youngestPost, setYoungestPost] = useState({})
    const [deleteScreen, setDeleteScreen] = useState({ postId: '', status: false })
    
    return (
        <div>
            <GlobalStyle />
            <GlobalContext.Provider value={
                {
                    reRender, setReRender,
                    post, setPost,
                    posts, setPosts,
                    token, setToken,
                    user, setUser,
                    header, setHeader,
                    hashposts, setHashposts,
                    clicked, setClicked,
                    youngestPost, setYoungestPost,
                    deleteScreen, setDeleteScreen,
                    editPost,SetEditPost
                }
            }>
                <BrowserRouter>
                    <Routes>
                        <Route path="/signin" element={<SignIn />} />
                        <Route path="/signup" element={<SingUp />} />
                        <Route path="/timeLine" element={<TimeLine />} />
                        <Route path="/users/:id" element={<UserPage />} />
                        <Route path="/hashtag/:hashtag" element={<Hashtag />} />
                    </Routes>
                    <Header />
                </BrowserRouter>
            </GlobalContext.Provider>
        </div>
    );
}
