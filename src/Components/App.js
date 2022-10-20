import { BrowserRouter, Routes, Route } from 'react-router-dom';
import GlobalStyle from '../Styles/globalStyle';
import { useState } from 'react';
import GlobalContext from './Context/globalContext';

// import LogIn from './LogIn/LogIn';
// import SingUp from './SignUp/SignUp';
import TimeLine from './Timeline/TimeLine.js';

export default function App() {
    const [reRender, setReRender] = useState(true);
    const [post, setPost] = useState({
        img: '',
        name: '',
        likesQtd:'',
        liked:''
    })
    return (
        <>
            <GlobalStyle />
            <GlobalContext.Provider value={{ reRender, setReRender, post, setPost }}>
                <BrowserRouter>
                    <Routes>
                        {/* <Route path="/" element={<LogIn />} />
                        <Route path="/signup" element={<SingUp />} /> */}
                        <Route path="/" element={<TimeLine />} />
                    </Routes>
                </BrowserRouter>
            </GlobalContext.Provider>
        </>
    );
}