import styled from "styled-components";

export const Container = styled.div`
width: 50%;
height: 100vh;
display: flex;
align-items: center;
justify-content: center;
gap: 3rem;
flex-wrap: wrap;
`;

export const Avatar = styled.img`
border-radius: 100%;
width: 20%;
box-shadow: 0px 0px 10px 1px ${props => props.theme.blue__500};
`;

export const Box = styled.div`
display: flex;
flex-direction: column;
gap: 3rem;
`;

export const ContainerDescription = styled.div`
display: flex;
align-items: start;
justify-content: center;
flex-direction: column;
gap: 0.1rem;
`;

export const NameProfile = styled.span`
font-size: ${props => props.theme.font__size__300};
`;

export const CargoProfile = styled.span`
font-size: ${props => props.theme.font__size__200};
`;

export const ContainerButton = styled.div`
display: flex;
align-items: center;
justify-content: space-around;
gap: 2rem;
`;

export const Btn__social = styled.a`
border: none;
border-radius: 0.1rem;
padding-top: 0.2rem;
padding-bottom: 0.2rem;
padding-right: 0.5rem;
padding-left: 0.5rem;
text-decoration: none;
font-size: ${props => props.theme.font__size__100};
background-color: ${props => props.theme.white__100};
box-shadow: 0px 0px 2px 1px ${props => props.theme.blue__500};
color: ${props => props.theme.blue__500};
cursor: pointer;

&:hover{
    opacity: 0.5;
}
`;