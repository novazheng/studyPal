import { useAuth0 } from "@auth0/auth0-react";
import { useContext, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import Flashcard from "./Flashcard";
import { GlobalContext } from "./GlobalContext";
import './collection.css'
import ErrorPage from "./ErrorPage";
import Header from "./Header";
import video from "../data/video- background.mp4";

const MyCollectionPage = () => {
    const {questionCollection, status} = useContext(GlobalContext);
    const { isAuthenticated } = useAuth0();
    useEffect(() => {
        console.log(questionCollection);
    }, [])
    return(
        <>
        <Wrapper>
            <VideoDiv>
                <Header />
                <Video src={video} autoPlay loop muted></Video>
        {isAuthenticated ?
        <ContentWrapper>
            {(questionCollection && status === "idle") && 
            <Questions>
                {questionCollection.map((item) => {
                    return <Flashcard content={item} />;
                })}
            </Questions>}
            {status === "loading" && 
            <Loading>
                <Circle /> 
            </Loading>}
        </ContentWrapper>
        :
        <ErrorPage />}
        </VideoDiv>
        </Wrapper>
        </>
    )
};

const Wrapper = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
align-items: flex-end;
padding-top: 10px;
width: 100vw;
height: 100vh;
`;

const VideoDiv = styled.div`
width: 100%;
height: 100%;
display: flex;
justify-content: center;
align-items: center;
position: relative; 
`;

const Video = styled.video`
width: 100%;
height: 100%;
position: absolute;
object-fit: cover;
z-index: -1;
`;

const ContentWrapper = styled.div`
`

const Questions = styled.div`
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
`

const Loading = styled.div`

`

const circleSpin = keyframes`
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
`

const Circle = styled.div`
border: 8px solid #f3f3f3;
border-top: 8px solid #3498db;
border-radius: 50%;
width: 150px;
height: 150px;
animation: ${circleSpin} 1s ease-in-out infinite;
margin: 0 auto;
`

export default MyCollectionPage;