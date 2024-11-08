import { useNavigate } from 'react-router-dom'

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
            </div>
        </div>
    )
}

export default MainPage
