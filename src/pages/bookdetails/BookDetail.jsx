import React from 'react'
import { useParams } from 'react-router-dom'
import BookDetailCard from '../../components/BookDetailCard'

function BookDetail() {
  
  let { id } = useParams()

  return (
    <BookDetailCard id = {id}/>
  )
}

export default BookDetail