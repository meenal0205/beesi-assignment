import React, { useState, useEffect } from "react";

const steps = [
    "Step 1 : Set your goal 🎯",
    "Step 2 : Create or join Group 👥",
    "Step 3 : Pay amount on time 💳",
    "Step 4 : Earn Rewards 🎁",
];
const stepData = [
    'Har mahine aapke group ke sab friends chhota fixed amount contribute karenge taaki ek pooled fund ban sake. Har mahine ek friend ye pool money le sakta hai and can use it for planned ya unplanned kharcho ke liye',

    'Har friend ko pool fund mein har mahine contribution par Beesi Coins milte hain, aur yeh Beesi Coins wo cafes par discounts lene ke liye use kar sakte hain.',
    'Har ek friend kisi bhi ek mahine pool money le sakta hai aur wo ise apne planned and unplanned expenses ke liye use kar sakta hai. Number of friends = Number of months',

    'Ek aur discount bhi hai: jab bhi koi friend Beesi mein pool money leta hai aur usne koi buying goal set kiya hai—chahe vo trip ho, gadgets ho, ya koi aur purchase—us friend ko us goal par 10% tak ka discount milega.'
]

const stepImage = [
    'goal.png',
    'create.png',
    'pay.png',
    'reward.jpg'
]




function Desgin2() {
    const [visibleSteps, setVisibleSteps] = useState([]);
    const [stepIndex, setStepIndex] = useState(0);
    const [content, setContent] = useState("Click on any step to know details")

    useEffect(() => {
        if (stepIndex < steps.length) {
            const timer = setTimeout(() => {
                setVisibleSteps((prev) => [...prev, steps[stepIndex]]);
                setStepIndex((prevIndex) => prevIndex + 1);
            }, 1000);
            return () => clearTimeout(timer);
        }
    }, [stepIndex]);


    return (
        <div className="flex  items-center justify-center w-full h-96 mt-10 p-4 gap-3">
            <div className="flex flex-col gap-6 w-[40%]">
                {visibleSteps.map((step, index) => (
                    <div
                        key={index}
                        className="opacity-0 cursor-pointer animate-fade-in-up text-lg font-medium text-gray-600 p-4 border rounded-lg shadow-md mb-3 bg-white transition"
                        onClick={() => {
                            setContent(stepData[index])
                        }}
                    >
                        {step}
                    </div>
                ))}
            </div>
            <div className="bg-white flex text-gray-700 font-semibold justify-center pt-10 w-[40%] h-full p-3 px-8 rounded-md shadow-md">
                {content}


            </div>
        </div>
    );
}

export default Desgin2;
