import React from 'react'

function Images({ images }) {

  return (
    <div className="images-container">
      {images.map(n => (
        <div key={n}>
          <img src={n} alt="" />
        </div>
      ))}
    </div>
  )
}

export default Images