import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
import './styles/index.css';
import './styles/phantoms.css';
import './styles/customBootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import store from './store';
import { Provider } from 'react-redux';
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen.jsx';
import RegisterScreen from './screens/RegisterScreen.jsx';
import ProfileScreen from './screens/ProfileScreen.jsx';
import PrivateRoute from './components/private-route/PrivateRoute.jsx';
import AboutScreen from './screens/AboutScreen.jsx';
import CalendarScreen from './screens/CalendarScreen.jsx';
import CofScreen from './screens/CofScreen.jsx';
import ContactScreen from './screens/ContactScreen.jsx';
import IntroductionScreen from './screens/IntroductionScreen.jsx';
import LogoutScreen from './screens/LogoutScreen.jsx';
import PbkSpeedScreen from './screens/PbkSpeedScreen.jsx';
import PhantomScreen from './screens/PhantomScreen.jsx';
import SaaslNslScreen from './screens/SaaslNslScreen.jsx';
import SettingsScreen from './screens/SettingsScreen.jsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index={true} path="/" element={<HomeScreen />} />
      <Route path="/login" element={<LoginScreen />} />
      <Route path="/register" element={<RegisterScreen />} />
      <Route path="" element={<PrivateRoute />}>
        <Route path="/profile" element={<ProfileScreen />} />
      </Route>
      <Route path="/about" element={<AboutScreen />} />
      <Route path="/calendar" element={<CalendarScreen />} />
      <Route path="/cof" element={<CofScreen />} />
      <Route path="/contact" element={<ContactScreen />} />
      <Route path="/introduction" element={<IntroductionScreen />} />
      <Route path="/logout" element={<LogoutScreen />} />
      <Route path="/pbk-speed" element={<PbkSpeedScreen />} />
      <Route path="/phantom" element={<PhantomScreen />} />
      <Route path="/saasl-nsl" element={<SaaslNslScreen />} />
      <Route path="/settings" element={<SettingsScreen />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
