import styled from "styled-components";

export const Step3Container = styled.section`
    .inputBx {
        width: 100%;
        display: flex;
        align-items: flex-start;
        flex-direction: column;
        gap: 10px;
        margin-bottom: 1.5rem;
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
        margin-left: 1rem;
        &:hover {
            color: #25cd89;
            background-color: #fff;
        }
    }
    .btn {
        font-size: 1rem;
        padding: 20px 40px;
        color: #B8B8D4;
        &:hover {
            text-decoration: underline;
        }
    }
`;