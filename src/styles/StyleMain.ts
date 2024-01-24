import styled from 'styled-components';

export const MainContainer = styled.section`
    display: flex;
    flex-wrap: wrap;
    align-content: center;
    justify-content: center;
    align-items: center;
    margin-bottom: 25px;

    h1 {
        font-size: 38px;
        text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.774);
        text-align: center;
        margin-bottom: 10px;
    }
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
            cursor: pointer;
        }
    }
    .negative {
        color: red;
    }
    .positive {
        color: #80ed99;
    }
    .coinsContainer {
        display: flex;
        flex-direction: row-reverse;
        flex-wrap: nowrap;
        align-content: center;
        justify-content: center;
        align-items: flex-start;
    }
    @media screen and (max-width: 1000px) {
        .coinsContainer {
            flex-wrap: wrap;
    }
}
`;
