import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import FormBox from './Components/FormBox/FormBox'
import UserPage from './pages/UserPage'

export default function App(){
    return(
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={ <UserPage /> }/>

                </Routes>
            </BrowserRouter>
    )
}