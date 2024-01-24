import styled from 'styled-components';

export const MainContainer = styled.main`
    display: flex;
    flex-wrap: wrap;
    align-content: center;
    justify-content: center;
    align-items: center;
    /* background: linear-gradient(284deg, rgba(252,163,17,1) 20%, transparent 10%, */
    transparent 100%);

    div {
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        align-content: center;
        justify-content: center;
        align-items: flex-start;
        width: 300px;
        height: 200px;
        border: 2px solid #FCA311;
        border-radius: 10px;
        margin: 10px;
        background-color: #14213D;
        padding: 20px;
    }
    h2 {
        width: 100%;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        align-content: center;
        justify-content: space-between;
        align-items: flex-start;
    }
    button {
        background-color: transparent;
        border: none;
        margin: 0px 10px;
        img {
            width: 20px;
            height: 20px;
        }
    }
    .negative {
        color: red;
    }
    .positive {
        color: #80ed99;
    }
`;
