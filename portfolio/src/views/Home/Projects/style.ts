import styled from "styled-components";

export const ContainerProjects = styled.div`
width: 70%;
height: 100vh;
display: flex;
align-items: center;
justify-content: center;
`;

export const BoxGrid = styled.div`
width: 100%;
display: flex;
align-items: center;
justify-content: center;
gap: 3rem;
flex-wrap: wrap;
`;

export const BoxCard = styled.div`
width: 15rem;
display: flex;
align-items: center;
flex-direction: column;
gap: 1rem;
`;

export const BoxVideoTeste = styled.div`
width: 100%;
display: flex;
align-items: center;
`;

export const BoxTitleVideo = styled.span`
display: flex;
position: fixed;
z-index: 1;
background-color: aqua;
`;

export const BoxVideo = styled.video`
width: 100%;
display: flex;
border-radius: 0.1rem;
box-shadow: 0px 0px 5px 3px ${props => props.theme.blue__500};
z-index: -1;
`;

export const BoxBtn = styled.div`
width: 100%;
display: flex;
align-items: center;
flex-direction: column;
padding-left: 1rem;
padding-right: 1rem;
gap: 1rem;
`;

export const Btn__Box = styled.a`
width: 100%;
padding-top: 0.5rem;
padding-right: 1rem;
padding-bottom: 0.5rem;
padding-left: 1rem;
text-align: center;
outline: none;
text-decoration: none;
color: ${props => props.theme.blue__500};
background-color: transparent;
border: none;
border-radius: 0.1rem;
box-shadow: 0px 0px 5px 3px ${props => props.theme.blue__500};
font-size: ${props => props.theme.font__size__100};

&:hover{
    opacity: 0.7;
    cursor: pointer;
}
`;