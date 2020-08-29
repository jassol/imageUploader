import React from 'react';

const SingleImage = (props) => {
  const { imageurl } = props;
  return (
    <div className='single-image-container'>
      <div>
        <div>
          <img src={imageurl} alt='' className='single-image'/>
        </div>
      </div>
    </div>
  )
}

export default SingleImage;
