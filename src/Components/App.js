import { BrowserRouter, Routes, Route } from 'react-router-dom';
import GlobalStyle from '../Styles/globalStyle';
import { useState } from 'react';
import GlobalContext from './Context/globalContext';

// import LogIn from './LogIn/LogIn';
// import SingUp from './SignUp/SignUp';
import UserPage from './UserPage/UserPage.js';


export default function App() {
    const [reRender, setReRender] = useState(true);

    return (
        <>
            <GlobalStyle />
            <GlobalContext.Provider value={{ reRender, setReRender }}>
                <BrowserRouter>
                    <Routes>
                        {/* <Route path="/" element={<LogIn />} />
                        <Route path="/signup" element={<SingUp />} /> */}
                        <Route path="/" element={<UserPage />} />
                    </Routes>
                </BrowserRouter>
            </GlobalContext.Provider>
        </>
    );
}