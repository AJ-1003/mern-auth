import styled from 'styled-components';

// eslint-disable-next-line react/prop-types
const LinkButton = ({to, text}) => {
  return (
    <ButtonStyled href={to}>
      <button className="button-30" role="button">
        {text}
      </button>
    </ButtonStyled>
  );
};

const ButtonStyled = styled.a``;

export default LinkButton;
