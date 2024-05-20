import React, { useState, useContext } from 'react';
import { Container, Button, Row, Col, Form, FormGroup } from 'reactstrap';
import { Link } from 'react-router-dom';
import '../styles/login.css';
import loginImg from '../assets/images/login.png';
import userIcon from '../assets/images/user.png';
import { useNavigate } from 'react-router-dom';

import { AuthContext } from '../context/AuthContext';
import { BASE_URL } from '../utils/config';

const Login = () => {
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({
    email: '',
    password: '',
  });

  const { dispatch } = useContext(AuthContext);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setCredentials((prevCredentials) => ({
      ...prevCredentials,
      [id]: value,
    }));
  };

  const handleClick = async (e) => {
    e.preventDefault();

    dispatch({ type: 'LOGIN_START' });
    try {
      const res = await fetch(`${BASE_URL}/auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include', // Set credentials to 'include'
        body: JSON.stringify(credentials),
      });
      

      const result = await res.json();
      if (!res.ok) {
        alert(result.message);
        dispatch({ type: 'LOGIN_FAILURE', payload: result.message });
        console.log(result.data);
      }
      
       else {
        dispatch({ type: 'LOGIN_SUCCESS', payload: result.data });
        navigate('/');
      }
    } catch (error) {
      console.error('Error:', error);
      dispatch({ type: 'LOGIN_FAILURE', payload: error.message });
    }
    
  };

  return (
    <section>
      <Container>
        <Row>
          <Col lg='8' className='m-auto'>
            <div className='login__container d-flex justify-content-between'>
              <div className='login__img'>
                <img src={loginImg} alt='' />
              </div>

              <div className='login__form'>
                <div className='user'>
                  <img src={userIcon} alt='' />
                </div>
                <h2>Login</h2>

                <Form onSubmit={handleClick}>
                  <FormGroup>
                    <input
                      type='text'
                      placeholder='Email'
                      required
                      id='email'
                      onChange={handleChange}
                    />
                  </FormGroup>

                  <FormGroup>
                    <input
                      type='password'
                      placeholder='Password'
                      required
                      id='password'
                      onChange={handleChange}
                    />
                  </FormGroup>
                  <Button type='submit' className='auth__btn'>
                    Login
                  </Button>
                </Form>
                <p>
                  Don't have an account? <Link to={'/register'}>Create</Link>{' '}
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Login;
