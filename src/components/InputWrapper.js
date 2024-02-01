import React from 'react'

const InputWrapper = (props) => {
    return (
        <div className='w-full'>
            {props.title && <label className='text-white text-xs'>{props.title}</label>}
            {props.children}
        </div>
    )
}

export default InputWrapper