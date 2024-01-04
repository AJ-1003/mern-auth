import styled from 'styled-components';
import LoginForm from '../components/forms/LoginForm';

const LoginScreen = () => {
  return (
    <ScreenStyled>
      <LoginForm />
    </ScreenStyled>
  );
};

const ScreenStyled = styled.div`
  background: linear-gradient(180deg, rgba(0, 0, 0, 0.6), rgba(207, 0, 15, 0.2)),
    url('../../public/assets/images/Login.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  height: 100vh;
  width: 100%;
`;

export default LoginScreen;
