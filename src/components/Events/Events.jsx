import React, { useState } from 'react'
import Upcoming from './Upcoming';
import PastEvents from './PastEvents';

function Events() {
    const [activeStep, setActiveStep] = useState(0);

    const renderEvent = () => {
        switch (activeStep) {
            case 0 :
                 return <Upcoming />
            case 1 : 
             return <PastEvents /> 
            
            default : 
            return <Upcoming />
        }
    } 


    const changeStep = (step) => {
        setActiveStep(step)
    }


  return (
    <div className='bg-[#FFF7DA] px-10 py-16 rounded-t-[4rem]'>
        <div>
            <h1 className='text-center font-thin text-5xl sm:text-xl md:text-5xl lg:text-6xl xl:text-7xl  mb-8 text-green-700'>Events</h1>
            <ul className='flex gap-4 justify-center text-center'>
                <li
                    className={`cursor-pointer ${activeStep === 0 && 'underline text-green-700'} text-xl text-green-400`}
                    onClick={() => changeStep(0) }
                    >Upcoming Events</li>
                <li
                className={`cursor-pointer ${activeStep === 1 && 'underline text-green-700'} text-xl text-green-400`}
                    onClick={() => changeStep(1) }
                >Past Events</li>
            </ul>
        </div>
        <div className='mt-10'>
        {renderEvent()}
        </div>
    </div>
  )
}

export default Events