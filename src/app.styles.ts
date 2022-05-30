import styled from "styled-components";

export const AppBox = styled.main`
    background-color: #02044a;
    color: #fff;
    width: 100%;
    position: relative;
    display: grid;
    place-items: center;
`;

export const AppWrapper = styled.section`
    width: 100%;
    max-width: 980px;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const StepsWrapper = styled.div`
    width: 100%;
    flex: 1;
    display: flex;
`;

export const Step = styled.div`
    position: relative;
    flex: 1;
    padding: 40px; 
`;

export const Footer = styled.footer`
    width: 100%;
    padding: 1rem;
    text-align: center;
    border-top: 1px solid #16195c;
    a {
        font-weight: 600;
        color: #fff;
        text-transform: uppercase;
        &:hover {
            text-decoration: underline;
        }
    }
`;