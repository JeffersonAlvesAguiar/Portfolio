import styled from "styled-components";

export const Container = styled.div`
width: 100%;
position: fixed;
display: flex;
align-items: center;
justify-content: space-around;
padding-top: 1rem ;
padding-bottom: 1rem ;
padding-right: 1rem ;
padding-left: 1rem ;

box-shadow: 0px 0px 5px 1px ${props => props.theme.blue__500};
background-color: ${props => props.theme.white__100};
`;

export const Button = styled.button`
border: none;
background-color: transparent;
color: ${props => props.theme.blue__500};
cursor: pointer;
transition: 100ms ease-in-out;

&:hover{
    opacity: 0.5;
}
`;