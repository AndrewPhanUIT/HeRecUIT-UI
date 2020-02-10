import styled from 'styled-components';

const DemoDataButton = styled.button `
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 1rem;
    color: white;
    border: 2px solid #3dabd0;
    background-color: #3dabd0;
    transition: 0.5s;
    border-radius: 5px;
    padding: 5px 10px;

    &:hover{
        background-color: white;
        color: black;
    }
`;

export default DemoDataButton;