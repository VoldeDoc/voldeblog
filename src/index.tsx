import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Navbar from './pages/navbar';
import { BrowserRouter, Route, Routes,useLocation } from 'react-router-dom';
import Home from './pages/home';
import Try from './pages/about';
import Post from './pages/post';
import {Author} from './pages/authors';
import Footer from './pages/footer';
import About from './pages/about';
import Signup from './pages/signup';
import Login from './pages/login';
import { LoadingProvider } from './utils/loader';
import 'react-loading-skeleton/dist/skeleton.css'

const App = () =>{
  const location = useLocation();
  const hideHeaderFooter = location.pathname === '/login' || location.pathname === '/register'


return (
  <>
    {!hideHeaderFooter && <Navbar />}
    <Routes>
      <Route index element={<Home />} />
      <Route path='/try' element={<Try />} />
      <Route path='/post' element={<Post />} />
      <Route path='/authors' element={<Author />} />
      <Route path='/about' element={<About />} />
      <Route path='login' element={<Login />} />
      <Route path='/register' element={<Signup />} />
    </Routes>
    {!hideHeaderFooter && <Footer />}
  </>
);
};

const Root = () => (
<LoadingProvider>
  <BrowserRouter>
    <App />
  </BrowserRouter>
</LoadingProvider>
);


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(<Root />);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
