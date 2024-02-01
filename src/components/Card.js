import React from 'react';
import { FaGithub, FaTwitter, FaLinkedin, FaLink } from 'react-icons/fa';
import SocialLink from './SocialLink';
import ContactPill from './ContactPill';
const availableColours = require('../data/ColourSchemes.json');

const Card = ({ data }) => {

    if (!data.colour_scheme) {
        return;
    }

    const colourScheme = data.colour_scheme;
    const dark = colourScheme ? availableColours[colourScheme].dark : false;

    return (
        <div className={`w-full max-w-[1400px] h-full block m-auto ${availableColours[colourScheme].classes} ${dark ? 'text-slate-100' : 'text-black'} p-8 rounded-3xl shadow-lg shadow-slate-700 flex justify-center items-center`}>
            <div className='flex flex-col justify-center items-start md:items-center'>
                <h1 className='text-5xl font-bold mb-3 text-left md:text-center'>{data.name}</h1>
                <h3 className='text-2xl font-bold mb-3 text-left md:text-center'>{data.title} {(data.title && data.company) && `@`} {data.company}</h3>
                <div className='flex justify-center items-center mb-3'>
                    <p className='text-xs'>{data.email && <ContactPill content={data.email} dark={dark} />} {data.telephone && <ContactPill content={data.telephone} dark={dark} />}</p>
                </div>
                <div className={`w-full flex justify-start items-center md:justify-center`}>
                    {data.github && <SocialLink link={data.github} icon={<FaGithub />} dark={dark} />}
                    {data.x && <SocialLink link={data.x} icon={<FaTwitter />} dark={dark} />}
                    {data.linkedin && <SocialLink link={data.linkedin} icon={<FaLinkedin />} dark={dark} />}
                    {data.website && <SocialLink link={data.website} icon={<FaLink />} dark={dark} />}
                </div>
            </div>
        </div>
    )
}

export default Card