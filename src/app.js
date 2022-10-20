import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import GlobalStyle from '../src/Styles/globalStyle';
import GlobalContext from '../src/Components/Context/globalContext';
import UserPage from '../src/pages/UserPage';

export default function App() {
    const [reRender, setReRender] = useState(true);

    return (
        <>
            <GlobalStyle />
            <GlobalContext.Provider value={{ reRender, setReRender }}>
                <BrowserRouter>

                    <Routes>
                        <Route path="/" element={<UserPage />} />
                    </Routes>

                </BrowserRouter>
            </GlobalContext.Provider>
        </>
    );
}
