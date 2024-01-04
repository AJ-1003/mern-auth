import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import FormContainer from '../form-container/FormContainer';
import { useDispatch, useSelector } from 'react-redux';
import { useLoginMutation } from '../../slices/usersApiSlice';
import { setCredentials } from '../../slices/authSlice';
import { toast } from 'react-toastify';
import Loader from '../loader/Loader';
import styled from 'styled-components';
import SubmitButton from '../../utils/buttons/SubmitButton';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [login, { isLoading }] = useLoginMutation();

  const { userInfo } = useSelector((state) => state.auth);

  useEffect(() => {
    if (userInfo) {
      navigate('/');
    }
  }, [navigate, userInfo]);

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const res = await login({ email, password }).unwrap();
      dispatch(setCredentials({ ...res }));
      navigate('/');
    } catch (err) {
      toast.error(err?.data?.message || err.error);
    }
  };

  return (
    <FormContainer>
      <h1 className="text-center phantoms-heading">Sign In</h1>
      <FormStyled onSubmit={submitHandler} className="align-items-center phantoms-secondary-text">
        <div className="input-control">
          <input
            type="email"
            required
            value={email}
            name={'email'}
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="input-control">
          <input
            type="password"
            required
            value={password}
            name={'password'}
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <SubmitButton isLoading={isLoading} text='Sign In'/>

        {isLoading && <Loader />}

        <div>
          New Member? <Link href="/register">Enlist</Link>
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

export default LoginForm;
