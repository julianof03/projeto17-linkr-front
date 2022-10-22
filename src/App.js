import { BrowserRouter, Routes, Route } from 'react-router-dom';
import GlobalStyle from './Styles/globalStyle';
import { useState } from 'react';
import GlobalContext from './contexts/globalContext';

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
    })
    const [token, setToken] = useState('');
    const [user, setUser] = useState('');
    const [config, setConfig] = useState()
    return (
        <>
            <GlobalStyle />
            <GlobalContext.Provider value={
                {
                    reRender, setReRender,
                    post, setPost,
                    token, setToken,
                    user, setUser,
                    config, setConfig
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
                </BrowserRouter>
            </GlobalContext.Provider>
        </>
    );
}