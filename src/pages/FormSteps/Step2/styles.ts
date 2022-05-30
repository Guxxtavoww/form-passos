import styled from "styled-components";

export const Step2Container = styled.section`
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

export const OptionBx = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: center;
    margin: 1rem 0;
`;