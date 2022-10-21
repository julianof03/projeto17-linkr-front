import { BrowserRouter, Routes, Route } from 'react-router-dom';
import GlobalStyle from './Styles/globalStyle';
import { useState } from 'react';
import GlobalContext from './contexts/globalContext';
import { UserContext } from './contexts/userContext';
import React from 'react';
import Header from './components/Head/TopMenu.js';

// import LogIn from './LogIn/LogIn';
// import SingUp from './SignUp/SignUp';
import TimeLine from './Pages/TimeLine.js';

export default function App() {
    const [config,setConfig] = useState({});
    const [profileImage, setProfileImage] = useState({});

    const [reRender, setReRender] = useState(true);
    const [post, setPost] = useState({
        img: '',
        name: '',
        likesQtd:'',
        liked:''
    })
    return (
        <div>
            <GlobalStyle />
            <GlobalContext.Provider value={{ reRender, setReRender, post, setPost }}>
                <BrowserRouter>
                    <UserContext.Provider value={{config, setConfig, profileImage, setProfileImage}}>
                        <Routes>
                            {/* <Route path="/" element={<LogIn />} />
                            <Route path="/signup" element={<SingUp />} /> */}
                            <Route path="/" element={<TimeLine />} />
                        </Routes>
                        <Header />
                    </UserContext.Provider>
                </BrowserRouter>
            </GlobalContext.Provider>
        </div>
    );
}