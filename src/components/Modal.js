import React from 'react'

const Modal = (props) => {
    return (
        <div className='fixed w-full h-screen bg-black flex justify-center items-center p-8 top-0 left-0'>
            <div className='w-full h-screen bg-gradient-to-r from-green-400 to-blue-500 fixed blur-sm'></div>
            <div className='bg-slate-100 rounded p-5 flex justify-center items-center z-[100] p-8'>
                <p>{props.content}</p>
            </div>
        </div>
    )
}

export default Modal