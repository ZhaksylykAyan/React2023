import React from 'react'

const Quiz = () => {

    return (
        <>
            <div className='w-full text-white'>
                <img className='w-full h-full object-cover'
                     src='https://w.forfun.com/fetch/c0/c03f8d9ce9c7bfcdd5f76174c53b238f.jpeg' alt='/'/>
                <div className='bg-black/70 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-4 md:p-8 flex flex-col h-full w-[70%]'>
                    <h1 className='text-red-600 text-3xl md:text-5xl font-bold text-center w-full'>My Quiz</h1>
                    <p className='text-white text-2xl text-center mt-4'>Question1:</p>
                </div>
            </div>
        </>
    )
}

export default Quiz