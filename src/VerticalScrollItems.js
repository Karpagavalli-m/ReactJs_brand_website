import React from 'react'
import { Card, Col, Stack } from 'react-bootstrap'

const VerticalScrollItems = ({array}) => {
  return (
    <Stack direction='horizontal' className='d-lg-none m-3'>
      {array.map((item, idx) => (
        <Col key={idx} className='g-2 me-3' xs={5} sm={4}>
          <Card className='align-items-center' >
          <Card.Img variant="top" src={require(`${item.image}`)}
          id="card-image" />
            <Card.Body className='p-2 fs-5'>
            <Card.Text> {item.title} </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}   
        </Stack>
  )
}

export default VerticalScrollItems