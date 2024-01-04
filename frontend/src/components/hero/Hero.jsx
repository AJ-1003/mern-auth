import styled from 'styled-components';
import LinkButton from '../../utils/buttons/LinkButton';

const Hero = () => {
  return (
    <HeroStyled className="rounded-corners">
      <HeroContent>
        <h1 className="text-center mb-4 phantoms-heading">
          Phantoms Membership
        </h1>
        <p className="text-center mb-4 phantoms-secondary-text">
          Join the Phantoms SOG - A Team!
        </p>
        <div className="button-container">
          <LinkButton to="/login" text="Sign In" />
          <LinkButton to="/register" text="Enlist" />
        </div>
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
  width: 50%;
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

export default Hero;
