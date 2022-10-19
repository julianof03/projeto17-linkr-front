import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'

export default function App(){
    return(
            <BrowserRouter>
                <Routes>
                    {/* <Route path='/' element={</>}/>
                    <Route path='/timeline' element={</>}/> */}
                </Routes>
            </BrowserRouter>
    )
}