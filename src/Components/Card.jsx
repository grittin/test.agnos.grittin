import React from 'react';

function Card(props) { 
    return (
        <div className='bg-white rounded-xl shadow-lg'>
            {props.children}
        </div>   
    )
}
export default Card