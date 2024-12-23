import React from 'react'

const Timelineitem = ({ title, isChecked, onClick, data, subtitle }) => {
    return (
        <div className='flex flex-col items-center z-20' onClick={onClick}>

            <input
                type='checkbox'
                className='border-2 cursor-pointer'
                checked={isChecked}
                readOnly
            />

            <p className='font-bold'>{title}</p>
            <p className='text-xs text-gray-500 font-semibold'>{subtitle}</p>

        </div>
    );
};

export default Timelineitem