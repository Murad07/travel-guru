import React from 'react';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';

const LocationCard = (props) => {
  const { id, title, img } = props.location;
  console.log(title);
  return (
    <div>
      <a href={`/booking/${id}`}>
        <Card>
          <CardActionArea>
            <div style={{ position: 'relative' }}>
              <CardMedia
                component='img'
                alt='Contemplative Reptile'
                height='240'
                image={require('../../images/Image/' + img)}
                title='Contemplative Reptile'
              />
              <div
                style={{
                  position: 'absolute',
                  color: 'white',
                  bottom: 8,
                  left: '50%',
                  transform: 'translateX(-50%)',
                }}
              >
                {title}
              </div>
            </div>
          </CardActionArea>
        </Card>
      </a>
    </div>
  );
};

export default LocationCard;
