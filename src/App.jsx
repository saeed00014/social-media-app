import './assets/index.css'

import { Suspense, lazy } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"

import Header from "./components/header"
import Footer from "./components/footer"
import LoadingPage from './components/loadingPage'

const HomePage = lazy(() => {
  return new Promise(resolve => {
    setTimeout(() => resolve(import("./pages/home")), 850);
  })
})
const ProjectPage = lazy(() => {
  return new Promise(resolve => {
    setTimeout(() => resolve(import("./pages/projects")), 850);
  })
})
const AboutPage = lazy(() => {
  return new Promise(resolve => {
    setTimeout(() => resolve(import("./pages/about")), 850);
  })
})
const ContactPage = lazy(() => {
  return new Promise(resolve => {
    setTimeout(() => resolve(import("./pages/contact")), 850);
  })
})

function App() {

  return (
    <BrowserRouter>
      <div className="[&>*]:text-white [&>*]:bg-g_Background_Black">
      <Header />
      <Suspense fallback={<LoadingPage />}>
        <Routes>
          <Route path="/" element={<HomePage />}/>
          <Route path="/about" element={<AboutPage />}/>
          <Route path="/projects" element={<ProjectPage />}/>
          <Route path="/contact" element={<ContactPage />}/>
        </Routes>
      </Suspense>
      <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App

