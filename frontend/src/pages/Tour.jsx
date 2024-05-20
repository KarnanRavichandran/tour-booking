import React, { useState, useEffect } from 'react';
import CommanSection from '../shared/CommanSection';
import '../styles/tour.css';
import NewsLetter from '../shared/NewsLetter';
import SearchBox from '../shared/SearchBox';
import TourCard from '../shared/TourCard';
import { Container, Row, Col } from 'reactstrap';
import useFetch from '../hooks/useFetch';
import { BASE_URL } from '../utils/config';

const Tour = () => {
  const [pageCount, setPageCount] = useState(0);
  const [page, setPage] = useState(0);

  const { data: tours, loading, error } = useFetch(`${BASE_URL}/tours?page=${page}`);
  const { data: tourCount, } = useFetch(`${BASE_URL}/tours/search/getTourCount`);

  useEffect(() => {
    const pages = Math.ceil(tourCount / 4);
    setPageCount(pages);
    window.scroll(0,0)
  }, [tourCount,page,tours]);
  console.log(tours)

  return (
    <>
      <CommanSection title={'All Tours'} />
      <section>
        <Container>
          <Row>
            <SearchBox />
          </Row>
        </Container>
      </section>

      <section className='pt-0'>
        <Container>
          {!loading && !error && (
            <Row>
              {tours?.map((tour) => (
                <Col lg='3' className='mb-4' key={tour._id}>
                  <TourCard tour={tour} />
                </Col>
              ))}

              <Col lg='12'>
                <div className='pagination d-flex align-items-center justify-content-center mt-4 gap-3'>
                  {[...Array(pageCount).keys()].map((number) => (
                    <span
                      key={number}
                      onClick={() => setPage(number)}
                      className={page === number ? 'active__page' : ''}
                    >
                      {number + 1}
                    </span>
                  ))}
                </div>
              </Col>
            </Row>
          )}
        </Container>
      </section>
      <NewsLetter />
    </>
  );
};

export default Tour;
