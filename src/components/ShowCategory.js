import React from 'react'

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
