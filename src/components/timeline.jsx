import React from 'react'
import Timelineitem from './timelineitem'
import { useState } from 'react';
const Timeline = () => {
    const [completedSteps, setCompletedSteps] = useState(1);
    const setSteps = (steps) => {
        if (steps > 4) {
            setCompletedSteps(4)
        }
        else if (steps < 1) {
            setCompletedSteps(1)
        }
        else {
            setCompletedSteps(steps)
        }

    }


    const stepTitle = [
        'Set your goal 🎯',
        'Create or join Group 👥',
        'Pay amount on time 💳',
        'Earn Rewards 🎁'

    ]
    const stepImage = [
        'goal.png',
        'create.png',
        'pay.png',
        'reward.jpg'
    ]
    const stepData = [
        'Har mahine aapke group ke sab friends chhota fixed amount contribute karenge taaki ek pooled fund ban sake. Har mahine ek friend ye pool money le sakta hai and can use it for planned ya unplanned kharcho ke liye',

        'Har friend ko pool fund mein har mahine contribution par Beesi Coins milte hain, aur yeh Beesi Coins wo cafes par discounts lene ke liye use kar sakte hain.',
        'Har ek friend kisi bhi ek mahine pool money le sakta hai aur wo ise apne planned and unplanned expenses ke liye use kar sakta hai. Number of friends = Number of months',

        'Ek aur discount bhi hai: jab bhi koi friend Beesi mein pool money leta hai aur usne koi buying goal set kiya hai—chahe vo trip ho, gadgets ho, ya koi aur purchase—us friend ko us goal par 10% tak ka discount milega.'
    ]

    const handleStepClick = (step) => {
        setSteps(step);
    };

    return (
        <div className='flex flex-col items-center w-full h-full'>
            <div className='relative flex items-center mb-4'>

                <div className='absolute top-1 left-0 w-full h-1 bg-gray-300 z-0'></div>
                <div
                    className='absolute top-1 left-0 h-1 bg-green-500 z-10 '
                    style={{ width: `${(completedSteps - 1) * 33.3}%` }}
                ></div>

                <div className='flex gap-x-20'>
                    {stepData.map((ele, index) => (

                        <Timelineitem
                            key={index}
                            title={"Step " + (index + 1)}
                            isChecked={index < completedSteps}
                            subtitle={stepTitle[index]}
                            onClick={() => handleStepClick(index + 1)}
                        />
                    ))}
                </div>
            </div>
            <div className='flex flex-col items-center w-[90%]  lg:w-[70%]  p-3 '>
                <div className='bg-white p-2 rounded-md shadow-md  flex flex-col mt-5 gap-y-3 items-center'>
                    <p className='bg-white text-xl font-bold text-gray-700  '>
                        {stepTitle[completedSteps - 1]}
                    </p>
                    <div className='flex m-2  gap-1'>
                        <p className='bg-white w-3/4 pt-7'>
                            {stepData[completedSteps - 1]}
                        </p>
                        <img src={stepImage[completedSteps - 1]} alt="" className='w-1/4' />
                    </div>
                    <div className='flex text-bold text-2xl gap-x-7 bg-white mb-4'>
                        <button onClick={() => {
                            setSteps(completedSteps - 1)
                        }}
                            className='bg-blue-700 rounded-md text-white p-2 '
                        > &lt;
                        </button>

                        <button
                            onClick={() => {
                                setSteps(((completedSteps + 1) > 4 ? 4 : completedSteps + 1))
                            }}
                            className='bg-blue-700 rounded-md text-white p-2 '
                        > &gt;</button>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Timeline