import React from 'react'
import { useState, useEffect } from 'react'
import BookCard from '../../components/BookCard'

function Book() {

    const [books, setBooks] = useState([])

    const [loading, setLoading] = useState(false)

    const fetchData = async () => {
        try {
            let url = `https://softwium.com/api/books`
            const response = await fetch(url);
            const results = await response.json();
            setBooks(results)
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

    if (loading) {
        return (
            <div className='h-[85vh] w-full flex justify-center item-center bg-[#1F2833]'>
                <div className=' text-white'>Loading....</div>
            </div>
        )
    } else {
        return (
            <>
                <div className='h-[85vh] w-full flex flex-wrap justify-center items-start bg-[#1F2833] overflow-y-scroll' style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}>
                    {books && books.map((book) => (
                        <BookCard key={book.id} book={book} className="m-4" />
                    ))}
                </div>

            </>
        )
    }

}

export default Book