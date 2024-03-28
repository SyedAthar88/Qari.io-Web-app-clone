
import './App.css';

import { Route,Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
// import Footer from './components/Footer';
import Resources from './pages/Resources';
import Contact from './pages/Contact';
import Faq from './pages/Faq';
import Login from './pages/Login';
import Footer from './components/Footer/Footer';
import Signup from './pages/Signup';

function App() {
  return (
   <>
 <Navbar/>
 <Routes>
  <Route path='/' element={<Home/>}/>
  <Route path='/resourses' element={<Resources/>}/>
  <Route path='/contact' element={<Contact/>}/>
  <Route path='/faqs' element={<Faq/>}/>
  <Route path='/login' element={<Login/>}/>
  <Route path='/signup' element={<Signup/>}/>

 </Routes>
<Footer/>
   </>
  )
}

export default App
