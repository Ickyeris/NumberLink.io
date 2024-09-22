import React, {useState, useRef, useEffect} from 'react'
import Board from '../../components/board/board';
import { TopContainer, BottomContainer, CenterContainer, AppContainer, CenterInnerContainer, CenterBottomContainer } from './main.styled';
import Navbar from '../../components/navbar/navbar';




const MainPage = () => {
    const CenterContainerRef = useRef<HTMLDivElement>(null)

    const [dimensions, setDimensions] = useState({
        width: 0,
        height: 0
    })



    useEffect(() => {
        const onResize = () => {
            const current = CenterContainerRef.current;
            if (!current) return;
            const {width, height} = current.getBoundingClientRect();
            setDimensions({width, height});
        }
        onResize();
        window.addEventListener('resize', onResize);
        return () => (
            window.removeEventListener('resize', onResize)
        );
    }, []);

    const iswider = dimensions.width >= dimensions.height

    return (
        <AppContainer >
            <TopContainer>
                    
            </TopContainer>
            <CenterContainer ref={CenterContainerRef}>
                <CenterBottomContainer iswider={iswider}>

                </CenterBottomContainer>
                <CenterInnerContainer iswider={iswider}>

                </CenterInnerContainer>
                <CenterBottomContainer iswider={iswider}>

                </CenterBottomContainer>
            </CenterContainer>
            <BottomContainer>

            </BottomContainer>
        </AppContainer>
    )
}

export default MainPage;