import React, { useState } from 'react'
import { Container, Col, Row } from 'reactstrap';
import { useLocation } from 'react-router-dom';
import CommanSection from '../shared/CommanSection'
import TourCard from '../shared/TourCard';
import NewsLetter from '../shared/NewsLetter';

const SearchResult = () => {
  const location = useLocation();
  const [data] = useState(location.state)
  console.log(data)




  return (
    <>
      <CommanSection title={'Tour Search Result'} />
      <section>
        <Container>
          <Row>
            {data.length == 0 ? (
              <h4 className='text-center'>No tour Found</h4>
            ) : (
              data?.map(tour => (
                <Col lg='3' className='mb-4' key={tour._id}>
                  <TourCard tour={tour} />
                </Col>
              ))
            )}

          </Row>
        </Container>
      </section>
      <NewsLetter />
    </>
  )
}

export default SearchResult