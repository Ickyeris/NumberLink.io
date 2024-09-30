import React, { useState, useRef, useEffect } from 'react'
import '../../output.css'
import Navbar from '../../components/navbar/navbar'
import LoginModal from '../../components/modals/login/loginmodal';


const MainPage = () => {
    const mainRef = useRef<HTMLDivElement>(null);
    const centerRef = useRef<HTMLDivElement>(null);
    const [size, setSize] = useState({
        width: 0,
        height: 0
    })

    const [size2, setSize2] = useState({
        width: 0,
        height: 0
    })

    useEffect(() => {
        const handleResize = () => {
            const bounds = mainRef.current?.getBoundingClientRect();
            if (bounds) {
                setSize({
                    width: bounds.width,
                    height: bounds.height
                })
            }

            const bounds2 = centerRef.current?.getBoundingClientRect();
            if (bounds2) {
                setSize2({
                    width: bounds2.width,
                    height: bounds2.height
                })
            }

        }

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        }
    }, [])




    return (
        <div ref={mainRef} className="flex flex-col w-screen h-screen justify-start items-center">
            <Navbar />
            <div className='w-full flex-1 bg-blue-500 flex justify-center items-center p-4'>
                <div className='w-full max-w-500 h-auto bg-blue-800'>
                    <div className='aspect-square width-full bg-white'>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default MainPage;