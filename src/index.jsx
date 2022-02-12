import React from 'react'
import ReactDOM from 'react-dom'
import './sass/main.scss'
import Home from './pages/Home'
import Freelances from './pages/Freelances'
import Results from './pages/Results'
import Survey from './pages/Survey'
import NotFound from './pages/NotFound'
import Header from './components/Header'

import { BrowserRouter, Route, Routes } from 'react-router-dom'

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/profils" element={<Freelances />} />
                <Route path="/survey/:questionNumber" element={<Survey />} />
                <Route path="/results" element={<Results />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
)
