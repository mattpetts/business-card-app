import React from 'react'

const ContactPill = ({ content, dark }) => {
    return (
        <span className={`rounded-full py-1 px-3 mx-1 inline-block mb-1 ${dark ? 'border-slate-100' : 'border-black'} border-[1px] text-inherit`}>{content}</span>
    )
}

export default ContactPill