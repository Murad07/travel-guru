import React from 'react';
import { useParams } from 'react-router-dom';
import fakeData from '../../fakeData/index';
import './Hotel.css';

const Hotel = () => {
  const { title } = useParams();
  const hotels = fakeData.filter((item) => item.origin === title);
  console.log(hotels);
  return (
    <div className='row mt-5 text-white pl-3'>
      <div className='col-6 hotelBg '>
        {hotels.map((hotel) => (
          <div className='row pt-2 '>
            <div className='col-5'>
              <img
                style={{ maxWidth: 180 }}
                src={require('../../images/Image/' + hotel.img)}
                alt=''
              />
            </div>
            <div className='col-7'>
              <h4>{hotel.title}</h4>
              <p>{hotel.details}</p>
              <h5>$ {hotel.price}</h5>
            </div>
          </div>
        ))}
      </div>
      <div className='col-6'>Map</div>
    </div>
  );
};

export default Hotel;
