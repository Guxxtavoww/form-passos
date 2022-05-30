import styled from "styled-components";

export const Container = styled.div<{ selected: boolean; }>`
    display: flex;
    align-items: center;
    gap: 1rem;
    border-radius: 10px;
    border: 2px solid ${props => props.selected ? "#25CD89" : "#16195C"};
    padding: 20px;
    cursor: pointer;
    width: 100%;

    &:hover {
        border: 2px solid #496459;
    }

    .icon {
        min-width: 20px;
        min-height: 20px;
        max-width: 60px;
        max-height: 60px;
        border-radius: 50%;
        background-color: #191A59;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 2rem;
    }
    .infoBx {
        flex: 1;
        .title {
            font-size: 1rem;
            font-weight: 600;
            margin-bottom: 7px;
        }
        .desc {
            font-size: 14px;
            color: #B8B8D4;
        }
    }
`;