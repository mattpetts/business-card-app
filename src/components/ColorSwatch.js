import React from 'react';

const ColorSwatch = ({ colour_scheme, active, clickFunction, name }) => {
    const availableColours = require('../data/ColourSchemes.json')

    if (!colour_scheme) {
        return;
    }

    return (
        <div className={`p-[3px] w-[90px] min-w-[90px] h-[55px] mr-2 mb-2 rounded shadow-xs shadow-slate-700 cursor-pointer ${active ? 'bg-gradient-to-r from-green-400 to-blue-500' : 'bg-transparent'}`} onClick={clickFunction}>
            <div className={`w-full h-full ${availableColours[colour_scheme].classes} rounded flex justify-center items-center`}>
                <p className={`text-xs ${availableColours[colour_scheme].dark ? 'text-slate-100' : 'text-black' } `}>{name}</p>
            </div>
        </div>
    )
}

export default ColorSwatch