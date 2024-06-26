import React, { useRef } from 'react';
import { Col, Form, FormGroup } from 'reactstrap';
import './search-box.css';
import { BASE_URL } from '../utils/config';
import { useNavigate } from 'react-router-dom';

const SearchBox = () => {
  const locationRef = useRef('');
  const distanceRef = useRef(0);
  const maxGroupSizeRef = useRef(0);
  const navigate = useNavigate();

  const searchHandler = async () => {
    const location = locationRef.current.value;
    const distance = distanceRef.current.value;
    const maxGroupSize = maxGroupSizeRef.current.value;

    if (location === '' || distance === '' || maxGroupSize === '') {
      return alert('All fields are required!');
    }

    try {
      const res = await fetch(
        `${BASE_URL}/tours/search/getTourBySearch?city=${location}&distance=${distance}&maxGroupSize=${maxGroupSize}`
      );

      if (!res.ok) {
        throw new Error('Something went wrong');
      }

      const result = await res.json();
      navigate(`/tours/search?city=${location}&distance=${distance}&maxGroupSize=${maxGroupSize}`, {
        state: result.data,
      });
    } catch (error) {
      console.error('Error:', error);
      alert('Something went wrong');
    }
  };

  return (
    <Col lg='12'>
      <div className='search__bar'>
        <Form className='d-flex align-items-center gap-4'>
          <FormGroup className='d-flex gap-3 from__group from__group-fast'>
            <span> <i className="ri-mind-map"></i> </span>
            <div>
              <h6>Location</h6>
              <input type='text' placeholder='Where are you going' ref={locationRef} />
            </div>
          </FormGroup>

          <FormGroup className='d-flex gap-3 from__group from__group-fast'>
            <span><i className="ri-map-pin-add-line"></i> </span>
            <div>
              <h6>Distance</h6>
              <input type='number' placeholder='Distance k/m' ref={distanceRef} />
            </div>
          </FormGroup>

          <FormGroup className='d-flex gap-3 from__group from__group-last'>
            <span> <i className="ri-group-line"></i> </span>
            <div>
              <h6>Max People</h6>
              <input type='number' placeholder='0' ref={maxGroupSizeRef} />
            </div>
          </FormGroup>

          <span className='search__icon' onClick={searchHandler}>
            <i className="ri-search-line"></i>
          </span>
        </Form>
      </div>
    </Col>
  );
}

export default SearchBox;
