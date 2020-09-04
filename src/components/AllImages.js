import React, { useEffect, useState } from 'react';
import axios from 'axios';
import SingleImage from './SingleImage';
import Spinner from './Spinner';
import PageHeader from './PageHeader'

const loadOnScroll = () => {};
const loadOnResize = () => {};

const AllImages = (props) => {

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
  const [images, setImages] = useState({imageData: [], loading: true});

  // React hook that runs after every render
  useEffect(() => {
    const fetchData = async () => {
      const userId = props.user ? '/' + props.user.id : '';
      const queryString = '/api/images' + userId;
      const { data } = await axios.get(queryString);
      setImages({ imageData: data, loading: false });
    }
    fetchData();
  }, []);

  if (images.loading) return (
    <div>
      <PageHeader title='All Images' />
      <Spinner />
    </div>
  )
  else if (!images.imageData.length) return (
    <div>
      <PageHeader title='All Images' />
      <h3>No Images Yet. Try uploading.</h3>
    </div>
  )
  else {
    return (
    <div>
      <PageHeader title='All Images' />
      <div className='image-flex-container'>
        <div className='image-flex'>
          {images.imageData.map(imageData => {
            return <SingleImage key={imageData.id} {...imageData}/>
          })}
        </div>
      </div>
    </div>
    )
  }
}

export default AllImages;
