import React, { useState } from 'react'
import { useSpring, animated } from 'react-spring'

type DailiesModalProps = {
    isOpen: boolean
    close: CallableFunction
    mobile: boolean
}

const DailiesModal = (props: DailiesModalProps) => {
    const springProps = useSpring({
        transform: props.isOpen ? 'translateX(0px)' : 'translateX(-1000px)',
        opacity: props.isOpen ? 1 : 0,
        config: { tension: 200, friction: 30 },
    })

    return (
        <div
            className={`fixed w-screen h-screen flex justify-start items-center pointer-events-none`}
        >
            {
            // A small menu for non-mobile
            !props.mobile && 
            <animated.div
                className="w-full h-full max-w-250 bg-white"
                style={springProps}
            ></animated.div>
            }  

            {/* Full screen menu for mobile */}



        </div>
    )
}

export default DailiesModal;
