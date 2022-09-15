import { Routes , Route } from 'react-router-dom';
import './App.css';
import AddItem from './Component/AddItem/AddItem';
import Home from './Component/Home/Home';
import ManageItem from './Component/ManageItem/ManageItem';
import MyItem from './Component/MyItem/MyItem';
import Footer from './Component/Shared/Footer/Footer';
import Navbar from './Component/Shared/Navbar/Navbar';
import SignIn from './Component/SignIn/SignIn';
import  { Toaster } from 'react-hot-toast';
import NotFoundPage from './Component/Shared/NotFoundPage/NotFoundPage';
import Blog from './Component/Blog/Blog';
import ItemDetails from './Component/ItemDetails/ItemDetails';
import RequireAuth from './Component/Shared/RequireAuth/RequireAuth';

function App() {
  return (
    <div className='w-full relative gradient-bg'>
       <Navbar></Navbar>
       <Routes>
          <Route path='/' element={<Home></Home>} />
          <Route path='/home' element={<Home></Home>} />
          <Route path='/blog' element={<Blog></Blog>} />
          <Route path='/addItem' element={<AddItem></AddItem>} />
          <Route path='/myItem' element={<MyItem></MyItem>} />
          <Route path='/manageItem' element={<ManageItem></ManageItem>} />
          <Route path='/itemDetails' element={<RequireAuth><ItemDetails></ItemDetails></RequireAuth>} />
          <Route path='/signIn' element={<SignIn></SignIn>} />
          <Route path='*' element={<NotFoundPage/>} />
       </Routes>
          <Footer ></Footer>
          <Toaster></Toaster>
    </div>
  );
}

export default App;
