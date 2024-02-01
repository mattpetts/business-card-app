import React, { useState, useEffect } from 'react'

const TextInput = (props) => {

    const [value, setValue] = useState(props.default);

    useEffect(() => {
        setValue(props.default)
    }, [props.default])

    const handleSetValue = (e) => {
        setValue(e.target.value);
        props.updateValue({'name': e.target.name, 'value': e.target.value})
    }

    return (
        <input className='w-full bg-slate-800 border-b-2 border-slate-700 py-2 px-1 text-white outline-none mb-2 text-lg autofill:bg-slate-800' type="text" name={props.name} value={value || ''} onChange={handleSetValue} placeholder={props.placeholder} />
    )
}

export default TextInput