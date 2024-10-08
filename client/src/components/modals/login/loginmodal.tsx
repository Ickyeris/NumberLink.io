import React, { useState } from 'react'
import { useSpring, animated } from '@react-spring/web'
import '../../../output.css'

type LoginModelProps = {
    isOpen: boolean
    onClose: CallableFunction
}

const LoginModal = ({ isOpen, onClose }: LoginModelProps) => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const [errorMessage, setErrorMessage] = useState('')
    const [showPassword, setShowPassword] = useState(false)

    const handleSubmit = async () => {
        setErrorMessage('')
        setIsLoading(true)

        const loginData = {
            username,
            password,
        }

        try {
            const response = await fetch('http://localhost:5001/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(loginData),
            })

            if (!response.ok) {
                const errorData = await response.json()
                throw new Error(errorData.message || 'Unknown error occurred')
            }

            const data = await response.json()
            console.log('Login Success!', data)
        } catch (error) {
            setErrorMessage('Connection failed.')
            console.error('Login failed!:', error)
        } finally {
            setIsLoading(false)
        }
    }

    const handleUsernameChange = (e: any) => {
        setUsername(e?.target.value)
    }

    const handlePasswordChange = (e: any) => {
        setPassword(e?.target.value)
    }

    const handleClose = (e: any) => {
        if (e.target === e.currentTarget) {
            onClose();
            setErrorMessage("");
        }
    }

    const springProps = useSpring({
        transform: isOpen ? 'translateY(0px)' : 'translateY(-1000px)',
        opacity: isOpen ? 1 : 0,
        config: { tension: 200, friction: 20 },
    })

    return (
        <div
            className={`fixed w-screen h-screen bg-black ${isOpen ? 'bg-opacity-50' : 'bg-opacity-0'} flex justify-center items-center ${isOpen ? '' : 'pointer-events-none'}`}
            onClick={handleClose}
        >
            <animated.div
                style={springProps}
                className="w-11/12 max-w-500 h-auto bg-white shadow-2xl rounded-lg flex flex-col p-2 "
            >
                <div className="w-full h-auto flex flex-row p-2">
                    <div className="w-1/5" />
                    <div className="w-3/5 h-full">
                        <h1 className="text-xl text-black">Login</h1>
                    </div>
                    <div className="w-1/5 h-10 flex justify-center">
                        <button onClick={handleClose}>
                            <svg 
                            className='h-full aspect-square '
                            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                            </svg>

                        </button>
                    </div>
                </div>
                <div className="w-full flex-1 flex flex-col justify-center items-center p-4">
                    <div className="w-auto h-auto flex">
                        <div className="m-2"> Username </div>
                        <input
                            type="text"
                            placeholder="Enter username"
                            value={username}
                            onChange={handleUsernameChange}
                            className="m-2 border-b-2 border-black bg-transparent outline-none focus:ring-0"
                            disabled={isLoading}
                        />
                    </div>
                    <div className="w-auto h-auto flex">
                        <div className="m-2"> Password </div>
                        <input
                            type={showPassword ? 'text' : 'password'}
                            placeholder="Enter password"
                            value={password}
                            onChange={handlePasswordChange}
                            disabled={isLoading}
                            className="m-2 border-b-2 border-black bg-transparent outline-none focus:ring-0"
                        />
                    </div>
                    <div className="flex w-auto p-2">
                        <div className="mr-4">Show password</div>
                        <input
                            type="checkbox"
                            onChange={() => setShowPassword(!showPassword)}
                        />
                    </div>
                    <div className="flex justify-center w-full h-auto p-2">
                        <button
                            onClick={handleSubmit}
                            disabled={isLoading}
                            className={`${isLoading ? 'bg-gray-300' : 'bg-blue-400'} p-2 m-2 text-white`}
                        >
                            Confirm
                        </button>
                        <button
                            disabled={isLoading}
                            className="bg-blue-400 p-2 m-2 text-white"
                        >
                            Create account
                        </button>
                    </div>
                    {
                        errorMessage && 
                        <div className='text-red-950'>
                        {
                            errorMessage
                        }
                        </div>
                    }
                </div>
            </animated.div>
        </div>
    )
}

export default LoginModal
