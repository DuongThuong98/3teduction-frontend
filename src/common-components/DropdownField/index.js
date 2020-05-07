import React, { useState } from "react";
import PropTypes from "prop-types";

const DropDownFieldGroup = ({ field, value, onChange, optional, defaultOptionalvalue, datas, defaultStringOption }) => {

    const handleChange = e => {
        onChange(e);
    };

    return (
        <>
            <select
                className="form-control"
                name={field}
                value={value}
                onChange={handleChange}
            >
                {optional && (
                    <option value={defaultOptionalvalue}> {defaultStringOption}</option>
                )}
                {datas.length &&
                    datas.map((x, idx) => {
                        return (
                            <React.Fragment key={idx}>
                                <option value={x.id}> {x.name}</option>
                            </React.Fragment>
                        );
                    })}
            </select>
        </>
    );
};

DropDownFieldGroup.prototype = {
    field: PropTypes.string.isRequired, // name
    value: PropTypes.object.isRequired, // value
    onChange: PropTypes.func.isRequired,
    optional: PropTypes.bool,
    defaultOptionalvalue: PropTypes.string,
    datas: PropTypes.array,
    defaultStringOption: PropTypes.string
};

export default DropDownFieldGroup;
