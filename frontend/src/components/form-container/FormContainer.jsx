import styled from 'styled-components';

const FormContainer = ({ children }) => {
  return (
    <FormContainerStyled  className='rounded-corners'>
      <FormContent>{children}</FormContent>
    </FormContainerStyled>
  );
};

const FormContainerStyled = styled.div`
  margin: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  background-color: rgba(0, 0, 0, 0.3);
  width: 50%;
  color: #fff;
`;

const FormContent = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 2rem;
`;

export default FormContainer;
