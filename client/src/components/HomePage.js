import { useAuth0 } from "@auth0/auth0-react";
import { useContext, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import { GlobalContext } from "./GlobalContext";
import Header from "./Header";
import video from "../data/video- background.mp4";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
    const navigate = useNavigate();
    const {status} = useContext(GlobalContext);
    const { isAuthenticated } = useAuth0();

    return(
        <>
        <Wrapper>
            <VideoDiv>
                <Header />
                <Video src={video} autoPlay loop muted></Video>
        {isAuthenticated &&
        <ContentWrapper>
            {(status === "idle") &&
            <>
            <Button onClick={() => {navigate("/add-question")}}>
                Add a question
            </Button>
            <Button onClick={() => {navigate("/my-collections")}}>
                Go to my collection
            </Button>
            </> }
            {status === "loading" && 
            <Loading>
                <Circle /> 
            </Loading>}
        </ContentWrapper>}
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
width: 100vw;
`;

const VideoDiv = styled.div`
width: 100%;
height: 100vh;
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

const Button = styled.button`
width: 400px;
height: 200px;
margin-right: 30px;
background-color: rgba(255,255,255, 0.8);
color: var(--font-color, #333);
font: inherit;
border: none;
cursor: pointer;
font-weight: 500;
font-size: 18px;
font-family:'Jost', sans-serif;
border-radius: 40px;
`

const ContentWrapper = styled.div`
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

export default HomePage;