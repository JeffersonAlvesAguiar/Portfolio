import styled from "styled-components";

export const Container = styled.div`
width: 70%;
display: flex;
align-items: center;
`;

export const Span = styled.span`
font-size: ${props => props.theme.font__size__100};
line-height: 1.5;
border-radius: 0.1rem;
padding-top: 2rem;
padding-right: 2rem;
padding-bottom: 2rem;
padding-left: 2rem;
box-shadow: 0px 0px 5px 1px ${props => props.theme.blue__500};
background-color: ${props => props.theme.white__100};
`;