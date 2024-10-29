import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './Header/Navbar'
import "./Pages/Resume Page/Resume.css"
import "./Registration/Login.css"
import "./Pages/About/About.css"
import './TableData/Data.css'
import "./Testimonial/BlogPost/Blog.css"
import "./Header/Navbar.css"
import './Pages/Carrer-starts-here/CarrerPage.css'
import "./menupages/menu.css"
import "./Carrer_page/Carrer.css"
import './Footer/Footer.css'
import "./Testimonial/Testimonial.css"
import { Route, Router, Routes } from 'react-router-dom'
import JobsData from './TableData/JobsData'
import Home from './Home'
import JobPost from './Testimonial/PostedJobs/JobPost'
import Blogpage from './Testimonial/BlogPost/Blogpage'
import Login from './Registration/Login'
import Signup from './Registration/signup'
import About from './Pages/About/About'
import Resume from './Pages/Resume Page/Resume'
import CarrerPage from './Pages/Carrer-starts-here/CarrerPage'
import Projectmanger from './Pages/ProjectManger/Projectmanger'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path={'/'} element={<Home />} />
        <Route path='/ResumePage' element={<Resume/>}></Route>
        <Route path={'/jobs'} element={<JobsData />} />
        <Route path='/jobspost' element={<JobPost />} />
        <Route path='Blogpost' element={<Blogpage />} />
        <Route path='/Loginpage' element={<Login />}></Route>
        <Route path='/register-login' element={<Signup />}></Route>
        <Route path="/AboutUs" element={<About />} />
        <Route path='/carrer-starts-here' element = {<CarrerPage/>}/>
        <Route path='/Project Manager' element ={<Projectmanger/>}></Route>
        
      </Routes>

    </>
  )
}
export default App
