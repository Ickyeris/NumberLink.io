import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { FaBars } from 'react-icons/fa'
import { IoTrophyOutline } from 'react-icons/io5'
import { MdAccountBox, MdStart } from "react-icons/md";
const Navbar = () => {
    const navigate = useNavigate();
    const [menuOpened, setMenuOpened] = useState(false)

    const toggleMenu = () => {
        setMenuOpened(!menuOpened)
    }

    const handleTitleClick = () => {
        return navigate('/');
    }

    return (
        <div className="w-full h-auto flex flex-row justify-start bg-white">
            {/*Right Container*/}
            <div className="w-1/4 flex ">
                <button className="h-full w-auto text-black p-2">
                    <FaBars
                        className={`h-full w-auto ${menuOpened ? 'scale-90 opacity-75' : ''}`}
                    ></FaBars>
                </button>
            </div>
            {/*Center Container*/}
            <div className="flex w-1/2 justify-center">
                <button
                onClick={handleTitleClick}
                >
                    <p className="font-titleFont text-6xl text-black p-2">
                        Numberlink.io
                    </p>
                </button>
            </div>
            {/*Right Container*/}
            <div className="flex w-1/4 justify-end">
                <span className="w-full h-full flex flex-row justify-end items-center text-5xl">
                    <button className="font-titleFont text-black p-2 flex flex-row">
                        <IoTrophyOutline className="hidden md:block"/>
                        <h1 className="hidden xl:block">Leaderboards</h1>
                    </button>
                    <button className="font-titleFont text-black p-2 flex flex-row">
                        <MdAccountBox/>
                        <h1 className="hidden xl:block">Account</h1>
                    </button>
                </span>
            </div>
        </div>
    )
}

export default Navbar
