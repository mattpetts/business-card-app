import React from 'react'

const SocialLink = (props) => {
    return (
        <a href={props.link} target="_blank">
            <div className={`m-2 rounded-full w-[30px] h-[30px] border-[1px] transition-transform duration-500 ${props.dark ? 'border-slate-100 text-slate-100' : 'border-black text-black'} flex justify-center items-center hover:border-2 hover:scale-[1.3]`}>
                {props.icon}
            </div>
        </a>
    )
}

export default SocialLink