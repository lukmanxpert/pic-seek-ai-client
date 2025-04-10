import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router'
import Root from './layouts/Root.jsx'
import Home from './pages/Home.jsx'
import Images from './pages/Images.jsx'
import Generate from './pages/Generate.jsx'
import LogIn from './pages/LogIn.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Root />}>
          <Route index element={<Home />}></Route>
          <Route path='/home' element={<Home />}></Route>
          <Route path='/images' element={<Images />}></Route>
          <Route path='/generate' element={<Generate />}></Route>
          <Route path='/login' element={<LogIn />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
