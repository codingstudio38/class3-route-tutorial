import './App.css';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Header from './components/Header';
import Footer from './components/Footer';
import Page404notfound from './components/Page404notfound';
import User from './components/User';
import Filter from './components/Filter';
import Contact from './components/Contact';
import Company from './components/Company';
import Others from './components/Others';
import Channel from './components/Channel';
import Login from './components/Login';
import Protected from './components/Protected';
import Apiclass1 from './components/Apiclass1';
import Apiclass2 from './components/Apiclass2';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/about' element={<About />} />
          {/* <Route path='/*' element={<Navigate to="/" />} /> */}
          <Route path='/user/:name/:id' element={<Protected Component={User} />} />
          <Route path='/filter' element={<Filter />} />
          <Route path='/contact/' element={<Contact />}>
            <Route path='company' element={<Company />} />
            <Route path='channel' element={<Channel />} />
            <Route path='others' element={<Others />} />
          </Route>
          <Route path='/login' element={<Login />} />
          <Route path='/apiclass1' element={<Apiclass1 />} />
          <Route path='/Apiclass2' element={<Apiclass2 />} />
          <Route path='/*' element={<Page404notfound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
