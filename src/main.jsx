import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App'
import Test from './Test'
import Layout from './components/Layout'
import Dashboard from './pages/Dashboard'
import Kompetisi from './pages/Kompetisi'
import LostFound from './pages/LostFound'
import Events from './pages/Events'
import Forum from './pages/Forum'
import Login from './pages/Login'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/test" element={<Test />} />
        <Route path="/dashboard" element={<Layout><Dashboard /></Layout>} />
        <Route path="/kompetisi" element={<Layout><Kompetisi /></Layout>} />
        <Route path="/lostfound" element={<Layout><LostFound /></Layout>} />
        <Route path="/events" element={<Layout><Events /></Layout>} />
        <Route path="/forum" element={<Layout><Forum /></Layout>} />
        <Route path="/login" element={<Layout><Login /></Layout>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
