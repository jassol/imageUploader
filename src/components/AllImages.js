import React, { useEffect, useState } from 'react';
import axios from 'axios';
import SingleImage from './SingleImage';
import Spinner from './Spinner';

const AllImages = () => {

  const [data, setData] = useState({ allImages: [] });

  // react hook that runs after every render
  useEffect(() => {
    const fetchData = async () => {
      const allImageData = await axios.get('/api/images');
      setData(allImageData)
    }
    fetchData();
  }, []);

  if (!data.data) return <Spinner />;
  else return (
    <div>
      <h3>All Images</h3>
      <div className='image-flex'>
        {data.data.map(imageData => {
          return <SingleImage key={imageData.id} {...imageData}/>
        })}
      </div>
    </div>
  )
}

export default AllImages;
