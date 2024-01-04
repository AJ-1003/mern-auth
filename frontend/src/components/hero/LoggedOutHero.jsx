import styled from 'styled-components';

const LoggedOutHero = () => {
  return (
    <HeroStyled className="rounded-corners">
      <HeroContent>
        <h3 className="text-center mb-4 phantoms-heading">
          You are successfully logged out
        </h3>
        <h1 className="text-center mb-4 phantoms-heading ph-l">
          See you at the next event
        </h1>
      </HeroContent>
    </HeroStyled>
  );
};

const HeroStyled = styled.div`
  margin: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  background-color: rgba(0, 0, 0, 0.3);
  width: 60%;
  color: #fff;

  .button-container {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    gap: 50px;
    padding: 1rem;
  }
`;

const HeroContent = styled.div`
  width: 100%;
  padding: 2rem;
`;

export default LoggedOutHero;
