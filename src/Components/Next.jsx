import React from 'react';
import { useNavigate } from 'react-router-dom';

const Next = () => {
    const navegate = useNavigate()
    return (
        <div className='flex'>
            <button 
            onClick={() => navegate('Finger')}
                className='grow border-2 rounded-lg h-12 bg-gray-100 hover:bg-gray-200 hover:text-gray-500'> 
                <div className='text-gray-400 px-2 py-1 '>ต่อไป</div>
            </button>
        </div>
    )
}
export default Next