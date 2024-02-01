import React, { useState, useEffect } from 'react';
import InputWrapper from './InputWrapper';
import TextInput from './TextInput';
import ColorSwatch from './ColorSwatch';
const availableColours = require('../data/ColourSchemes.json');

const Toolbar = ({ updateData, open, data, saveCard }) => {

    const [valid, setValid] = useState(false);

    useEffect(() => {
        if (data.name && data.title) {
            setValid(true);
        } else {
            setValid(false);
        }
    }, [data])

    return (
        <div className={`flex w-full md:w-3/12 flex-col justify-start items-start bg-slate-800 absolute right-0 top-0 ${open ? 'left-0 md:left-[75%]' : 'left-full' } overflow-x-hidden overflow-y-scroll h-screen transition-all duration-300`}>
            <div className='w-full p-8'>
                <InputWrapper title="Colour Scheme">
                    <div className='flex justify-start items-center flex-wrap'>
                        {Object.keys(availableColours).map(keyName => (
                            <ColorSwatch key={keyName} active={data.colour_scheme === keyName} name={keyName} colour_scheme={keyName} clickFunction={() => updateData({'name': 'colour_scheme', 'value': keyName})} />
                        ))}
                    </div>
                </InputWrapper>
                <InputWrapper>
                    <TextInput name="name" placeholder="Your Name" default={data.name} updateValue={(obj) => updateData(obj)} />
                </InputWrapper>
                <InputWrapper>
                    <TextInput name="title" placeholder="Your Job Title" default={data.title} updateValue={(obj) => updateData(obj)} />
                </InputWrapper>
                <InputWrapper>
                    <TextInput name="company" placeholder="Your Company" default={data.company} updateValue={(obj) => updateData(obj)} />
                </InputWrapper>
                <InputWrapper>
                    <TextInput name="email" placeholder="Your Email Address" default={data.email} updateValue={(obj) => updateData(obj)} />
                </InputWrapper>
                <InputWrapper>
                    <TextInput name="telephone" placeholder="Your Phone Number" default={data.telephone} updateValue={(obj) => updateData(obj)} />
                </InputWrapper>
                <InputWrapper>
                    <TextInput name="github" placeholder="Github Link" default={data.github} updateValue={(obj) => updateData(obj)} />
                </InputWrapper>
                <InputWrapper>
                    <TextInput name="x" placeholder="X Link" default={data.x} updateValue={(obj) => updateData(obj)} />
                </InputWrapper>
                <InputWrapper>
                    <TextInput name="linkedin" placeholder="Linkedin Link" default={data.linkedin} updateValue={(obj) => updateData(obj)} />
                </InputWrapper>
                <InputWrapper>
                    <TextInput name="website" placeholder="Website Link" default={data.website} updateValue={(obj) => updateData(obj)} />
                </InputWrapper>
                <button disabled={!valid} className='py-4 px-8 rounded-full w-full bg-slate-600 text-slate-100 font-bold mt-1 disabled:opacity-50 disabled:hover:bg-slate-600 hover:bg-gradient-to-r from-green-400 to-blue-500' onClick={saveCard}>SAVE</button>
            </div>
        </div>
        
    )
}

export default Toolbar