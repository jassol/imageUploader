import React from 'react';

const PageHeader = (props) => {
  const { title } = props;
  return (
    <h1 className='page-title'>{title}</h1>
  )
}

export default PageHeader;
