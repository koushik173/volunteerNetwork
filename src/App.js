import { Route, Routes } from 'react-router-dom';
import './App.css';
import NotFound from './Components/NotFound/NotFound';
import AddEvent from './Components/Pages/Admin/AddEvent';
import Admin from './Components/Pages/Admin/Admin';
import VolunteerList from './Components/Pages/Admin/VolunteerList';
import Blog from './Components/Pages/Blog/Blog';
import Donation from './Components/Pages/Donation/Donation';
import Events from './Components/Pages/Events/Events';
import Home from './Components/Pages/Home/Home';
import User from './Components/Pages/User/User';
import Header from './Components/Share/Header/Header';
import Login from './Components/Share/Login/Login/Login';
import Register from './Components/Share/Login/Register/Register';
import RequireAuth from './Components/Share/Login/RequireAuth/RequireAuth';
import WorkRegister from './Components/WorkRegister/WorkRegister';

function App() {
  return (
    <>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}/>
        <Route path='/home' element={<Home></Home>}/>
        <Route path='/donation' element={<Donation></Donation>}/>
        <Route path='/events' element={<RequireAuth> <Events></Events></RequireAuth>}/>
        <Route path='/blog' element={<Blog></Blog>}/>
        <Route path='/login' element={<Login></Login>}/>
        <Route path='/register' element={<RequireAuth> <Register></Register></RequireAuth>}/>
        <Route path='/user' element={<RequireAuth> <User></User></RequireAuth>}/>
        <Route path='/work/:workId' element={<RequireAuth> <WorkRegister></WorkRegister></RequireAuth>}/>
        <Route path='/admin' element={<Admin></Admin>}>
          <Route path='/admin/volunteerRegList' element={<VolunteerList></VolunteerList>}></Route>
          <Route path='/admin/addEvent' element={<AddEvent></AddEvent>}></Route>
        </Route>

        <Route path='*' element={<NotFound></NotFound>}/>
      </Routes>
    </>
  );
}

export default App;