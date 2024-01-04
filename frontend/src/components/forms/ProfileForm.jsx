import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import FormContainer from '../form-container/FormContainer';
import { toast } from 'react-toastify';
import Loader from '../loader/Loader';
import { useUpdateUserMutation } from '../../slices/usersApiSlice';
import { setCredentials } from '../../slices/authSlice';
import SubmitButton from '../../utils/buttons/SubmitButton';
import styled from 'styled-components';

const ProfileForm = () => {
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const dispatch = useDispatch();

  const { userInfo } = useSelector((state) => state.auth);

  const [updateProfile, { isLoading }] = useUpdateUserMutation();

  useEffect(() => {
    setFirstName(userInfo.firstName);
    setLastName(userInfo.lastName);
    setEmail(userInfo.email);
  }, [userInfo.email, userInfo.firstName, userInfo.lastName]);

  const submitHandler = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      toast.error('Passwords do not match');
    } else {
      try {
        const res = await updateProfile({
          _id: userInfo._id,
          firstName,
          email,
          password,
        }).unwrap();
        console.log(res);
        dispatch(setCredentials(res));
        toast.success('Profile updated successfully');
      } catch (err) {
        toast.error(err?.data?.message || err.error);
      }
    }
  };

  return (
    <FormContainer>
      <h1 className="text-center phantoms-heading">Update Profile</h1>
      <FormStyled
        onSubmit={submitHandler}
        className="align-items-center phantoms-secondary-text"
      >
        <div className="input-control">
          <input
            type="name"
            required
            value={firstName}
            name={'firstName'}
            placeholder="Enter firstname"
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>

        <div className="input-control">
          <input
            type="name"
            required
            value={lastName}
            name={'lastName'}
            placeholder="Enter lastname"
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>

        <div className="input-control">
          <input
            type="email"
            required
            value={email}
            name={'email'}
            placeholder="Enter email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="input-control">
          <input
            type="password"
            required
            value={password}
            name={'password'}
            placeholder="Enter password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className="input-control">
          <input
            type="password"
            required
            value={confirmPassword}
            name={'confirmPassword'}
            placeholder="Confirm password"
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>

        <SubmitButton isLoading={isLoading} text="Update" />

        {isLoading && <Loader />}
      </FormStyled>
    </FormContainer>
  );
};

const FormStyled = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  .input-control {
    width: 60%;

    input {
      width: 100%;
    }
  }
`;

export default ProfileForm;
