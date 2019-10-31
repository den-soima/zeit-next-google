import React from 'react';

const Input = (props) => {
    return (
        <div>
            <label>
                {props.name}
                <input type={props.type}
                       name={props.name}
                       value={props.value}
                       onChange={props.onChange}/>
            </label>
        </div>
    )    
};

export default Input;