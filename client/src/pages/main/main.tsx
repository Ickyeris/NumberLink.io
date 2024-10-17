import React, { useState, useRef, useEffect } from 'react'
import '../../output.css'
import Navbar from '../../components/navbar/navbar'
import LoginModal from '../../components/modals/login/loginmodal'
import Board from '../../components/board/board'

const MainPage = () => {
    const mainRef = useRef<HTMLDivElement>(null)
    const [size, setSize] = useState({
        width: 0,
        height: 0,
    })

    const mobile = size.width < 1000.0;

    useEffect(() => {
        const handleResize = () => {
            const bounds = mainRef.current?.getBoundingClientRect()
            if (bounds) {
                setSize({
                    width: bounds.width,
                    height: bounds.height,
                })
            }
        }

        window.addEventListener('resize', handleResize)
        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])

    return (
        <div
            ref={mainRef}
            className="flex flex-col w-screen h-screen justify-start items-center"
        >
            <Navbar mobile={mobile} />
            <div className="w-full flex-1 bg-black flex justify-center items-center p-4">
                <div className="w-full max-w-750 h-auto  flex flex-col">
                    {/* Aspect ratio adjusting board container */}
                    <div className="width-full" style={{ aspectRatio: 1 / 1 }}>
                        <Board />
                    </div>

                    {/* Score container*/}
                    <div className="flex flex-row justify-center">
                        <h1>Hello</h1>
                        <h1>Hello</h1>
                        <h1>Hello</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainPage
