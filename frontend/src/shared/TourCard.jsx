import React from 'react';
import { Card, CardBody, Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import "./tour-card.css";
import calculateAvgRatings from '../utils/avgRating';

const TourCard = ({ tour }) => {
  const { _id, title, photo, price, featured, reviews, city } = tour;

  const { totalRating, avgRating } = calculateAvgRatings(reviews)

  return (
    <div className='tour__card'>
      <Card>
        <div className="tour__img">
          <img src={photo} alt='tour-img' />
          {featured && <span>Featured</span>}
        </div>

        <CardBody>

          <div className='card__top d-flex align-item-center justify-content-between'>
            <span className='tour__location d-flex align-items-center gap-1'>
              <i class="ri-map-pin-2-line"></i>{city}
            </span>

            <span className='tour__rating d-flex align-items-center gap-1'>
              <i className="ri-star-fill"></i>
              {avgRating === '' ? null : avgRating}
              {totalRating === 0 ? ' No rated' : ` (${reviews.length})`}
            </span>

          </div>
          <h5 className="tour__title">
            <Link to={`/tours/${_id}`}>{title}</Link>
          </h5>

          <div className="card__bottom d-flex align-item-center justify-content-between mt-3">
            <h5>${price}<span> /per person</span></h5>

            <Button tag={Link} to={`/tours/${_id}`} color="primary">Book Now</Button>
          </div>
        </CardBody>
      </Card>

      
    </div>
  )
}

export default TourCard