import styled from 'styled-components';

export const HeaderContainer = styled.header`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-content: center;
    justify-content: center;
    align-items: center;
    background-color: #14213D;
    padding: 20px;
    border-bottom: 2px solid #FCA311;
    position: fixed;
    width: 100%;
    font-size: 30px;
    box-shadow: rgba(0, 0, 0, 0.45) 0px 25px 20px -20px;

    h1 {
        text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.774);
    }
    a {
        color: #FCA311;
        text-decoration: none;
        margin: 0px 25px;
        font-size: 20px;
        text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.774);
        font-weight: bold;
    }
`;
