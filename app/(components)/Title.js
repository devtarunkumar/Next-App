import React from 'react'

function Title({title1, title2, titlestyles, title1styles, parastyles}) {
  return (
    <div className={titlestyles}>
        <h2 className={title1styles}>
            {title1} 
            <span className='text-destructive'>{title2}</span>
        </h2>
        <p className={parastyles}>Explore our wide range of electronics and gadgets, <br /> carefully curated to meet all your tech needs.
        </p> 
        
    </div>
  )
}

export default Title