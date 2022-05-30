import styled from "styled-components";

export const Step1Container = styled.section`
    display: flex;
    align-items: flex-start;
    gap: 15px;
    flex-direction: column;
    h1 {
        font-size: clamp(1.4rem, 2.2rem, 5vmin);
    }
    .inputBx {
        width: 100%;
        display: flex;
        align-items: flex-start;
        flex-direction: column;
        gap: 10px;
        input {
            padding: 20px 10px;
            border-radius: 10px;
            width: 100%;
            border: 2px solid #25cd89;
            font-size: 1rem;
            background-color: #02044a;
            &:focus {
                background-color: #fff;
            }
        }
    }
    button {
        padding: 20px 40px;
        font-size: 1rem;
        font-weight: 600;
        color: #fff;
        background-color: #25cd89;
        cursor: pointer;
        border-radius: 30px;
        &:hover {
            color: #25cd89;
            background-color: #fff;
        }
    }
`;