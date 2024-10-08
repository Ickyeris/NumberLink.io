import React, { useState } from 'react'
import LoginModal from '../modals/login/loginmodal'

import '../../output.css'

const Navbar = () => {
    const [username, setUsername] = useState('')
    const [loginOpened, setLoginOpened] = useState(false)

    const closeLoginModal = () => {
        setLoginOpened(false)
    }

    return (
        <div className="w-full h-auto flex flex-col bg-blue-500 ">
            <LoginModal isOpen={loginOpened} onClose={closeLoginModal} />
            <div className="flex flex-row min-w-full h-16 p-1 text-white">
                <button
                    className="w-1/5 flex justify-start  "
                    onClick={() => setLoginOpened(!loginOpened)}
                >
                    <svg
                        className="h-full"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
                        />
                    </svg>
                </button>

                <div className="w-4/5 flex justify-center items-center text-white">
                    <button>
                        <h1 className="text-4xl ">Numberlink.io</h1>
                    </button>
                </div>

                <div className="w-1/5 flex justify-end text-white">
                    <button
                        className="h-full aspect-square "
                        onClick={() => setLoginOpened(!loginOpened)}
                    >
                        <svg
                            className="w-full h-full"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                            />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Navbar
