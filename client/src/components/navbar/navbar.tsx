import React, { useState } from 'react'
import LoginModal from '../modals/login/loginmodal'
import '../../output.css'


import {LoginIcon, MenuIcon} from '../icons/icons'
import DailiesModal from '../modals/dailies/dailiesmodal'


type NavbarProps = {
    screenWidth: number
}

const Navbar = (props: NavbarProps) => {
    const [username, setUsername] = useState('')
    const [menuOpened, setMenuOpened] = useState('')



    const closeMenu = () => {
        setMenuOpened('');
    }

    return (
        <div className="w-full h-auto flex flex-row justify-center bg-blue-500 ">
            {
                /* Black background that can be clicked on to remove menu*/
                menuOpened &&
                <div
                className='fixed bg-black w-full h-full opacity-50'
                onClick={() => setMenuOpened('')}
                >
                </div>
            
            }

            <LoginModal isOpen={menuOpened == "login"} onClose={closeMenu}/>
            <DailiesModal isOpen={menuOpened == "dailies"} close={closeMenu}/>

            <div className="flex flex-row w-full h-16 p-1 text-white">
                {/* Menu Container */}
                <button
                    className="w-2/5 flex justify-start  "
                    onClick={() => setMenuOpened('dailies')}
                >
                    <MenuIcon/>
                </button>

                {/* Title */}
                <div className="flex-1 flex justify-center items-center text-white">
                    <button>
                        <h1 className="text-4xl ">Numberlink.io</h1>
                    </button>
                </div>
                
                {/* Login Container */}
                <div className="w-2/5 flex justify-end text-white ">
                    {
                        props.screenWidth >= 1000 &&
                        <div className='w-full h-full flex justify-end items-end'>
                            <div className='m-2'>Username:_________</div>
                            <div className='m-2'>Password:_________</div>
                            <div className='flex flex-col m-2'>
                                <button>Login</button>
                                <button>Register</button>
                            </div>
                        </div>
                    }
                    {
                        props.screenWidth < 1000 &&
                        <button
                        className="h-full aspect-square "
                        onClick={() => setMenuOpened("login")}
                        >
                            <LoginIcon/>
                        </button>
                    }
                </div>
            </div>
        </div>
    )
}

export default Navbar
