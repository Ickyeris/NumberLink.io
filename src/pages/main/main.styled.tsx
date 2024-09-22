import styled from "styled-components";




export const AppContainer = styled.div`
    width: 100%;
    height: 100vh;

    display: flex;
    flex-direction: column;
`

export var TopContainer = styled.div`
    width: 100%;
    height:10%;
    min-height: 64px;
    background-color: #4774f1;
`

export var BottomContainer = styled.div`
    width: 100%;
    height:5%;
    min-height: 32px;
    background-color: #4774f1;
`


export var CenterContainer = styled.div`
    width: 100%;
    height: 100%;
    background-color: #a5a5a5;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export var CenterInnerContainer = styled.div<{iswider:boolean}>`
    height: ${({iswider}) => iswider ? '100%' : 'auto'};
    width: ${({iswider}) => iswider ? 'auto' : '90%'};


    aspect-ratio: 1 / 1;
    background-color: aliceblue;
`

export var CenterBottomContainer = styled.div<{iswider:boolean}>`
    width:100%;
    height: ${({iswider}) => iswider ? '10%' : 'auto'};
    flex: ${({iswider}) => iswider ? 'auto' : '1'};
    background-color: #f5a2a2;
`