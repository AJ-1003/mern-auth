import styled from 'styled-components';
import LoggedOutHero from '../components/hero/LoggedOutHero';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const LogoutScreen = () => {
  const nav = useNavigate();

  useEffect(() => {
    setTimeout(() => nav('/login'), 5000);
  });

  return (
    <ScreenStyled>
      <LoggedOutHero />
    </ScreenStyled>
  );
};

const ScreenStyled = styled.div`
  background: linear-gradient(180deg, rgba(0, 0, 0, 0.6), rgba(207, 0, 15, 0.2)),
    url('../../public/assets/images/Logout.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  height: 100vh;
  width: 100%;
`;

export default LogoutScreen;
