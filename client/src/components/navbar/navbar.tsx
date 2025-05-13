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
        <div className="w-full h-auto flex flex-row justify-center bg-white">
            {/*Right Container*/}
            {/*Center Container*/}
            <div className="flex justify-center ">
                <button
                onClick={handleTitleClick}
                >
                    <p className="font-titleFont text-6xl text-black p-2">
                        Numberlink.io
                    </p>
                </button>
            </div>
        </div>
    )
}

export default Navbar
