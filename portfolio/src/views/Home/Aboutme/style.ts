import styled from "styled-components";

export const Container = styled.div`
width: 70%;
height: 100vh;
display: flex;
align-items: center;

/* background-color: aqua; */
`;

export const Span = styled.span`
font-size: ${props => props.theme.font__size__100};
line-height: 1.5;
`;