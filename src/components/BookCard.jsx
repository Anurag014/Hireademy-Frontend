import { Link } from 'react-router-dom';


function BookCard({ book }) {

  return (
    <>
      <div className="w-full max-w-xs mx-auto rounded-lg overflow-hidden shadow-lg flex m-8 p-2 border-[1px] border-[#66FCF1]">
        <div className='h-32 w-[30%] bg-[url(assets/noimage.jpg)] bg-cover rounded-md'>
          <img
            src={`https://covers.openlibrary.org/b/isbn/${book.isbn}.jpg?default=false`}
            alt=""
            className='h-full w-full rounded-md'
          />
        </div>
        <div className='ps-2 w-[70%]'>
          <Link to={`/books/${book.id}`} className='text-white font-bold text-l hover:text-xl hover:underline hover:text-[#45A29E]'>
            <h1>{book.title}</h1>
          </Link>
          <div className='text-gray-400 text-sm'>
              Authors: {book.authors?.map(author => author).join(', ')}
          </div>
        </div>
      </div>
    </>
  );
}

export default BookCard;
