import styled from 'styled-components';

const Link = styled.a`
    margin-right: 20px;
    font-weight: 700;
    font-size: 1.25rem;
    color: black;
    text-align: center;
    padding: 5px 8px;

    &:hover{
        border-bottom: 2px solid #ff8c00 !important;
    }
`;

export default Link;