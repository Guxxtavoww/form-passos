import styled from "styled-components";

export const ItemContainer = styled.div`
    width: 100%;
    margin: 30px 0;
    cursor: pointer;
    a {
        position: relative;
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
        gap: 20px;
        padding: 0 1rem;
    }
    .info_sidebar {
        h2 {
            font-weight: 600;
            margin-bottom: 5px;
            font-size: 15px;
            color: #FFF;
        }
        p {
            text-align: right;
            font-size: 13px;
            color: #B8B8D4;
        }
    }
`;

export const IconArea = styled.div<{ active: boolean; }>`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: ${props => props.active ? "#25CD89" : "#494A7C"};
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Point = styled.div`
    position: absolute;
    top: 50%;
    right: -3.5px;
    transform: translateY(-50%);
    width: 6px;
    height: 6px;
    border: 3px solid #494A7C;
    border-radius: 50%;
    background: #02044A;
`;