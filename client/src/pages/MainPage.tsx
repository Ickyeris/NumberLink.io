import { useNavigate } from 'react-router-dom'
import Updates from '../components/updates/Updates'

const MainPage = () => {
    const navigate = useNavigate()

    const handleEasyClick = () => {
        navigate('/dailies/easy/5x5')
    }

    return (
        <div className="w-full h-full  flex flex-col justify-center items-center">
            <div className="h-500 aspect-square flex flex-col justify-center items-center">
                <button
                    className="font-titleFont text-black p-2 flex flex-row text-6xl"
                    onClick={handleEasyClick}
                >
                    Easy
                </button>
                <button className="font-titleFont text-black p-2 flex flex-row text-6xl">
                    Medium
                </button>
                <button className="font-titleFont text-black p-2 flex flex-row text-6xl">
                    Hard
                </button>
                <button className="font-titleFont text-black p-2 flex flex-row text-6xl">
                    0/5
                </button>
            </div>
            <button className="hidden md:block fixed right-0 bottom-0 font-titleFont text-black p-4 text-6xl">
                Daily Streak: 100
            </button>   
            <Updates/>
        </div>
    )
}

export default MainPage
