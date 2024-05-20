import React, { useEffect, useContext, useRef } from 'react'
import { Container, Row, Button } from 'reactstrap'
import { NavLink, Link } from 'react-router-dom'
import logo from '../../assets/images/logo.png'
import './header.css'
import { useNavigate } from 'react-router-dom';

import { AuthContext } from './../../context/AuthContext'




const nav_links =
  [
    {
      path: '/home',
      display: 'Home'
    },

    {
      path: '/about',
      display: 'About'
    },

    {
      path: '/tours',
      display: 'Tours'
    },

  ]

const Header = () => {
  const navigate = useNavigate();
  const { user, dispatch } = useContext(AuthContext);

  const logout = () => {
    dispatch({ type: 'LOGOUT' })
    navigate('/')
  }

  return (
    <div>
      <header className='header'>
        <Container>
          <Row>
            <div className='nav_wrapper d-flex align-item-center justify-content-between' >
              <div className='logo'>
                <img src={logo} alt='' />
              </div>

              <div className='navigation'>
                <ul className="menu d-flex align-item-center gap-5">
                  {nav_links.map((item, index) => (
                    <li className='nav_item' key={index}>
                      <NavLink to={item.path} className={navClass => navClass.isActive ? 'active__link' : ''}>{item.display}</NavLink>

                    </li>
                  ))}
                </ul>
              </div>
              <div className="nav_right d-flex align-items-center gap-4">
                <div className='nav_btns d-flex align-items-center gap-4'>
                  {user ? (
                    <>
                      <h5 className='mb-0'>{user.username}</h5>
                      <Button onClick={logout} color="primary">Logout</Button>
                    </>
                  ) : (
                    <>
                      <Button tag={Link} to='/login' color="primary">Login</Button>
                      <Button tag={Link} to='/register' color="success">Register</Button>
                    </>
                  )}
                </div>

                <span className="mobile_menu">
                  <i className="ri-menu-line"></i>
                </span>
              </div>


            </div>
          </Row>
        </Container>
      </header>
    </div>
  )
}

export default Header