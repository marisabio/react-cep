import styled from 'styled-components';

export const Title = styled.h1 `
    color: yellowgreen;
    font-size: medium;
    span{
        color:yellow;
        font-size: x-large;
    }
`;

export const SmallTitle = styled(Title) `
    font-size: small;
    span{
        color:yellow;
        font-size: small;
    }
`;