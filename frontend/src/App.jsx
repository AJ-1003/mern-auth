import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navigation from './components/navbar/Navigation';
import styled from 'styled-components';

const App = () => {
  return (
    <AppStyled>
      <Navigation />
      <div>
        <ToastContainer />
        <Outlet />
      </div>
    </AppStyled>
  );
};

const AppStyled = styled.div`
  height: 100vh;
`;

export default App;
