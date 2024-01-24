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
    .criptoSearch {
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        align-content: center;
        justify-content: center;
        width: 550px;
        height: 380px;
        border: 5px solid #FCA311;
        h2 {
            font-size: 65px;
        }
        h3 {
            font-size: 45px;
        }
        h4 {
            font-size: 30px;
        }
        img {
            width: 40px;
            height: 40px;
        }
    }
    p {
        font-size: 25px;
    }
    @media screen and (max-width: 1000px) {
        h1 {
            text-align: center;
        }
        p {
            text-align: center;
        }
        .criptoSearch {
            width: 300px;
            height: 200px;
            border: 2px solid #FCA311;
            h2 {
            font-size: 28px;
        }
            h3 {
                font-size: 22px;
            }
            h4 {
                font-size: 18px;
            }
            img {
                width: 20px;
                height: 20px;
            }
        }
    section {
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        align-content: center;
        justify-content: center;
        align-items: center;
    }
  }
`;
