import { Link } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
const Button = ({ to, buttonText }) => {
  return (
    <Link to={to}>
      <button className="button">{buttonText}</button>
    </Link>
  );
};

export default Button;
