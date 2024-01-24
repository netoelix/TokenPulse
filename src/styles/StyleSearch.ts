import styled from 'styled-components';

export const SearchContainer = styled.article`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-content: center;
    justify-content: center;
    align-items: center;
    padding-top: 180px;
    margin-bottom: 60px;

    h2 {
        text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.774);
    }
    .inputSearch {
        width: 300px;
        font-size: 35px;
        text-align: center;
        padding: 10px;
        border-radius: 10px;
        border: 1px solid #FCA311;
        margin: 20px;
        background-color: #14213D;
        font-weight: bold;
    }

    .btnSearch {
        width: 300px;
        font-size: 35px;
        text-align: center;
        padding: 10px;
        border-radius: 10px;
        border: 1px solid #FCA311;
        margin: 20px;
        background-color: #14213D;
        font-weight: bold;
        cursor: pointer;
    }
    p {
        font-size: 25px;
    }
`;
