import styled from 'styled-components';

const Content = styled.section`
    position: absolute;
    z-index: 2;
    top: 0;
    left: 15px;
    width: 100%;
    height: 100%;

    & > h3{
        color: white;
        font-weight: 700;
    }

    & > p{
        font-size: 1.2rem;
        width: 300px;
        display: inline-block;
    }
`;

export default Content;