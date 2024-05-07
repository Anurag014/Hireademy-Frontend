import React from 'react'

function Home() {

    return (
        <>
            <div className="flex flex-col justify-center items-center h-[85vh] bg-[#1F2833] text-white">
                <div className="p-12 flex flex-col lg:flex-row items-center justify-between gap-8">
                    <div className="">
                        <h1 className="text-4xl md:text-6xl font-bold mb-4">Discover, Explore, and Dive into the World of Books</h1>
                        <p className="text-lg md:text-xl mb-8">Unlock limitless knowledge and imagination with our vast collection of books.</p>
                    </div>
                    <img src="assets/books.png" width={516.5} height={391.5} alt="Books Image" className="" />
                </div>
            </div>
        </>
    )
}

export default Home