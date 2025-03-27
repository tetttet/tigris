import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {
  HTTP_ROUTE,
  HTTP_ROUTE_ALL_SERVICES,
  HTTP_ROUTE_MED_SERVICES,
  HTTP_ROUTE_TIGRIS_TARGET,
  HTTP_ROUTE_TIGRIS_MEET,
  HTTP_ROUTE_TIGRIS_CONTACT,
  HTTP_ROUTE_TIGRIS_ABOUT,
  HTTP_ROUTE_MENU_SERVICE,
  HTTP_ROUTE_MED_ABOUT,
  HTTP_ROUTE_MED_CONTACT,
  HTTP_ROUTE_MED_DOCTORS,
  HTTP_ROUTE_MED_DETAIL
} from './data';

import Main from './pages/main/Main.Page';

import Home1 from './pages/Home/Home1.Page';
import Home2 from './pages/Home/Home2.Page';
import Doctor from './components/Item/Doctor';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import MedService from './pages/Service/MedService';
import AllService from './pages/Service/AllService';
import Tourism from './pages/Layout/Tourism';
import MeetExpert from './pages/Layout/MeetExpert';
import Contact from './pages/Layout/Contact';
import UserForm from './components/UserForm';
import About from './pages/Layout/About';
import MenuService from './pages/Service/MenuService';

import MedAbout from './pages/Med/About';
import MedContact from './pages/Med/Contact';
import MedDoctors from './pages/Med/Doctors';
import BlogDetails from './pages/Med/BlogDetails';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/register' element={<UserForm />} />
        <Route path={HTTP_ROUTE.website1.path} element={<Home1 />} />
        <Route path={HTTP_ROUTE.website2.path} element={<Home2 />} />
        <Route path='/doctors/:doctorId' element={<Doctor />} />

        {/* TIGRIS ROUTES */}
        <Route path={HTTP_ROUTE_TIGRIS_MEET} element={<MeetExpert />} />
        <Route path={HTTP_ROUTE_TIGRIS_TARGET} element={<Tourism />} />
        <Route path={HTTP_ROUTE_TIGRIS_CONTACT} element={<Contact />} />
        <Route path={HTTP_ROUTE_TIGRIS_ABOUT} element={<About />} />

        {/* MED ROUTES */}
        <Route path={HTTP_ROUTE_MED_ABOUT} element={<MedAbout />} />
        <Route path={HTTP_ROUTE_MED_CONTACT} element={<MedContact />} />
        <Route path={HTTP_ROUTE_MED_DOCTORS} element={<MedDoctors />} />

        <Route path={HTTP_ROUTE_MED_SERVICES} element={<MedService />} />
        <Route path={HTTP_ROUTE_ALL_SERVICES} element={<AllService />} />
        <Route path={HTTP_ROUTE_MENU_SERVICE} element={<MenuService />} />

        <Route path='/medical-details/:id' element={<BlogDetails />} />

      </Routes>
    </Router>
  );
}

export default App;
