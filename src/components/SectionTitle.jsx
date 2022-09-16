import React from 'react'

const SectionTitle = ({p1, p2, className}) => {
  return (
    <div className={`${className}`}>
        <h2 className='uppercase'>
            <span className='p1 text-4xl md:text-7xl'>{p1}</span>
            <br />
            <span className="p2 text-5xl md:text-8xl">{p2}</span>
        </h2>
    </div>
  )
}

export default SectionTitle