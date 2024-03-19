import {Navigate, Route, Routes} from  "react-router-dom" 
// import './assets/css/App.css'
import { lazy } from 'react'
import LazySuspense from "./components/LazySuspense.jsx"
const LazyLogin = lazy(()=> import ("./pages/auth/Login.jsx"))
const LazyRegister = lazy(()=> import ("./pages/auth/Register.jsx"))
const LazyForgotPassword = lazy(()=> import ("./pages/auth/ForgotPassword.jsx"))
const LazyUserLayout = lazy(()=> import ("./pages/user/UserLayout.jsx"))
const LazyAdminlayout = lazy(()=> import ("./pages/admin/Adminlayout.jsx"))
const LazyAdmindashboard = lazy(()=> import ("./pages/admin/dashboard.jsx"))
const LazyNavbar = lazy(()=> import ("./components/navbar.jsx"))
const LazyFooter = lazy(()=> import ("./components/Footer.jsx"))


const UserRoutes=()=>{
  return(
    <LazyUserLayout>
    <Routes>
    <Route path="login" element = {<LazySuspense component={LazyLogin}/>}/>
    <Route path="register" element = {<LazySuspense component={LazyRegister}/>}/>
    <Route path="forgotpassword" element = {<LazySuspense component={LazyForgotPassword}/>}/>
    <Route path="footer" element = {<LazySuspense component={LazyFooter}/>}/>
    </Routes>
    </LazyUserLayout>
    // <Route path="navbar" element = {<LazySuspense component={LazyNavbar}/>}/>
    )
}


const AdminRoutes=()=>{
  return(
    <LazyAdminlayout>
    <Routes>
    <Route path="admindashboard" element={<LazySuspense component={LazyAdmindashboard}/>}></Route>
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

        <Route path="/user/*" element={<LazySuspense component={UserRoutes}/>}></Route>
        <Route path="/admin/*" element={<LazySuspense component={AdminRoutes}/>}></Route>
        </Routes>
        )
      }
      
      export default App
