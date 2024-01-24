import styled from 'styled-components';

export const FavoriteContainer = styled.main`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-content: center;
    justify-content: center;
    align-items: center;
    background: linear-gradient(290deg, rgba(252,163,17,1) 20%, transparent 10%,
    transparent 100%);
    height: 100vh;

    h1 {
        margin: 50px;
        text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.774);
    }

    div {
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        align-content: center;
        justify-content: center;
        align-items: flex-start;
        /* width: 300px; */
        /* height: 200px; */
        /* border: 2px solid #FCA311; */
        /* border-radius: 10px; */
        /* margin: 10px; */
        /* background-color: #14213D; */
        /* padding: 20px; */
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
