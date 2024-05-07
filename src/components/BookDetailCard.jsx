import React from 'react'
import { useState, useEffect } from 'react'

function BookDetailCard(id) {

  const [bookDetail, setBookDetail] = useState([])

  const [loading, setLoading] = useState(false)

  const fetchData = async () => {
    try {
      let url = `https://softwium.com/api/books/${id.id}`
      const response = await fetch(url);
      const results = await response.json();
      setBookDetail(results)
      setLoading(true)
      console.log(results)
    } catch (error) {
      console.log(error)
    }
    finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchData()
  }, []);

  return (
    <>
      <div className="flex flex-col justify-center h-full w-full bg-[#1F2833] text-white">
        <div className="p-12 flex flex-col lg:flex-row items-center gap-8">
        <div className='h-[73vh] w-[30%] bg-[url(assets/noimage.jpg)] bg-cover rounded-md'>
          <img
            src={`https://covers.openlibrary.org/b/isbn/${bookDetail.isbn}.jpg?default=false`}
            alt=""
            className='h-full w-full rounded-md'
            width={516.5} height={391.5}
          />
        </div>
          <div className="w-[70%]">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 text-[#66FCF1]">{bookDetail.title}</h1>
            <p className="text-lg md:text-xl mb-8">{`ISBN: ${bookDetail.isbn}`}</p>
            <p className="text-lg md:text-xl mb-8">{`Page Count: ${bookDetail.pageCount}`}</p>
            <p className="text-lg md:text-xl mb-8">{`Authors: ${bookDetail.authors?.map(author => author).join(', ')}`}</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default BookDetailCard