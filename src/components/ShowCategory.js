import React from 'react'
import PropTypes from 'prop-types';

export const ShowCategory = ({ url, title}) => {
  return (
    <div className='card'>
        <div className='card-img'>
            <img src={url} alt={title}/>
        </div>    
        <div className='card-name'>
            {title.slice(0,10)}
        </div>
    </div>
  )
}

ShowCategory.propTypes = {
    url: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
}
