
import './App.css'
import {Routes,Route,Link} from 'react-router-dom'
import Home from './pages/Home'
import UserForms from './pages/UserForms'
import ViewResume from './pages/ViewResume'
import ResumeSteps from './pages/ResumeSteps'
import Downloads from './pages/Downloads'
import PageNotFound from './pages/PageNotFound'
import Header from './components/Header'
import Footer from './components/Footer'
function App() {


  return (

   <>

   <Header/>
     <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/forms" element={<UserForms/>}/>
        <Route path="/steps" element={<ResumeSteps/>}/>
        <Route path="/downloads" element={<Downloads/>}/>
        <Route path="/*" element={<PageNotFound />}/>
        <Route path="/resume/:pid/view" element={<ViewResume />}/>
     </Routes>
    <Footer/> 
   </>
  )
}

export default App
