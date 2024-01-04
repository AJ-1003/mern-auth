import Hero from '../components/hero/Hero';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import LoggedInScreen from './LoggedInScreen';

const HomeScreen = () => {
  const { userInfo } = useSelector((state) => state.auth);

  return (
    <ScreenStyled>
      {userInfo ? <LoggedInScreen /> : <Hero />}
    </ScreenStyled>
  );
};

const ScreenStyled = styled.div`
  background: linear-gradient(180deg, rgba(0, 0, 0, 0.6), rgba(207, 0, 15, 0.2)),
    url('../../public/assets/images/SOG-A-8.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  height: 100vh;
  width: 100%;
`;

export default HomeScreen;
