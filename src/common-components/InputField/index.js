import React, {useState} from 'react';
import PropTypes from 'prop-types';


const TextFieldGroup = ({ field, value , type , onChange, placeholder }) =>
{
    const handleChange = (e) =>
    {
        onChange(e);
    }
    return(
        <>
             {type === 'textarea' ? (
                <textarea
                    className='form-control'
                    type={type} 
                    name={field}
                    value={value}
                    defaultValue={value}
                    onChange={handleChange}
                    placeholder ={placeholder}
                    rows = "3"
                />
            ) : (
                <input
                    type={type}
                    name={field}
                    value={value}
                    className='form-control'
                    onChange={handleChange}
                    placeholder ={placeholder}
                />
            )}
        </>
    )
}

TextFieldGroup.prototype = {
    field: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    placeholder: PropTypes.string
    // error: PropTypes.string,
    // label: PropTypes.string.isRequired,
}

export default TextFieldGroup;