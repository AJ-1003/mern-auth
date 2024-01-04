import { useState, useEffect } from 'react';
import FormContainer from '../form-container/FormContainer';
import Loader from '../loader/Loader';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useRegisterMutation } from '../../slices/usersApiSlice';
import { setCredentials } from '../../slices/authSlice';
import { toast } from 'react-toastify';
import SubmitButton from '../../utils/buttons/SubmitButton';
import styled from 'styled-components';

const RegisterForm = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [register, { isLoading }] = useRegisterMutation();

  const { userInfo } = useSelector((state) => state.auth);

  useEffect(() => {
    if (userInfo) {
      navigate('/');
    }
  }, [navigate, userInfo]);

  const submitHandler = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      toast.error('Passwords do not match');
    } else {
      try {
        const res = await register({
          firstName,
          lastName,
          email,
          password,
        }).unwrap();
        dispatch(setCredentials({ ...res }));
        navigate('/');
      } catch (err) {
        toast.error(err?.data?.message || err.error);
      }
    }
  };

  return (
    <FormContainer>
      <h1 className="text-center phantoms-heading">Enlist</h1>
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

        <SubmitButton isLoading={isLoading} text="Enlist" />

        {isLoading && <Loader />}

        <div>
          Already have an account? <Link href={`/login`}>Login</Link>
        </div>
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

const Link = styled.a`
  color: #f40002;
  cursor: pointer;

  &:hover {
    color: #550000;
  }
`;

export default RegisterForm;
