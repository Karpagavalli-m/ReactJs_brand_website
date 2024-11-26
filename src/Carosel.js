import React, { useState } from 'react'
import { Carousel, Container } from 'react-bootstrap'

const Carosel = ({array,id=''}) => {
  return (
    <>
    <Carousel data-bs-theme="dark" controls={(id==='banner')}>
    {array.map((item,idx) =>(
      <Carousel.Item >
      <img key={idx}
        className={`d-flex ${((id==='banner'))?'w-100':'w-100'} rounded`} id={id}
        src={require(`${item}`)}
      />
    </Carousel.Item>
    ))}
  </Carousel>
  </>
  )
}

export default Carosel