import {Navigate, Route, Routes} from  "react-router-dom" 
// import './assets/css/App.css'
import { lazy } from 'react'
import LazySuspense from "./components/LazySuspense.jsx"
const LazyLogin = lazy(()=> import ("./pages/auth/Login.jsx"))
const LazyRegister = lazy(()=> import ("./pages/auth/Register.jsx"))
const LazyForgotPassword = lazy(()=> import ("./pages/auth/ForgotPassword.jsx"))
const LazyUserLayout = lazy(()=> import ("./pages/user/UserLayout.jsx"))
const LazyAdminlayout = lazy(()=> import ("./pages/admin/Adminlayout.jsx"))
// const LazyAdmindashboard = lazy(()=> import ("./pages/admin/dashboard.jsx"))
const LazyNavbar = lazy(()=> import ("./components/navbar.jsx"))
const LazyFooter = lazy(()=> import ("./components/Footer.jsx"))
const LazyHome = lazy(()=> import ("./pages/user/home.jsx"))
const LazyGallery = lazy(()=> import ("./pages/user/Gallery.jsx"))
const LazyPolicy = lazy(()=> import ("./pages/user/PrivacyPolicy.jsx"))
const LazyTerms = lazy(()=> import ("./pages/user/Terms.jsx"))
const LazyFAQ = lazy(()=> import ("./pages/user/FAQ.jsx"))
const LazyKids = lazy(()=> import ("./pages/user/Kids.jsx"))
const LazyGirls = lazy(()=> import ("./pages/user/girls.jsx"))
const LazyToddler = lazy(()=> import ("./pages/user/Toddler.jsx"))
const LazyAdults = lazy(()=> import ("./pages/user/Adults.jsx"))
const LazyGender = lazy(()=> import ("./pages/user/Gender.jsx"))
const LazyAbout = lazy(()=> import ("./pages/user/Aboutus.jsx"))
const LazyAdmindashboard = lazy(()=> import ("./pages/admin/AdminDashboard.jsx"))
const LazyUserDash = lazy(()=> import ("./pages/admin/UserDash.jsx"))


const UserRoutes=()=>{
  return(
    <LazyUserLayout>
    <Routes>
    <Route path="gallery" element = {<LazySuspense component={LazyGallery}/>}/>
    <Route path="policy" element = {<LazySuspense component={LazyPolicy}/>}/>
    <Route path="terms" element = {<LazySuspense component={LazyTerms}/>}/>
    <Route path="home" element = {<LazySuspense component={LazyHome}/>}/>
    <Route path="faq" element = {<LazySuspense component={LazyFAQ}/>}/>
    <Route path="kids" element = {<LazySuspense component={LazyKids}/>}/>
    <Route path="girls" element = {<LazySuspense component={LazyGirls}/>}/>
    <Route path="toddler" element = {<LazySuspense component={LazyToddler}/>}/>
    <Route path="adults" element = {<LazySuspense component={LazyAdults}/>}/>
    <Route path="gender" element = {<LazySuspense component={LazyGender}/>}/>
    <Route path="aboutus" element = {<LazySuspense component={LazyAbout}/>}/>
    
    </Routes>
    </LazyUserLayout>
    // <Route path="login" element = {<LazySuspense component={LazyLogin}/>}/>
    // <Route path="register" element = {<LazySuspense component={LazyRegister}/>}/>
    // <Route path="navbar" element = {<LazySuspense component={LazyNavbar}/>}/>
    )
  }
  
  
  const AdminRoutes=()=>{
    return(
      <LazyAdminlayout>
      <Routes>
      <Route path="admindashboard" element={<LazySuspense component={LazyAdmindashboard}/>}></Route>
      <Route path="userdash" element={<LazySuspense component={LazyUserDash}/>}></Route>
      </Routes>
      </LazyAdminlayout>
      )
    }
    
    
    function App() {
      return (
        
        <Routes>
        <Route exact path="/" element={<Navigate to="/login"/>}></Route>
        <Route path="/login" element={<LazySuspense component={LazyLogin}/>}></Route>
        <Route path="/register" element={<LazySuspense component={LazyRegister}/>}></Route>
        <Route path="/forgotpassword" element={<LazySuspense component={LazyForgotPassword}/>}></Route>
        <Route path="/admindashboard" element={<LazySuspense component={LazyAdmindashboard}/>}></Route>
        <Route path="/navbar" element={<LazySuspense component={LazyNavbar}/>}></Route>
        <Route path="/footer" element={<LazySuspense component={LazyFooter}/>}></Route>
        <Route path="/home" element={<LazySuspense component={LazyHome}/>}></Route>
        <Route path="gallery" element = {<LazySuspense component={LazyGallery}/>}/>
        <Route path="admindashboard" element={<LazySuspense component={LazyAdmindashboard}/>}></Route>
        <Route path="userdash" element={<LazySuspense component={LazyUserDash}/>}></Route>
        
        
        <Route path="/user/*" element={<LazySuspense component={UserRoutes}/>}></Route>
        <Route path="/admin/*" element={<LazySuspense component={AdminRoutes}/>}></Route>
        </Routes>
        )
      }
      
      export default App
