import { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

// eslint-disable-next-line react/prop-types
const Dropdown = ({ menuItems }) => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <DropdownStyled>
      <ul
        onClick={handleClick}
        className={click ? 'dropdown-menu clicked' : 'dropdown-menu'}
      >
        {menuItems.map((item, index) => {
          return (
            <li key={index}>
              <Link
                className={item.cName}
                to={item.path}
                onClick={setClick(false)}
              >
                {item.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </DropdownStyled>
  );
};

const DropdownStyled = styled.div`
  .dropdown-menu {
    background: red;
    width: 200px;
    position: absolute;
    top: 80px;
    list-style: none;
    text-align: start;

    li {
      background: #1888ff;
      cursor: pointer;
    }

    li:hover {
      background: #5cabff;
    }
  }

  .dropdown-menu.clicked {
    display: none;
  }

  .dropdown-link {
    display: block;
    height: 100%;
    width: 100%;
    text-decoration: none;
    color: #fff;
    padding: 16px;
  }

  @media screen and (max-width: 960px) {
    .fa-caret-down {
      display: none;
    }
  }
`;

export default Dropdown;
