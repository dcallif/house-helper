import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Hero from './components/Hero'
import Services from './components/Services'
import HowItWorks from './components/HowItWorks'
import Footer from './components/Footer'
import CostGuides from './components/CostGuides'
import ServiceList from './components/ServiceList'
import BrowseByCategory from './components/BrowseByCategory'

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow bg-blue-200">
        <Routes>
          <Route path="/" element={<><Hero /><Services /><HowItWorks /></>} />
          <Route path="/cost-guides" element={<CostGuides />} />
          <Route path="/services" element={<ServiceList />} />
          <Route path="/categories" element={<BrowseByCategory />} />
          <Route path="/login" element={<div>Login Page</div>} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App
