import styled from 'styled-components';

export const UpOneContainer = styled.article`
    display: flex;
    flex-wrap: wrap;
    align-content: center;
    justify-content: center;
    align-items: center;
    border-left: 2px solid #FCA311;
    padding: 30px;

    h1 {
        font-size: 38px;
        text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.774);
        text-align: center;
        margin-bottom: 10px;
    }

    select {
        width: 150px;
        height: 70px;
        background-color: #14213D;
        border: 2px solid #FCA311;
        border-radius: 10px;
        padding: 10px;
        font-size: 20px;
        font-weight: bold;
        margin-bottom: 10px;
        cursor: pointer;
    }

    @media screen and (max-width: 1000px) {
        border-left: none;
    }
`;
