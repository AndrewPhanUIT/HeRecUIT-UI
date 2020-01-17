import styled from 'styled-components';

const LogoutButton = styled.button `
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 1rem;
    color: black;
    background: white;
    border: 2px solid #3dabd0;
    background-color: white;
    transition: 0.5s;
    border-radius: 5px;
    padding: 5px 10px;

    &:hover{
        background-color: #3dabd0;
        color: white;
    }
`;

export default LogoutButton;