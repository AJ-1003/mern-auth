import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useLogoutMutation } from '../../slices/usersApiSlice';
import { logout } from '../../slices/authSlice';
import { FaSignInAlt, FaSignOutAlt, FaUser } from 'react-icons/fa';
import logo from '../../../src/assets/logo/Logo.png';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const Navigation = () => {
  const { userInfo } = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [logoutApiCall] = useLogoutMutation();

  const logoutHandler = async () => {
    try {
      await logoutApiCall().unwrap();
      dispatch(logout());
      navigate('/logout');
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Navbar
      collapseOnSelect
      expand="md"
      className="bg-body-tertiary"
      fixed="top"
    >
      <Container>
        <Navbar.Brand href="/">
          <img
            alt=""
            src={logo}
            width="80"
            height="80"
            className="d-inline-block align-top"
          />
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse
          className="justify-content-end custom-collapse rounded-corners p-2 my-2"
          id="responsive-navbar-nav"
        >
          <Nav className="me-auto">
            <NavDropdown
              title="Induction"
              id="collapsible-nav-dropdown"
              className="px-2"
            >
              <NavDropdown.Item
                href="/introduction"
                className="custom-nav-item"
              >
                Introduction
              </NavDropdown.Item>
              <NavDropdown.Item href="/about" className="custom-nav-item">
                About Us
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown
              title="TOC"
              id="collapsible-nav-dropdown"
              className="px-2"
            >
              <NavDropdown.Item href="/phantom" className="custom-nav-item">
                Phantom
              </NavDropdown.Item>
              <NavDropdown.Item href="/cof" className="custom-nav-item">
                COF
              </NavDropdown.Item>
              <NavDropdown.Item href="/saasl-nsl" className="custom-nav-item">
                SAASL/NSL
              </NavDropdown.Item>
              <NavDropdown.Item href="/pbk-speed" className="custom-nav-item">
                PBK/Speed
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/calendar" className="custom-nav-item px-2">
              Calendar
            </Nav.Link>
            <Nav.Link href="/contact" className="custom-nav-item px-2">
              Contact Us
            </Nav.Link>
          </Nav>
          {userInfo ? (
            <Nav>
              <Navbar.Text
                className="phantoms-secondary-text"
                style={{ color: '#fff' }}
              >
                Signed in as:{' '}
              </Navbar.Text>
              <NavDropdown
                title={`${userInfo.firstName} ${userInfo.lastName}`}
                id="collapsible-nav-dropdown"
              >
                <NavDropdown.Item href="/profile" className="custom-nav-item">
                  <FaUser /> Profile
                </NavDropdown.Item>
                <NavDropdown.Item
                  href=""
                  className="custom-nav-item"
                  onClick={logoutHandler}
                >
                  <FaSignOutAlt /> Logout
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          ) : (
            <Nav>
              <Nav.Link href="/login" className="custom-nav-item px-2">
                <FaSignInAlt /> Sign In
              </Nav.Link>
              <Nav.Link href="/register" className="custom-nav-item px-2">
                <FaSignInAlt /> Enlist
              </Nav.Link>
            </Nav>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
