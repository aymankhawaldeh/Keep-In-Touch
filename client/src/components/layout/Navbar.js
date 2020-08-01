import React, {useContext, useEffect} from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

import AuthContext from '../../context/auth/authContext'
import ContactContext from '../../context/contact/contactContext'


const Navbar = ({  icon }) => {
    const authContext = useContext(AuthContext);
    const contactContext = useContext(ContactContext);
  
    const { isAuthenticated, logout, user, loadUser } = authContext;
    const { clearContacts } = contactContext;
  
    useEffect(() => {
      loadUser();
      // eslint-disable-next-line
    }, []);
  
    const onLogout = () => {
      logout();
      clearContacts();
    };
  
    const authLinks = (
      <React.Fragment>
        <li>Hello {user && user.name} | </li>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/about'>About</Link>
        </li>
        <li>
          <a onClick={onLogout} href='/'>
            <i className='fas fa-sign-out-alt' />{' '}
            <span className='hide-sm'>Logout</span>
          </a>
        </li>
      </React.Fragment>
    );
  
    const guestLinks = (
      <React.Fragment>
       
        <li>
          <Link to='/register'>Register</Link>
        </li>
        <li>
          <Link to='/login'>Login</Link>
        </li>
        <li>
          <Link to='/about'>About</Link>
        </li>
      </React.Fragment>
    );
  
    return (
      <div className='navbar bg-primary'>
        <h1>
          <Link to='/'>
            <i className={icon} /> Keep In Touch
          </Link>
        </h1>
        <ul>{isAuthenticated ? authLinks : guestLinks}</ul>
      </div>
    );
  };
  
  Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string
  };
  
  Navbar.defaultProps = {
    title: 'Contact Keeper',
    icon: 'fas fa-id-card-alt'
  };
export default Navbar;