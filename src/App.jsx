import './App.css'
import Contact from './components/Contact'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './components/Home'
import Navbar from './components/Navbar'
import ServiceContents from './components/ServicesContents'
import Footer from './components/Footer'
import Doctor from './components/Doctor'
import BookAppointment from './components/BookAppointment'
import Login from './components/Login'
import Signup from './components/Signup'
function App() {

  return (
    <>
<BrowserRouter>
<Navbar />
<Routes>
<Route path='/' element={<Home />}/>
<Route path='/services' element={<ServiceContents />} />
<Route path='/doctors' element={<Doctor />} />
<Route path='/bookappointment' element={<BookAppointment />} />
<Route path='/login' element={<Login />} />
<Route path='/signup' element={<Signup />} />

<Route path='/contact' element={<Contact />} />




</Routes>
<Footer />
</BrowserRouter>
    </>
  )
}

export default App;
