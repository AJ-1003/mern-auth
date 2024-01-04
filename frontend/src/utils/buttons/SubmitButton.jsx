import styled from 'styled-components';

// eslint-disable-next-line react/prop-types
const SubmitButton = ({ isLoading, text }) => {
  return (
    <ButtonStyled
      className="button-30"
      role="button"
      type="submit"
      disabled={isLoading}
    >
      {text}
    </ButtonStyled>
  );
};

const ButtonStyled = styled.button``;

export default SubmitButton;
