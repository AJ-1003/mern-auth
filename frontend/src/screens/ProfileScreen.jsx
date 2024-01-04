import styled from 'styled-components';
// import ProfileForm from '../components/forms/ProfileForm';
import { lazy, Suspense } from 'react';
import Loader from '../components/loader/Loader';

const ProfileForm = lazy(() => import('../components/forms/ProfileForm'));

const ProfileScreen = () => {
  return (
    <ProfileScreenStyled>
      <Suspense fallback={<Loader />}>
        <ProfileForm />
      </Suspense>
    </ProfileScreenStyled>
  );
};

const ProfileScreenStyled = styled.div`
  background: linear-gradient(180deg, rgba(0, 0, 0, 0.6), rgba(207, 0, 15, 0.2)),
    url('../../public/assets/images/SOG-A-12.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  /* background-position: top; */
  background-position-y: 30%;
  height: 100vh;
  width: 100%;
`;

export default ProfileScreen;
