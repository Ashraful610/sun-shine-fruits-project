import { Routes , Route } from 'react-router-dom';
import './App.css';
import AddItem from './Component/AddItem/AddItem';
import Home from './Component/Home/Home';
import ManageItem from './Component/ManageItem/ManageItem';
import MyItem from './Component/MyItem/MyItem';
import Footer from './Component/Shared/Footer/Footer';
import Navbar from './Component/Shared/Navbar/Navbar';
import SignIn from './Component/SignIn/SignIn';

function App() {
  return (
    <div className='w-full min-h-max relative'>
       <Navbar></Navbar>
       <Routes>
          <Route path='/' element={<Home></Home>} />
          <Route path='/home' element={<Home></Home>} />
          <Route path='/addItem' element={<AddItem></AddItem>} />
          <Route path='/myItem' element={<MyItem></MyItem>} />
          <Route path='/manageItem' element={<ManageItem></ManageItem>} />
          <Route path='/signIn' element={<SignIn></SignIn>} />
       </Routes>
          <Footer ></Footer>
    </div>
  );
}

export default App;
