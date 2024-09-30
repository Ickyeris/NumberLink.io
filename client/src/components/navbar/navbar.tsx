import React, { useState } from "react";
import LoginModal from "../modals/login/loginmodal";

import '../../output.css'

const Navbar = () => {
    const [username, setUsername] = useState("")
    const [loginOpened, setLoginOpened] = useState(false)


    const closeLoginModal = () => {
        setLoginOpened(false);
    }


    return (
        <div className='w-full h-auto flex flex-col'>
            {
                loginOpened && <LoginModal isOpen={loginOpened} onClose={closeLoginModal}/>
            }
                <div className="flex flex-row min-w-full p-4">
                    <div className="w-1/5">
                        Menu
                    </div>
                    <div className="w-4/5">
                        Numberlink.io
                    </div>
                    <div className="w-1/5">
                        <button
                        onClick={() => setLoginOpened(!loginOpened)}
                        >Login</button>
                    </div>
                </div>
        </div>
    )
};

export default Navbar;