import React from 'react';
import { useParams } from 'react-router-dom';
import fakeData from '../../fakeData/index';
import HotelMap from '../HotelMap/HotelMap';
import './Hotel.css';

const Hotel = () => {
  const { title } = useParams();
  const hotels = fakeData.filter((item) => item.origin === title);
  const latLng = [hotels[0].lat, hotels[0].lng];
  console.log(hotels[0].lat);
  return (
    <div>
      <h5 className='pl-3'>Stay in {title}</h5>
      <div className='row mt-2 text-white pl-3'>
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
        <div className='col-6'>
          <HotelMap latLng={latLng}></HotelMap>
        </div>
      </div>
    </div>
  );
};

export default Hotel;
