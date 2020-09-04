import React from 'react';

const PageHeader = (props) => {
  const { title } = props;
  return (
    <div className='page-title-container'>
      <h1 className='page-title'>{title}</h1>
    </div>
  )
}

export default PageHeader;
