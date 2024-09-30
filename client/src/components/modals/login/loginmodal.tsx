import React, { useState } from 'react'
import "../../../output.css"

type LoginModelProps = {
    isOpen: boolean
    onClose: CallableFunction
}

const LoginModal = ({ isOpen, onClose }: LoginModelProps) => {
    if (!isOpen) return null;

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("")
    const [isLoading, setIsLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState('')
    const [showPassword, setShowPassword] = useState(false)



    const handleSubmit = async () => {
        setErrorMessage('');
        setIsLoading(true);

        const loginData = {
            username,
            password
        }

        try {
            const response = await fetch('http://localhost:5001/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(loginData)
            });
            
            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message || 'Unknown error occurred')
            }

            const data = await response.json();
            console.log('Login Success!', data);
        } catch (error) {
            setErrorMessage("Connection failed.");
            console.error("Login failed!:", error);
        } finally {
            setIsLoading(false);
        }
    }

    const handleUsernameChange = (e:any) => {
        setUsername(e?.target.value);
    }

    const handlePasswordChange = (e:any) => {
        setPassword(e?.target.value);
    }


    const handleClose = (e:any) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    }


    return (
        <div 
            onClick={handleClose}
            className='fixed w-screen h-screen bg-slate-700 bg-opacity-80 flex justify-center items-center'>
            <div className='w-11/12 max-w-500 h-auto bg-white shadow-2xl rounded-lg flex flex-col p-4'>
                <div className='w-full h-auto bg-gray-200 flex flex-row p-2'> 
                    <div className='w-1/5'/>
                    <div className='w-3/5 h-full'>
                        <h1 className='text-xl text-black'>Login</h1>
                    </div>
                    <div className='w-1/5 flex justify-end'>
                        <button 
                            onClick={handleClose}
                            className='text-xl'> X</button>
                    </div>
                </div>
                <div className='w-full flex-1 flex flex-col justify-center items-center p-4'>
                    <div className='w-auto h-auto flex'>
                        <div className='m-2'> Username </div>
                        <input
                            type='text'
                            placeholder='Enter username'
                            value={username}
                            onChange={handleUsernameChange}
                            className='m-2 border-b-2 border-black bg-transparent outline-none focus:ring-0'
                            disabled={isLoading}
                        />
                    </div>
                    <div className='w-auto h-auto flex'>
                        <div className='m-2'> Password </div>
                        <input
                            type= {showPassword ? 'text' : 'password'}
                            placeholder='Enter password'
                            value={password}
                            onChange={handlePasswordChange}
                            disabled={isLoading}
                            className='m-2 border-b-2 border-black bg-transparent outline-none focus:ring-0'
                        />
                    </div>
                    <div className='flex w-auto p-2'>
                        <div className='mr-4'>Show password</div>
                        <input 
                            type='checkbox'
                            onChange={() => setShowPassword(!showPassword)}
                        />
                    </div>
                    <div className='flex justify-center w-full h-auto p-2'>
                        <button 
                            onClick={handleSubmit}
                            disabled={isLoading}
                            className={`${isLoading ? 'bg-gray-300' : 'bg-blue-400'} p-2 m-2 text-white`}
                        >
                            Confirm
                        </button>
                        <button 
                            disabled={isLoading}
                            className='bg-blue-400 p-2 m-2 text-white'>
                            Create account
                        </button>
                        <button 
                            disabled={isLoading}
                            className='bg-gray-400 p-2 m-2 text-white'>
                            Continue as guest
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}




export default LoginModal;