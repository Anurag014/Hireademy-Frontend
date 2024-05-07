import React from 'react'

function Error() {
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-[#1F2833] text-white">
      <div className="p-12 flex flex-col lg:flex-row items-center justify-between gap-8">
        <div className="">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Page you are looking for doesn't exists</h1>
        </div>
        <img src="assets/page_not_found.jpg" width={516.5} height={391.5} alt="Books Image" className="rounded-full" />
      </div>
    </div>
  )
}

export default Error