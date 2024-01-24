import styled, { keyframes } from 'styled-components';

const loading = keyframes`
    0% {
        background-color: grey;
    }
    25% {
        background-color: lightgrey;
    }
    50% {
        background-color: grey;
    }
    75% {
        background-color: lightgrey;
    }
    100% {
        background-color: grey;
    }
`;

export const LoadingContainer = styled.section`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-content: center;
  justify-content: center;
  align-items: center;
  div {
    width: 300px;
    height: 200px;
    margin: 10px;
    padding: 20px;
    box-shadow: 0px 2px 14px rgba(42, 42, 42, 0.24);
    background-color: #FFFFFF;
    border-radius: 10px;
    color: transparent;
    animation: ${loading} 2s alternate infinite;
    border: none !important;
  }
`;
