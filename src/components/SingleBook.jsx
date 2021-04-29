import React from 'react'
import { Card } from 'react-bootstrap'

const SingleBook = ({ book }) => (
    <Card className='book-cover'>
    <Card.Img variant="top" src={book.img} />
    <Card.Body>
      <Card.Title>{book.title}</Card.Title>
    </Card.Body>
  </Card>
)

export default SingleBook