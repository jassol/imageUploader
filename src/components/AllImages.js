import React, { useEffect, useState } from 'react';
import axios from 'axios';
import SingleImage from './SingleImage';
import Spinner from './Spinner';

const loadOnScroll = () => {};
const loadOnResize = () => {};

const AllImages = () => {

  // Set up listeners for scroll & resize events for lazy loading
  useEffect(() => {
    window.addEventListener('scroll', loadOnScroll);
    window.addEventListener('resize', loadOnResize);
    console.log('added event listeners')
    return function cleanupListeners() {
      window.removeEventListener('scroll', loadOnScroll);
      window.removeEventListener('resize', loadOnResize);
      console.log('REMOVED event listeners')
    }
  });

  // Load the image data
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);

  // react hook that runs after every render
  useEffect(() => {
    const fetchData = async () => {
      const allImages = await axios.get('/api/images');
      setImages(allImages);
      setLoading(false);
    }
    fetchData();
  }, []);

  if (loading) return (
    <div>
      <h3>All Images</h3>
      <Spinner />
    </div>
  )
  else if (!images.data.length) return (
    <div>
      <h3>All Images</h3>
      <h3>No Images Yet. Try uploading.</h3>
    </div>
  )
  else return (
    <div>
      <h3>All Images</h3>
      <div className='image-flex'>
        {images.data.map(imageData => {
          return <SingleImage key={imageData.id} {...imageData}/>
        })}
      </div>
    </div>
  )
}

export default AllImages;
