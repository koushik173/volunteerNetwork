import { Route, Routes } from 'react-router-dom';
import './App.css';
import NotFound from './Components/NotFound/NotFound';
import Blog from './Components/Pages/Blog/Blog';
import Donation from './Components/Pages/Donation/Donation';
import Events from './Components/Pages/Events/Events';
import Home from './Components/Pages/Home/Home';
import User from './Components/Pages/User/User';
import Header from './Components/Share/Header/Header';
import Login from './Components/Share/Login/Login/Login';
import Register from './Components/Share/Login/Register/Register';
import WorkRegister from './Components/WorkRegister/WorkRegister';

function App() {
  return (
    <>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}/>
        <Route path='/home' element={<Home></Home>}/>
        <Route path='/donation' element={<Donation></Donation>}/>
        <Route path='/events' element={<Events></Events>}/>
        <Route path='/blog' element={<Blog></Blog>}/>
        <Route path='/login' element={<Login></Login>}/>
        <Route path='/register' element={<Register></Register>}/>
        <Route path='/user' element={<User></User>}/>
        <Route path='/work/:workId' element={<WorkRegister></WorkRegister>}/>

        
        <Route path='*' element={<NotFound></NotFound>}/>
      </Routes>
    </>
  );
}

export default App;